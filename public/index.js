
let range = document.getElementById("customRange2")
let toggle = document.getElementById("toggle")
let views = document.getElementById("viewsNumber")
let price = document.getElementById("price")
let price2 = document.getElementById("price2")
let pageViews = ["10K","50K","100K","500K", "1M"]
let perMonth = [8, 12, 16, 24, 36]
let yearly = false

range.addEventListener("input", function () {
    updateResults()
    views.innerHTML = pageViews[range.value]
})

toggle.addEventListener("change", function(){
    yearly = !yearly
    updateResults()
})

function updateResults() {
    price.innerHTML = yearly ? perMonth[range.value] * 0.75 : perMonth[range.value]
    price2.innerHTML = yearly ? perMonth[range.value] * 0.75 : perMonth[range.value]
}

let submitBtn = document.getElementById("submit")

submit.addEventListener("click", function(){
    alert("Here we go!")
    window.location.reload();
})


range.addEventListener("mousemove", function (){
    // console.log(range.value)
    var x = range.value * 25
    var color = 'linear-gradient(90deg, rgb(165, 243, 235)' + x + '%, rgb(214,214,214)' + x + '%)'
    range.style.background = color
})