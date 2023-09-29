let date = "";

export const getDate = () => {
  if (date) {
    return date;
  }
  const today = new Date();
  date = today.toDateString();
  return date;
};
