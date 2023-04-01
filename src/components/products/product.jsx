import { Box } from "@mui/material";

const Product = ({item}) => {
    return ( 
        <Box item-key={item.id}>
            <h3>{ item.title }</h3>
            <h5>{ item.description }</h5>
            <h5>{ item.price }</h5>
        </Box>
    );
}
 
export default Product;