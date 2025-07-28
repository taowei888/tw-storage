# NPM 包发布指南

## 准备工作

### 1. 切换到 NPM 官方源
```bash
npm config set registry https://registry.npmjs.org/
```

### 2. 验证源地址
```bash
npm config get registry
# 应该显示: https://registry.npmjs.org/
```

## 发布流程

### 1. 注册/登录账户
```bash
# 如果没有账户，先注册
npm adduser

# 如果已有账户，直接登录
npm login
```

### 2. 构建项目
```bash
npm run build
```

### 3. 发布到 NPM
```bash
npm publish
```

## 版本管理

### 更新版本号
```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 次要版本 (1.0.0 -> 1.1.0)
npm version minor

# 主要版本 (1.0.0 -> 2.0.0)
npm version major
```

### 删除已发布的版本
```bash
# 删除指定版本
npm unpublish <包名>@<版本号>

# 删除整个包 (谨慎使用)
npm unpublish <包名>
```

## 私有 NPM 仓库（Verdaccio）

### 安装和启动 Verdaccio

```bash
# 全局安装 Verdaccio
npm install -g verdaccio

# 启动 Verdaccio 服务（在新终端运行，保持服务运行）
verdaccio
```

服务启动后会在 `http://localhost:4873` 运行，可在浏览器中访问 Web 界面。

### 配置私有源

```bash
# 切换到本地 Verdaccio registry
npm config set registry http://localhost:4873/

# 查看当前配置的 registry
npm config get registry
```

### 创建用户并登录

```bash
# 创建用户账号（需要输入用户名、密码和邮箱）
npm adduser --registry http://localhost:4873/

# 或者使用 login 命令
npm login --registry http://localhost:4873/
```

### 发布到私有仓库

确保 `package.json` 中的配置正确：

```json
{
  "name": "tw-storage",
  "version": "1.0.0",
  "private": false
}
```

发布到私有仓库：

```bash
npm publish --registry http://localhost:4873/
```

### 安装私有包

```bash
# 从私有仓库安装
npm install tw-storage --registry http://localhost:4873/
```

### 切换回官方源

```bash
# 切换回 npm 官方源
npm config set registry https://registry.npmjs.org/
```

### Verdaccio 配置

- 默认配置文件位置：`~/.config/verdaccio/config.yaml`
- 可以自定义用户权限、包访问控制等
- 支持上游代理，未发布的包会从官方 npm 获取

## 注意事项

- ⚠️ **重要**: 发布前确保已切换到正确的源
- 📦 每次发布前记得更新版本号
- 🔒 删除操作不可逆，请谨慎使用
- 📝 建议在发布前检查 `package.json` 配置
- 🏠 私有仓库适用于内部包管理和测试

