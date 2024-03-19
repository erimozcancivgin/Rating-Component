const rateContainer = document.querySelector(".rate-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const submitButton = document.querySelector(".btn-submit")
const rateButtons = document.querySelectorAll(".btn")
const rating = document.querySelector(".rate-value")

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    rateContainer.style.display = "none"
})
rateButtons.forEach(rate => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});