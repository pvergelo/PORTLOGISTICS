document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.btn-open');
    const closeButtons = document.querySelectorAll('.close-btn');

    openButtons.forEach(btn => {
        btn.onclick = () => {
            const modalId = btn.getAttribute('data-target');
            document.getElementById(modalId).style.display = "block";
            document.body.style.overflow = "hidden";
        };
    });

    closeButtons.forEach(btn => {
        btn.onclick = () => {
            btn.closest('.modal').style.display = "none";
            document.body.style.overflow = "auto";
        };
    });

    window.onclick = (event) => {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});