document.querySelector('.add-story').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal').classList.add('active');
});
document.getElementById('add-story').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active');
});