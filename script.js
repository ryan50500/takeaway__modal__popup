

document.addEventListener("DOMContentLoaded", function(event) {
 
    const closeModalButtons = document.querySelectorAll(".close__modal");
    const modals = document.querySelectorAll(".flex__modal");
    const openModalImage = document.querySelectorAll(".open__modal");
    const optionButtons = document.querySelectorAll(".option__button");
    // update country name
    const countryName = document.querySelector('.mobile__jeans__title');
    // current currency
    const currentSymbol = document.querySelectorAll('.currency__symbol')[0];
    // convert to zloty icon
    const convertToZloty = document.querySelectorAll('.plz')[0];
     // convert to pounds icon
    const convertToPounds = document.querySelectorAll('.gbp')[0];
    const polishZloty = 5.52
    const britishPounds = 5.52;
    const basket = document.querySelector('.basket');
     // change country
     const countryOptions = document.querySelectorAll('.country-radio');

  
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
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.dark__overlay').style.display = 'none';
            for (i = 0; i < modals.length; i++) {
                modals[i].style.display = "none";
                modals[i].classList.remove('current__modal');
            }
        });
    }
 
  
    // Open Modal
    for (i = 0; i < openModalImage.length; i++) {
        openTheModal();
    }
 
    function openTheModal() {
        openModalImage[i].addEventListener('click', function() {
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.dark__overlay').style.display = 'block';
            for (i = 0; i < modals.length; i++) {
                if (this.dataset.modaltype === modals[i].dataset.modaltype) {
                    modals[i].style.display = "flex";
                    modals[i].scrollTop = 0;
                    modals[i].classList.add('current__modal');
                    modals[i].querySelector('.style__modal').style.backgroundColor = "black";
                    modals[i].querySelector('.style__modal__cross').style.backgroundColor = "black";
                }
            }
        });
    }
 
   
    
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
                       countryOptions[i].classList.add('wehaveit')
               } 
               else if (countryOptions[i].className.match(userInput)) {
                     countryOptions[i].style.display = "block";
                     countryOptions[i].classList.add('wehaveit')
               }
               else {
                     countryOptions[i].style.display = "none";
                     countryOptions[i].classList.remove('wehaveit')
               }
             }
            checkForNoMatches();
           }


        //    if radio button is clicked, convert the currencies
        // const checkboxes = document.querySelectorAll('.country-radio span.checkmark');
        // for (i = 0; i < checkboxes.length; i++) {
        //     checkboxes[i].addEventListener('click', function(e){
        //         console.log(this);
        //          // if current currency is pounds and user clicks on zloty
        //          if ((this.parentElement.classList.contains('zloty')) && (currentSymbol.innerHTML === '£' )) {
        //         // if ((checkboxes[i].parentElement.classList.contains('zloty')) && (currentSymbol.innerHTML === '£' )) {
        //             covertToZloty();
        //             // if current currency is zloty and user clicks on pounds
        //         } else if ((this.parentElement.classList.contains('pounds')) && (currentSymbol.innerHTML === 'zł' )) {
        //             zlotyToPounds();
        //         }
        //     });
        //  }

        function checkForNoMatches(){
            console.log('checking...');
                if (document.querySelectorAll('.country-radio.wehaveit').length > 0) {
                    document.querySelector('#sorry').style.display = 'none';
                    return;
                 }
            else {
                console.log('nothing');
                document.querySelector('#sorry').style.display = 'block';
            }
        }

           


        //  convert currency to polish zloty
            convertToZloty.addEventListener('click', function(e){
                covertToZloty();
             });
         //  convert currency to british pounds 
            convertToPounds.addEventListener('click', function(e){
                zlotyToPounds();
             });
    
  


   // Calculate orders
   const items = document.querySelectorAll('.modal__info .plus');

   for (let i = 0; i < items.length; i++) {
         items[i].addEventListener('click', function(){
            let priceOfItem = this.parentElement.querySelector('.item').innerHTML;
            let priceOfItemInteger = parseFloat(priceOfItem);
            newUpdated(priceOfItemInteger);
      
        function newUpdated(priceOfItemInteger){
            console.log('one');
            let currentTotal = document.querySelector('.current__modal span.total').innerHTML;
            let currentTotalToParse = parseFloat(currentTotal);
            console.log(currentTotalToParse);
            // 'priceOfItemInteger' is the item that was clicked on
            document.querySelector('.current__modal .total').innerHTML = (currentTotalToParse + priceOfItemInteger).toFixed(2);
            console.log('four');
        }
    });
   }


    // close modal if dark overlay is clicked
    document.querySelector('.dark__overlay').addEventListener('click', function(){
        const modals = document.querySelectorAll(".flex__modal");
        for (i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
        }
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.dark__overlay').style.display = 'none';
    });



