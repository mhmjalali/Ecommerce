import axios from "axios";
import useSWR from "swr";
import { Box } from "@mui/material";
import Product from "./Product";

const fetcher = (...args) => axios.get(args).then(res => res.data)

const ProductList = () => {
    const {data, error} = useSWR("https://fakestoreapi.com/products", fetcher);
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return (
        <Box>
            {
                data.map(item => (
                    <Product key={item.id} item={ item }/>
                ))
            }
        </Box>
    );
}
 
export default  ProductList;