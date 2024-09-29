const signinbtn = document.getElementById('signinbtn');
const container = document.querySelector('.container');

signinbtn.addEventListener('click', () => {
    container.classList.add('active');
});