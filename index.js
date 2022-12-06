const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

  function countDown() {
  var countDown = 9;
    while (countDown >= 0)   {
        console.log(countDown);
        countDown = countDown - 1;
    }
    console.log(); }
