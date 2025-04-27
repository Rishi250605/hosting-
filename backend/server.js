const app = require('./app');
const path = require('path');
const connectDatabase = require('./config/database');
const cors = require('cors');
app.use(cors({
    origin: "https://yashodha-frontend.onrender.com", // Allow only your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow only these methods
    credentials: true // If you're sending cookies or authentication headers
}));


connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(()=>{
        process.exit(1);
    })
})



