import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return ( 
        <Box className="footer" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box className="logo" sx={{ display: 'flex', alignItems: 'center' }}>
                <InstagramIcon /><p>mhm.jalali</p>
                <TwitterIcon /><p>mammaliom</p>
                <TelegramIcon /><p>mhm_jalali</p>
            </Box>
            <div className=""></div>
        </Box>
    );  
}
 
export default Footer;