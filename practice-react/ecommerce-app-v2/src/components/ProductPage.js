import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, updateProductQuantity } from '../features/productsSlice';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import ReviewsModal from './ReviewsModal';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  // Fetch and set categories (assuming the Fake Store API provides them)
  const categories = [...new Set(products.map(product => product.category))];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: '$0 - $50', min: 0, max: 50 },
    { label: '$51 - $100', min: 51, max: 100 },
    { label: '$101 - $200', min: 101, max: 200 },
    { label: '$201 - $500', min: 201, max: 500 },
    { label: '$500+', min: 500, max: Infinity }
  ];

  useEffect(() => {
    filterProducts();
  }, [selectedCategories, selectedPriceRange, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevState => 
      prevState.includes(category)
        ? prevState.filter(cat => cat !== category)
        : [...prevState, category]
    );
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    setFilteredProducts(filtered);
  };

  const handleShowReviews = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseReviews = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
    dispatch(updateProductQuantity({ id: product.id, quantity: product.quantity + 1 }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
    dispatch(updateProductQuantity({ id: product.id, quantity: product.quantity - 1 }));
  };

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

  return (
    <div>
      <h1>Products Page</h1>
      <div className="filters">
        <Form.Group>
          <Form.Label>Categories</Form.Label>
          {categories.map(category => (
            <Form.Check
              key={category}
              type="checkbox"
              label={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          ))}
        </Form.Group>
        <Form.Group>
          <Form.Label>Price Range</Form.Label>
          {priceRanges.map(range => (
            <Form.Check
              key={range.label}
              type="radio"
              name="priceRange"
              label={range.label}
              value={`${range.min}-${range.max}`}
              checked={selectedPriceRange === `${range.min}-${range.max}`}
              onChange={() => handlePriceRangeChange(`${range.min}-${range.max}`)}
            />
          ))}
        </Form.Group>
      </div>
      <Row className="g-3 justify-content-center">
        {filteredProducts.map((product) => {
          const cartItem = cart.find(item => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <div className="d-flex align-items-center">
                    {quantity > 0 ? (
                      <>
                        <Button
                          variant="primary"
                          onClick={() => handleQuantityChange(product, -1)}
                          disabled={quantity <= 0}
                        >
                          -
                        </Button>
                        <span className="mx-2">{quantity}</span>
                        <Button
                          variant="primary"
                          onClick={() => handleQuantityChange(product, 1)}
                        >
                          +
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    )}
                    {quantity > 0 && (
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove from Cart
                      </Button>
                    )}
                  </div>
                  <div>
                  <Button className = "mt-2" variant="secondary" onClick={() => handleShowReviews(product)}>
                            Rate & Reviews
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {selectedProduct && (
        <ReviewsModal
          product={selectedProduct}
          show={showModal}
          handleClose={handleCloseReviews}
        />
      )}
    </div>
  );
};

export default ProductPage;
