// Inizializzo le variabili che mi servono
var nameBurger = document.getElementById('name_burger');
var coupon = document.getElementById('coupons');
var calculate = document.getElementById('calculate');
var total = document.getElementById('totale');
var ingredient = document.getElementsByClassName('add-ingredient');
var listCoupon = ['sconto20', 'vipclass20'];

// aggiungo la funzione/evento del click

calculate.addEventListener('click',

  function(){

    // controllo se nel nome è stato inserito qualcosa
    if(nameBurger.value != "" ){

    // variabile per avere un prezzo di base (anche se caro sto panino)
      var sum = 50;

      // ora cicliamo gli ingredienti...
      for( var i = 0; i < ingredient.length; i ++ ){

        if( ingredient[i].checked == true ){

          sum = sum + parseInt(ingredient[i].value);
        }
      }

      if( listCoupon.includes(coupon.value) ){

        sum = sum - (sum * 0.2);
      }

      // stampo il risultato del prezzo...
      total.innerHTML = sum + ' Dracme';

    } else {
      alert('Sbrigati a dare un nome al panino e non farmi perdere tempo!');
    }
  }
);
