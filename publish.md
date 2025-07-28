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

## 注意事项

- ⚠️ **重要**: 发布前确保已切换到官方源
- 📦 每次发布前记得更新版本号
- 🔒 删除操作不可逆，请谨慎使用
- 📝 建议在发布前检查 `package.json` 配置