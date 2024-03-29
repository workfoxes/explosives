package redis

import (
	"context"
	"sync"
	"time"

	"github.com/go-redis/redis/v8"

	"github.com/workfoxes/explosives/pkg/config"
	"github.com/workfoxes/explosives/pkg/errors"
)

var r Redis

type Redis struct {
	once     sync.Once
	_default *redis.Client
}

func (r *Redis) Init(ctx context.Context) {
	var err error = nil
	r.once.Do(func() {
		r._default = redis.NewClient(&redis.Options{
			Addr:     config.C.RedisHost,
			Password: config.C.RedisPassword,
			DB:       0,
		})
		if err = r._default.Ping(ctx).Err(); err != nil {
			panic(errors.RedisUnreachable)
		}
	})
}

// Get : will help used to get the value from redis.
func Get(ctx context.Context, key string) *redis.StringCmd {
	r.Init(ctx)
	return r._default.Get(ctx, key)
}

func Set(ctx context.Context, key string, value interface{}, expiration time.Duration) *redis.StatusCmd {
	r.Init(ctx)
	return r._default.Set(ctx, key, value, expiration)
}

func Subscribe(ctx context.Context, channel string) *redis.PubSub {
	r.Init(ctx)
	return r._default.Subscribe(ctx, channel)
}
