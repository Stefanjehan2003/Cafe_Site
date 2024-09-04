document.addEventListener('DOMContentLoaded', function () {
    var Images = document.querySelectorAll('.slider');
    var imgindexnow = 0;
    var Time = 3000; 

    function imagechanger() {
        
        for (var i = 0; i < Images.length; i++) {
            Images[i].style.display = 'none';
        }

        Images[imgindexnow].style.display = 'block';

       
        imgindexnow++;
        if (imgindexnow >= Images.length) {
            imgindexnow = 0;
        }

        setTimeout(imagechanger, Time);
    }

    
    imagechanger();
});
