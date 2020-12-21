import express from 'express';
import Demo from '../src/Components/Demo';
import fs from 'fs';
import path, { dirname } from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const app=express();
const router = express.Router();

let routeHandler = app.use(
    (request,response)=>
{
    console.log(path.resolve(__dirname,"..",'build'));
    fs.readFile(path.resolve(__dirname,"..","build",)+'/index.html','utf8',(err,entireHtmlLines)=>
    {
        if(err)
        {

            console.log(err);
            return response.status(500).send("Something Wrong");
        }
        else
        {
            let entireHtmlwithDemoinRenderedFormat = entireHtmlLines.replace(`<div id="root"></div>`,
            `<div id="root">
            ${ ReactDOMServer.renderToString(<Demo></Demo>)}
            </div>`);
            return response.send(entireHtmlwithDemoinRenderedFormat);
        }
    })
})

router.use("/^/$",routeHandler);
app.use(router);
app.listen(9797,()=>
{
    console.log("Node Started running at port 9797");
});


