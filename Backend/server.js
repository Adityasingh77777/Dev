import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Server is Ready");
// });

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'first Joke',
            content:'This is First joke'
        },
        {
            id:2,
            title:'second joke',
            content:'This is Second Joke'
        },
        {
            id:3,
            title:'Third joke',
            content:'This is third Joke'
        },
        {
            id:4,
            title:'Forth Joke',
            content:'This is Fourth joke'
        },
        {
            id:5,
            title:'Fifth Joke',
            content:'This is Fifth joke'
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})

