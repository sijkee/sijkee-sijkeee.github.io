// Простая функция для имитации скачивания резюме
function downloadResume() {
  alert("Скачивание резюме начнётся...");
  // Здесь можно добавить ссылку на реальный файл PDF
}

// Валидация формы и обработка отправки
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const output = document.getElementById('formMessage');

  if (!name || !email || !message) {
    output.textContent = 'Заполните все поля!';
    output.style.color = 'red';
    return;
  }

  if (!validateEmail(email)) {
    output.textContent = 'Введите корректный email!';
    output.style.color = 'red';
    return;
  }

  output.textContent = 'Спасибо! Сообщение отправлено.';
  output.style.color = 'green';

  // Очистка формы
  this.reset();
});

// Проверка email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
// Анимация появления секций при прокрутке
const sections = document.querySelectorAll('.sections .section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
