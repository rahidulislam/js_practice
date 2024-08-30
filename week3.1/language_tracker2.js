function languageTracker(languages) {
    const language = {
        'en': 'Hello World!',
        'es': 'Hola Mundo!'
    }
    return language[languages] ? language[languages] : 'Not Found!'
}
console.log(languageTracker('en'))