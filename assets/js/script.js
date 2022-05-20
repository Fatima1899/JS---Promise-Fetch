$(document).ready(function(){
   //alert("babe");
   const select = document.querySelector("#select");
   const input = document.querySelector("#input");
   const result=document.querySelector(".result");
   $( "#input" ).keyup(function() {
       
});
$("#btn").click(function(){
    axios.get("https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q="+`${input.value}`)
     .then(function(response){        
        //console.log(response.data.current)
        result.innerHTML = 
        `<h5>City:${response.data.location.name}</h5>
        <h5>Country:${response.data.location.country}</h5>
        <h5>Weather Forecast:${select.value == "Fahrenheit" ?  response.data.current.temp_f :response.data.current.temp_c}</h5>
        <h5>Sky Condition:  <img src="${response.data.current.condition.icon}" alt=""> ${response.data.current.condition.text} </h5>
        `

      })
      .catch(function () {
         $("#error").innerText="Not Founded!"
    });
});
});