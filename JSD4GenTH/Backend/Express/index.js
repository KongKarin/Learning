import express from 'express';

const app = express();

// เอาข้อมูล 1 อย่าง
// GET http://localhost:8080/chicken-rice
// GET http://localhost:8080/fried-chicken-rice

app.get('/:menu', (request, response) => {
  console.log('Request parameters');
  console.log(request.params);
  const {menu} = request.params;
  const chickenRice = {
    rice: 'Oiled Rice',
  };
  if (menu === 'fried-chicken-rice') {
    chickenRice.meat = 'Fried Chicken';
    chickenRice.sauces = ['mae pra nom'];
    response.status(200).send(chickenRice); 
  } else if (menu === 'chicken-rice') {
    chickenRice.meat = 'Boiled Chicken';
    chickenRice.sauces = ['red', 'white'];
    response.status(200).send(chickenRice); 
  } else {
  response.status(400).send(`we are not serving ${menu}`);
  }
});
  
//   const chickenRice = {
//     rice: 'Oiled Rice',
//     meat: 'Boiled Chicken',
//     sauces: ['rice', 'white'], 
//   };
//   response.send(chickenRice);
// });

// app.get('/fried-chicken-rice', (request, response) => {
//   const FriedChickenRice = {
//     rice: 'Oiled Rice',
//     meat: 'Fried Chicken',
//     sauces: ['red'], 
//   };
//   response.send(FriedChickenRice);
// });



// defualt = 200
app.listen(8080, () => {
    console.log('Server is listening on 8080');
});


