export const getCorrectLocalForm = (words: string[], count: number) => {
    const pluralRules = new Intl.PluralRules('ru-RU', { type: 'cardinal' });
    const rule = pluralRules.select(count);
    
    if (rule === 'one') {
        return words[0]; // Единственное число
    } else if (rule === 'few') {
        return words[1]; // Родительный падеж
    } else {
        return words[2]; // Множественное число
    }
}