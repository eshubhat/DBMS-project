import { Box } from '@mui/material'
import Image from 'next/image'

export default function Erdiagram(){

    return (
        <Box zIndex={1000}>
        <Image
        src="/Schema.jpg"
        alt='Pharma logo'
        width={50}
        height={500}
        style={{zIndex:1000}}
      />
      </Box>

);

    }