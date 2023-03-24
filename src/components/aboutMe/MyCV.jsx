import Image from 'next/image';
import { Box, Button } from "@mui/material";
import ContactMe from "@/components/aboutMe/ContactMe";
import SendIcon from '@mui/icons-material/Send';
import cvImage from '../../../public/cvImage.jpg';
const MyCV = () => {
    return ( 
        <Box sx={{display: { md: "flex" }, justifyContent: 'between', alignItems: 'center', mx: '1rem' }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image className="cv-image" src={ cvImage } alt="" />
            </Box>
            <Box sx={{ mx: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}><h1 className='text-yellow'>MOHAMMAD</h1><h1>JALALI</h1></Box>
                <h3 className='text-center'>Front-End <small className='text-yellow'>Developer</small></h3>
                <p className='text-center sm-over'>
                    As a Front-End developer, I have 3 years of experience
                    working on teams and helping other 
                    teams and project managers to succeed.
                    i have a keen eye for detail and an aversion to disorganized code,
                    and i am passionate about writing efficient code and avoiding over-engineering.
                    i am constantly seeking out new skills and opportunities to grow and advance my career. 
                </p>
                <Button className='xs-sm' sx={{width: 'fit-content', my: '1rem'}} color="error" variant="contained" endIcon={<SendIcon />}>More Info</Button>
                <ContactMe />
            </Box>  
        </Box>
    );
}
 
export default MyCV;