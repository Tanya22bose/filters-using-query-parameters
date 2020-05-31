var http = require('http');
var url = require('url');

taskitems = [
    {
        id : 1,
        Title : 'Task 1',
        Deadline : 'Today'
    },
    {
        id : 2,
        Title : 'Task 2',
        Deadline : 'Tomorrow'
    },
    {
        id : 3,
        Title : 'Task 3',
        Deadline : 'yesterday'
    }
];

var server = http.createServer(function handleResponse(req, res){
     
    console.log(req.url);
    var querystrings = url.parse(req.url, true).query;
    var Deadline = querystrings.Deadline;


    for(var i=0; i<taskitems.length ; i++)
    {
        if(taskitems[i].Deadline === Deadline)
            res.write(`<div>
                             <h1>${taskitems[i].id}</h1>
                             <h1>${taskitems[i].Title}</h1>
                             <h3>${taskitems[i].Deadline}</h3>
                       </div>`);
    }

    res.end();
    
});

server.listen(8080);


