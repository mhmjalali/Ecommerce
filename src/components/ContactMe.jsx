import { Box, IconButton, Tooltip } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
const ResContactMe = () => {
    return ( 
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip title="my Instagram" placement="bottom">
                <IconButton aria-label="Instagram" size="large" color="secondary"><InstagramIcon /></IconButton>
            </Tooltip>
            <Tooltip title="my Twitter" placement="bottom">
                <IconButton aria-label="Twitter" size="large" color="primary"><TwitterIcon /></IconButton>
            </Tooltip>
            <Tooltip title="my Telegram" placement="bottom">
                <IconButton aria-label="Telegram" size="large" color="primary"><TelegramIcon /></IconButton>
            </Tooltip>
            <Tooltip title="my GitHub" placement="bottom">
                <IconButton aria-label="GitHub" size="large"><GitHubIcon /></IconButton>
            </Tooltip>
        </Box>
     );
}
 
export default ResContactMe;