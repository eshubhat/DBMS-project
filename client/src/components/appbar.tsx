import Image from "next/image";
import kletechlogo from "../../public/klelogo.png";
import  {Box,Typography}  from "@mui/material";
import TypewriterEffect from "./typewriterEffect";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({subsets:["latin"]})



export default function Appbar(){
   

    return (
        <>
        <Box boxShadow={1} sx={{display:"flex", justifyContent: 'space-between', maxHeight:120,zIndex:2}}>

            <Box>
                <Image
                    src={kletechlogo}
                    alt="Picture of the university"
                    height={70}
                    width={300}
                />
            </Box>

            
                <Box >
                    {/* <TypewriterEffect text={'Database Application Lab Course Project'}></TypewriterEffect>
                 */}
                <main className={montserrat.className} >
                    
                 <h3 style={{color: '#B6081D', fontSize: '23px',fontFamily:'sans-serif',paddingRight:'20px'}}> DBA Lab Course Project</h3>
                 
                 <p style={{color: '#000000', fontSize: '17px',fontFamily:'sans-serif',marginLeft:10,marginBottom: 20}}>Pharmacy management System</p>
                 </main>
                    </Box>
            
                <Box sx={{fontFamily:'monospace'}}>
                    <Typography variant="h6" textAlign={'center'}>School of</Typography>
                    <Typography variant="subtitle1" >Computer Science Department</Typography>
                </Box>

        </Box>
        </>

    );
}