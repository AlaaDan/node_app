const { Router } = require("express")
const router = Router()


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

router.get("/", (request, response)=>{
    response.json(insults)

})

router.post("/", (request, response)=>{
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

module.exports = router;