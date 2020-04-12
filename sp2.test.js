const api = require('./sp2.index.js')
const Client = new api.Client()

Client.getStages((res) => {
    console.log(res.first)
    console.log(res.next)
})
