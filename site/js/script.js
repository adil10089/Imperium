// Валидация формы перед отправкой (для страницы Контактов)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector('textarea');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Пожалуйста, заполните все поля!');
        e.preventDefault(); // Останавливаем отправку формы
    } else {
        alert('Сообщение отправлено!');
    }
});