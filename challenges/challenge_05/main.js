function daysToXmas(date) {
  const finalDate = new Date("Dec 25, 2021");
  const operationDate = finalDate - date;
  const secondsInDay = 1000 * 60 * 60 * 24;
  const days = Math.ceil(operationDate / secondsInDay);

  return days;
}

daysToXmas(new Date("Dec 25, 2021 00:00:01"));
daysToXmas(new Date("Dec 2, 2021 23:59:59"));
daysToXmas(new Date("December 20, 2021 03:24:00"));
daysToXmas(new Date("December 30, 2021"));
