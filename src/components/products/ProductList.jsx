import axios from "axios";
import useSWR from "swr";
import { Box, Grid, Paper } from "@mui/material";
import Product from "./Product";
import { styled } from '@mui/material/styles';
import styles from '../../styles/components/product.module.scss';

const getProductData = (...args) => axios.get(args).then(res => res.data);

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
    height: '100%',
    textAlign: 'center',
}));

const ProductList = () => {
    const {data, error} = useSWR("https://fakestoreapi.com/products", getProductData);
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{my: "2rem", alignItems: "inherit"}} container spacing={2}>
                { data.map(item => ( <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}><Item className={styles.product_box}><Product item={ item }/></Item></Grid> )) }
            </Grid>
        </Box>
    );
}
 
export default  ProductList;