// change currency - polish zloty
   function covertToZloty(){
        console.log('zloty clicked');

        basket.querySelector('#cart__currency').innerHTML = "zł";

        // if zloty is not already selected, proceed
        if (!document.querySelector('.plz').classList.contains('zloty__selected')) {
            console.log('converted to polish zloty');
                // update the items to Zloty
            const items = document.querySelectorAll('.modal__info div .item');
            const totals = document.querySelectorAll('.total');
            const currencySymbol = document.querySelectorAll('.currency__symbol');
            const itemCurrency = document.querySelectorAll('.item__currency');
            for (let i = 0; i < items.length; i++) {
                items[i].innerHTML = (items[i].innerHTML*polishZloty).toFixed(2);
            }
            for (let i = 0; i < totals.length; i++) {
                totals[i].innerHTML = (totals[i].innerHTML*polishZloty).toFixed(2);
            }
            for (i = 0; i < currencySymbol.length; i++) {
                currencySymbol[i].innerHTML = 'zł';
            }
            for (i = 0; i < itemCurrency.length; i++) {
                itemCurrency[i].innerHTML = 'zł';
            }
              document.querySelector('.plz').classList.add('zloty__selected');
              document.querySelector('.gbp').classList.remove('pounds__selected');
            // convert basket total to zloty
            basket.querySelector('#cart__sum').innerHTML = (basket.querySelector('#cart__sum').innerHTML*polishZloty).toFixed(2);
        }
    };


    // change currency - british pounds
   function zlotyToPounds(){
        console.log('zloty to pounds');

        document.getElementById('cart__currency').innerHTML = "£";

         // if pounds is not already selected, proceed
        if (!document.querySelector('.gbp').classList.contains('pounds__selected')) {
         console.log('converted to pounds');
        // update the items to Pounds
        const items = document.querySelectorAll('.modal__info div .item');
        const totals = document.querySelectorAll('.total');
        const currencySymbol = document.querySelectorAll('.currency__symbol');
        const itemCurrency = document.querySelectorAll('.item__currency');
        for (let i = 0; i < items.length; i++) {
            items[i].innerHTML = (items[i].innerHTML/britishPounds).toFixed(2);
        }
        for (let i = 0; i < totals.length; i++) {
            totals[i].innerHTML = (totals[i].innerHTML/britishPounds).toFixed(2);
        }
        for (i = 0; i < currencySymbol.length; i++) {
            currencySymbol[i].innerHTML = '£';
        }
        for (i = 0; i < itemCurrency.length; i++) {
                itemCurrency[i].innerHTML = '£';
        }
            document.querySelector('.plz').classList.remove('zloty__selected');
            document.querySelector('.gbp').classList.add('pounds__selected');
            // convert basket total to pounds
            basket.querySelector('#cart__sum').innerHTML = (basket.querySelector('#cart__sum').innerHTML/britishPounds).toFixed(2);
        } 
   }

  

// add item to order
for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function(){
        this.parentElement.classList.add('added__item');
        this.parentElement.querySelector('.minus').style.visibility = 'visible';
        this.parentElement.querySelector('.quantity').innerHTML++;
        this.parentElement.querySelector('.quantity').style.visibility = 'visible';
        });
      };



    //   remove added item
    const minusButtons = document.querySelectorAll('.minus');

      for (let i = 0; i < minusButtons.length; i++) {
        minusButtons[i].addEventListener('click', function(e){
            e.stopPropagation();
            console.log('minus clicked')
            console.log(this.nextElementSibling);
            this.parentElement.querySelector('.quantity').innerHTML--;

            // update total
            let priceOfItem = this.parentElement.querySelector('.item').innerHTML;
            let priceOfItemInteger = parseFloat(priceOfItem);
            newUpdated(priceOfItemInteger);
    
            function newUpdated(priceOfItemInteger){
                let currentTotal = document.querySelector('.current__modal span.total').innerHTML;
                let currentTotalToParse = parseFloat(currentTotal);
                // 'priceOfItemInteger' is the item that was clicked on
                     console.log(currentTotalToParse);
                    // 'priceOfItemInteger' is the item that was clicked on
                    document.querySelector('.current__modal .total').innerHTML = (currentTotalToParse - priceOfItemInteger).toFixed(2);
                    console.log('four');
            }
            // function newUpdated(priceOfItemInteger){
            //     console.log('one');
            //     let currentTotal = document.querySelector('.current__modal span.total').innerHTML;
            //     let currentTotalToParse = parseFloat(currentTotal);
            //     console.log(currentTotalToParse);
            //     // 'priceOfItemInteger' is the item that was clicked on
            //     document.querySelector('.current__modal .total').innerHTML = (currentTotalToParse + priceOfItemInteger).toFixed(2);
            //     console.log('four');
            // }
            // if quanity of item is 0, hide the minus and quanitiy 
            if ( this.parentElement.querySelector('.quantity').innerHTML == 0) {
                this.parentElement.querySelector('.minus').style.visibility = 'hidden';
                this.parentElement.querySelector('.quantity').style.visibility = 'hidden';
                this.parentElement.classList.remove('added__item');
            }
          });
        };



    //  Add orders to cart
    const addToOrder = document.querySelectorAll('.add__to__order');


        function addToCart(){
             //    get item quantities of the open modal 
            const currentModal = document.querySelector('.current__modal');
            const quantity = currentModal.querySelectorAll('.quantity');
            const dish = currentModal.querySelectorAll('.dish__type');
            const total = currentModal.querySelector('.total');
            console.log('log one');

              // show orders basket
              basket.classList.add('slide__basket');

              let addedTotalsForDishes = 0

              const allTotals = document.querySelectorAll('.total')
              for (let i=0; i < allTotals.length; i++) {
                addedTotalsForDishes += parseInt(allTotals[i].innerHTML);
                console.log(addedTotalsForDishes);
                basket.querySelector('#cart__sum').innerHTML = addedTotalsForDishes;
              }

        }

            // when the 'add to order' button is cliked...
            for (i = 0; i < addToOrder.length; i++) {
                addToOrder[i].addEventListener('click', function() {
                    addToCart();
                });
            }
   
});
