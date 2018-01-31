window.onload = function() {
                document.getElementById('getLocationBtn').addEventListener('click', grabLocation)
            };

            function grabLocation() {
                navigator.geolocation.getCurrentPosition(showGoogleLink, error);
            };

            function error() {
                alert('There was an error');
            };

            var myLocation = document.getElementById('mapsLink');

            function showGoogleLink(position) {
                myLocation.innerHTML = "<a href=https://www.google.com/maps/@" + position.coords.latitude + ',' + position.coords.longitude + "> CLICK ME </a>"
            };