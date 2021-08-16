$(document).ready(function() {
  $("#deck").submit(function(event) {
  event.preventDefault();

  const suits = ["clubs", "diamonds", "spades", "hearts"];
  const numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  let pack = [];
  // let newPack = pack.toString().split(',');
  

  numbers.forEach(function(number) {
    suits.forEach(function(suit) {
      pack.push(number + " of " + suit);
      $("#output").append("<li>" + pack.toString().split(',').pop() + "</li>");
    })
    
    
    });
   
    console.log(pack)


    
      
    
    
  })
})
