const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        age: 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
},
    'chance the rapper':{
        age: 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illnois'
},
    'dylan':{
        age: 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
},

}
// start of request
// app.get()
// if i want to go to my main page, 
// what would be my path? '/'
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase
    if (rappers[rappersName]){
       response.json(rappers[rappersName]) 
    }else{
        response.json(rappers['dylan'])
    }
})


app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better for catch it!`)
})