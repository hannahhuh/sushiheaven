function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom:13,
        center: {lat: 36.553084, lng:-121.922543}
    });

    var logoIcon={
        url: logo.jpg,
        size: new google.maps.Size(40, 28),
        scaledSize: new google.maps.Size(40, 28),
        origin: new google.maps.Point(0,0) 
    }

    var marker=new google.maps.Marker({
        map,
        icon: logoIcon,
        animation: google.maps.Animation.DROP,
        position:{lat: 36.553084, lng:-121.922543} 
    });
    marker.addListener("click", toggleBounce);
}
function toggleBounce() {
    if (marker.getAnimation() !==null) {
        marker.setAnimation(null);}
        else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
}