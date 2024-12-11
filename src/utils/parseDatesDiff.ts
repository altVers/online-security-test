import { getCorrectLocalForm } from "./getCorrectLocalForm";

export const parseDatesDiff = (isoDateString: string) => {
  const givenDate = new Date(isoDateString);
  const currentDate = new Date();

  // Рассчитываем разницу в миллисекундах
  const differenceInMilliseconds = currentDate.getTime() - givenDate.getTime();

  // Преобразуем разницу в дни и часы
  const secondsInADay = 1000 * 60 * 60 * 24;
  const secondsInAnHour = 1000 * 60 * 60;

  const daysDifference = Math.floor(differenceInMilliseconds / secondsInADay);
  const hoursDifference = Math.floor(
    (differenceInMilliseconds % secondsInADay) / secondsInAnHour
  );

  if (daysDifference > 0) {
    // Если разница в днях больше 0, выводим дни
    const dayWord = getCorrectLocalForm(
      ["день", "дня", "дней"],
      daysDifference
    );
    return `(${daysDifference} ${dayWord})`;
  } else {
    // Если разница в днях 0 или меньше, выводим часы
    const hourWord = getCorrectLocalForm(
      ["час", "часа", "часов"],
      hoursDifference
    );
    return `(${hoursDifference} ${hourWord})`;
  }
};
