import ProductList from "@/components/products/ProductList"
import { Box } from "@mui/material";

const body_style = {
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
}
const products = () => {
    return ( 
        <Box sx={ body_style }>
            <Box maxWidth="lg" className="body-component">
                <ProductList />
            </Box>
        </Box>
    );
}
 
export default products;