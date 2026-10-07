// ================================
// NAVBAR
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



// ================================
// VIDEO
// ================================

const videos =
    document.querySelectorAll(".video-card video");


videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(otherVideo => {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});



// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", function (e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



// ================================
// PHOTO PREVIEW
// ================================

const photos =
    document.querySelectorAll(
        ".photo-card img"
    );

const imagePreview =
    document.getElementById(
        "imagePreview"
    );

const previewImage =
    document.getElementById(
        "previewImage"
    );

const closePreview =
    document.getElementById(
        "closePreview"
    );


photos.forEach(photo => {

    photo.addEventListener("click", () => {

        previewImage.src = photo.src;

        imagePreview.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    });

});


function closeImagePreview() {

    imagePreview.classList.remove(
        "active"
    );

    document.body.style.overflow = "";

}


closePreview.addEventListener(
    "click",
    closeImagePreview
);


imagePreview.addEventListener(
    "click",
    (event) => {

        if (event.target === imagePreview) {
            closeImagePreview();
        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeImagePreview();
        }

    }
);