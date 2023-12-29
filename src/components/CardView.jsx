import { useNavigate } from "react-router-dom";

export const CardView = ({handler, id, name, description, price}) => {
    
    const navigate = useNavigate();

    const addProductCart = (product) => {
          console.log(product);  
          handler(product);
          navigate('/cart');
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}€</p>
                    <button 
                        className="btn btn-primary"
                        onClick={()=> addProductCart({id, name, description, price})}>Add
                    </button>
                </div>
            </div>
        </>
    )
}
