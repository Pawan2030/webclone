document.getElementById('cta-button').addEventListener('click', function() {
    var images = [
      'background1.jpg',
      'background2.jpg',
      'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
      'background8.jpg'
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
    document.getElementById('main').style.backgroundImage = 'url(' + selectedImage + ')';
  });
