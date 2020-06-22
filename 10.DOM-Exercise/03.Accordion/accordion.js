function toggle() {

    let div = document.querySelector("#extra");
    const spanText=document.getElementsByClassName("button")[0];
    if (div.style.display === "block") {
        spanText.textContent="More";
        div.style.display="none"
    } else {
        spanText.textContent="Less";
        div.style.display = "block";
    }
}