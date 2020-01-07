$(document).ready(function() {
  var apiKEY = "3c1dabb7e8msh3a8cf7c4e6c37afp1d07e5jsn032c5f9b3ffe";

  $(".carousel").carousel();
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 15000);
  }

  // $.ajax({
  //   async: true,
  //   crossDomain: true,
  //   url:
  //     "https://tripadvisor1.p.rapidapi.com/locations/search?query=Los%20Angeles&lang=en_US&units=mi",
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
  //       "https://tripadvisor1.p.rapidapi.com/restaurants/list?lunit=mi&restaurant_tagcategory=10591&limit=10&prices_restaurants=10954&restaurant_mealtype=&min_rating=4&combined_food=" +
  //       cuisineType +
  //       "&currency=USD&lang=en_US&restaurant_dining_options=10602%252C16547%252C10702&restaurant_styles=10605%252C10607%252C10674&location_id=" +
  //       location.data[0].result_type.result_object.location_id,
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
  //       "x-rapidapi-key": apiKEY
  //     }
  //   });
  // });
});
