function toCapitalizeFirstLetter(word: string) {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

export default toCapitalizeFirstLetter;
