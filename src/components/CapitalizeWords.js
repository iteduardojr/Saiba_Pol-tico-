function capitalizeWords(str) {
    const wordsToIgnore = ['de', 'do', 'da', 'em', 'e'];
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i !== 0 && wordsToIgnore.includes(word.toLowerCase())) {
            words[i] = word.toLowerCase();
        } else {
            words[i] = capitalizeFirstLetter(word);
        }
    }

    return words.join(' ');
}

function capitalizeFirstLetter(word) {
    let capitalizedWord = "";
    let parts = word.split("-");
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        capitalizedWord += part.charAt(0).toUpperCase() + part.slice(1);
        if (i !== parts.length - 1) {
            capitalizedWord += "-";
        }
    }
    return capitalizedWord;
}

export { capitalizeWords }