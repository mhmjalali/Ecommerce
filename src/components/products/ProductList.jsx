import axios from "axios";
import useSWR from "swr";
import { Box, Grid } from "@mui/material";
import Product from "./Product";

const fetcher = (...args) => axios.get(args).then(res => res.data)

const productsContainer_style = {
    display: 'flex',
    flexGrow: 1
}
const ProductList = () => {
    const {data, error} = useSWR("https://fakestoreapi.com/products", fetcher);
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return (
        <Box sx={productsContainer_style}>
            <Grid container spacing={1}>
                { data.map(item => ( <Product key={item.id} item={ item }/> )) }
            </Grid>
        </Box>
    );
}
 
export default  ProductList;