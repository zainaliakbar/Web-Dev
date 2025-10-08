let button = document.getElementById("btn");

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("click", function() {
    document.querySelector(".box").innerHTML = "<b>Zain codes</b>";
});

