import axios from "axios";
import useSWR from "swr";
import { useRouter } from 'next/router'
import { Box, Grid, Paper } from "@mui/material";
import Product from "./Product";
import { styled } from '@mui/material/styles';
import styles from '@/styles/components/product.module.scss';
import Loading from '@/components/mainComponents/Loading';
import Error from '@/components/mainComponents/Error';

const getProductData = (...args) => axios.get(args).then(res => res.data);

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
    height: '100%',
    textAlign: 'center',
}));

const ProductList = () => {
    const router = useRouter();
    const {data, isLoading , error} = useSWR("https://fakestoreapi.com/products", getProductData);
    if (isLoading) return <Loading />
    if (error) return <Error />

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{py: "2rem", alignItems: "inherit"}} container spacing={2}>
                { data.map(item => ( <Grid onClick={() => router.push(`${router.route}/${item.id}`)} key={item.id} item xs={12} sm={6} md={4} lg={3}><Item className={styles.product_box}><Product item={ item }/></Item></Grid> )) }
            </Grid>
        </Box>
    );
}
 
export default  ProductList;