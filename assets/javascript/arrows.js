document.querySelector('.scroll-left').addEventListener('click', function() {
            document.querySelector('.scroll-container').scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        document.querySelector('.scroll-right').addEventListener('click', function() {
            document.querySelector('.scroll-container').scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });