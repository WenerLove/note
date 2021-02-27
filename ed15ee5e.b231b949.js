(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{700:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(7),l=(a(0),a(746)),b={id:"postgresql",title:"PostgresSQL"},i={unversionedId:"db/relational/postgresql/postgresql",id:"db/relational/postgresql/postgresql",isDocsHomePage:!1,title:"PostgresSQL",description:"PostgresSQL",source:"@site/notes/db/relational/postgresql/README.md",slug:"/db/relational/postgresql/postgresql",permalink:"/notes/db/relational/postgresql/postgresql",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/README.md",version:"current",sidebar:"docs",previous:{title:"\u6570\u636e\u5e93",permalink:"/notes/db/db"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/notes/db/relational/postgresql/datatype"}},p=[{value:"Tips",id:"tips",children:[]},{value:"Notes",id:"notes",children:[{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"\u5907\u4efd",id:"\u5907\u4efd",children:[]},{value:"optimize",id:"optimize",children:[]},{value:"Install",id:"install",children:[]},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",children:[]},{value:"Admin",id:"admin",children:[]},{value:"NOTIFY",id:"notify",children:[]},{value:"Graph",id:"graph",children:[]},{value:"Extension",id:"extension",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"postgressql"},"PostgresSQL"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.enterprisedb.com/blog/postgres-vs-postgresql"}),"Postgres vs. PostgreSQL"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL \u4e3a\u4e3b\uff0cPostgres \u4f5c\u4e3a\u522b\u540d"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/manuals/"}),"Manual")),Object(l.b)("li",{parentName:"ul"},"Current ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/index.html"}),"Document")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/begriffs/postgrest"}),"Postgrest"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"REST API for any Postgres database"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/prest/prest"}),"pRest"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Golang"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dhamaniasad/awesome-postgres"}),"Awesome PostgreSQL")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.slideshare.net/quipo/trees-in-the-database-advanced-data-structures/"}),"Trees In The Database")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3: 5432"),Object(l.b)("li",{parentName:"ul"},"PG \u6240\u5e26\u7684 bin ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?file=&path=*bin*&name=postgresql&branch=edge&repo=main&arch=x86_64"}),"\u5217\u8868"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pgbench"),Object(l.b)("li",{parentName:"ul"},"pg_resetxlog"),Object(l.b)("li",{parentName:"ul"},"pg_controldata"),Object(l.b)("li",{parentName:"ul"},"pg_test_fsync"),Object(l.b)("li",{parentName:"ul"},"pg_upgrade"),Object(l.b)("li",{parentName:"ul"},"pg_test_timing"),Object(l.b)("li",{parentName:"ul"},"pg_xlogdump"),Object(l.b)("li",{parentName:"ul"},"pg_rewind"),Object(l.b)("li",{parentName:"ul"},"initdb"),Object(l.b)("li",{parentName:"ul"},"pg_ctl"),Object(l.b)("li",{parentName:"ul"},"postgres"),Object(l.b)("li",{parentName:"ul"},"postmaster"),Object(l.b)("li",{parentName:"ul"},"pg_archivecleanup"))),Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u5de5\u5177",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://pgfoundry.org/projects/pgtune"}),"pgtune"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Tuning wizard for postgresql.conf"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://pgtune.leopard.in.ua/"}),"http://pgtune.leopard.in.ua/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.pgconfig.org"}),"https://www.pgconfig.org")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://ptop.projects.postgresql.org/"}),"pg_top"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Monitor PostgreSQL processes"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dalibo/pgbadger/"}),"pgbadger"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.pgcli.com/"}),"pgcli"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dbcli/pgcli"}),"dbcli/pgcli")),Object(l.b)("li",{parentName:"ul"},"\u5e26\u9ad8\u4eae\u548c\u81ea\u52a8\u8865\u5168\u7684\u547d\u4ee4\u884c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://pgloader.io"}),"pgloader"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dimitri/pgloader"}),"dimitri/pgloader")),Object(l.b)("li",{parentName:"ul"},"Migrate to PostgreSQL in a single command"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 csv,fixed,db3,ixf,sqlite,mysql,mssql"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://sqlformat.darold.net/"}),"pgformatter"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL syntax beautifier"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.pgpool.net"}),"pgpool-ii"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Connection Pooling"),Object(l.b)("li",{parentName:"ul"},"Replication"),Object(l.b)("li",{parentName:"ul"},"Load Balancing"),Object(l.b)("li",{parentName:"ul"},"Limiting Exceeding Connections"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.pgrouting.org"}),"pgrouting"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Provides geospatial routing for PostGIS/PostgreSQL database"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://pgroonga.github.io/"}),"pgroonga"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/pgroonga/pgroonga"}),"pgroonga/pgroonga")),Object(l.b)("li",{parentName:"ul"},"PostgreSQL extension to use Groonga as the index."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wal-e/wal-e"}),"https://github.com/wal-e/wal-e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ankane/pgsync"}),"pgsync"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Sync Postgres data between databases"))))),Object(l.b)("li",{parentName:"ul"},"\u8d44\u6e90",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dhamaniasad/awesome-postgres"}),"dhamaniasad/awesome-postgres")))),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Database / Schema / table"))),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u8fc1\u79fb",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.postgresql.org/wiki/Converting_from_other_Databases_to_PostgreSQL"}),"https://wiki.postgresql.org/wiki/Converting_from_other_Databases_to_PostgreSQL")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://it.toolbox.com/blogs/josh-berkus/why-postgresql-doesnt-have-query-hints-020411"}),"Why PostgreSQL doesn't have query hints"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://news.ycombinator.com/item?id=2179433"}),"HN")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://thebuild.com/presentations/uber-perconalive-2017.pdf"}),"A PostgreSQL Response to Uber"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Write Amplification",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL must update every index if a change to the row updates an index."),Object(l.b)("li",{parentName:"ul"},"PostgreSQL keeps each version of the tuple on disk until it is vacuumed."),Object(l.b)("li",{parentName:"ul"},"Each page changed here must be pushed down the binary replication link."))),Object(l.b)("li",{parentName:"ul"},"Replication",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL does not have logical replication in core. (Coming in 10!)"),Object(l.b)("li",{parentName:"ul"},"Existing logical replication tools (Slony, Bucardo, etc.) are somewhat fiddly to set up and manage."))),Object(l.b)("li",{parentName:"ul"},"Replica MVCC",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Incoming streaming replication activity can be blocked by queries, or queries can be cancelled."),Object(l.b)("li",{parentName:"ul"},"Na\xefve users can be surprised by query cancellation messages."))),Object(l.b)("li",{parentName:"ul"},"Upgrade",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL does not have in-place major version upgrade."),Object(l.b)("li",{parentName:"ul"},"You have to do some kind of process to get low-downtime upgrades."),Object(l.b)("li",{parentName:"ul"},"pg_upgrade, while a big improvement, is not a panacea.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostGIS, for example, is a huge pain."))))),Object(l.b)("li",{parentName:"ul"},"Buffer Pool",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL\u2019s shared buffer management performance peaks at 8-32GB.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"[citation required]"))),Object(l.b)("li",{parentName:"ul"},"Larger shared_buffers than that (usually) mean diminishing returns."),Object(l.b)("li",{parentName:"ul"},"Retrieving things from file system cache is slower than from shared buffers."))),Object(l.b)("li",{parentName:"ul"},"Connection Management",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The PostgreSQL forking model is not efficient for lots of connections, or fast connection cycling."),Object(l.b)("li",{parentName:"ul"},"While basic RAM statistics can be misleading, each backend does consume a notable amount of memory."))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.craigkerstiens.com/2018/01/31/postgres-hidden-gems/"}),"Postgres Hidden Gems")))),Object(l.b)("li",{parentName:"ul"},"Hosted Provider",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.heroku.com/pricing"}),"Heroku")," \u514d\u8d39 10K \u884c\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.elephantsql.com/plans.html"}),"ElephantSQL")," \u514d\u8d39 20MB 5\u94fe\u63a5")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\nbrew install postgresql\nbrew postgresql-update database\n\n# POSTGRES_USER=postgres\n# POSTGRES_PASSWORD\n# POSTGRES_DB\n# PGDATA=/var/lib/postgresql/data\n# \u53ef\u4ee5\u7528\u4efb\u610f --user \u542f\u52a8\ndocker run -it --rm -v $PWD/pg:/var/lib/postgresql/data postgres:alpine\n\n\n# \u8bbe\u7f6e\u6570\u636e\u76ee\u5f55, \u514d\u5f97\u540e\u9762\u518d\u6307\u5b9a\nexport PGDATA=$HOME/data/pg/data\n# \u67e5\u770b\u914d\u7f6e, -W \u53ef\u8981\u6c42\u63d0\u793a\u8f93\u5165\u5bc6\u7801\ninitdb -kU postgres -s\n# \u751f\u6210\u6570\u636e\u5e93\ninitdb -kU postgres\n# \u542f\u52a8\u6570\u636e\u5e93\npg_ctl -D $PGDATA -l $HOME/data/pg/logfile start\npg_ctl -D $PGDATA -l $PGDATA/pg.log start\n# \u67e5\u770b\u8fd0\u884c\u72b6\u6001\npg_ctl -D $PGDATA status \n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"\n\n-- \u67e5\u770b\u5f53\u524d\u7248\u672c\nselect version();\n\n-- \u5c06\u5b57\u7b26\u4e32\u98ce\u683c\u4e3a\u5b57\u7b26\u6570\u7ec4\nselect regexp_split_to_array('abc','');\n")),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("h3",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pg_dumpall -U postgres > dumpfile\n/etc/init.d/postgresql stop\napk add -u postgresql\n/etc/init.d/postgresql setup\n/etc/init.d/postgresql start\npsql -U postgres -f dumpfile\n")),Object(l.b)("h3",{id:"\u5907\u4efd"},"\u5907\u4efd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/app-psql.html"}),"https://www.postgresql.org/docs/current/static/app-psql.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.postgresql.org/wiki/Incremental_backup"}),"https://wiki.postgresql.org/wiki/Incremental_backup")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/continuous-archiving.html"}),"https://www.postgresql.org/docs/current/static/continuous-archiving.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/app-pgdump.html"}),"https://www.postgresql.org/docs/current/static/app-pgdump.html"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u8f6c\u50a8\u5355\u4e2a\u5e93\npg_dump dbname > outfile\npsql dbname < infile\n\n# -j 8 \u5e76\u53d1\u6570\n# -F d \u76ee\u5f55\u683c\u5f0f, \u5e76\u53d1\u8981\u6c42\u4f7f\u7528\u76ee\u5f55\n# -t \u6307\u5b9a\u8868\n# -O --no-owner\n# -f backup \u6587\u4ef6/\u76ee\u5f55\u540d\npg_dump -F d -f backup -j 8 db -t a -t b -O\n\n# \u4f7f\u7528\u538b\u7f29\npg_dump dbname | gzip > filename.gz\ngunzip -c filename.gz | psql dbname\n\n# \u4f7f\u7528\u81ea\u5b9a\u4e49\u683c\u5f0f, \u5fc5\u987b\u8981\u4f7f\u7528 pg_restore \u6062\u590d\npg_dump -Fc dbname > filename\npg_restore -d dbname filename\n\n# \u8f6c\u50a8\u6240\u6709\npg_dumpall > outfile\npsql -f infile postgres\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"-- \u5bfc\u5165 CSV\n\n-- COPY\n-- https://www.postgresql.org/docs/current/static/sql-copy.html\n-- COPY table_name [ ( column_name [, ...] ) ] FROM { 'filename' | PROGRAM 'command' | STDIN } [ [ WITH ] ( option [, ...] ) ]\n-- COPY { table_name [ ( column_name [, ...] ) ] | ( query ) } TO { 'filename' | PROGRAM 'command' | STDOUT } [ [ WITH ] ( option [, ...] ) ]\n-- \u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\n-- \u652f\u6301 text,binary,csv\n-- Windows users might need to use an E'' string and double any backslashes used in the path name.\n-- \u8981\u6c42\u6587\u4ef6\u5728\u670d\u52a1\u5668\u4e0a\nCOPY phonebook (id,name, phone) FROM '/tmp/phonebook.csv' DELIMITER ',' CSV;\n-- \u5e26\u5934\u5bfc\u51fa\nCOPY phonebook TO '/tmp/data.csv' DELIMITER ',' CSV HEADER;\n\n-- \\copy\n-- https://www.postgresql.org/docs/current/static/app-psql.html#APP-PSQL-META-COMMANDS-COPY\n-- \\copy { table [ ( column_list ) ] | ( query ) } { from | to } { 'filename' | program 'command' | stdin | stdout | pstdin | pstdout } [ [ with ] ( option [, ...] ) ]\n-- \u4ece\u5ba2\u6237\u7aef\u8fdb\u884c\u5bfc\u5165\n-- \u53ef\u4ee5\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84, \u4f1a\u5148\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668\n\\copy out_tmp (id,name) from 'out.csv' DELIMITER ',' CSV;\n-- \u5bfc\u51fa\n\\copy my_table to 'filename' csv header\n\\copy (select id,name from out_tmp) to 'exp.csv' DELIMITER ',' CSV;\n-- \u5e26\u5934\n\\copy (select id,name from out_tmp) to 'exp.csv' DELIMITER ',' CSV HEADER;\n\n\n\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# \u5bfc\u5165 JSON\n# JSON \u5982\u679c\u5305\u542b\u8f6c\u79fb\u53ef\u80fd\u4f1a\u6709\u95ee\u9898, \u4f8b\u5982\u5305\u542b \\n\ncat data.json | psql -h localhost -p 5432 feeds -c "COPY news_feed (data) FROM STDIN;"\n\n# \u652f\u6301\u5bfc\u5165 CSV \u548c JSON\n# https://github.com/lukasmartinelli/pgfutter\n# create table raw_data(id serial primary key, data jsonb);\npgfutter --host localhost --db db-name --user myuser --schema myschema --table raw_data --jsonb json data.json\n')),Object(l.b)("h3",{id:"optimize"},"optimize"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.revsys.com/writings/postgresql-performance.html"}),"http://www.revsys.com/writings/postgresql-performance.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.postgresql.org/wiki/Performance_Optimization"}),"https://wiki.postgresql.org/wiki/Performance_Optimization")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.datadoghq.com/blog/100x-faster-postgres-performance-by-changing-1-line/"}),"https://www.datadoghq.com/blog/100x-faster-postgres-performance-by-changing-1-line/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/parallel-query.html"}),"https://www.postgresql.org/docs/current/static/parallel-query.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://confluence.atlassian.com/kb/optimize-and-improve-postgresql-performance-with-vacuum-analyze-and-reindex-885239781.html"}),"Optimize and Improve PostgreSQL Performance with VACUUM, ANALYZE, and REINDEX")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.slideshare.net/PGExperts/really-big-elephants-postgresql-dw-15833438"}),"Really Big Elephants: PostgreSQL DW"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DW-datawarehouse",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BI/DW"),Object(l.b)("li",{parentName:"ul"},"\u5206\u6790\u6570\u636e\u5e93"),Object(l.b)("li",{parentName:"ul"},"OLAP"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6316\u6398"),Object(l.b)("li",{parentName:"ul"},"\u51b3\u7b56\u652f\u6301"))),Object(l.b)("li",{parentName:"ul"},"JOIN \u4f18\u5316",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"5 JOIN \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u8fdb\u884c 20+ \u7684\u8868 JOIN"))),Object(l.b)("li",{parentName:"ul"},"\u5728\u4efb\u4f55\u8bed\u53e5\u4e2d\u90fd\u53ef\u6267\u884c\u5b50\u67e5\u8be2",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5d4c\u5957\u5b50\u67e5\u8be2"))),Object(l.b)("li",{parentName:"ul"},"Window \u67e5\u8be2"),Object(l.b)("li",{parentName:"ul"},"\u9012\u5f52\u67e5\u8be2"))),Object(l.b)("li",{parentName:"ul"},"PG \u7684 MVCC \u5b9e\u73b0\u4f7f\u5f97\u66f4\u65b0\u64cd\u4f5c\u975e\u5e38\u6602\u8d35. \u5982\u679c\u9700\u8981\u66f4\u65b0\u8868\u91cc\u7684\u6bcf\u4e00\u884c, \u90a3\u6bcf\u4e00\u884c\u90fd\u4f1a\u62f7\u8d1d\u4e3a\u4e00\u4e2a\u65b0\u7684\u7248\u672c, \u65e7\u7684\u7248\u672c\u4f1a\u6807\u8bb0\u4e3a\u5df2\u5220\u9664.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4e00\u822c\u6765\u8bf4\u91cd\u5199\u6574\u4e2a\u8868\u4f1a\u6bd4\u66f4\u65b0\u6765\u7684\u66f4\u5feb"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DROP COLUMN")," \u4e0d\u4f1a\u505a\u7269\u7406\u5220\u9664, \u800c\u662f\u5c06\u5217\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1, \u56e0\u6b64\u64cd\u4f5c\u4f1a\u975e\u5e38\u5feb")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"-- \u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u975e\u5e38\u6162\nupdate a set name = b.name from b where a.id = b.id;\n-- \u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u6bd4\u6574\u4e2a\u66f4\u65b0\u5feb\ncreate table c as (select a.age, b.name from a left join b on a.id = b.id);\n\n-- \u6240\u4ee5\u6574\u8868\u66f4\u65b0\u5efa\u8bae\nbegin;\ncreate table T as select col1, col2, colN from orders;\ndrop table orders;\nalter table T rename to orders;\ncommit;\n\n-- \u7f6e\u7a7a\u4e00\u5217\n-- \u6570\u636e\u5927\u4e86\u540e\u8be5\u64cd\u4f5c\u975e\u5e38\u6162\nUPDATE orders SET status = null;\n-- \u56e0\u6b64\u53ef\u4ee5\u8003\u8651\u8fd9\u6837\nALTER TABLE orders DROP column status\n                 , ADD  column status text;\n\n\n")),Object(l.b)("h3",{id:"install"},"Install"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/postgresql"}),"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/postgresql")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/testing/x86_64/postgis"}),"https://pkgs.alpinelinux.org/package/edge/testing/x86_64/postgis")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/_/postgres/"}),"https://hub.docker.com/_/postgres/"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/docker-library/postgres/blob/1805adb0693d9602bfb19b6bf2583b311c43b749/10/alpine/Dockerfile"}),"https://github.com/docker-library/postgres/blob/1805adb0693d9602bfb19b6bf2583b311c43b749/10/alpine/Dockerfile"))))),Object(l.b)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/10/static/datatype.html"}),"https://www.postgresql.org/docs/10/static/datatype.html")),Object(l.b)("li",{parentName:"ul"},"\u6570\u7ec4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 GIN \u7d22\u5f15",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/indexes-types.html"}),"https://www.postgresql.org/docs/current/static/indexes-types.html")))),Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u9700\u8981\u4f7f\u7528\u6570\u7ec4\u64cd\u4f5c\u7b26")))),Object(l.b)("h4",{id:"json"},"JSON"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 hstore, json \u548c jsonb \u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u65f6\u5019\u9009\u62e9 JSONB"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u5199\u5165\u6216\u8005\u8981\u6c42\u5feb\u901f\u5199\u5165, \u5f88\u5c11\u67e5\u8be2\u53ef\u4ee5\u9009\u62e9 JSON"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/datatype-json.html"}),"https://www.postgresql.org/docs/current/static/datatype-json.html")),Object(l.b)("li",{parentName:"ul"},"json \u6587\u672c, \u64cd\u4f5c\u66f4\u8017\u65f6, \u6bcf\u6b21\u9700\u8981\u89e3\u6790, \u4f1a\u4fdd\u5b58\u91cd\u590d\u952e\u503c, \u4ee5\u6700\u540e\u4e00\u6b21\u4e3a\u51c6"),Object(l.b)("li",{parentName:"ul"},"josnb \u4e8c\u8fdb\u5236, \u4e00\u822c\u78c1\u76d8\u7a7a\u95f4\u66f4\u5927, \u5199\u5165\u66f4\u8017\u65f6, \u652f\u6301\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u7b26",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"->"),"  \u53d6\u5b57\u6bb5, \u53ef\u4ee5\u662f\u6570\u7ec4\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"->>")," \u8fd4\u56de\u7684\u503c\u59cb\u7ec8\u4e3a text, \u4e0d\u4f1a\u6709\u5f15\u53f7"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"#>"),"  \u6307\u5b9a\u591a\u4e2a\u8def\u5f84, \u83b7\u53d6\u4e3a text",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SELECT  '{\"a\":[1,2,3],\"b\":[4,5,6]}'::json#>>'{a,2}';")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@>"),"  jsonb, \u68c0\u6d4b\u5de6\u4fa7\u662f\u5426\u5305\u542b\u53f3\u4fa7"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<@"),"  jsonb, \u68c0\u6d4b\u53f3\u4fa7\u662f\u5426\u5305\u542b\u5de6\u4fa7"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"?"),"   jsonb, \u68c0\u6d4b\u662f\u5426\u5305\u542b key \u6216\u6570\u7ec4\u5143\u7d20",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SELECT '{\"a\":1, \"b\":2}'::jsonb ? 'b';")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"?|"),"  jsonb, \u68c0\u6d4b\u662f\u5426\u5305\u542b\u67d0\u4e2a key",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SELECT  '{\"a\":1, \"b\":2, \"c\":3}'::jsonb ?| array['b', 'ceeee', 'e'];")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"?&"),"  jsonb, \u662f\u5426\u5305\u542b\u6240\u6709 key"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"||"),"  jsonb, \u62fc\u63a5\u4e24\u4e2a jsonb"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-"),"   \u5220\u9664 kv \u6216\u6570\u7ec4\u5143\u7d20",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SELECT  '{\"a\": \"b\"}'::jsonb - 'a';")," ",Object(l.b)("inlineCode",{parentName:"li"},"SELECT  '[\"a\", \"b\"]'::jsonb - 'a';")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'SELECT  \'["a", "b"]\'::jsonb - (-1);')," ",Object(l.b)("inlineCode",{parentName:"li"},'SELECT  \'["a", "b"]\'::jsonb - (1);')))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"#-"),"  \u5220\u9664\u8def\u5f84"))),Object(l.b)("li",{parentName:"ul"},"FAQ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://dba.stackexchange.com/questions/54283/how-to-turn-json-array-into-postgres-array"}),"https://dba.stackexchange.com/questions/54283/how-to-turn-json-array-into-postgres-array"))))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT '5'::json;\nSELECT '[1, 2, \"foo\", null]'::json;\nSELECT '{\"bar\": \"baz\", \"balance\": 7.77, \"active\": false}'::json;\n\n-- \u68c0\u6d4b\u662f\u5426\u5305\u542b\nSELECT '\"foo\"'::jsonb @> '\"foo\"'::jsonb;\nSELECT '[1, 2, 3]'::jsonb @> '[3, 1]'::jsonb;\n-- \u6307\u5b9a\u4e00\u4e2a\u5b57\u6bb5\nSELECT data->'field' FROM doc;\n\n-- \u521b\u5efa\u7d22\u5f15\nCREATE INDEX idxgin ON api USING GIN (jdoc);\nCREATE INDEX idxginp ON api USING GIN (jdoc jsonb_path_ops);\n\n-- \u5c06\u6570\u7ec4\u4f5c\u4e3a\u884c\nSELECT\n  s ->> 'name'\nFROM tab t, jsonb_array_elements(t.family -> 'children') s;\n")),Object(l.b)("h3",{id:"admin"},"Admin"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),'-- \u76f8\u5f53\u4e8e\u7ed9\u5176\u4ed6\u4eba root \u6743\u9650\ngrant postgres to someone;\n\n\nGRANT ALL PRIVILEGES ON DATABASE "my_db" to my_user;\nGRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;\n\n-- What GRANT USAGE ON SCHEMA exactly do? https://stackoverflow.com/q/17338621/1870054\n\n--ACCESS DB\nREVOKE CONNECT ON DATABASE nova FROM PUBLIC;\nGRANT  CONNECT ON DATABASE nova  TO user;\n\n--ACCESS SCHEMA\nREVOKE ALL     ON SCHEMA public FROM PUBLIC;\nGRANT  USAGE   ON SCHEMA public  TO user;\n\n--ACCESS TABLES\ngrant usage , select on all sequences in schema s to u;\n\nREVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC ;\nGRANT SELECT                         ON ALL TABLES IN SCHEMA public TO read_only ;\nGRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write ;\nGRANT ALL                            ON ALL TABLES IN SCHEMA public TO admin ;\n')),Object(l.b)("h3",{id:"notify"},"NOTIFY"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"LISTEN virtual;\nNOTIFY virtual;\nNOTIFY virtual, 'This is the payload';\n\n\nLISTEN foo;\nSELECT pg_notify('fo' || 'o', 'pay' || 'load');\n\n-- NOTIFY on insert\n-- Send Notify Procedure\nCREATE OR REPLACE FUNCTION my_tab()\n  RETURNS TRIGGER AS $$\nDECLARE\nBEGIN\n  PERFORM pg_notify('my_tab_insert_notify', new.id::TEXT);\n  RETURN new;\nEND;\n$$ LANGUAGE plpgsql;\n-- Trigger\nCREATE TRIGGER my_tab_after_insert\nAFTER INSERT ON my_tab\nFOR EACH ROW EXECUTE PROCEDURE my_tab_notify_insert();\n")),Object(l.b)("h3",{id:"graph"},"Graph"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/queries-with.html"}),"https://www.postgresql.org/docs/current/static/queries-with.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.slideshare.net/JoshuaBae/pg-conf-implementing-graph-database-basedon-postgresql"}),"Pg Conf - Implementing Graph Database based-on PostgreSQL")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/43287.pdf"}),"SQLGraph: An Efficient Relational-Based Property Graph Store")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/pietermartin/sqlg"}),"https://github.com/pietermartin/sqlg")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cayleygraph/cayley/pull/289"}),"https://github.com/cayleygraph/cayley/pull/289"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"graph: Postgres backend"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://bitnine.net/agensgraph/"}),"http://bitnine.net/agensgraph/"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e PG"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.slideshare.net/quipo/rdbms-in-the-social-networks-age"}),"Graphs in the Database: Rdbms In The Social Networks Age")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.slideshare.net/quipo/trees-in-the-database-advanced-data-structures"}),"Trees In The Database - Advanced data structures"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"")),Object(l.b)("h3",{id:"extension"},"Extension"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pgxn.org/"}),"https://pgxn.org/"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/current/static/contrib.html"}),"Additional Supplied Modules")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u5e26\u7684\u6269\u5c55"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"FDW"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/postgres-fdw.html"}),"https://www.postgresql.org/docs/current/static/postgres-fdw.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://multicorn.org/"}),"http://multicorn.org/"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Multicorn is a PostgreSQL 9.1+ extension meant to make Foreign Data Wrapper development easy, by allowing the programmer to use the Python programming language.")))))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"--  \u67e5\u770b\u5b89\u88c5\u7684\n\\dX;\nselect * from pg_extension;\n\n-- \u67e5\u770b\u6240\u6709\u7684\nSELECT * FROM pg_available_extensions;\n\n-- \u67e5\u770b\u6240\u6709\u7684\nCREATE EXTENSION IF NOT EXISTS file_fdw;\n")),Object(l.b)("h4",{id:"postgres-fdw"},"postgres-fdw"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.postgresql.org/wiki/Autonomous_subtransactions"}),"https://wiki.postgresql.org/wiki/Autonomous_subtransactions")))}s.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=s(a),u=n,O=o["".concat(b,".").concat(u)]||o[u]||m[u]||l;return a?r.a.createElement(O,i(i({ref:t},c),{},{components:a})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);