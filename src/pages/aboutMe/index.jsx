import  MyCV  from "@/components/MyCV";
import ContactMe from "@/components/ContactMe";
import { Box } from "@mui/material";

const aboutMe = () => {
    return ( 
        <Box sx={{ overflowY: 'scroll' }} className="body-component">
            <MyCV />
            <ContactMe />
        </Box>   
    );
}
 
export default aboutMe;