const express = require('express');
const app=express();
const port=3000;
const EventEmitter= require('events');
const eventEmitter=new EventEmitter();

let tasks=[];

app.get('/', (req, res)=>{
    // closure with an external variable reference 
    tasks.push(function(){
        return req.headers;
    })

    // too much data
    // const hugeArray=new Array(100000000).fill(req)
    // node-cache, memcached

    // circular object reference
    req.user={
        id: 1,
        userName: 'Inefficient User',
        badObject: req,
    };

    // clear event emitter listeners
    // eventEmitter.on('start', ()=>{
    //     console.log('Useless event emitted')
    // })

    // eventEmitter.removeListener('start')

    setTimeout(()=>{
        res.send('Hello World');
    })

})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})