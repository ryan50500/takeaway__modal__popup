document.addEventListener("DOMContentLoaded", function(event) {
 
    const closeModalButtons = document.querySelectorAll(".close__modal");
    const modals = document.querySelectorAll(".flex__modal");
    const openModalImage = document.querySelectorAll(".open__modal");
    const optionButtons = document.querySelectorAll(".option__button");
    // update country name
    const countryName = document.querySelector('.mobile__jeans__title');

  
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
                    modals[i].querySelector('.style__modal').style.backgroundColor = "black";
                    modals[i].querySelector('.style__modal__cross').style.backgroundColor = "black";
                }
            }
        });
    }
 

    // Change country sidebar
     // change country
     const countryOptions = document.querySelectorAll('.country-radio');
   
    
     // open change country slider
     document.getElementById('change_country').addEventListener('click', function(){
           document.querySelector('.cross .style__modal').classList.toggle('black__cross');
           document.querySelector('.cross .style__modal__cross').classList.toggle('black__cross');
           document.querySelector('.delivery-country-selector__overlay').classList.toggle('slide');
     });
  
   
      // close change country slider
      document.querySelector('.cross').addEventListener('click', function(){
           document.querySelector('.cross .style__modal').classList.toggle('black__cross');
           document.querySelector('.cross .style__modal__cross').classList.toggle('black__cross');
           document.querySelector('.delivery-country-selector__overlay').classList.toggle('slide');
   });

   
     
     // SEARCH FILTER
           const search = document.getElementById("country-search");
      
           search.addEventListener("keyup", filterProducts);
  
           function filterProducts(e) {
               searchresult = search.value;
               console.log(searchresult);
             const userInput = searchresult.toLowerCase();
             // console.log(productName[0]);
             // this loop works with IE
             for (i = 0; i < countryOptions.length; i++) {
                  const countryDataSet = countryOptions[i].dataset.country
               if (countryDataSet.toLowerCase().indexOf(userInput) != -1) {
                       countryOptions[i].style.display = "block";
               } else {
                       countryOptions[i].style.display = "none"
               }
             }
           }

        //    update country name to the whichever country the user selects in side menu
        for (i = 0; i < countryOptions.length; i++) {
           countryOptions[i].addEventListener('click', function(){
                countryName.innerHTML = this.dataset.country;
         });
        }
  });


   // Calculate orders
   const items = document.querySelectorAll('.modal__info div');

   for (let i = 0; i < items.length; i++) {

         items[i].addEventListener('click', function(){

            let priceOfItem = this.querySelector('span').innerHTML;
            let priceOfItemInteger = parseFloat(priceOfItem);
  
            newUpdated(priceOfItemInteger);
        });

        function newUpdated(priceOfItemInteger){
            const currentTotal =  document.querySelector('.total').innerHTML;
            const currentTotalParsed  = parseFloat(currentTotal);
            // 'priceOfItemInteger' is the item that was clicked on
            document.querySelector('.total').innerHTML = (currentTotalParsed + priceOfItemInteger).toFixed(2);
        }

   }


