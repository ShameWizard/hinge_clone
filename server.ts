const express = require('express')
let app = express();
app.use('/', express.static('build'))
app.use('/', express.static('public'))

let sessions = {}
const cookieParser = require('cookie-parser')
app.use(cookieParser())
let generateId = () => {
    return "" + Math.floor(Math.random() + 10000000000)
}
let generateProfileId = (email) => {
    return email.slice(0,3) + Math.floor(Math.random() * 100000000)  
}
const sha1 = require('sha1')
const validator = require('validator') 
const multer = require('multer')
let upload = multer({ dest: __dirname + "/uploads" });

const mongodb = require('mongodb')
 let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;
let dbo = undefined;
let url = 'mongodb+srv://shawski76:ham3st3r76@hinge-clone.dwt0d.mongodb.net/<dbname>?retryWrites=true&w=majority'
MongoClient.connect(url, { useUnifiedTopology: true}).then(client => {
    dbo = client.db('hinge-clone')
}).catch(err => console.log(err))

app.post('/signup', upload.none(), async (req, res) => {
    console.log('request to /signup endpoint', req.body)
    let email = req.body.email
    let password = req.body.password

    try {
        const user = await dbo.collection('users').findOne({ email: email})
        if (user) {
            return res.send(JSON.stringify({ success: false, message: 'email already in use'}))
        }
        // if (validator.validate(email) === false) {
        //     return res.send(JSON.stringify({ success: false, message: 'invalid email' }))
        // }
        let profileId = generateProfileId(email)
        let profile = {
            email: email,
            password: sha1(password),
            profileId: profileId,
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            sexualPreferences: '',
            agePreferences: [0, 0],
            education: '',
            job: '',
            chosenLocation: '',
            locationRange: 0,
            sentLikes: [],
            receivedLikes: [],
            sentDislikes: [],
            receivedDislikes: [],
            matches: [],
            picture1: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture2: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture3: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture4: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture5: {
                img: '',
                prompt: "",
                caption: "",
            },
            question1: {
                selectedQuestion: "",
                answer: ''
            },
            question2: {
                selectedQuestion: "",
                answer: ''
            },
            question3: {
                selectedQuestion: "",
                answer: ''
            }

        }
        await dbo.collection('users').insertOne(profile)
        let sessionId = generateId()
        console.log('generated Id from signup endpoint', sessionId)
        sessions[sessionId] = email
        res.send(JSON.stringify({ 
            success: true,
            profile
        }))

    } catch (err) {
        console.log('/signup error', err)
        res.send(JSON.stringify({ success: false, message: 'signup error'}))
        return
    }
})


app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/public.index.html')
})
app.listen( 4000, () => {
    // tslint:disable-next-line:no-console
    console.log('server started at http://localhost4000')
})


