$(document).ready(function() {
  $(".carousel").carousel();
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }

  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/categories",
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "Authentication",
        "user-key: 3d5f36123bd5e07666221198a2e30efa"
      );
    },
    success: function(data) {
      alert(data);
      //process the JSON data etc
    }
  });
});
