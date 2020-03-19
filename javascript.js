$.ajax({
    url: 'https://thevirustracker.com/timeline/map-data.json',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });