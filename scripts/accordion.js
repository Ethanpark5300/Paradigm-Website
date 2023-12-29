const accordion = document.getElementsByClassName('block');

for (let i = 0; i < accordion.length; i++) {
    const question = accordion[i].querySelector('.question');

    question.addEventListener('click', function (event) {
        // Prevent event from reaching the parent block
        event.stopPropagation();
        accordion[i].classList.toggle('active');

        // Close other blocks
        // for (let j = 0; j < accordion.length; j++) {
        //     if (j !== i && accordion[j].classList.contains('active')) {
        //         accordion[j].classList.remove('active');
        //     }
        // }
    });
}