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
                    
                 <h2 style={{color: '#B6081D', fontSize: '30px',fontFamily:'sans-serif',marginLeft:18, fontStretch:'ultra-expanded',transform: 'scale(1.2)'}}> DBA Lab Course Project</h2>
                 
                 <h3 style={{color: '#000000', fontSize: '25px',fontFamily:'sans-serif',marginBottom: 20, marginRight:5}}>Pharmacy Management System</h3>
                 </main>
                    </Box>
            
                <Box sx={{fontFamily:'monospace'}}>
                   
                    <Typography variant="h6" paddingTop={3} textAlign={'center'}>School of</Typography>
                    <Typography variant="subtitle1" >Computer Science Engineering</Typography>
                </Box>

        </Box>
        </>

    );
}