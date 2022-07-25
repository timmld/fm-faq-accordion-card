const questionsContainers = document.querySelectorAll(".question-container");

questionsContainers.forEach(item => {
    item.addEventListener('click', e1 => {
        let questionBlock = e1.target.closest(".question-block");
        if (questionBlock.classList.contains("active")) {
            questionBlock.classList.remove("active");
        } else {
            questionsContainers.forEach(e2 => {
                e2.closest(".question-block").classList.remove("active");
            });
            questionBlock.classList.add("active");
        };
    });
});