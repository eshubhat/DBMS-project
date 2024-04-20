// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as oracledb from 'oracledb'
import { resolve } from 'path';

type Data = {
  res:string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    return  new Promise(async resolve =>{

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

  console.log(req.body.data.index);
  switch(req.body.data.index){
    case 10: 
            result = await connection?.execute(`
            SELECT *FROM Customer
            `);
            await connection?.close();
            
            if(result){
            res.status(200).json(result);
            
            }

            else{
                res.status(403)
            }

            
            
        break;
    case 20: 
            result = await connection?.execute(`
            SELECT *FROM Customer_order
    `);

    await connection?.close();

    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 30:
        result = await connection?.execute(`
        SELECT *FROM Customer_Insurance
`);

await connection?.close();
if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 40: 
            result = await connection?.execute(`
            SELECT *FROM Customer_Bill
`);

await connection?.close();

if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 50: 
            result = await connection?.execute(`
            SELECT *FROM Prescribed_Drugs
    `);

    await connection?.close();

    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 60: 
            result = await connection?.execute(`
            SELECT *FROM Ordered_Drugs
    `);

    await connection?.close();
    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 70: 
        result = await connection?.execute(`
        SELECT *FROM Employee_Details
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 80:
        result = await connection?.execute(`
        SELECT *FROM Employee_Disposed_Medicine
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 90:
        result = await connection?.execute(`
        SELECT *FROM Disposed_Medicine
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 100:
        result = await connection?.execute(`
        SELECT *FROM Medicine_Details
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    
        default: 
            res.status(200);
    

   
  }
})
}
