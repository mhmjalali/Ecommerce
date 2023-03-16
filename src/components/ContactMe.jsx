import { useState } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, Divider, Button, Drawer } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const List_style = {
    width: '100%',
    bgcolor: 'background.paper',
}

const contactMeList = () => (
    <List sx={List_style} component="nav" aria-label="mailbox folders">
        <ListItem button><ListItemIcon><InstagramIcon /></ListItemIcon><ListItemText primary="Instagram" /></ListItem>
        <Divider />
        <ListItem button divider><ListItemIcon><TwitterIcon /></ListItemIcon><ListItemText primary="Twitter" /></ListItem>
        <ListItem button><ListItemIcon><TelegramIcon /></ListItemIcon><ListItemText primary="Telegram" /></ListItem>
        <Divider />
        <ListItem button><ListItemIcon><GitHubIcon /></ListItemIcon><ListItemText primary="GitHub" /></ListItem>
    </List>
);
const ContactMe = () => {
    const [contactDrawer, setContactDrawer] = useState( { bottom: false, } );
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return }
        setContactDrawer({ ...contactDrawer, [anchor]: open });
    };

    return (
        <Box>
            <Button onClick={toggleDrawer('bottom', true)} z
                variant="contained" color="success" 
                startIcon={<ContactEmergencyIcon />}>
                contact me
            </Button>
            <Drawer anchor={'bottom'} open={contactDrawer['bottom']} onClose={toggleDrawer('bottom', false)}>
                { contactMeList() }
            </Drawer>
        </Box>
    );  
}
 
export default ContactMe;