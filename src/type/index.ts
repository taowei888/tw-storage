import { ExpireStatus } from '../enum'

// key类型
export type Key = string

// 过期类型，永久或时间戳
export type Expire = ExpireStatus.permanent | number

// 保存数据格式，T表示原始数据
export interface Data<T> {
    // 原始数据
    value: T
    // 过期标识
    [ExpireStatus.expire]: Expire
}

// 获取数据结果，T 或 null
export interface Result<T> {
    value: T | null
    message: string
}

// 存储类
export interface StorageCls {
    get: <T>(key: Key) => Result<T>
    set: <T>(key: Key, value: T, expire: Expire) => void
    remove: (key: Key) => void
    clear: () => void
}


