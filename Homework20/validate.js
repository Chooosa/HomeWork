function validate(data) {
    const { login, password, confirmPassword,
        license, firstName, gender } = data;
    let resp = 'ый';

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
        if (gender == 'female') {
            resp = 'ая';
        }
        alert(`Уважаем${resp} ${firstName}, заявка создана`);
    }
}


/*
Я сделал два решения, потому что не знаю какое лучше,
но мне все же первое больше нравится. И хотел бы узнать
какая реализация, по вашему мнению, лучше.
*/


/*
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
    } else if (gender == 'female') {
        alert(`Уважаемая ${firstName}, заявка создана`);
    } else if (gender == 'male') {
        alert(`Уважаемый ${firstName}, заявка создана`);
    }
}*/