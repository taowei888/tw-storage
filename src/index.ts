import { StorageCls, Key, Expire, Data, Result } from './type'
import { ExpireStatus } from './enum'

export class Storage implements StorageCls {
    get<T>(key: Key): Result<T> {
        const value = localStorage.getItem(key)
        if (value) {
            const data: Data<T> = JSON.parse(value)
            const now = new Date().getTime()
            if (typeof data[ExpireStatus.expire] === 'number' && data[ExpireStatus.expire] < now) {
                this.remove(key)
                return {
                    value: null,
                    message: `${key} is expired`
                }
            } else {
                return {
                    value: data.value,
                    message: 'success'
                }
            }
        } else {
            return {
                value: null,
                message: `${key} is invalid`
            }
        }

    }

    set<T>(key: Key, value: T, expire: Expire = ExpireStatus.permanent) {
        const data = {
            value,
            [ExpireStatus.expire]: expire
        }
        localStorage.setItem(key, JSON.stringify(data))
    }

    remove(key: Key) {
        localStorage.removeItem(key)
    }

    clear() {
        localStorage.clear()
    }
}