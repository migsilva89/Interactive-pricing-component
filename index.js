
let range = document.getElementById("customRange2")
let toggle = document.getElementById("toggle")
let views = document.getElementById("viewsNumber")
let price = document.getElementById("price")
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
}

let submitBtn = document.getElementById("submit")

submit.addEventListener("click", function(){
    alert("Here we go!")
    window.location.reload();
})

