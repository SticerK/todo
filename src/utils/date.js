export default function (now) {
  const date = new Date(now);
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const m = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  return [d, +m + 1, date.getFullYear()].join('.');
}
