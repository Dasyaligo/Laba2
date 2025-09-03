import { useParams } from "react-router-dom";

function Product(){
//Доставка параметр id из URL
const {id} = useParams();

return <h2> Товар с ID: {id} </h2>;

}

export default Product;