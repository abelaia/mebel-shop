export const formatPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

export const isItemInArray = (array, item) => {
  return array.some(el => el.id === item.id);
};

export const calculateTotal = (orders) => {
  return orders.reduce((sum, el) => sum + Number.parseFloat(el.price), 0);
};