import { Box, Card, Stack,CardMedia,CardActions,Button,TextField } from "@mui/material";
import Divider from '@mui/material/Divider';
import {useRouter} from "next/router";

export default function Diagrams(){
    const router = useRouter();
    return (
        <Box boxShadow={0} 
        sx={{paddingTop:25,zIndex:-1 ,display:'flex',justifyContent:'center'}}>
            
               <Stack direction="column">
                <div></div>

        <Stack 
        direction="row"
        divider = {<Divider orientation="vertical" flexItem  />}
        spacing={2}
        >
               
                
                <Button size="large" variant="contained" sx={{width:200,height:60}} onClick={()=>{router.push('/erdiagram')}}>Er-Diagram</Button>
                
               
                
              
                <Button size="large" variant="contained" sx={{width:200,height:60}} onClick={()=>{router.push("/schemaDiagram")}}>Schema-Diagram</Button>
                
                  </Stack>
                  </Stack>

        </Box>
        

    );
}