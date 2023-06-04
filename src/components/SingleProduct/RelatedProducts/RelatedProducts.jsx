import Products from '../../Products/Products'
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({productId, categoryId}) => {

    const {data}  = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories]=${categoryId}&pagination[start]=0&pagination[limit]=4`)

    // filters
    // [categories][id]=${categoryId}
    return  <div className='related-product'>
        <Products headingText="Related Products" products={data}/>
    </div>;
};

export default RelatedProducts;
