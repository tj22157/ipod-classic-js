function Chill2() {
    
    // Send data to the backend via POST
    fetch('https://maker.ifttt.com/trigger/TouchBar_Chill/with/key/gwZrwr5gXovvGRMelBjTg', {  // Enter your IP address here

      method: 'GET', 
      mode: 'cors', 

    })
    
  }

  export { Chill2 };