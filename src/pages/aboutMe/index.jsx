import  MyCV  from "@/components/MyCV";
import { Box } from "@mui/material";

const body_style = {
    overflowY: 'auto', 
    display: 'flex', 
    justifyContent: 'center',
}
const aboutMe = () => {
    return ( 
        <Box sx={ body_style }>
            <Box maxWidth="lg" className="body-component">
                <MyCV />
            </Box>
        </Box>
    );
}
 
export default aboutMe;