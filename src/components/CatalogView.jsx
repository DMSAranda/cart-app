import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CardView } from "./CardView";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);


    const findAll = async() => {
        const productsList = await getProducts();
        setProducts(productsList);
        setIsLoading(false);
    }

    useEffect(     //para ejecutarlo solo una vez al crear el componente
            () => {
                findAll();
            }, []
    )

    return (

        <>
            {
                isLoading && 
                    <div className="alert alert-info">
                         Loading...   
                    </div>
                
            }
            <div className="row">
                    {products.map(p => (
                           <div className="col-4 my-2" key={ p.id }>
                                <CardView 
                                    handler={ handler }
                                    id={p.id}
                                    name={p.name} 
                                    description={p.description} 
                                    price={p.price}/>
                           </div>          
                    ))}              
            </div>
        </>
    )
          
}   
