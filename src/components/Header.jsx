import { Box, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
const Header = () => {
    return ( 
        <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <Box className="logo" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalGroceryStoreIcon />
                    <div>COMMERCE</div>
                </Box>
                <ul className="headr-items-list">
                    <li className="header-item">HOME</li>
                    <li className="header-item">PRODUCTS</li>
                    <li className="header-item">ABOUT US</li>
                </ul>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Tooltip sx={{margin: '0 0.6rem'}} title="Profile" placement="bottom">
                    <AccountCircleIcon className="profile" />
                </Tooltip>
                <div className="pipeLine"></div>
                <Tooltip sx={{margin: '0 0.6rem'}} title="About Me" placement="bottom">
                    <FingerprintIcon className="profile" />
                </Tooltip>
            </Box>
        </Box>
    );  
}
 
export default Header;