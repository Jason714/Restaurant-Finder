$(document).ready(function() {
  var apiKEY = "3c1dabb7e8msh3a8cf7c4e6c37afp1d07e5jsn032c5f9b3ffe";

  $(".modal").modal();

  $(".carousel").carousel();
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 15000);
  }

  var map = L.map("map").setView([51.505, -0.09], 13);
  var marker = L.marker([51.5, -0.09]).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    attribution:
      '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);



  $(".search").on("click", function() {
    var searchLocation = $(".location")
      .val()
      .split(" ")
      .join("%20");
    $(".favs").addClass("hide");
    $(".about").addClass("hide");
    $(".areas-best").removeClass("hide");
    // $.ajax({
    //   async: true,
    //   crossDomain: true,
    //   url:
    //     "https://tripadvisor1.p.rapidapi.com/locations/search?query=" +
    //     searchLocation +
    //     "&lang=en_US&units=mi",
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //     "x-rapidapi-key": apiKEY
    //   }
    // }).done(function(location) {
    //   $.ajax({
    //     async: true,
    //     crossDomain: true,
    //     url:
    //       "https://tripadvisor1.p.rapidapi.com/restaurants/list?lunit=mi&restaurant_tagcategory=10591&limit=10&prices_restaurants=10954&restaurant_mealtype=&min_rating=4&combined_food=all&currency=USD&lang=en_US&restaurant_dining_options=10602%252C16547%252C10702&restaurant_styles=10605%252C10607%252C10674&location_id=" +
    //       location.data[0].result_object.location_id,
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //       "x-rapidapi-key": apiKEY
    //     }
    //   }).done(function(details) {
    //     details.data.splice(6, 1);
    //     $.each(details.data, function(i, detail) {
    //       $(".search-results").append(`
    //   <div class="col s3">
    //   <div class="card">
    //   <div class="card-image"><img class="thumb" src="${detail.photo.images.small.url}"/>
    //   <span class="card-title">${detail.name}</span>
    //   </div>
    //   <div class="card-content">
    //   <p>Cuisine: ${detail.cuisine[0].name}</p>
    //   <p>${detail.location_string}</p>
    //   <p>Rating: ${detail.rating}</p>
    //   <p>Price range: ${detail.price}</p>   
    //   </div>
    //   <div class="card-action">
    //   <a href="${detail.website}">Visit our website</a>
    //   <a href="${detail.web_url}#REVIEWS">Read our reviews</a>
    //   </div>
    //   </div>
    //   </div>
    //   `);
    //     });
    //   });
    // });
  });
});
