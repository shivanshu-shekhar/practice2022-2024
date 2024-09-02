import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/productsSlice';
 
export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
 
  const cartItems = Object.values(cart);
 
  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="row gap-3">
          {cartItems.map((item) => (
            <li className="card" style={{ width: "18rem" }} key={item.id}>
              <img src={item.image} alt={item.title} style= {{width: "249px"}} className="card-img-top" />
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <p className="card-text"> Quantity: {item.quantity}</p>
              <button className="btn btn-primary" onClick={()=>dispatch(removeFromCart({ id: item.id }))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
// import React from 'react'

// export default function CartPage() {
//   return (
//     <div>
//       Cart Page
//     </div>
//   )
// }
