// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as oracledb from 'oracledb'


type Data = {
  res:string[]
}

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

  console.log(req.body.data.index);
  switch(req.body.data.index){
    case 0: 
            result = await connection?.execute(`
            SELECT Employee_Name, Employee_Role
            FROM Employee_Details
            `);
            await connection?.close();
            if(result)
            res.status(200).json(result);

            else
                res.status(403);

            
        break;
    case 1: 
            result = await connection?.execute(`
    SELECT Customer_SSN, Total_Amount, Customer_Payment, Insurance_Payment
FROM Customer_Bill 
WHERE Customer_SSN = 3333333333
    `);

    await connection?.close();

    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 2:
        result = await connection?.execute(`
        SELECT Medicine_Name, Batch_number, Medicine_Quantity
        FROM Disposed_Medicine
        WHERE Manufacturer = 'OMG Manufacturer'
`);

await connection?.close();
if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 3: 
            result = await connection?.execute(`
    SELECT Medicine_Name, Medicine_Quantity, Manufacturer
FROM Disposed_Medicine
WHERE Medicine_Name = 'Paracetamol'
`);

await connection?.close();

if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 4: 
            result = await connection?.execute(`
    SELECT pd.Prescription_ID, p.Prescription_Date, p.Doctor_ID
FROM Prescribed_Drugs pd
JOIN Prescription p ON pd.Prescription_ID = p.Prescription_ID
WHERE pd.Drug_Name = 'Ibuprofen'
    `);

    await connection?.close();

    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 5: 
            result = await connection?.execute(`
    SELECT
    ed.Employee_ID,
    ed.Employee_Name,
    edm.Medicine_Name,
    edm.Medicine_Batch,
    edm.Disposal_Date
FROM
    Employee_Details ed
    JOIN Employee_Disposed_Medicine edm ON ed.Employee_ID = edm.Employee_ID
    `);

    await connection?.close();
    if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 6: 
        result = await connection?.execute(`
        SELECT DISTINCT co.Order_ID, od.Drug_Name
FROM Customer_Order co
JOIN Ordered_Drugs od ON co.Order_ID = od.Order_ID
LEFT JOIN Disposed_Medicine dm ON od.Batch_Number = dm.Batch_Number
WHERE dm.Batch_Number IS NOT NULL OR od.Batch_Number != dm.Batch_Number
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 7:
        result = await connection?.execute(`
        SELECT co.Order_ID, od.Drug_Name, od.Ordered_Quantity, od.Price * od.Ordered_Quantity AS Total_Price
FROM Customer_Order co
JOIN Ordered_Drugs od ON co.Order_ID = od.Order_ID
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 8:
        result = await connection?.execute(`
        SELECT c.Customer_SSN, c.Customer_Name, SUM(cb.Customer_Payment) AS Total_Payment
FROM Customer c
JOIN Customer_Bill cb ON c.Customer_SSN = cb.Customer_SSN
GROUP BY c.Customer_SSN, c.Customer_Name
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 9:
        result = await connection?.execute(`
        SELECT Drug_Name, MAX(Refill_Limit) AS Highest_Refill_Limit
        FROM Prescribed_Drugs
        GROUP BY Drug_Name 
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 10: 
        result = await connection?.execute(`
        SELECT od.Drug_Name, 
       SUM(od.Ordered_Quantity) AS Total_Quantity_Ordered,
       (SELECT md.Stock_Quantity FROM Medicine_Details md WHERE md.Drug_Name = od.Drug_Name) AS Current_Stock_Quantity
FROM Ordered_Drugs od
GROUP BY od.Drug_Name
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;
    case 11:
        result = await connection?.execute(`
        SELECT c.Customer_SSN, 
       c.Customer_Name,
       SUM(cb.Total_Amount) AS Total_Billed,
       (SELECT SUM(cb2.Customer_Payment) FROM Customer_Bill cb2 WHERE cb2.Customer_SSN = c.Customer_SSN) AS Total_Paid
FROM Customer c
JOIN Customer_Bill cb ON c.Customer_SSN = cb.Customer_SSN
GROUP BY c.Customer_SSN, c.Customer_Name
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

    case 14:
        result = await connection?.execute(`
        SELECT md.Drug_Name,
       (SELECT SUM(od.Ordered_Quantity) FROM Ordered_Drugs od WHERE od.Drug_Name = md.Drug_Name) AS Total_Ordered_Quantity
FROM Medicine_Details md
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 15:
        result = await connection?.execute(`
        SELECT (SELECT SUM(md.Medicine_Price * md.Stock_Quantity) 
                FROM Medicine_Details md) AS Total_Price
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 16:
        result = await connection?.execute(`
        SELECT AVG(ed.Employee_Salary) AS Average_Salary
FROM Employee_Details ed
WHERE ed.Employee_ID IN (SELECT co.Employee_ID FROM Customer_Order co)
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 17:
        result = await connection?.execute(`
        SELECT c.Customer_SSN, c.Customer_Name
FROM Customer c
WHERE c.Customer_SSN IN (SELECT p.Patient_SSN FROM Prescription p
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 18:
        result = await connection?.execute(`
        SELECT dm.Medicine_Name, dm.Batch_Number, dm.Medicine_Quantity, dm.Manufacturer
FROM Disposed_Medicine dm
WHERE dm.Employee_ID IN (SELECT ed.Employee_ID
                        FROM Employee_Details ed
                        WHERE ed.Employee_Salary > (SELECT AVG(ed2.Employee_Salary) FROM Employee_Details ed2)
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 19:
        result = await connection?.execute(`
        SELECT ci.Insurance_ID, ci.Company_Name, ci.Start_Date, ci.End_Date, ci.Co_Insurance
FROM Customer_Insurance ci
WHERE ci.Co_Insurance = (SELECT MAX(ci2.Co_Insurance) FROM Customer_Insurance ci2
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

        case 20:
        result = await connection?.execute(`
        SELECT pd.Prescription_ID, pd.Drug_Name, pd.Prescribed_Quantity, pd.Refill_Limit
FROM Prescribed_Drugs pd
WHERE pd.Prescribed_Quantity = (SELECT MAX(pd2.Prescribed_Quantity) FROM Prescribed_Drugs pd2)
        `);

        await connection?.close();
        if(result)
            res.status(200).json(result);

            else
                res.status(403)

        break;

  }
})
}
