(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1084:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(8),r=(a(0),a(1107)),b={id:"ansible-awx",title:"Ansible AWX"},i={unversionedId:"ops/infra/ansible-awx",id:"ops/infra/ansible-awx",isDocsHomePage:!1,title:"Ansible AWX",description:"- \u662f\u4ec0\u4e48",source:"@site/notes/ops/infra/ansible-awx.md",slug:"/ops/infra/ansible-awx",permalink:"/notes/ops/infra/ansible-awx",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-awx.md",version:"current",sidebar:"docs",previous:{title:"\u57fa\u7840\u8bbe\u65bd",permalink:"/notes/ops/infra/infra"},next:{title:"Ansible Collection",permalink:"/notes/ops/infra/ansible-collection"}},c=[{value:"awxkit",id:"awxkit",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",children:[{value:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b",children:[]}]},{value:"\u6267\u884c\u73af\u5883",id:"\u6267\u884c\u73af\u5883",children:[]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"awx-manager",id:"awx-manager",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e Ansible \u7684 Web \u7ba1\u7406\u5e73\u53f0\u3001REST API"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u4efb\u52a1\u6267\u884c\u5f15\u64ce\uff0c\u9879\u76ee\u7ba1\u7406\uff0c\u7528\u6237\u6743\u9650\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"AWX -> ",Object(r.b)("a",{parentName:"li",href:"https://github.com/ansible/awx/commit/5c6895e6065a81f4483dfb6bc7650706f8866e1e"},"AnsibleWorks")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ansible/awx"},"ansible/awx")),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/userguide/overview.html"},"\u7528\u6237\u624b\u518c")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/administration/index.html"},"\u7ba1\u7406\u6587\u6863")),Object(r.b)("li",{parentName:"ul"},"Ansible ",Object(r.b)("a",{parentName:"li",href:"https://www.redhat.com/en/resources/awx-and-ansible-tower-datasheet"},"AWX vs Tower"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"AWX \u662f\u5feb\u901f\u5f00\u53d1\u7684\u4e0a\u6e38"))))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ansible \u4e5f\u53ef\u4ee5\u64cd\u4f5c Tower/AWX"),Object(r.b)("li",{parentName:"ul"},"\u4f1a\u81ea\u52a8\u4e0b\u8f7d requirements.yml \u4e2d\u7684\u4f9d\u8d56"))),Object(r.b)("li",{parentName:"ul"},"\u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8\u6388\u6743 - LDAP\u3001SAML 2.0\u3001OAuth\u3001RADIUS")))),Object(r.b)("h2",{id:"awxkit"},"awxkit"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/towercli/index.html"},"AWX Command Line Interface")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/towercli/authentication.html"},"\u6388\u6743"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"pip3 install awxkit\n\n# \u76f4\u63a5\u4f7f\u7528\u8d26\u53f7\u5bc6\u7801\nawx --conf.host https://awx.example.org \\\n    --conf.username joe --conf.password secret \\\n    --conf.insecure \\\n    users list\n\n# \u767b\u9646\nexport TOWER_HOST=https://awx.example.org\n# \u4f1a\u751f\u6210 token\n$(TOWER_USERNAME=alice TOWER_PASSWORD=secret awx login -f human)\nawx config\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5bfc\u5165 ssh\nawx credentials create --credential_type 'Machine' \\\n    --name 'My SSH Key' --user 'alice' \\\n    --inputs '{\"username\": \"server-login\", \"ssh_key_data\": \"@~/.ssh/id_rsa\"}'\n")),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ansible/awx/blob/devel/INSTALL.md"},"\u5b89\u88c5\u6587\u6863")),Object(r.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u8981\u6c42",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"2 CPU 4G \u5185\u5b58 20G \u786c\u76d8"),Object(r.b)("li",{parentName:"ul"},"PostgreSQL 10+"))),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u5b89\u88c5\u65b9\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Docker Compose",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ansible ",Object(r.b)("a",{parentName:"li",href:"https://github.com/ansible/awx/tree/devel/installer"},"playbook")),Object(r.b)("li",{parentName:"ul"},"\u4f1a\u542f\u52a8 PostgreSQL \u548c Redis"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u9645\u542f\u52a8\u914d\u7f6e\u6a21\u677f ",Object(r.b)("a",{parentName:"li",href:"https://github.com/ansible/awx/tree/devel/installer/roles/local_docker/templates"},"local_docker/templates")))),Object(r.b)("li",{parentName:"ul"},"Kubernetes",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"stable/postgresql",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PG \u4f1a\u90e8\u7f72\u4e3a sts"))))),Object(r.b)("li",{parentName:"ul"},"HELM",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/AdWerx/charts/tree/master/awx"},"AdWerx/charts/awx")))),Object(r.b)("li",{parentName:"ul"},"OpenShift"))),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"pg_hostname - \u5982\u679c\u4f7f\u7528\u5916\u90e8 pg \u5219\u914d\u7f6e\u5916\u90e8\u4e3b\u673a"),Object(r.b)("li",{parentName:"ul"},"docker_registry - \u81ea\u5b9a\u4e49\u955c\u50cf\u4ed3\u5e93")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"VER=$(curl https://api.github.com/repos/ansible/awx/tags -s | jq '.[0].name' -r)\ncurl -LC- -o ansible-awx-$VER.tar.gz https://github.com/ansible/awx/archive/$VER.tar.gz\ntar xvfz ansible-awx-$VER.tar.gz\n# \u5b89\u88c5\ncd awx-$VER/installer\n\n# \u5b89\u88c5\u6240\u9700\u6a21\u5757\npip3 install docker docker-compose\n\n# \u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d inventory\ncode inventory\n# \u9ed8\u8ba4\u4f1a\u5b58\u50a8\u5230 ~/.awx\n# \u542f\u52a8\u540e\u53ef\u767b\u9646 http://localhost/#/login\nansible-playbook -i inventory install.yml\n# \u786e\u8ba4\u5b89\u88c5\u65e5\u5fd7\ndocker logs -f awx_task\n\n# \u547d\u4ee4\u884c\npip3 install awxkit\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"inventory")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"# \u7ba1\u7406\u5458\u8d26\u53f7\u5bc6\u7801\nadmin_user=awx\nadmin_password=awx\n\n# DB\npg_hostname=postgresql\npg_port=5432\npg_username=awx\npg_password=awx\npg_database=awx\npg_sslmode=prefer\n\n# \u521b\u5efa\u5c55\u793a\u7528\u7684\u6570\u636e\ncreate_preload_data=True\n\n# \u7528\u4e8e\u52a0\u5bc6\u6388\u6743\u4fe1\u606f\u7684\u5bc6\u94a5\nsecret_key=00000000-0000-0000-0000-000000000000\nbroadcast_websocket_secret=00000000-0000-0000-0000-000000000000\n\n# Kubernetes - \u53ef\u9009\nkubernetes_context=default\nkubernetes_namespace=awx\nkubernetes_web_svc_type=ClusterIP\nkubernetes_ingress_hostname=awx.example.com\n# \u81ea\u5b9a\u4e49\u6ce8\u89e3 - \u542f\u7528 ACME\nkubernetes_ingress_annotations={'cert-manager.io/cluster-issuer': 'letsencrypt'}\nkubernetes_ingress_tls_secret=awx-ingress-cert\n")),Object(r.b)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Project - \u9879\u76ee",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u5b58\u50a8 - Git\u3001SVN\u3001Mercurial\u3001\u672c\u5730\u76ee\u5f55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672c\u5730\u76ee\u5f55 ",Object(r.b)("inlineCode",{parentName:"li"},"/var/lib/awx/projects")))),Object(r.b)("li",{parentName:"ul"},"Playbooks \u7684\u7ec4\u5408"))),Object(r.b)("li",{parentName:"ul"},"Job Template - \u4efb\u52a1\u6a21\u677f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u597d\u7684\u53ef\u6267\u884c\u4efb\u52a1"),Object(r.b)("li",{parentName:"ul"},"\u5305\u542b playbook\u3001inventory\u3001\u53d8\u91cf \u7b49"))),Object(r.b)("li",{parentName:"ul"},"Job - \u4efb\u52a1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e00\u6b21\u6267\u884c"))),Object(r.b)("li",{parentName:"ul"},"Inventories - \u4ed3\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u4ece\u9879\u76ee git \u5bfc\u5165"),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 ansible-inventory \u5de5\u5177"))),Object(r.b)("li",{parentName:"ul"},"Credential - \u51ed\u8bc1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6240\u6709\u6d89\u53ca\u5230\u8ba4\u8bc1\u76f8\u5173\u7684\u4fe1\u606f"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/userguide/credential_types.html"},"Credential Type")," - \u51ed\u8bc1\u7c7b\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51ed\u8bc1"),Object(r.b)("li",{parentName:"ul"},"\u7528\u4e8e\u6ce8\u5165\u4e0a\u4e0b\u6587\u4fe1\u606f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),Object(r.b)("li",{parentName:"ul"},"Ansible \u989d\u5916\u53d8\u91cf"),Object(r.b)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u677f - \u4f8b\u5982\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"li"},".ini")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},".conf")))),Object(r.b)("li",{parentName:"ul"},"\u5355\u4e2a\u4efb\u52a1\u6a21\u7248\u6bcf\u79cd\u51ed\u8bc1\u7c7b\u578b\u53ea\u80fd\u6709 ",Object(r.b)("strong",{parentName:"li"},"\u4e00\u4e2a")))),Object(r.b)("li",{parentName:"ul"},"Orgnization - \u7ec4\u7ec7"),Object(r.b)("li",{parentName:"ul"},"User - \u7528\u6237"),Object(r.b)("li",{parentName:"ul"},"Team - \u56e2\u961f"),Object(r.b)("li",{parentName:"ul"},"Instance - \u5b9e\u4f8b")),Object(r.b)("h3",{id:"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b"},"\u81ea\u5b9a\u4e49\u51ed\u8bc1\u7c7b\u578b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5206\u4e3a\u8f93\u5165\u914d\u7f6e\u548c\u6ce8\u5165\u914d\u7f6e")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u8f93\u5165\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'# \u5b57\u6bb5\u5b9a\u4e49\nfields:\n  - type: string\n    id: username\n    label: Username\n  - id: password\n    # \u7c7b\u578b\n    type: string\n    # string \u652f\u6301 choices\n    # "choices": ["A", "B", "C"]\n    label: Password\n    secret: true\n# \u5fc5\u586b\u5b57\u6bb5\nrequired:\n  - username\n  - password\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6ce8\u5165\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# \u6587\u4ef6\u6a21\u677f\nfile:\n  template: |-\n    [mycloud]\n    token={{ api_token }}\n# \u73af\u5883\u53d8\u91cf\nenv:\n  THIRD_PARTY_CLOUD_API_TOKEN: '{{ api_token }}'\n  # \u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\n  MY_CLOUD_INI_FILE: '{{ tower.filename }}'\n# Ansible \u53d8\u91cf\nextra_vars:\n  some_extra_var: '{{ username }}:{{ password }}'\n\n---\n# \u591a\u4e2a\u6587\u4ef6\nfile:\n  template.cert_file: |-\n    [mycert]\n    {{ cert }}\n  template.key_file: |-\n    [mykey]\n    {{ key }}\nenv:\n  # \u591a\u4e2a\u6587\u4ef6\u7684\u8def\u5f84\n  MY_CERT_INI_FILE: '{{ tower.filename.cert_file }}'\n  MY_KEY_INI_FILE: '{{ tower.filename.key_file }}'\n")),Object(r.b)("h4",{id:"ansible-\u521b\u5efa\u5220\u9664"},"Ansible \u521b\u5efa\u5220\u9664"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"pip install ansible-tower-cli\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"- tower_credential_type:\n    name: Nexus\n    description: Credentials type for Nexus\n    kind: cloud\n    inputs: \"{{ lookup('file', 'tower_credential_inputs_nexus.json') }}\"\n    injectors: { 'extra_vars': { 'nexus_credential': 'test' } }\n    state: present\n    validate_certs: false\n\n- tower_credential_type:\n    name: Nexus\n    state: absent\n")),Object(r.b)("h2",{id:"\u6267\u884c\u73af\u5883"},"\u6267\u884c\u73af\u5883"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/administration/external_execution_envs.html"},"Execution Environments"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b9e\u4f8b\u7ec4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ee7\u627f\u5173\u7cfb Job Template > Inventory > Organization"),Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u7684 AWX \u4f1a\u5173\u8054\u5230\u5b9e\u4f8b\u7ec4"))),Object(r.b)("li",{parentName:"ul"},"\u5bb9\u5668\u7ec4 - \u4e34\u65f6\u8fd0\u884c\u73af\u5883",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"K8S Pod"))))),Object(r.b)("li",{parentName:"ul"},"Docker \u542f\u52a8\u7684 awx_task \u662f CentOS",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HOME=/var/lib/awx",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"projects/ - \u9879\u76ee\u76ee\u5f55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"_","ID","_","_","NAME/ - \u9879\u76ee\u76ee\u5f55 - \u4f8b\u5982 git"))))),Object(r.b)("li",{parentName:"ul"},"/var/log/tower/ - \u65e5\u5fd7",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"callback_receiver.log"),Object(r.b)("li",{parentName:"ul"},"dispatcher.log"),Object(r.b)("li",{parentName:"ul"},"management_playbooks.log"),Object(r.b)("li",{parentName:"ul"},"rsyslog.err"),Object(r.b)("li",{parentName:"ul"},"task_system.log"),Object(r.b)("li",{parentName:"ul"},"tower.log"),Object(r.b)("li",{parentName:"ul"},"tower_rbac_migrations.log"),Object(r.b)("li",{parentName:"ul"},"tower_system_tracking_migrations.log"),Object(r.b)("li",{parentName:"ul"},"wsbroadcast.log"))),Object(r.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u4f7f\u7528 rsyslog - \u53ef\u4ee5\u805a\u5408"))),Object(r.b)("li",{parentName:"ul"},"/api/v2/metrics - \u6307\u6807\u76d1\u63a7"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 venv - /var/lib/awx/venv/ansible",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u4fee\u6539")))),Object(r.b)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5efa\u8bae Job \u9694\u79bb"),Object(r.b)("li",{parentName:"ul"},"\u8f93\u51fa\u7684 Json ",Object(r.b)("inlineCode",{parentName:"li"},"https://<tower server name>/api/v2/jobs/<job_id>/job_events/")),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/administration/security_best_practices.html"},"Security Best Practices")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/administration/tipsandtricks.html"},"Tower Tips and Tricks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/3.7.3/html/userguide/credential_plugins.html"},"\u51ed\u8bc1\u7ba1\u7406"))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# venv \u5b89\u88c5\u65f6\u5efa\u8bae umask 0022\nsource /var/lib/awx/venv/ansible/bin/activate\numask 0022\npip install --upgrade pywinrm\ndeactivate\n")),Object(r.b)("h2",{id:"awx-manager"},"awx-manager"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible-tower/latest/html/administration/tower-manage.html"},"https://docs.ansible.com/ansible-tower/latest/html/administration/tower-manage.html"))))}p.isMDXComponent=!0},1107:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=p(a),u=n,O=o["".concat(b,".").concat(u)]||o[u]||m[u]||r;return a?l.a.createElement(O,i(i({ref:t},s),{},{components:a})):l.a.createElement(O,i({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var s=2;s<r;s++)b[s]=a[s];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);