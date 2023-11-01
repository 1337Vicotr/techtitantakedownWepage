document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("animated-image");
    const newImage = document.getElementById("new-image");
    const container = document.querySelector(".container");

    setTimeout(function() {
        image.style.top = "5vh";
    }, 1000);

    setTimeout(function() {
        image.style.top = "-10%";
        image.style.transform = "translateX(-50%) scale(0.8)";

        setTimeout(function() {
            newImage.style.opacity = "1";

            setTimeout(function() {
                container.style.transition = "opacity 2s ease";
                container.style.opacity = "0";

                setTimeout(function() {
                    window.location.href = "home.html";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 3500);
});
