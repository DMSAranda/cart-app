import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({items, handlerDelete}) => {
   
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
    
  useEffect(     //para ejecutarlo cuando cambian los items actualiza el total
            () => {
                    setTotal( calculateTotal(items) );
                    }, [ items ]
            )  

  const onDeleteProduct = (id) => {

        console.log('delete');
        handlerDelete(id);
  }

  const onCatalog = () => {

        navigate('/catalog')
  }
 
  return (
    <>
        <div className="my-4 w-50">
            <h2>Cart</h2>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(i => (
                                 <tr key={i.product.id}>
                                    <td>{i.product.name}</td>
                                    <td>{i.product.price}</td>                                
                                    <td>{i.quantity}</td>
                                    <td>{i.quantity * i.product.price}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => onDeleteProduct(i.product.id)}>Delete
                                        </button>
                                    </td>
                                 </tr>
                            ) )}
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">{total}</td>
                            </tr>                   
                        </tfoot>
                    </table>
                    <button
                        className="btn btn-success"
                        onClick={onCatalog}>             
                        Continue Shopping
                    </button>
        </div>
    </>
  )
}
