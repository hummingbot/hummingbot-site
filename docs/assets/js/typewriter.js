document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: [
            'market makers',
            'algo traders',
            'AI agents',
            'quant developers',
            'bot traders',
            'researchers',
        ],
        autoStart: true,
        loop: true,
    });
})