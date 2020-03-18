$.ajax({
    url: 'https://thevirustracker.com/free-api?countryTimeline= ',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });