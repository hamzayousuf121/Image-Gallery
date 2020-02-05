function fetchGallery() {
      document.getElementById('btn-hide').style.display = "none";
      var loader = document.getElementById("preload");
      loader.style.display = "inline-block";
      setTimeout(() => {
            loader.style.display = "none";
      }, 2000);
      setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
                  .then(function (photo) {
                        console.log(photo, "photo")
                        return photo.json()
                  }).then(function (users) {
                        console.log(users, "users")
                        gallery(users)
                  }).catch(err => console.log(err, "error"))

            function gallery(users) {
                  var galleryy = "";
                  for (var i = 0; i < 160; i++) {
                        galleryy +=
                              ` <a data-fancybox="gallery" href="${users[i].url}">
             <img id="moving" title = "${users[i].title}"
               src = "${users[i].thumbnailUrl}" ></a >`
                  }
                  document.getElementById('gallery').innerHTML = galleryy;
            }
      }, 2000);
}