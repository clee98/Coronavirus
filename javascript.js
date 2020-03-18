$.ajax({
    url: 'https://thevirustracker.com/free-api?global=stats',
    dataType: 'json',
    success: function(data) {
    //   console.log(data);

      var x = data
      var info = x.results[0]
      console.log(x)
      console.log(info)

      const okeys = Object.keys(info)

      for(const key of okeys){
          console.log(key)
          console.log(info[key])
          if(key != "source"){
            $(".totals").append(`<li>${key} : ${info[key]}</li>`)
          }
      }

   


    }
  });