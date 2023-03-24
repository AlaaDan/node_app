const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000


const insults = [
    {
        insult: "Never give up",
        play: "Alaa"
    },
    {
        insult: "Doing mistakes is the way to learn",
        play: "Alaa Aldandachi"
    }
]

app.use(express.json())

app.get("/api/insults", (request, response)=>{
    response.json(insults)

})

app.post("/api/insults", (request, response)=>{
    const insultObj = request.body

    if(insultObj?.insult && insultObj?.play){
        const { insult, play } = insultObj;

        insults.push({ insult: insult, play: play})

        const result = {
            sucess: true,
            insults: insults
        }
        response.json(result)
    } else {
        const result = {
            success: false,
            error: "Wrong data in body"
        }
        response.status(400).json();
    }
})


app.listen(PORT, ()=>{
    console.log(`Server on ${PORT} started`)
})