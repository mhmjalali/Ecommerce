import Link from 'next/link';
import { Box, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import styles from '../styles/components/Header.module.scss';
const Header = () => {
    return ( 
        <Box className={styles.header} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <Box className={styles.logo} sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalGroceryStoreIcon />
                    <div>COMMERCE</div>
                </Box>
                <ul className={styles.header_items_list}>
                    <Link href={"/"}><li className={styles.header_item}>HOME</li></Link>
                    <Link href={"./products"}><li className={styles.header_item}>PRODUCTS</li></Link>
                </ul>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Tooltip sx={{margin: '0 0.6rem'}} title="Profile" placement="bottom">
                    <AccountCircleIcon className={styles.profile} />
                </Tooltip>
                <div className={styles.pipeLine}></div>
                <Link href={"./aboutMe"}>
                    <Tooltip sx={{margin: '0 0.6rem'}} title="About Me" placement="bottom">
                        <FingerprintIcon className={styles.about_me} />
                    </Tooltip>
                </Link>
            </Box>
        </Box>
    );  
}
 
export default Header;