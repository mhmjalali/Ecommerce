import { Box, Paper } from "@mui/material";
import styles from '../../styles/components/product.module.scss';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Product = ({item}) => {
    return ( 
        <Item item xs={4} item-key={item.id}>
            {/* <h3>{ item.title }</h3>
            <h5>{ item.description }</h5> */}
            <h5>{ item.price }</h5>
        </Item>
    );
}
 
export default Product;