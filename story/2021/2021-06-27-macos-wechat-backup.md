---
title: macOS 微信备份原理
slug: macos-wechat-backup
tags:
  - macOS
  - WeChat
---

# macOS 微信备份原理

iPhone7 32G 用了几年后，微信占了 10G，如果能把微信备份后清除，还能再战两年！

- 微信自身支持备份，但备份后是加密的，无法访问。
- 微信占用空间的主要是图片和视频
- 微信清理不会清除文本
  - 文本消息相对少
  - 想要清除文本消息可以卸载重装

<!-- more -->

- 通过 macOS 备份 iPhone 系统 - 备份时不要加密
  - 备份后位于 `$HOME/Library/Application Support/MobileSync/Backup/`
- 备份后的数据
  - Manifest.{mbdb,db} - mac 备份文件清单
    - Files - 文件清单
      - `fileID TEXT PRIMARY KEY, domain TEXT, relativePath TEXT, flags INTEGER, file BLOB`
        - fileID - 为 备份映射后的文件
        - domain - 应用
        - relativePath - 应用相对路径
      - `select relativePath from Files where domain = 'AppDomain-com.tencent.xin' limit 10`;
        - 微信相关文件
    - Properties
      - `key TEXT PRIMARY KEY, value BLOB`
    - .mbdb - 二进制文件，需要自定义解码逻辑
    - .db - sqlite3 - 新版一般是 sqlite3

```sql
-- 关心的文件
select fileID,relativePath from Files
where domain = 'AppDomain-com.tencent.xin' and
(
  relativePath like '%/MM.sqlite'
  or relativePath like '%/WCDB_Contact.sqlite'
  or relativePath like '%/message_%.sqlite'
);

-- 所有 DB 目录下内容
select fileID,relativePath from Files
where domain = 'AppDomain-com.tencent.xin' and relativePath like 'Documents/%/DB/%';

-- 文件数量
select count(*) from Files
where domain = 'AppDomain-com.tencent.xin';
```

- 备份后包含微信数据
  - `message_%d.sqlite` - 聊天对话
    - ChatExt2_ID
    - Chat_ID
    - Hello_ID
  - WCDB_Contact.sqlite - 联系人
    - Friend - 好友
    - MassSendContact
    - QQContact - QQ 联系人
  - MM
    - BottleContactTable4
    - BottleTable4
    - ChatExt2_ID
    - Chat_ID
    - Emoticon1
    - EmoticonPackage05
    - EmoticonUpload_1
    - Friend
    - Friend_Ext
    - MassSendContactTable
    - MessageBizExtTable
    - QQContact
    - RevokeMsgTable
    - friend_meta

# 附录

## WCDB_Contact.sqlite

```sql
-- WCDB_Contact
CREATE TABLE Friend
(
    userName               text primary key on conflict replace,
    type                   integer default 0,
    certificationFlag      integer default 0,
    imgStatus              integer default 0,
    encodeUserName         text,
    dbContactLocal         blob,
    dbContactOther         blob,
    dbContactRemark        blob,
    dbContactHeadImage     blob,
    dbContactProfile       blob,
    dbContactSocial        blob,
    dbContactChatRoom      blob,
    dbContactBrand         blob,
    _packed_DBContactTable blob
);
CREATE TABLE MassSendContact
(
    UsrName    text not null primary key on conflict replace,
    Detail     text,
    ConIntRes1 integer default 0,
    ConIntRes2 integer default 0,
    ConStrRes1 text,
    ConStrRes2 text
);
CREATE TABLE QQContact
(
    UsrName           text not null primary key on conflict replace,
    Uin               integer default 0,
    Type              integer default 0,
    Sex               integer default 0,
    Age               integer default 0,
    ImgKey            integer default 0,
    ExtKey            integer default 0,
    ImgKeyLast        integer default 0,
    ExtKeyLast        integer default 0,
    CreateTime        integer default 0,
    ConIntRes1        integer default 0,
    ConIntRes2        integer default 0,
    ConIntRes3        integer default 0,
    NickName          text,
    Email             text,
    Mobile            text,
    Address           text,
    Sign              text,
    birthday          text,
    FullPY            text,
    ShortPY           text,
    Img               text,
    ConRemark         text,
    ConRemark_PYShort text,
    ConRemark_PYFull  text,
    ConStrRes1        text,
    ConStrRes2        text,
    ConStrRes3        text
);
```

## MM.sqlite

