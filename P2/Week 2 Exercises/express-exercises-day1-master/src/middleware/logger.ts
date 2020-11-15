import winston from 'winston';
import expressWinston from 'express-winston';


 
export const logger = function (req:any, res:any, next:any) {
    const levelStatus = () => {
        var levelS = "";
        let tempstatus = res.statusCode
        //res.statusCode = 450

        if (res.statusCode >= 100) { levelS = "info"; }
        if (res.statusCode >= 400) { levelS = "warn"; }
        if (res.statusCode >= 500) { levelS = "error"; }
        // Ops is worried about hacking attempts so make Unauthorized and Forbidden critical
        if (res.statusCode == 401 || res.statusCode == 403) { levelS = "critical"; }
        // No one should be using the old path, so always warn for those
        if (req.path === "/v1" && levelS === "info") { levelS = "warn"; }
        res.statusCode = tempstatus
        return levelS;
      }

    const logger = winston.createLogger({
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: './src/logs/error.log', level: 'warn' }), 
          new winston.transports.File({ filename: './src/logs/combined.log' })
        ]

      });
      let lev = levelStatus()

    logger.log({
        level: lev,
        message: "hi"
      });
      next()







}


