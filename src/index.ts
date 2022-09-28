import app from "./database/app";
import {AppDataSource} from "./data-source";

const port = process.env.PORT || 3030

AppDataSource.initialize().then(()=>{
    app.listen(3030, ()=>{
        console.log('Server online on port :: http://localhost:'+port)
    })
});