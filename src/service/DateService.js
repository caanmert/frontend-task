/* eslint-disable import/prefer-default-export */
const padDigit = (num) => (num < 10 ? `0${num}` : num);

const formatDate = (date) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = padDigit(currentDate.getMonth() + 1);
  const day = padDigit(currentDate.getDate());

  return `${day}/${month}/${year}`;
};

export { formatDate };
