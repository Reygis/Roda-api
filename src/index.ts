import app from "./database/app";
import {AppDataSource} from "./data-source";


AppDataSource.initialize().then(()=>{
    app.listen(3030, ()=>{
        console.log('Server online on port :: http://localhost:3030')
    })
});