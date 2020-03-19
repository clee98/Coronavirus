$.ajax({
<<<<<<< HEAD
    url: 'https://thevirustracker.com/timeline/map-data.json',
    dataType: 'json',
    success: function(data) {
      console.log(data);
=======
    url: 'https://thevirustracker.com/free-api?global=stats',
    dataType: 'json',
    success: function(data) {
      console.log(data);

      var x = data
      var info = x.results[0]
    //   console.log(x)
    //   console.log(info)

      const okeys = Object.keys(info)

      for(const key of okeys){
        //   console.log(key)
        //   console.log(info[key])
          if(key != "source"){
            $(".totals").append(`<li>${key} : ${info[key]}</li>`)
          }
      }

   


>>>>>>> 67bb8443ff809071e9a17748dbc002c4e45724b4
    }
  });

  

$.ajax({
  url: 'https://thevirustracker.com/free-api?countryTimeline=US',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});


$.ajax({
  url: 'https://thevirustracker.com/free-api?countryTotal=KR',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});