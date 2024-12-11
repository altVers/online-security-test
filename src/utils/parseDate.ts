export const parseDate = (isoDate: string): string => {
  const date = new Date(isoDate); // Парсим iso строку в Date
  const formatter = new Intl.DateTimeFormat("ru-Ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return formatter.format(date);
};
