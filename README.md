# tw-storage

一个带有过期功能的 localStorage 封装库，支持 TypeScript。

## 特性

- 🚀 TypeScript 支持，完整的类型定义
- ⏰ 支持数据过期时间设置
- 🔄 自动过期检查和清理
- 📦 轻量级，无依赖
- 🛡️ 类型安全的 API

## 安装

```bash
npm install tw-storage
```

## 使用方法

```typescript
import { Storage } from 'tw-storage'

const storage = new Storage()

// 永久存储
storage.set('user', { name: 'John', age: 30 })

// 设置过期时间（5秒后过期）
storage.set('token', 'abc123', Date.now() + 5000)

// 获取数据
const result = storage.get<{ name: string, age: number }>('user')
if (result.value) {
  console.log(result.value.name) // John
}

// 删除数据
storage.remove('user')

// 清空所有数据
storage.clear()
```

## API

### `set<T>(key: string, value: T, expire?: number | 'permanent'): void`

存储数据到 localStorage。

- `key`: 存储键名
- `value`: 要存储的数据
- `expire`: 过期时间戳或 'permanent'（默认永久）

### `get<T>(key: string): Result<T>`

获取存储的数据。

返回格式：
```typescript
{
  value: T | null,  // 数据值，过期或不存在时为 null
  message: string   // 状态消息
}
```

### `remove(key: string): void`

删除指定键的数据。

### `clear(): void`

清空所有 localStorage 数据。

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm run build

# 在浏览器中测试
open index.html
```

## License

ISC