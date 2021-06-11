if (Modernizr.touch) {
  $(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
}

$('.carousel').on('slid.bs.carousel', function () {

    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
    currentIndex+=1;
    if(currentIndex < 10) currentIndex = "0"+""+currentIndex;
    var image = "./exports/Designs-"+currentIndex+".jpg";
    console.log(image);
});
