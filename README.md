# 婴儿奶量计算器

## 部署到 GitHub Pages

### 1) 仓库 Pages 设置路径
在仓库中进入 **Settings → Pages**，确认站点发布来源（Build and deployment）配置正确：

- **Source**: `Deploy from a branch`
- **Branch**: 通常选择 `main`
- **Folder**: 选择 `/ (root)` 或 `/docs`

> 建议优先使用一种目录策略并长期保持一致，避免切换过程中出现静态资源路径或历史缓存问题。

### 2) 发布分支与目录约定
常见配置如下：

- `main` + `/ (root)`：Jekyll 默认根目录发布，适合简单站点。
- `main` + `/docs`：源码与站点文件分离更清晰，适合需要在仓库根目录放置其他工程文件的场景。

如果采用 **Jekyll 默认根目录发布（`main` + `/ (root)`）**，请务必遵循以下约定：

- 不要将生成产物（如构建输出）额外提交到其他目录（例如 `docs/`、`dist/`）。
- 不要在多个目录同时维护站点入口文件（例如重复的 `index.html`）。
- 保持单一发布源，避免“看起来都对但实际 Pages 读取的是另一个目录”的混淆。

### 3) 自定义域名与 `CNAME`
如需绑定自定义域名：

1. 在 **Settings → Pages** 的 Custom domain 中填写域名。
2. 在仓库发布目录中保留 `CNAME` 文件，文件内容仅一行你的域名（例如 `example.com`）。
3. 在域名 DNS 服务商处完成解析：
   - 根域（apex）通常配置 `A` 记录到 GitHub Pages 提供的 IP。
   - 子域（如 `www`）通常配置 `CNAME` 到 `<username>.github.io`。
4. 等待 DNS 生效后再验证 HTTPS 状态。

> 若你通过 Actions 工作流部署，请确保工作流不会覆盖或删除 `CNAME` 文件。

## 故障排查清单

### 主题不生效
- `_config.yml` 中 `theme` 或 `remote_theme` 配置错误、拼写错误。
- 主题依赖未正确启用（例如使用了不受支持的插件）。
- 浏览器/CDN 缓存导致看到旧页面（可强制刷新或等待缓存过期）。

**定位方式：**
- 查看 Pages 构建日志（Settings → Pages 或 Actions）。
- 检查 `_config.yml` 改动是否已推送到实际发布分支。

### 路径错乱
- `baseurl`、`url` 配置与实际仓库访问路径不匹配。
- 项目页（`https://<user>.github.io/<repo>/`）与用户页（`https://<user>.github.io/`）路径写法混用。
- 资源引用使用了错误的绝对路径或相对路径。

**定位方式：**
- 在浏览器开发者工具 Network 面板检查 404 资源 URL。
- 核对 `_config.yml` 的 `url/baseurl` 与实际访问地址。

### 页面 404
- `index.html`/`index.md` 不在发布目录根层级。
- Pages 的 Branch/Folder 指向了错误目录。
- 仓库名与访问路径不一致（尤其是项目页场景）。

**定位方式：**
- 回到 Settings → Pages 确认分支和目录。
- 在仓库中确认首页文件路径与大小写（Linux 环境区分大小写）。

### 构建失败
- `_config.yml` YAML 语法错误（缩进、冒号、引号等）。
- 使用了 GitHub Pages 不支持的插件或 gem 版本冲突。
- Markdown/模板语法错误导致 Liquid 渲染异常。

**定位方式：**
- 打开 Actions 或 Pages 构建日志，优先看第一条报错。
- 最小化改动后逐步恢复，快速定位是配置问题还是内容问题。
