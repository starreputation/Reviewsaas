let selectedStar=0

const PLACE_ID="PASTE_GOOGLE_PLACE_ID"
const API_URL="PASTE_GOOGLE_SCRIPT_URL"

function rate(star){
selectedStar=star

document.querySelectorAll(".stars span").forEach((s,i)=>{
s.classList.toggle("active",i<star)
})

if(star>=4){
document.getElementById("feedbackForm").style.display="none"
document.getElementById("reviewBox").style.display="block"
}else{
document.getElementById("feedbackForm").style.display="block"
document.getElementById("reviewBox").style.display="none"
}
}

function submitFeedback(e){
e.preventDefault()

fetch(API_URL,{
method:"POST",
body:JSON.stringify({
rating:selectedStar,
mobile:mobile.value,
email:email.value,
feedback:feedback.value
})
})
.then(()=>alert("Feedback saved"))
}

function leaveReview(){
window.location.href="https://search.google.com/local/writereview?placeid="+PLACE_ID
}