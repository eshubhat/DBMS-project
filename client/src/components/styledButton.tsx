import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";

const images = [
  {
    url: 'https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dbms.jpg',
    title: 'DBMS queries',
    width: '50%',
    link: '/dbmsqueries',
  },
  {
    url: 'https://static.vecteezy.com/system/resources/previews/005/147/541/non_2x/business-team-members-are-standing-with-confident-faces-business-icons-are-floating-above-their-heads-free-vector.jpg',
    title: 'About our team',
    width: '50%',
    link: '/aboutus',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    // '& .MuiImageMarked-root': {
    //   opacity: 0,
    // },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Indexbutton() {
    const router = useRouter();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',minheight:'100%',justifyContent: "space-between",marginTop:10 }} >
        <ImageButton
          focusRipple
          key="DBMS queries"
          sx={{
            boxShadow:5,
            zIndex:3
          }}
          style={{
            width: "45%",
            height: '300px',
            backgroundSize: 'contain',
            marginLeft: 20,
            padding: 10,
            display: "flex",justifyContent: "space-between"
          }}
        >
          <ImageSrc style={{ backgroundImage: `url("https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dbms.jpg")` ,}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image onClick={()=>{router.push('/dbmsimplement')}}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => 'calc(${theme.spacing(1)} + 6px)',
              }}
            >Into Queries
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>


         <ImageButton
          focusRipple
          key="About our team"
          sx={{
            boxShadow: 5
          }}
          style={{
            width: "45%",
            height: '300px',
            backgroundSize: 'contain',
            marginRight: 20,
            display: "flex",justifyContent: "space-between"
          }}
        >
          <ImageSrc style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/147/541/non_2x/business-team-members-are-standing-with-confident-faces-business-icons-are-floating-above-their-heads-free-vector.jpg")'}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image onClick={()=>{router.push('/aboutus')}}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => 'calc(${theme.spacing(1)} + 6px)',
              }}
            >
              Schema, ER diagram,etc
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    </Box>
  );
}