import { Box } from "@mui/material";
import ContactMe from "../components/ContactMe"
export default function HomePage() {
  
  return (
      <Box sx={{ overflowY: 'scroll' }} className="body-component">
          <ContactMe />
      </Box>
  );
}