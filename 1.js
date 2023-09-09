let btn = document.getElementById('btn')
let input = document.getElementById('location')
let temper = document.getElementById('temp')
let des = document.getElementById('description')
let loc = document.getElementById('value')

// apikey

let apikey = `5b63f97bfaf1a6564e5dfefe1d950214`


btn.onclick = function(){
    if(input.value == ''){
        alert('please give me a location')
    }else{
        var inp = input.value
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${apikey}`

        fetch(url).then(res => res.json()).then(data => {

            const {temp} = data.main
            const{name} = data
            const {description} = data.weather[0]

            temper.innerHTML = Math.round(temp-273)
            des.innerHTML = description
            loc.innerHTML = name
            console.log(data)
        })
    }
}