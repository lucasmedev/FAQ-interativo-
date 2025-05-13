const questions = document.querySelectorAll('.faq-item .question');

questions.forEach((q) => {
    q.addEventListener('click', ()=>{
        const answer = q.nextElementSibling;
        answer.classList.toggle('hidden');
        q.classList;toggle('active')
    }
);
});