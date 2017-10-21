$(document).ready(function() {
  console.log("ohai there");

  var carousel = $("#my-carousel");

  //works with removed version? version=v2.2&amp;
  var url =
    "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&amp;version=v2.2&amp;rights_given=0&amp;include_tagged_galleries=1";

  var testUrl = "./data_sample.json";

  console.log("getting content...");

  $.getJSON(url, function(jsonData) {
    //check sample size
    console.log("json loaded");
    console.log("Sample Size: ", jsonData.data._embedded.length);

    //project in simpler object
    var images = jsonData.data._embedded.map(function(item) {
      return {
        id: item.id,
        caption: item.caption,
        url: item.images.normal //thumbnail or normal
      };
    });

    //debug dump loop
    images.forEach(function(element) {
      console.log(element.id + " :" + element.caption);
    }, this);

    //produce html
    carousel.empty();

    if (images.length) {
      var content = images.reduce(function(sum, value) {
        return sum + "<div><img src=" + value.url + " /><p/>"+value.caption+"</div>";
      }, "");
      //var list = $('<ul />').html(content);
      carousel.append(content);

      console.log("carousel loaded");
    }

    console.log("now only: applying slick!");

    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3
    });

    $(".boss").slick({
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 5
    });

  });
});
