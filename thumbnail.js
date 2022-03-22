document.addEventListener("DOMContentLoaded", function (event) {
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function () {
        alert("点击了图片");
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        } else {
            targetImage.classList.add("small");
        }
    });
});
