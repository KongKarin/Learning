async function kitchen (){ //it's recommended to use a try/catch block to catch any errors that might occur during the asynchronous operations
    try {
    
      await time (10000);
      console.log(`${stocks.coffee[0]}`)  
      
      await time (0000);
      console.log("started making coffee");
      
      await time (2000);
      console.log('coffee bean in process');

      await time (2000);
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);

      await time (1000);
      console.log('coffee mixed');

      await time (2000);
      console.log(`${stocks.cup[0]}`);

      await time (2000);
      console.log(`${stocks.topping[0]} was selected`);

      await time (2000);
      console.log('coffee was served');

    }

    catch(error){
        console.log("customer left");
    }
    finally{
        console.log("day ended, shop is closed");
    }
}

kitchen();

console.log('Queue outsite');
console.log('staff cleaning the table');