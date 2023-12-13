import './Produto.css';
export const ProductComponent = (props) => {
    return(
        <div className="card-product">
            <img src={props.image} alt="" />
            <h3 className="product-title">{props.title}</h3>
        </div>

    );

}

export default ProductComponent;
