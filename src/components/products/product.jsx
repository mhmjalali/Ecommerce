import { Box, Tooltip } from "@mui/material";
import styles from '@/styles/components/products_product.module.scss';
const Product = ({item}) => {
    return ( 
        <Box>
            <Box className={styles.product_image} component="img" src={ item.image } sx={{ maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 } }} />
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                <Tooltip title={ item.title } placement="right">
                    <Box sx={{ display: "flex" }}>
                        <h4 className={ styles.ask }>Product:</h4>
                        <h4 className={ styles.product_title }>{ item.title }</h4>
                    </Box>
                </Tooltip>
                <Box sx={{ display: "flex" }}>
                    <h4 className={ styles.ask }>Price:</h4>
                    <h4 className={ styles.product_price }>{ item.price }$</h4>
                </Box>
            </Box>
        </Box>
    );
}
 
export default Product;