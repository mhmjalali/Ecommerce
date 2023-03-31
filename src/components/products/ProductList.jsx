import axios from "axios";
import useSWR from "swr";
import { Box } from "@mui/material";

const fetcher = (...args) => axios.get(args).then(res => res.data)

const ProductList = () => {
    const {data, error} = useSWR("https://fakestoreapi.com/products", fetcher);
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return (
        <Box>
            {
                data.map(item => (
                    <div>
                        <div>{item.id}</div>
                    </div>
                ))
            }
        </Box>
    );
}
 
export default  ProductList;