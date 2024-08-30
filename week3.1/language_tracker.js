function languageTracker(languages) {
    if (languages === 'en') {
        return 'Hello World!'
    } else if (languages === 'es') {
        return 'Hola Mundo!'
    }
}
console.log(languageTracker('en'))