import Image from 'next/image';
import { Box } from "@mui/material";
import useWindowDimensions from '../custom_hooks/useWindowDimensions';
import ResContactMe from "@/components/ContactMe";
import cvImage from '../../public/cvImage.jpg';
const MyCV = () => {
    return ( 
        <Box sx={{display: 'flex', justifyContent: 'between', alignItems: 'center', mx: '1rem' }}>
            <Box>
                <Image width={300} height={500} className="cv-image" src={ cvImage } alt="" />
            </Box>
            <Box sx={{ mx: '1rem' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}><h1 className='text-yellow'>MOHAMMAD</h1><h1>JALALI</h1></Box>
                <h3 className='text-center'>Front-End <small className='text-yellow'>Developer</small></h3>
                <p className='text-center'>
                    As a Front-End developer, I have 3 years of experience
                    working on teams and helping other 
                    teams and project managers to succeed.
                    i have a keen eye for detail and an aversion to disorganized code,
                    and i am passionate about writing efficient code and avoiding over-engineering.
                    i am constantly seeking out new skills and opportunities to grow and advance my career. 
                </p>
                <ResContactMe />
            </Box>
        </Box>
    );
}
 
export default MyCV;