const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const resultShow = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.questionOne.value,
    form.questionTwo.value,
    form.questionThree.value,
    form.questionFour.value,
  ];
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) score++;
  }
  score = (score / correctAnswers.length) * 100;
  console.log(score);
  const result = document.querySelector('.result__number');
  scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    resultShow.classList.remove('hidden');
    let i = 0;
    const timer = setInterval(() => {
      result.innerHTML = `${i}%`;
      i++;
      if (i === score + 1) clearInterval(timer);
    }, 10);
  }, 300);
});
