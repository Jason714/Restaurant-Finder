$(document).ready(function() {
  // Variable to be called in AJAX calls that holds the API key
  var apiKEY = "3c1dabb7e8msh3a8cf7c4e6c37afp1d07e5jsn032c5f9b3ffe";
  // Function to open the modal when the search button is clicked
  $(".modal").modal();
  // Function to load the carousel element
  $(".carousel").carousel();
  autoplay();
  // Function to autoplay carousel when the page loads
  function autoplay() {
    $(".carousel").carousel("next");
    // Set the time between the cards changing to 10.5 seconds
    setTimeout(autoplay, 15000);
  }
  // Variable to be called to add/change map elements that points to the map div
  var map = L.map("map");
  // Function to load map tiles
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    attribution:
      '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  // Click event for search that's inside the modal
  $(".search").on("click", function() {
    // Variable that gets the value of the input, the api required %20 to represent a space in a string so string values are split on spaces and concatinated with %20
    var searchLocation = $(".location")
      .val()
      .split(" ")
      .join("%20");
    // Adding hide class to favs div
    $(".favs").addClass("hide");
    // Adding hide class to about div
    $(".about").addClass("hide");
    // Removing the hide class from areas-best
    $(".areas-best").removeClass("hide");
    // Making the first AJAX call to retrieve the location id of the area being searched
    $.ajax({
      async: true,
      crossDomain: true,
      url:
        "https://tripadvisor1.p.rapidapi.com/locations/search?query=" +
        searchLocation +
        "&lang=en_US&units=mi",
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": apiKEY
      }
    }).done(function(location) {
      // Setting the map center to the LatLon returned from the location search
      map.setView(
        [
          parseFloat(location.data[0].result_object.latitude),
          parseFloat(location.data[0].result_object.longitude)
        ],
        10
      );
      // Making the second AJAX call to get the 10 highest rated restaurants from the searched location
      $.ajax({
        async: true,
        crossDomain: true,
        url:
          "https://tripadvisor1.p.rapidapi.com/restaurants/list?lunit=mi&restaurant_tagcategory=10591&limit=10&prices_restaurants=10954&restaurant_mealtype=&min_rating=4&combined_food=all&currency=USD&lang=en_US&restaurant_dining_options=10602%252C16547%252C10702&restaurant_styles=10605%252C10607%252C10674&location_id=" +
          location.data[0].result_object.location_id,
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": apiKEY
        }
      }).done(function(details) {
        // Removing index[6] because it is an AD
        details.data.splice(6, 1);
        // For loop that takes in the returned data from the API call and uses it to populate HTML elements
        $.each(details.data, function(i, detail) {
          // Adding markers to the map using the LatLon of each location returned in the API call
          L.marker([
            parseFloat(detail.latitude),
            parseFloat(detail.longitude)
          ]).addTo(map);
          // Creating and appending cards to the search-results div
          $(".search-results").append(`
      <div class="col ">
      <div class="card">
      <div class="card-image"><img class="thumb" src="${detail.photo.images.small.url}"/>
      <span class="card-title">${detail.name}</span>
      </div>
      <div class="card-content">
      <p>Cuisine: ${detail.cuisine[0].name}</p>
      <p>${detail.location_string}</p>
      <p>Rating: ${detail.rating}</p>
      <p>Price range: ${detail.price}</p>   
      </div>
      <div class="card-action">
      <a href="${detail.website}">Website</a>
      <a href="${detail.web_url}#REVIEWS">Our Reviews</a>
      </div>
      </div>
      </div>
      `);
        });
      });
    });
  });
});
