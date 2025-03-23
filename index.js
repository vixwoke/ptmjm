let lastScrollTop = 0; 

// All content must be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // === VARIABLES ===
  // Navbar
  const navContainer = document.getElementById('navbarcontainer'); 
  const navLinks = document.getElementById('navbarlinks'); 
  const navlogo = document.getElementById('navbarlogo'); 
  // Main start consultation modal
  const mainStartConsultationButton = document.getElementById("mainStartConsultationButton");
  const startConsultationPopupYes = document.getElementById("startConsultationModalYesBtn");

  
  // === FUNCTIONS ===
  // Main start consultation modal
      // Open modal
  mainStartConsultationButton.addEventListener("click", function () {
      //open window
    document.querySelector('.start-consult-modal-containergrid').classList.add('open');
      //hide all whatsapp logo animation element
    document.querySelector('.start-consult-modal-whatsappicon-content.callout').style.opacity = 0;
    document.querySelector('.start-consult-modal-whatsappicon-content.bg').style.transform = "scale(0)";
      //whatsapp animation bg
    self.setTimeout(function () {
      document.querySelector('.start-consult-modal-whatsappicon-content.bg').style.animationName = "none";
      document.querySelector('.start-consult-modal-whatsappicon-content.bg').offsetHeight;
      document.querySelector('.start-consult-modal-whatsappicon-content.bg').style.animationName = "whatsapp-bg-circle";
      document.querySelector('.start-consult-modal-whatsappicon-content.bg').style.transform = "scale(1)";
    }, 200); 
      //whatsapp animation callout
    self.setTimeout(function () {
      document.querySelector('.start-consult-modal-whatsappicon-content.callout').style.animationName = "none";
      document.querySelector('.start-consult-modal-whatsappicon-content.callout').offsetHeight;
      document.querySelector('.start-consult-modal-whatsappicon-content.callout').style.animationName = "whatsapp-callout-rotate";
      document.querySelector('.start-consult-modal-whatsappicon-content.callout').style.opacity = 1;
    }, 200);
    // Yes button
    startConsultationPopupYes.addEventListener("click", function () {
      window.location.href = "https://api.whatsapp.com/send?phone=628117009393&text=Halo%20saya%20ingin%20konsultasi...";
    });
    // Close modal button
    document.addEventListener("click", function (event) {
      if (
        event.target.id === "startConsultationModalCloseBtn_xEdition" || 
        event.target.id === "startConsultationModalCloseBtn_batalEdition"
      ) {
        const modal = document.querySelector(".start-consult-modal-containergrid");
        modal.classList.add("close");
        setTimeout(function () {
          modal.classList.remove("open");
          modal.classList.remove("close");
        }, 300);
      }
    });;   
});

      // Navigation Bar Animation
    window.addEventListener('scroll', () => {

    const currentScrollTop = window.scrollY; 

    if (currentScrollTop > 15) {
      navContainer.classList.add('scrolled');
      navlogo.style.backgroundImage = "url('Images/LogoPTMJM/LOGO_PT_MJM_PANJANG.png')";
    if (currentScrollTop > lastScrollTop) {
      navContainer.style.top = "-7vw";
    } else {
      navContainer.style.top = "0vw"; 
    }
    } else {
      navlogo.style.backgroundImage = "url('Images/LogoPTMJM/LOGO_PT_MJM_PANJANG_putih.png')"; 
      navContainer.classList.remove('scrolled');
      navContainer.style.top = "0";
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  
  });
