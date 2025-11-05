// Animate skill bars when section comes into view
const skills = document.querySelectorAll('.fill');

function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if (skillTop < triggerBottom) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
