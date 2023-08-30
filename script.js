// write code below
document.querySelector(".btn").addEventListener("click",function(){
   let city= document.querySelector("#search").value
   let APIKEY='d2cbc173c6b10936c619e65241e56560'
   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
   .then((res)=>{
    return res.json()
   })
   .then((data)=>{
    console.log(data)
    document.querySelector("#location").innerText=data.name
    document.querySelector(".desc").innerText=data.weather[0].description
    document.querySelector(".c").innerText=data.main.temp
   })
})
