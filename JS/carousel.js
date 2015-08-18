$('.carousel').owlCarousel({
    items: 5,
    autoPlay: true,
    nav:true,
    margin:30,
    responsive:{
        380:{
            items:1
        },
        768:{
            items:3
        }
    }
})