const dateFormatter = (articleDate) => {
  const formatedDate = new Date(articleDate).toString();
  return formatedDate.replace(/(\d*:\d*).*/g, '');
};

const readTimeFormatter = articleReadTime => `${articleReadTime} Mins read`;

export { dateFormatter, readTimeFormatter };
