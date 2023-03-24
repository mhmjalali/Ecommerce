import Link from 'next/link';
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
                    <Link href={"/"}><li className="header-item">HOME</li></Link>
                    <Link href={"./products"}><li className="header-item">PRODUCTS</li></Link>
                </ul>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Tooltip sx={{margin: '0 0.6rem'}} title="Profile" placement="bottom">
                    <AccountCircleIcon className="profile" />
                </Tooltip>
                <div className="pipeLine"></div>
                <Link href={"./aboutMe"}>
                    <Tooltip sx={{margin: '0 0.6rem'}} title="About Me" placement="bottom">
                        <FingerprintIcon className="about-me" />
                    </Tooltip>
                </Link>
            </Box>
        </Box>
    );  
}
 
export default Header;