```sql
CREATE TABLE Friend
(
    TableVer     integer default 1,
    UsrName      text not null primary key on conflict replace,
    NickName     text,
    Uin          integer default 0,
    Email        text,
    Mobile       text,
    Sex          integer default 0,
    FullPY       text,
    ShortPY      blob,
    Img          text,
    Type         integer default 0,
    LastChatTime integer default 0,
    Draft        text
);
CREATE TABLE Friend_Ext
(
    UsrName           text not null primary key on conflict replace,
    ConType           integer default 0,
    ConRemark         text,
    ConRemark_PYShort text,
    ConRemark_PYFull  text,
    ConQQMBlog        text,
    ConSMBlog         text,
    ConChatRoomMem    text,
    ConIntRes1        integer default 0,
    ConIntRes2        integer default 0,
    ConIntRes3        integer default 0,
    ConStrRes1        text,
    ConStrRes2        text,
    ConStrRes3        text
);
CREATE TABLE friend_meta
(
    username   text primary key on conflict replace,
    lastUpdate integer,
    intCon1    integer,
    intCon2    integer,
    intCon3    integer,
    strCon1    text,
    strCon2    text,
    strCon3    text
);
CREATE TABLE QQContact
(
    UsrName           text not null primary key on conflict replace,
    Uin               integer default 0,
    Type              integer default 0,
    Sex               integer default 0,
    Age               integer default 0,
    ImgKey            integer default 0,
    ExtKey            integer default 0,
    ImgKeyLast        integer default 0,
    ExtKeyLast        integer default 0,
    CreateTime        integer default 0,
    ConIntRes1        integer default 0,
    ConIntRes2        integer default 0,
    ConIntRes3        integer default 0,
    NickName          text,
    Email             text,
    Mobile            text,
    Address           text,
    Sign              text,
    birthday          text,
    FullPY            text,
    ShortPY           text,
    Img               text,
    ConRemark         text,
    ConRemark_PYShort text,
    ConRemark_PYFull  text,
    ConStrRes1        text,
    ConStrRes2        text,
    ConStrRes3        text
);
CREATE TABLE RevokeMsgTable
(
    MSG_REVOKE_COL_SVRID   bigint  default 0 primary key,
    MSG_REVOKE_COL_CONTENT text,
    MSG_REVOKE_COL_INTRES1 integer default 0,
    MSG_REVOKE_COL_INTRES2 bigint  default 0,
    MSG_REVOKE_COL_INTRES3 bigint  default 0,
    MSG_REVOKE_COL_STRRES1 text,
    MSG_REVOKE_COL_STRRES2 text,
    MSG_REVOKE_COL_STRRES3 text,
    _packed_RevokeMessage  blob
);
CREATE TABLE Emoticon1
(
    MD5        text,
    Message    text,
    Type       integer default 0,
    CreateTime integer default 0,
    Len        integer default 0,
    Status     integer default 0,
    Catalog    text,
    CatelogID  integer default 0,
    Draft      text,
    ConIntRes1 integer default 0,
    ConIntRes2 integer default 0,
    ConIntRes3 integer default 0,
    ConStrRes1 text,
    ConStrRes2 text,
    ConStrRes3 text
);
CREATE TABLE EmoticonUpload_1
(
    UsrName    text,
    MesLocalID text,
    MD5        text,
    Type       integer default 0,
    Message    text,
    CreateTime integer default 0,
    SendTime   integer default 0,
    Offset     integer default 0,
    Len        integer default 0,
    Status     integer default 0,
    Catalog    text,
    CatelogID  integer default 0,
    Draft      text,
    ConIntRes1 integer default 0,
    ConIntRes2 integer default 0,
    ConIntRes3 integer default 0,
    ConStrRes1 text,
    ConStrRes2 text,
    ConStrRes3 text
);
CREATE TABLE BottleTable4
(
    BottleLocalID        integer primary key autoincrement,
    BottleSvrID          integer default 0,
    BottleEncryptUsrName text,
    BottleID             text,
    BottleExt            text
);
CREATE TABLE sqlite_sequence
(
    name,
    seq
);
CREATE TABLE BottleContactTable4
(
    BottleContactUsrName     text not null primary key on conflict replace,
    BottleContactNickName    text,
    BottleContactSex         integer default 0,
    BottleContactImgStatus   text,
    BottleContactHDImgStatus text,
    BottleContactProvince    text,
    BottleContactCity        text,
    BottleContactSign        text,
    BottleContactImgKey      integer default 0,
    BottleContactImgKeyLast  integer default 0,
    BottleContactExtKey      integer default 0,
    BottleContactExtKeyLast  integer default 0,
    BottleContactINTRES1     integer default 0,
    BottleContactINTRES2     integer default 0,
    BottleContactINTRES3     integer default 0,
    BottleContactTEXTRES1    text,
    BottleContactTEXTRES2    text,
    BottleContactTEXTRES3    text
);
CREATE TABLE MassSendContactTable
(
    UsrName    text not null primary key on conflict replace,
    Detail     text,
    ConIntRes1 integer default 0,
    ConIntRes2 integer default 0,
    ConStrRes1 text,
    ConStrRes2 text
);
CREATE TABLE MessageBizExtTable
(
    chatUsername            text,
    msgLocalId              integer,
    msgType                 integer,
    msgInnerType            integer,
    bizId                   text,
    msgExtColInt1           integer,
    msgExtColInt2           integer,
    msgExtColString1        text,
    msgExtColString2        text,
    _packed_DBMessageBizExt blob
);
CREATE TABLE EmoticonPackage05
(
    EmoticonPackageId          text not null primary key on conflict replace,
    EmoticonPackageName        text,
    EmoticonPackageIconUrl     text,
    EmoticonPackagePannelUrl   text,
    EmoticonPackagePStatus     integer default 0,
    EmoticonPackageDLStatus    integer default 0,
    EmoticonPackageInstallTime integer default 0,
    EmoticonPackageRemoveTime  integer default 0,
    ConIntRes1                 integer default 0,
    ConIntRes2                 integer default 0,
    ConIntRes3                 integer default 0,
    ConStrRes1                 text,
    ConStrRes2                 text,
    ConStrRes3                 text
);
CREATE TABLE Chat
(
    TableVer   integer default 1,
    MesLocalID integer primary key autoincrement,
    MesSvrID   bigint  default 0,
    CreateTime integer default 0,
    Message    text,
    Status     integer default 0,
    ImgStatus  integer default 0,
    Type       integer,
    Des        integer
);
CREATE TABLE ChatExt2
(
    MesLocalID  integer primary key,
    msgFlag     integer default 0,
    ConIntRes2  integer default 0,
    ConIntRes3  integer default 0,
    MsgSource   text,
    MsgIdentify text,
    ConStrRes1  text,
    ConStrRes2  text,
    ConStrRes3  text,
    ConIntRes1  integer default 0
);
```

