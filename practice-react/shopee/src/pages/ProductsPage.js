import React from 'react';
import { useGetProductsQuery } from '../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/productsSlice';
 
export default function ProductsPage() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
 
  if (isLoading) {
    return <div>Loading products...</div>;
  }
 
  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }
 
  return (
    <div>
      <h1>Products Page</h1>
      <ul className="row gap-3">
        {products.map((product) => {
        const quantity = cart[product.id]?.quantity || 0;
          return (
            <li key={product.id} className="card" style={{ width: "18rem" }}>
              <img src={product.image} alt={product.title} style= {{width: "249px"}} className="card-img-top" />
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              {quantity > 0 ? (<div>
                <button className="btn btn-primary"  onClick={()=> dispatch(removeFromCart({ id: product.id }))}>-</button>
                  <span>{quantity}</span>
                  <button className="btn btn-primary"  onClick={() => dispatch(addToCart(product))}>+</button>
                </div>
              ) : (
                <button className="btn btn-primary"  onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}





// import React from 'react';
// import { useGetProductsQuery } from '../store/productsSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart } from '../store/productsSlice';
 
// export default function ProductsPage() {
//   const { data: products, error, isLoading } = useGetProductsQuery();
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
  
//   if (isLoading) {
//     return <div>Loading products...</div>;
//   }
 
//   if (error) {
//     return <div>Error fetching products: {error.message}</div>;
//   }
 
//   return (
//   <div> 
//     <ul className="row gap-3">
//       {products.map((product) => (
//         <li key = {product.id} className="card" style={{ width: "18rem" }}>
//           <img src={product.image} alt={product.title} style= {{width: "100px"}} className="card-img-top"/>
//           <h5 className="card-title">{product.title}</h5>
//           <p className="card-text">{product.description}</p>
//           <p className="card-text">Price: ${product.price}</p>
//           <a href="#" className="btn btn-primary" onClick={()=>dispatch(addToCart(product))}>Add to cart</a>
//         </li>
//       ))}
//     </ul>
//   </div>
//   );
// }