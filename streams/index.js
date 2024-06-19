const { read } = require("fs")

const fs= require("fs")

// Readable Stream
// if the file is 183 bytes, with highWaterMark: 20, it will read 20 bytes at a time i.e chunk
// const readable= fs.createReadStream("./my-file.txt" , {highWaterMark:20})

// let chunkCount=0
// readable
//     .on("data" , (chunk)=>{
//         if(chunkCount===2){
//             readable.pause()
//             setTimeout(()=>{
//                 readable.resume()
//             }, 3000)
//         }
//         // console.log("before increment" , chunkCount)
//         console.log("New chunk:" , chunk.toString()) //convert the binary chunk into string
//         chunkCount++
//         // console.log("after increment:" , chunkCount)
//     })

// (async()=>{
//     for await (const chunk of readable){
//         console.log("New chunk:" , chunk.toString())
//     }
// })()

/*Writable Stream*/

// const writable= fs.createWriteStream("./my-new-file.txt")
// writable.write("Hello ,")
// writable.end("World!")

// Duplex Stream

const {Transform , pipeline, Readable , Writable , PassThrough}= require("stream")
const readable= fs.createReadStream("./my-file.txt", {highWaterMark:20})
const writable= fs.createWriteStream("./my-new-file.txt")

const uppercase=new Transform({
    transform(chunk , encoding, callback){
        callback(null, chunk.toString().toUpperCase())
    }
})

// readable.pipe(uppercase).pipe(writable)

pipeline(readable, uppercase, writable, (error)=>{
    if(error){
        console.error(error)
    }
})

// More on streams
const zlib= require("zlib")
const crypto= require("crypto")

app.get("/*", async(req, res)=>{
    const proxy=await fetch(`${origin}${req.path}`)
    res.writeHead(proxy.res.statusCode)
    proxy.res.pipe(res)
})