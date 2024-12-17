function languageTracker(languages) {
    switch(languages) {
        case 'en':
            return 'Hello World!'
        case 'es':
            return 'Hola Mundo!'
    }
}
console.log(languageTracker('en'))