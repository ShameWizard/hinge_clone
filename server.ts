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
import validator from 'validator'
import multer from 'multer'
let upload = multer({ dest: __dirname + "/uploads" });



import mongodb from 'mongodb'
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;
let dbo = undefined;
let url = 'mongodb+srv://shawski76:ham3st3r76@hinge-clone.dwt0d.mongodb.net/<dbname>?retryWrites=true&w=majority'
MongoClient.connect(url, { useUnifiedTopology: true}).then(client => {
    dbo = client.db('hinge-clone')
}).catch(err => console.log(err))

app.post('/signup', upload.none(), async (req, res) => {
    console.log('request to /signup endpoint', req.body)
    let email: string = req.body.email
    let password: string = req.body.password

    try {
        const user = await dbo.collection('users').findOne({ email: email})
        if (user) {
            console.log('111111')
            return res.send(JSON.stringify({ success: false, message: 'email already in use'}))
        }
        if (validator.validate(email) === false) {
            console.log('22222')
            return res.send(JSON.stringify({ success: false, message: 'invalid email' }))
        }
        console.log('333333')
        await dbo.collection('users').insertOne({
            email: email,
            password: sha1(password)
        })
        let sessionId = generateId()
        console.log('generated Id from signup endpoint', sessionId)
        sessions[sessionId] = email
        res.send(JSON.stringify({ success: true}))

    } catch (err) {
        console.log('/signup error', err)
        res.send(JSON.stringify({ success: false, message: 'signup error'}))
        return
    }
})
app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/public.index.html')
})
app.listen( 3000, () => {
    // tslint:disable-next-line:no-console
    console.log('server started at http://localhost:3000')
})


