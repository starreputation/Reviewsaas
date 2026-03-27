const SHEET_API="PASTE_SHEET_JSON_URL"

fetch(SHEET_API)
.then(res=>res.json())
.then(data=>{

document.getElementById("total").innerText=data.length

let low=data.filter(x=>x.rating<=3).length
let high=data.filter(x=>x.rating>=4).length

document.getElementById("low").innerText=low
document.getElementById("high").innerText=high

})