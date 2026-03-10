const userRole = 'admin';
const orderStatus = 'paid';

const mapping = {
  get value() {
    return `${userRole}:${orderStatus}`;
  }
};

console.log(mapping.value);
