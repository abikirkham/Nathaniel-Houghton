(function() {
    var rotator = document.getElementById('rotator');
    var imageDir = 'assets/images/';
    var currentIndex = 1;

    var titles = [
        'Strategic Bid Writing',
        'Bid Process Consultation',
        'Training and Development',
        'Sector Credentials Production',
        'tester'
    ];
    
    var images = [
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg'
    ];

    var texts = [
        'We specialize in crafting persuasive and compelling bids that resonate with strategic clients across various sectors. Our experienced writers ensure that your proposals not only meet but exceed client expectations.',
        'We offer consultative services to enhance your bidding infrastructure, streamline processes, and manage assets more effectively. Our experts analyze your current processes and provide recommendations for improvement.',
        'Equipping your team with the skills and knowledge needed to excel in bid writing and management. We offer customized workshops and training sessions to enhance the capabilities of your bid team.',
        'Assisting in creating authoritative and persuasive sector-specific credentials that elevate your firms stature in competitive bids. We work closely with you to showcase your expertise and achievements in the relevant industry sectors.',
        'Specializing in setting up online stores, I integrate payment gateways and implement e-commerce features such as catalogs, carts, and secure checkouts. I use known platforms or develop custom solutions based on the client needs.'
    ];

    
    var changeImage = function() {
        var len = images.length;
    
        // Calculate previous, current, and next indices
        var prevIndex = (currentIndex - 1 + len) % len;
        var nextIndex = (currentIndex + 1) % len;
    
        // Set the source, text, and title for each image

        document.getElementById('image-title-prev').textContent = titles[prevIndex];
        document.getElementById('image-title').textContent = titles[currentIndex];
        document.getElementById('image-title-next').textContent = titles[nextIndex];

        document.getElementById('rotator-prev').src = imageDir + images[prevIndex];
        document.getElementById('rotator').src = imageDir + images[currentIndex];
        document.getElementById('rotator-next').src = imageDir + images[nextIndex];
    
        document.getElementById('image-text-prev').textContent = texts[prevIndex];
        document.getElementById('image-text').textContent = texts[currentIndex];
        document.getElementById('image-text-next').textContent = texts[nextIndex];
    
        
    };
    
    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage();
    });

    // Initial image display
    changeImage();
})();

