import {app} from "./app.js"
import connect from "./config/connectDB.js"     

connect();
const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})