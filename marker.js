let marker;

function initMap() {
    const map=new google.maps.Map(document.getElementById("map"), {
        zoom:13,
        center: {lat: 36.553084, lng:-121.922543}
    });
    marker=new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 36.553084, lng:-121.922543}
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