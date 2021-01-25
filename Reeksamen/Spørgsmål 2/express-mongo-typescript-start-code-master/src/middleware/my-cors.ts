import express, { NextFunction, response, Response } from "express";

const myCors = ((req: any, res: Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

export default myCors;