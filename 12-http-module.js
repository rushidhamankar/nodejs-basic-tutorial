const http = require('http')

const server = http.createServer( (req,res) => {
    if(req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('Welcome to our about page')
        res.end()
    }
    else {
        res.write(`<h1>Oops ! Page not found</h1>`)
        res.end()
    }

})

server.listen(5000)