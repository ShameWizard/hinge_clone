import express from 'express'
let app = express();
app.use('/', express.static('build'))
app.use('/', express.static('public'))


let sessions = {}
app.use(cookieParser())
import cookieParser from 'cookie-parser'
let generateId = () => {
    return "" + Math.floor(Math.random() + 10000000000)
}
import sha1 from 'sha1'
import multer from 'multer'
let upload = multer({ dest: __dirname + "/uploads" });



import mongodb from 'mongodb'
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;
let dbo = undefined;



app.listen( 8080, () => {
    // tslint:disable-next-line:no-console
    console.log('server started at http://localhost:8000')
})


