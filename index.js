const btnEl = document.querySelectorAll(".btn");

btnEl.addEventListener("mouseover", (event) => {
    console.log(event.pageX - btnEl.offsetLeftp);
})