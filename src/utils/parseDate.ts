export const parseDate = (isoDate: string, format: string = "dateAndTime"): string => {
  // controlDate: "2024-02-22T18:25:43-05:00"
  const [date, timeUTC] = isoDate.split("T");
  const [year, month, day] = date.split("-");
  const [localTime, UTC] = timeUTC.split("-");
  const [hours, minutes, ] = localTime.split(":");

  let result;

  switch (format) {
    case "date":
      result = `${day}.${month}.${year} (UTC -${UTC})`;
      break;
    case "time":
      result = `${hours}:${minutes} (UTC -${UTC})`;
      break;
    default:
      result = `${day}.${month}.${year} ${hours}:${minutes} (UTC -${UTC})`;
  }

  return result;
};
