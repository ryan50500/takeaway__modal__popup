document.addEventListener("DOMContentLoaded", function(event) {
 
    const closeModalButtons = document.querySelectorAll(".close__modal");
    const modals = document.querySelectorAll(".flex__modal");
    const openModalImage = document.querySelectorAll(".open__modal");
    const optionButtons = document.querySelectorAll(".option__button");
 
  
    // Modal change options on mobile
    for (i = 0; i < optionButtons.length; i++) {
        selectedModal();
    }
 
    function selectedModal() {
        optionButtons[i].addEventListener('click', function() {
            for (i = 0; i < modals.length; i++) {
                if (this.dataset.modaltype === modals[i].dataset.modaltype) {
                    // show the correct modal
                    modals[i].style.display = "block";
                    modals[i].scrollTop = 0;
                } else {
                    modals[i].style.display = "none";
                }
            }
        });
    }
 
    // Close Modal - any button clicked will close all modals on page
    for (i = 0; i < closeModalButtons.length; i++) {
        closeModals();
    }
 
    function closeModals() {
        closeModalButtons[i].addEventListener('click', function() {
            for (i = 0; i < modals.length; i++) {
                modals[i].style.display = "none";
            }
        });
    }
 
  
    // Open Modal
    for (i = 0; i < openModalImage.length; i++) {
        openTheModal();
    }
 

    function openTheModal() {
        openModalImage[i].addEventListener('click', function() {
            for (i = 0; i < modals.length; i++) {
                if (this.dataset.modaltype === modals[i].dataset.modaltype) {
                    modals[i].style.display = "flex";
                    modals[i].scrollTop = 0;
                }
            }
        });
    }
 

 
  });