// Google Map
function initMap() {
    const loc = { lat: 22.572645, lng: 88.363892};
    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });
    const marker = new google.map.marker({position: loc, map: map});
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 70
            },
            800/* this is the speed mil sec*/
        );
    }
});

//Nav bar background opacity
window.addEventListener('scroll', function(){
    if(window.scrollY > 750){
        document.querySelector('#navbar').style.opacity = 0.8;
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});