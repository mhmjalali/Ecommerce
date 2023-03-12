import { Box, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
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
                    <li className="header-item">CONTACT ME</li>
                </ul>
            </Box>
            <Tooltip title="Profile" placement="left">
                <AccountCircleIcon className="profile" />
            </Tooltip>
        </Box>
    );  
}
 
export default Header;