export const parseTaskObj = (
  name: string,
  city: string,
  street: string
): string => {
  return `город ${city}, ул. ${street}, ${name}`;
};