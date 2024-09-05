
        // Create the IntersectionObserver
        const observe = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showw');
                } else {
                    entry.target.classList.remove('showw');
                }
            });
        });

        // Query all elements with the class 'hiddenjs'
        const hidjs = document.querySelectorAll('.hiddenjs');

        // Observe each element
        hidjs.forEach((el) => observe.observe(el));
        
       
        