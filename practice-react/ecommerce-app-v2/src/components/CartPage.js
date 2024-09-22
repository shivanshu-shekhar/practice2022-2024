import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { updateProductQuantity } from '../features/productsSlice'; // Ensure this action is available
import { Button, Card, Row, Col } from 'react-bootstrap';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const products = useSelector(state => state.products);

  const handleQuantityChange = (product, delta) => {
    const newQuantity = product.quantity + delta;
    
    if (newQuantity > 0) {
      dispatch(updateProductQuantity({ id: product.id, quantity: newQuantity }));
      dispatch(addToCart({ id: product.id, quantity: delta }));
    } else {
      dispatch(updateProductQuantity({ id: product.id, quantity: 0 }));
      dispatch(removeFromCart(product.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    dispatch(updateProductQuantity({ id, quantity: 0 }));
  };

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <Row className='gap-3 justify-content-center'>
          {cartItems.map(item => {
            const product = getProductById(item.id);
            if (!product) return null;
            return (
              <Col key={product.id} md={4} xs={12} sm={6} lg={3}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <div className="d-flex align-items-center">
                      <Button
                        onClick={() => handleQuantityChange(product, -1)}
                        disabled={item.quantity <= 0}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button onClick={() => handleQuantityChange(product, 1)}>+</Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default CartPage;
