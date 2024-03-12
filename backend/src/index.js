import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
import clientRouter from './routes/client.route.js'
app.use(express.json()) 
mongoose.connect(process.env.MONGO)
.then((res)=>{
    console.log(`Mongodb Connected`);
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`Server listening on 7000`);
    })
})
.catch((error)=>{
    console.log(error);
})

app.use('/api/client',clientRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
  