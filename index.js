document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        items.forEach(item => {
            const positionFromTop = item.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -100) {
                item.classList.add('show');
                item.classList.remove('hidden');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});
