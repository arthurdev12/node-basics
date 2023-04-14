const express = require('express')
const morgan = require('morgan')
const app = express()



//register view engine

app.set('view engine', 'ejs')

app.listen(3000)
//morgan
// app.use(morgan('dev'))
// middleware static files

app.use(express.static('public'))

app.get('/', function (req, res) {
    // res.send('<p>Home page</p>')
    // res.render('index')
    const blogs = [
        { title: "Yoshi find egg", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. " },
        { title: "Mario find star", snippet: "Recusandae veniam unde ad illo ipsam nisi suscipit, modi quo temporibus error ." },
        { title: "How to defeat browser", snippet: "Voluptatibus, voluptates. Quas, vero! Fugiat odit repellat cum, esse sed. " }
    
    ]
    res.render('index', {title:'home', blogs})
})

app.get('/about', function (req, res) {
    // res.sendFile('./views/index.html', { root : __dirname })
    res.render('about', {title:'About'})
})

// redirect
app.get('/about-us', (req, res) => {
    res.render('about', {title:'About'})
})

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title:'Create Blog'})
})

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root : __dirname })
    res.status(404).render('404', {title:'404'})
})

