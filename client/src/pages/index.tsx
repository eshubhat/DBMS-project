import Indexbutton from '@/components/styledButton'
import { Box,Button } from '@mui/material'
import { useRouter } from 'next/router'




export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box >
      <Indexbutton></Indexbutton>
      </Box>

      <Box sx={{display:'flex', justifyContent:'right', paddingTop:10,paddingRight:10}}>
          <Button variant='contained' onClick={()=>{router.push('/aboutus')}}> About Us</Button>
      </Box>
      
    </>
  )
}
