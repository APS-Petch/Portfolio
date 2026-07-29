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



// ==========================================
// HAMBURGER MENU
// ==========================================

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");


// ตรวจสอบว่ามี element อยู่จริงก่อนทำงาน

if(hamburger && navLinks){


    hamburger.addEventListener("click",()=>{


        hamburger.classList.toggle("active");


        navLinks.classList.toggle("active");


    });



    // ปิดเมนูเมื่อกดลิงก์

    document.querySelectorAll(".nav-links a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            hamburger.classList.remove("active");


            navLinks.classList.remove("active");


        });


    });

}

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");


if(navbar){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}

// ===============================
// DARK / LIGHT SWITCH
// ===============================

const themeToggle = document.getElementById("themeToggle");


if(themeToggle){


    themeToggle.addEventListener("change",()=>{


        if(themeToggle.checked){


            document.body.classList.add("light");

            localStorage.setItem("theme","light");


        }
        else{


            document.body.classList.remove("light");

            localStorage.setItem("theme","dark");


        }


    });



    // โหลดค่าเดิม

    if(localStorage.getItem("theme") === "light"){


        document.body.classList.add("light");

        themeToggle.checked=true;


    }


}