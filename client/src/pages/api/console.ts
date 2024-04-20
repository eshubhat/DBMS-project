// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as oracledb from 'oracledb'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise( async resolve => {
    let connection,result;
    try {
        connection = await oracledb.getConnection({
          user: "C##DBMSG9",
          password: "1234",
          connectString: "localhost:1521/xe" // [hostname]:[port]/[DB service name]
        });
    }catch (error) {
        console.log(error);
      }

      result = await connection?.execute(req.body.data.input);
            await connection?.close();
            if(result)
            res.status(200).json(result);

            else
                res.status(403)


    })
}
