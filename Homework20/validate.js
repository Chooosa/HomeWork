function validate(data) {
    const { login, password, confirmPassword,
        license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login ===  "beeline" || login ===  "beeinterns" || login ===  "bee") {
        alert('Этот логин уже занят, выберите пожалуйста другой');
    } else if (password.length < 6 ) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите пожалуйста свое имя');
    } else if (!gender) {
        alert('Выберите пожалуйста пол');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        const ending = gender === 'female' ? 'ая' : 'ый';
        alert(`Уважаем${ending} ${firstName}, заявка создана`);
    }
}