function generateRandom () {
    // Generate random password with 10 characters

    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < 10; i++) {
        let generate = letters[Math.floor(Math.random() * letters.length)];
        password += generate;
    }


    let writeOut = document.getElementById('output').innerHTML = password;
}