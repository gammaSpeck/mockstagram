import IORedis, { Redis } from 'ioredis'

class RedisWrapper {
  private _client?: Redis

  get client() {
    if (!this._client) throw new Error('Cannot access Redis client before connecting')
    return this._client
  }

  connect(port: number, url: string): Promise<void> {
    this._client = new IORedis(port, url, {
      connectTimeout: 30000
    })

    return new Promise((resolve, reject) => {
      this._client?.on('connect', () => {
        console.log('Connected to REDIS')
        resolve()
      })
      this._client?.on('error', (err: any) => {
        reject(err)
      })
    })
  }
}

export const redisWrapper = new RedisWrapper()
