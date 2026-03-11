// C10 - Example 03: optional chaining + nullish

const config = {
  api: {
    timeout: 0,
  },
};

const timeout = config.api?.timeout ?? 5000;
const retries = config.api?.retries ?? 3;

console.log('timeout:', timeout);
console.log('retries:', retries);
