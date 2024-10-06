let count1 = 0;
const button = document.getElementById('click-button');// найдите элементы с помощью getElement или аналогии
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', () => {
// Увеличьте значение count и обновите текст элемента
    count1++;
    counterDisplay.textContent = count1;
});


const emailInput = document.getElementById('email'); // найдите элементы с помощью getElement или аналогии
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit-btn');

emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
// Пример простого регулярного выражения для проверки email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
// Отобразите сообщение об ошибке и заблокируйте кнопку
        errorMessage.style.display = '';
        submitBtn.disabled = true;
    } else {
// Скрывайте сообщение об ошибке и разблокируйте кнопку
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;
    }
});