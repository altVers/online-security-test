type Props = {
    name: string,
    city: string,
    street: string
}

export const parseTaskObj = ({name, city, street} : Props): string => {
    return `город ${city}, ул. ${street}, ${name}`
}