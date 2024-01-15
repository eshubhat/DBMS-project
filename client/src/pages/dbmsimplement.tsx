import { Box, Card, Stack,CardMedia,CardActions,Button,TextField } from "@mui/material";
import Divider from '@mui/material/Divider';
import {useRouter} from "next/router";

export default function dbmsimplementation(){
    const router = useRouter();
    return (
        <Box boxShadow={0} 
        sx={{paddingTop:5,zIndex:-1 ,display:'flex',justifyContent:'center'}}>
        <Stack 
        direction="row"
        divider = {<Divider orientation="vertical" flexItem  />}
        spacing={2}
        >
            <Stack 
            direction="column"
            divider = {<Divider orientation="horizontal" flexItem  />}
            spacing={2}
            zIndex={3}

            >
               <Card sx={{zIndex:3, maxWidth:300}}>
                <CardMedia
                sx={{height: 120,boxShadow:2}}
                image="/dbmsTable.jpeg"
                ></CardMedia>
                <ul style={{listStyleType:"none",paddingRight:40}}>
                <Divider variant='fullWidth' component="li" />
                </ul>
                <CardActions sx={{display:"flex",justifyContent:'center',height:20}}>
                <Button size="large" onClick={()=>{router.push('/displaytable')}}>Table</Button>
                </CardActions>
               </Card>
                
               <Card sx={{zIndex:3,maxWidth:300 }}>
                <CardMedia
                sx={{height: 120,width:300, boxShadow:2}}
                image="/dbmsTable.jpeg"
                ></CardMedia>
                <ul style={{listStyleType:"none",paddingRight:40}}>
                <Divider variant='fullWidth' component="li" />
                </ul>
                <CardActions sx={{display:"flex",justifyContent:'center',height:20}}>
                <Button size="large">Query</Button>
                </CardActions>
               </Card>
            </Stack>
            <div></div>
            
            <Stack 
            direction="column"
            spacing={2}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            <Card sx={{zIndex:3,maxWidth:400}}>
            <CardMedia
                sx={{height: 120,width:300, boxShadow:2,zIndex:3}}
                image="/dbmsTable.jpeg"
                ></CardMedia>
                <ul style={{listStyleType:"none",paddingRight:40}}>
                <Divider variant='fullWidth' component="li" />
                </ul>
                <CardActions sx={{display:"flex",justifyContent:'center',height:20}}>
                <Button size="large" onClick={()=>{router.push('/console')}}>Console</Button>
                </CardActions>
            </Card>  
            </Stack>        
        </Stack>

        </Box>
        

    );
}