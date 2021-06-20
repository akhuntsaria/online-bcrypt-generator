import bcrypt from 'bcryptjs';

document.getElementById('button-submit').onclick = (event) => {
    const rounds = parseInt(document.getElementById('input-rounds').value) || 10;
    const stringToEncrypt = document.getElementById('input-string-to-encrypt').value;
    const version = document.getElementById('input-version').value;

    bcrypt.genSalt(rounds, (err, salt) => {
        bcrypt.hash(stringToEncrypt, salt, (err, hash) => {
            hash = hash.replace('$2a$', version);

            document.getElementById('result').innerHTML = hash;
        });
    });
}
