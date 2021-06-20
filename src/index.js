import bcrypt from 'bcryptjs';

document.getElementById("button-submit").onclick = (event) => {
    const stringToEncrypt = document.getElementById("string-to-encrypt").value;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(stringToEncrypt, salt, (err, hash) => {
            document.getElementById("result").innerHTML = hash;
        });
    });

    return false;
}
