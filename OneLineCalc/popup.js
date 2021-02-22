$(function(){
//submit Amount


   chrome.storage.sync.get(['total'],function(budget){
       $('#total').text(budget.total);

   });
  $('#spendAmount').click(function(){
    chrome.storage.sync.get(['total'],function(budget){
      var newTotal = 0; var calc=0;
      console.log(newTotal);
      if (budget.total){
      var operator = ($('#operator').val());
            switch(operator) {
        case '+':
        newTotal += (budget.total);
          // code block
          break;
        case '-':
        newTotal -= (budget.total);
          // code block
          break;
          case '*':
       newTotal *= (budget.total);
         // code block
         break;
         case '/':
         newTotal /= (budget.total);
           // code block
           break;
        default:
        console.error();
          // code block
      }

      }
      var amount = ($('#amount').val());
      var amountC = ($('#amountC').val());

      if (amount){

        var operator = ($('#operator').val());
              switch(operator) {
          case '+':
          newTotal += ( parseInt(amount) + parseInt(amountC));
            // code block
            break;
          case '-':
          newTotal += ( parseInt(amount) - parseInt(amountC));
          case '*':
          newTotal += ( parseInt(amount) * parseInt(amountC));
          case '/':
          newTotal += ( parseInt(amount) / parseInt(amountC));
            // code block
            break;
          default:
          console.error();
            // code block
        }
        newTotal = Math.abs(newTotal);
      }
      $('#total').text(newTotal);
      $('#amount').val('');
      $('#amountC').val('');
      $('#operator').val('');

    });
  });
});
