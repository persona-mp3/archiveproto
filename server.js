//import libraries and tools
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const bcrypt = require('bcrypt')

const port = 3000
const app = express();
app.use(express.static('public'))
app.use(morgan('dev'))

//set view engine
app.set('view engine', 'ejs')

//connection string
const dbString = 'mongodb+srv://archive00:vij03556@nodetutorials.br4ii.mongodb.net/?retryWrites=true&w=majority&appName=nodetutorials'

mongoose.connect(dbString)
    .then((result) => {
        console.log('Connected to database...')

        app.listen(port, () => {
            console.log(`Port:${port}, listening...`)
        })
    })
    .catch((err) => {
        console.log('Error connecting', err)
    })



//ROUTE HANDLING

//home page
app.get('/', (req, res) => {
    // res.status(200).sendFile('/views/lain.html', {root: __dirname})
    res.status(200).render('index')
})


app.get('/library', (req, res) => {
    res.status(200).render('library')
})


app.get('/article', (req, res) => {
    res.status(200).render('article')
})

app.get('/signUp', (req, res) => {
    res.status(200).render('registration')
})


// app.get('/ho', (req, res) => {

// })


//for handling post data
app.use(express.urlencoded({ extended: true}))
app.post('/', async (req, res) => {
    // const newUser = new User(req.body);

    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // console.log(`Salt: ${salt}`);
        // console.log('Password', hashedPassword)

        // const user = new User(req.body);
        const {user_name, email, password} = req.body;
        const user = new User({
            user_name,
            email,
            password: hashedPassword,
        })



        await user.save();
        console.log('user created succesfully')
        res.redirect('/')

    } catch(err) {
        console.log(err)
    }

    // newUser.save()
    //     .then((result) => {
    //         res.redirect('/')
    //         console.log('SAVED SUCCESFULLY')
    //         console.log('')
    //         console.group('NEW USER')
    //         console.log(result)
    //     })
    //     .catch((err) => {
    //         console.log(`Error saving to DB`)
    //         console.log(err)
    //     })
})

//error page
app.use((req, res) => {
    res.status(404).render('404')
})

