$(function(){
//submit Amount
   chrome.storage.sync.get(['total','limit'],function(budget){
       $('#total').text(budget.total);
       $('#limit').text(budget.limit);

   });
  $('#spendAmount').click(function(){
    chrome.storage.sync.get(['total','limit'],function(budget){
      var newTotal = 0;
      console.log(newTotal);
      if (budget.total){
        // check if data already exist
        newTotal += parseInt(budget.total);
      }

      var amount = $('#amount').val();
      if (amount){
        newTotal += parseInt(amount);
      }
      chrome.storage.sync.set({'total': newTotal}, function(){
                 if (amount && newTotal >= budget.limit){
                     var notifOptions = {
                         type: "basic",
                         iconUrl: "bm48.png",
                         title: "Limit reached!",
                         message: "Uh oh, look's like you've reached your alloted limit.",
                 };
                 chrome.notifications.create('limitNotif', notifOptions);

             }
             });
      $('#total').text(newTotal);
      $('#amount').val('');
    });
  });
});







// $(function(){
//
//     chrome.storage.sync.get(['total'],function(budget){
//         $('#total').text(budget.total);
//
//     });
//
//     $('#spendAmount').click(function(){
//         chrome.storage.sync.get(['total'],function(budget){
//             var newTotal = 0;
//             if (budget.total){
//                 newTotal += parseInt(budget.total);
//             }
//
//             var amount = $('#amount').val();
//             if (amount){
//                 newTotal += parseInt(amount);
//             }
//
//             chrome.storage.sync.set({'total': newTotal});
//             $('#total').text(newTotal);
//             $('#amount').val('');
//
//         });
//     });
// });
