import { Box, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    return ( 
        <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
                <div className="logo">MAMAL SHOP</div>
                <ul className="headr-items-list">
                    <li className="header-item">HOME</li>
                    <li className="header-item">PRODUCTS</li>
                    <li className="header-item">ABOUT US</li>
                    <li className="header-item">CONTACT ME</li>
                </ul>
            </Box>
            <Tooltip title="Profile" placement="left">
                <AccountCircleIcon className="profile" />
            </Tooltip>
            <div></div>
        </Box>
    );  
}
 
export default Header;