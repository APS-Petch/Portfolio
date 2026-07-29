function openCertificate(imageSrc) {

    const modal = document.getElementById("certificateModal");
    const image = document.getElementById("certificateImage");

    image.src = imageSrc;
    modal.style.display = "flex";
}

function closeCertificate() {

    document.getElementById("certificateModal").style.display = "none";
}

document.getElementById("certificateModal").addEventListener("click", function (e) {

    if (e.target === this) {
        closeCertificate();
    }

});