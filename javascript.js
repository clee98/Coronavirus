$.ajax({
    url: 'https://thevirustracker.com/free-api?global=stats',
    dataType: 'json',
    success: function(data) {
      console.log(data);

      var x = data
      var info = x.results[0]
    //   console.log(x)
    //   console.log(info)

      const okeys = Object.keys(info)
      const oentries = Object.entries(info)

      for(const key of okeys){
        //   console.log(key)
        //   console.log(info[key])
          if(key != "source"){
            $(".totals").append(`<li>${key} : ${info[key]}</li>`)
          }
      }
      for(const key of okeys){
        if(key!="source"){
          $("#firstTr").append(`<th scope="col">${key}</th>`)
        }
      }

      for(const [key,value] of oentries){
        if(key!="source"){
          $("#secondTr").append(`<td> ${[value]} </td>`)
        }
      }
   


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