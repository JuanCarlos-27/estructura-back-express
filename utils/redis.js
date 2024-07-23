import redis from 'redis';

const client = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  url: process.env.REDIS_URL
});

// 3 hours
const DEFAULT_EXPIRES_IN = 10800;

await client
  .connect()
  .then(() => {
    console.log('Redis client connected');
  })
  .catch((error) => {
    console.error('Redis client error', error);
  });

const getCached = async (key) => {
  const result = await client.get(key);
  return result;
};

const setNewCacheValue = async (key, value, expitesIn = DEFAULT_EXPIRES_IN) => {
  const result = await client.set(key, value, { EX: expitesIn });
  console.log('setNewCacheValue', result);
};

export { getCached, setNewCacheValue };
