import express, { response }  from "express";
import  "@controllers/UserControllers";
const app = express();

app.get('/', (request, response) => {
   return response.json({message: 'Ola'});
});


app.listen(8000);