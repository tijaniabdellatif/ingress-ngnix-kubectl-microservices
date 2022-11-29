import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());

/**
 * Ingress Service
 */
app.get('api/users/current',(req,res) => {
   
    res.send('hello');
});

app.listen(3000,() => {
     console.log('Server is running fuck !!!');
})