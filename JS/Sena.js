  document.addEventListener('DOMContentLoaded', function() {
    var elementosCarousel = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elementosCarousel, {
        duration: 200,
        dist: -80,
        shift: 4,
        padding: 4,
        numVisible:4, 
        nowrap: false, 
    });   
    });

    $(document).ready(function(){
        $('.carousel').carousel();
      });