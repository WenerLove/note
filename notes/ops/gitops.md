---
title: GitOps
---

# GitOps
* 是什么？
  * Works by using __Git__ as a __single source of truth__ for __declarative__ infrastructure and applications
  * 系统状态以声明式定义
  * 完整的期望状态在Git版本
  * 允许修改的变化可自动应用到系统
  * 软件 Agent 保证状态正确和告知 divergence
* ansible-pull
* fluxcd
* Kubernetes
  * argocd
  * fleet
* 推拉模式
* 好处
  * Productivity
  * Developer Experiebce
  * Stability
  * Reliability
  * Consistency & Standardization
  * Security Guarantees

:::caution

- 因为 GitOps 工具会频繁访问 git，因此建议提供稳定的 git 服务
  - 避免使用 gitlab、github - 建议镜像仓库到 gitea 进行使用
- 工具无法正常检测 Git 信息时就会导致状态不可知，且任意超时

:::
