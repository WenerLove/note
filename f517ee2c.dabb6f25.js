(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{735:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return o})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(7),l=(r(0),r(766)),c={title:"Gitlab Runner"},i={unversionedId:"ops/service/gitlab-runner",id:"ops/service/gitlab-runner",isDocsHomePage:!1,title:"Gitlab Runner",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/service/gitlab-runner.md",slug:"/ops/service/gitlab-runner",permalink:"/notes/ops/service/gitlab-runner",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/gitlab-runner.md",version:"current",sidebar:"docs",previous:{title:"GitLab K8S \u96c6\u6210",permalink:"/notes/ops/service/gitlab-k8s"},next:{title:"\u786c\u4ef6\u8bcd\u6c47",permalink:"/notes/hardware/glossary"}},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Docker in Docker",id:"docker-in-docker",children:[]},{value:"\u5c06\u5171\u4eab runner \u4fee\u6539\u4e3a \u79c1\u6709",id:"\u5c06\u5171\u4eab-runner-\u4fee\u6539\u4e3a-\u79c1\u6709",children:[]},{value:"Windows",id:"windows",children:[]},{value:"AlpineLinux",id:"alpinelinux",children:[]},{value:"Shell in Docker",id:"shell-in-docker",children:[]}],s={rightToc:o};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Gitlab \u8fd0\u884c CI/CD \u4efb\u52a1\u7684\u7ec8\u7aef"),Object(l.b)("li",{parentName:"ul"},"Golang \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784 x86, AMD64, ARM64, ARM, s390x"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5e73\u53f0 Linux, Windows, macOS, FreeBSD"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u5f0f Docker, Helm, Shell"))),Object(l.b)("li",{parentName:"ul"},"Runner \u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"shell",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5 Shell \u6267\u884c\u811a\u672c\uff0c\u6700\u5feb\uff0c\u4e0d\u9700\u8981\u542f\u52a8\u5bb9\u5668 - \u4f8b\u5982\u6784\u5efa Golang \u53ef\u80fd\u53ea\u9700\u8981\u5341\u6765\u79d2"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u73af\u5883\u9700\u8981\u63d0\u524d\u51c6\u5907\u597d"),Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 root \u6743\u9650\uff0c\u56e0\u6b64\u5efa\u8bae\u901a\u8fc7 docker \u6765\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"docker",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 image \u6307\u5b9a\u955c\u50cf"))),Object(l.b)("li",{parentName:"ul"},"ssh",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 SSH \u6267\u884c\u547d\u4ee4\uff0cCI \u6267\u884c\u4efb\u52a1\u65f6\u53ef\u80fd\u66f4\u6709\u610f\u4e49"))),Object(l.b)("li",{parentName:"ul"},"kubernetes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5728\u96c6\u7fa4\u73af\u5883\u4e0b"))),Object(l.b)("li",{parentName:"ul"},"docker-windows, docker-ssh, parallels, virtualbox, docker+machine, docker-ssh+machine")))),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u67e5\u770b\u6ce8\u518c\u53c2\u6570\ndocker run --rm -it gitlab/gitlab-runner:alpine register --help\n# \u4ea4\u4e92\u5f0f\u6ce8\u518c\ndocker run --rm -it gitlab/gitlab-runner:alpine register\n# \u975e\u4ea4\u4e92\u5f0f\u6ce8\u518c\nTOKEN=""\n# \u6ce8\u518c\u4e3a docker executor\ndocker run --rm \\\n  -v /data/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:alpine register \\\n  --non-interactive \\\n  --executor "docker" \\\n  --docker-image wener/base:latest \\\n  --url "https://gitlab.com/" \\\n  --registration-token "$TOKEN" \\\n  --description "docker-runner" \\\n  --tag-list "docker,internal" \\\n  --run-untagged="true" \\\n  --locked="false" \\\n  --access-level="not_protected"\n\n# \u4f1a\u751f\u6210\u914d\u7f6e /data/gitlab-runner/config/config.toml\n\n# \u542f\u52a8 runner\ndocker run -d --restart always -e TZ=Asia/Shanghai \\\n  -v /data/gitlab-runner/config:/etc/gitlab-runner \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner gitlab/gitlab-runner:alpine\n')),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/etc/gitlab-runner/config.toml - ",Object(l.b)("inlineCode",{parentName:"li"},"*nix")),Object(l.b)("li",{parentName:"ul"},"~/.gitlab-runner/config.tom - ",Object(l.b)("inlineCode",{parentName:"li"},"*nix")," \u975e root"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"./config.toml")," - \u5176\u4ed6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.gitlab.com/runner/configuration/advanced-configuration.html"}),"Advanced configuration"))),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ini"}),'concurrent=4\n# debug, info, warn, error, fatal, panic\nlog_level=info\n# runner, text, json\nlog_format=runner\n# \u68c0\u6d4b\u4efb\u52a1\u7684\u95f4\u9694 - \u6700\u4f4e 3s\ncheck_interval=3\n# \u9519\u8bef\u53d1\u9001\u5230 Sentry\nsentry_dsn=false\n# metrics \u5730\u5740\n# listen_address=0.0.0.0:9090\n\n# \u591a runner \u534f\u540c\u7528\u7684\u4f1a\u8bdd\u670d\u52a1\n[session_server]\n  listen_address = "[::]:8093"\n  advertise_address = "runner-host-name.tld:8093"\n  session_timeout = 1800\n\n[[runners]]\n  name = "My Docker Runner"\n  # Gitlab \u5730\u5740\n  url = "http://127.0.0.1:3000/"\n  # \u5185\u90e8\u7279\u6b8a token\n  token = "$TOKEN"\n  # tls-ca-file\n  # tls-cert-file\n  # tls-key-file\n  # \u8be5 token \u80fd\u5e76\u884c\u5904\u7406\u7684\u4efb\u52a1\u6570 - 0 \u4e0d\u9650\n  limit=0\n  # shell, docker, docker-windows, docker-ssh, ssh, parallels, virtualbox, docker+machine\n  # docker-ssh+machine, kubernetes\n  executor = "docker"\n  # bash, sh, powershell, pwsh (PowerShell Core)\n  shell=""\n  # \u6784\u5efa\u76ee\u5f55 - Locally, Docker, SSH\n  # builds_dir=/build\n  # \u7f13\u5b58\u76ee\u5f55 - Locally, Docker, SSH - docker \u73af\u5883\u9700\u8981\u8be5\u76ee\u5f55\u5728 volume \u4e2d\n  # cache_dir=/cache\n  # \u73af\u5883\u53d8\u91cf\n  # environment=["ENV=value", "LC_ALL=en_US.UTF-8"]\n  # \u8bf7\u6c42\u4efb\u52a1\u7684\u5e76\u53d1\n  request_concurrency=1\n  # \u65e5\u5fd7\u5927\u5c0f - \u9ed8\u8ba4 4MB\n  output_limit=4096\n  # clone \u4e4b\u524d hook \u811a\u672c\n  # pre_clone_script=\n  # pre_build_script\n  # post_build_script\n\n  # \u4fee\u6539 clone \u7528\u7684\u5730\u5740\n  # clone_url\n\n  # \u662f\u5426\u7981\u7528 CI_DEBUG_TRACE \u7279\u6027\n  # debug_trace_disabled\n  # Extra job monitoring workers that pass their results as job artifacts to GitLab\n  # referees\n\n# \u81ea\u5b9a\u4e49\u6784\u5efa\u76ee\u5f55\n# GIT_CLONE_PATH\n[runners.custom_build_dir]\n# \u9ed8\u8ba4\u542f\u7528\u73af\u5883 kubernetes, docker, docker-ssh, docker+machine, docker-ssh+machine\n  # enabled = true\n[runners.docker]\n  # \u4f18\u5148\u4f7f\u7528 DOCKER_HOST\n  host=unix:///var/run/docker.sock\n  hostname=""\n  runtime=""\n\n  # ca.pem, cert.pem, key.pem\n  # tls_cert_path\n  # tls_verify\n\n  # build \u4f7f\u7528\u955c\u50cf\n  image = "docker:stable"\n  # \u5185\u5b58\u9650\u5236 - \u4f8b\u5982 1G\n  memory=""\n  memory_swap=""\n  memory_reservation=""\n\n  # OOM \u65f6\u4e0d kill\n  oom_kill_disable=false\n  # OOM kill \u4f18\u5148\u7ea7\n  oom_score_adjust=0\n\n  # CPU \u9650\u5236\n  cpuset_cpus=0\n  cpu_shares=1024\n  cpus=""\n\n  dns=[]\n  dns_search=[]\n\n  privileged=false\n\n  # \u662f\u5426\u7981\u6b62\u4fee\u6539\u5165\u53e3\n  disable_entrypoint_overwrite=false\n  userns_mode=\n  cap_add=[]\n  cap_drop=[]\n  security_opt=[]\n  devices=[]\n  cache_dir=""\n  # docker volume \u6784\u5efa\u65f6\u7f13\u5b58\n  disable_cache=true\n  network_mode=\n  wait_for_services_timeout=\n  volumes = ["/certs/client", "/cache"]\n  # \u6620\u5c04\u73b0\u6709\u955c\u50cf\u914d\u7f6e\n  # volumes = ["/opt/docker/daemon.json:/etc/docker/daemon.json:ro"]\n  volumes_from=[]\n  volume_driver=[]\n  extra_hosts=[]\n  shm_size = 0\n  links=[]\n  allowed_images=[]\n  allowed_services=[]\n  # never, if-not-present, always\n  pull_policy=always\n  sysctls=[]\n  # \u4fee\u6539\u9ed8\u8ba4 helper\n  # helper_image=""\n\n  # \u5b9a\u4e49\u670d\u52a1\u548c\u522b\u540d\n  [[runners.docker.services]]\n    name = "redis:5"\n    alias = "cache"\n\n  [[runners.docker.services]]\n    name = "docker:dind"\n    # \u5168\u5c40\u4fee\u6539 dind \u955c\u50cf\n    command = ["--registry-mirror", "https://registry-mirror.example.com"]\n\n[runners.parallels]\n  base_name=""\n  template_name=""\n  disable_snapshots=false\n\n[runners.virtualbox]\n  base_name=""\n  template_name=""\n  disable_snapshots=false\n\n[runners.ssh]\n  host = "my-production-server"\n  port = "22"\n  user = "root"\n  password = "production-server-password"\n  identity_file = ""\n\n# Docker Machine\n[runners.machine]\n# https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersmachine-section\n\n# \u81ea\u5b9a\u4e49\n[runners.custom]\n\n# \u7f13\u5b58\u914d\u7f6e\n[runners.cache]\n# s3, gcs\nType=s3\nPath=\nShared=false\n\n  # S3 \u914d\u7f6e\n  [runners.cache.s3]\n    ServerAddress = "s3.amazonaws.com"\n    AccessKey = "AWS_S3_ACCESS_KEY"\n    SecretKey = "AWS_S3_SECRET_KEY"\n    BucketName = "runners-cache"\n    BucketLocation = "eu-west-1"\n    Insecure = false\n\n# Kubernetes\n[runners.kubernetes]\n  host = "https://45.67.34.123:4892"\n  cert_file = "/etc/ssl/kubernetes/api.crt"\n  key_file = "/etc/ssl/kubernetes/api.key"\n  ca_file = "/etc/ssl/kubernetes/ca.crt"\n  image = "golang:1.8"\n  privileged = true\n  allow_privilege_escalation = true\n  image_pull_secrets = ["docker-registry-credentials"]\n  [runners.kubernetes.node_selector]\n    gitlab = "true"\n\n[runners.referees]\n  [runners.referees.metrics]\n    prometheus_address = "http://localhost:9090"\n    query_interval = 10\n    metric_queries = []\n')),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://about.gitlab.com/releases/2019/07/31/docker-in-docker-with-docker-19-dot-03/"}),"https://about.gitlab.com/releases/2019/07/31/docker-in-docker-with-docker-19-dot-03/")),Object(l.b)("h2",{id:"docker-in-docker"},"Docker in Docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'volumes = ["/certs/client", "/cache"]')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566"}),"gitlab-org/gitlab-runner#4566")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4501"}),"gitlab-org/gitlab-runner#4501")," - Docker in Docker 19.03 service fails")),Object(l.b)("h2",{id:"\u5c06\u5171\u4eab-runner-\u4fee\u6539\u4e3a-\u79c1\u6709"},"\u5c06\u5171\u4eab runner \u4fee\u6539\u4e3a \u79c1\u6709"),Object(l.b)("p",null,"\u79fb\u9664 runner \u4ece\u65b0\u6dfb\u52a0"),Object(l.b)("h2",{id:"windows"},"Windows"),Object(l.b)("ol",{start:0},Object(l.b)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5 Git ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"https://git-scm.com/download/win"}),"https://git-scm.com/download/win"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4e0b\u8f7d Portable \u89e3\u538b\u5373\u53ef"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u5b89\u88c5 Runner \u4e3a Service \u5219\u9700\u8981\u7528 msi")),Object(l.b)("ol",{start:0},Object(l.b)("li",{parentName:"ol"},"\u4e0b\u8f7d ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.gitlab.com/runner/install/windows.html"}),"Windows Runner"))),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'mkdir -p /usr/local/bin\n# \u6253\u5f00 bin \u76ee\u5f55 - \u590d\u5236\u4e0b\u8f7d\u7684 gitlab runner \u5230\u8fd9\u91cc\uff0c\u5e76\u66f4\u540d\u4e3a gitlab-runner.exe\nstart "$(cygpath -d /usr/local/bin)"\n\n# gitlab TOKEN\nTOKEN=\ngitlab-runner register \\\n  --non-interactive \\\n  --executor shell \\\n  --shell bash \\\n  --url "https://gitlab.com/" \\\n  --registration-token "$TOKEN" \\\n  --description windows-runner \\\n  --tag-list "windows,bash,internal" \\\n  --run-untagged=false \\\n  --locked=false \\\n  --access-level=not_protected \\\n  --builds-dir ./build \\\n  --cache-dir ./cache\n# \u751f\u6210\u7684\u914d\u7f6e\ncat config.toml\n# \u5728 runner \u4e0b\u6267\u884c - build \u548c cache \u4e5f\u5728\u8be5\u76ee\u5f55\u4e0b\ngitlab-runner run -d ./runner\n')),Object(l.b)("h2",{id:"alpinelinux"},"AlpineLinux"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u6700\u65b0\u7248\napk add gitlab-runner -X https://mirrors.aliyun.com/alpine/edge/community/\n# register\n# \u914d\u7f6e\u6587\u4ef6 /etc/gitlab-runner/config.toml\n\n# \u9ed8\u8ba4\u4f7f\u7528 gitlab-runner \u7528\u6237\u548c\u5206\u7ec4\n# \u5982\u679c\u5728 docker \u91cc\u4f7f\u7528 root \u66f4\u65b9\u4fbf\ncat <<CONF > /etc/conf.d/gitlab-runner\nGITLAB_RUNNER_USER="root"\nGITLAB_RUNNER_GROUP="root"\nCONF\n')),Object(l.b)("h2",{id:"shell-in-docker"},"Shell in Docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6709\u4e9b\u6784\u5efa\u73af\u5883\u53ef\u80fd\u8fd8\u4f1a\u9700\u8981 py3\uff0cgcc")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# wener/gitlab-runner include docker, make, git\ndocker run -d --restart always \\\n  -v $PWD:/etc/gitlab-runner \\\n  -v $PWD/builds:/builds \\\n  -v $PWD/cache:/cache \\\n  -e TZ=Asia/Shanghai \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner-shell wener/gitlab-runner\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6700\u5c0f\u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ini"}),'concurrent = 1\ncheck_interval = 0\n# \u4e0d\u8fd0\u884c\u6ca1\u6709\u6307\u5b9a tag \u7684 - \u76f8\u5f53\u4e8e\u9ed8\u8ba4 runner - \u4e00\u822c docker \u4f1a\u901a\u7528\u4e00\u70b9\nrun_untagged=false\nshell="bash"\n\n[session_server]\n  session_timeout = 1800\n\n[[runners]]\n  name = "linux-shell-runner"\n  url = "https://gitlab.com/"\n  token = "$TOKEN"\n  executor = "shell"\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"go")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"apk add go -X https://mirrors.aliyun.com/alpine/edge/community\ncurl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.32.2\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"nodejs")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"apk add nodejs npm nghttp2\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"java")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"apk add openjdk11\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"k8s")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"apk add kubectl -X https://mirrors.aliyun.com/alpine/edge/testing/\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Runner")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cat <<DOCKERFILE > Dockerfile\nFROM wener/gitlab-runner\nRUN apk add --no-cache util-linux coreutils python3\nRUN apk add --no-cache nodejs npm nghttp2\nRUN apk add --no-cache go -X https://mirrors.aliyun.com/alpine/edge/community\nDOCKERFILE\n\ndocker build -t runner .\n\ndocker run -d --restart always \\\n  -v $PWD:/etc/gitlab-runner \\\n  -v $PWD/builds:/builds \\\n  -v $PWD/cache:/cache \\\n  -e TZ=Asia/Shanghai \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner-shell runner\n")))}u.isMDXComponent=!0},766:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(r),d=t,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||l;return r?a.a.createElement(m,i(i({ref:n},s),{},{components:r})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,c=new Array(l);c[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<l;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);