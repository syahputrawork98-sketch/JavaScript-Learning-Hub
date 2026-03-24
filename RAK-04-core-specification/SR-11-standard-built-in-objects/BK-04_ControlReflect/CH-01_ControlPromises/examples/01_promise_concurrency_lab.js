console.log("=== Promise Concurrency Lab ===");

const makeTask = (label, shouldReject, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`${label} failed`));
        return;
      }
      resolve(`${label} ok`);
    }, delay);
  });

const tasks = [
  makeTask("alpha", false, 30),
  makeTask("beta", true, 10),
  makeTask("gamma", false, 20),
];

Promise.allSettled(tasks).then((result) => {
  console.log("allSettled:", result.map((entry) => entry.status));
});

Promise.all(tasks)
  .then((result) => console.log("all:", result))
  .catch((error) => console.log("all rejected early:", error.message));