## `message_%d.sqlite`

```sql
CREATE TABLE Chat_ID
(
    CreateTime INTEGER DEFAULT 0,
    Des        INTEGER,
    ImgStatus  INTEGER DEFAULT 0,
    MesLocalID INTEGER PRIMARY KEY AUTOINCREMENT,
    Message    TEXT,
    MesSvrID   INTEGER DEFAULT 0,
    Status     INTEGER DEFAULT 0,
    TableVer   INTEGER DEFAULT 1,
    Type       INTEGER
);
CREATE TABLE ChatExt2_ID
(
    ConIntRes1  INTEGER DEFAULT 0,
    ConIntRes2  INTEGER DEFAULT 0,
    ConIntRes3  INTEGER DEFAULT 0,
    ConStrRes1  TEXT,
    ConStrRes2  TEXT,
    ConStrRes3  TEXT,
    MesLocalID  INTEGER PRIMARY KEY,
    msgFlag     INTEGER DEFAULT 0,
    MsgIdentify TEXT,
    MsgSource   TEXT
);
CREATE TABLE Hello_ID
(
    ConIntRes1 INTEGER DEFAULT 0,
    ConIntRes2 INTEGER DEFAULT 0,
    ConIntRes3 INTEGER DEFAULT 0,
    ConStrRes1 TEXT,
    ConStrRes2 TEXT,
    ConStrRes3 TEXT,
    CreateTime INTEGER DEFAULT 0,
    Des        INTEGER,
    ImgStatus  INTEGER DEFAULT 0,
    MesLocalID INTEGER PRIMARY KEY AUTOINCREMENT,
    Message    TEXT,
    MesSvrID   INTEGER DEFAULT 0,
    OpCode     INTEGER DEFAULT 0,
    Status     INTEGER DEFAULT 0,
    TableVer   INTEGER DEFAULT 1,
    Type       INTEGER,
    UsrName    TEXT
);
```
