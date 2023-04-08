import { useRouter } from "next/router";

const ProductDtails = () => {
    const router = useRouter();
    const productid = router.query.productid;
    return ( <h1>this details for product { productid }</h1> );
}

export default ProductDtails;