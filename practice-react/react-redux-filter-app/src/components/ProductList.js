import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setCategoryFilter, setPriceFilter, filterProducts } from '../actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredItems, filters } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newCategory = checked 
      ? [...filters.category, value] 
      : filters.category.filter(c => c !== value);
    dispatch(setCategoryFilter(newCategory));
    dispatch(filterProducts());
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
    dispatch(filterProducts());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Filters</h4>
          <div>
            <h5>Category</h5>
            <div>
              <input type="checkbox" value="men's clothing" onChange={handleCategoryChange} /> Men
            </div>
            <div>
              <input type="checkbox" value="women's clothing" onChange={handleCategoryChange} /> Women
            </div>
            <div>
              <input type="checkbox" value="electronics" onChange={handleCategoryChange} /> Electronics
            </div>

            <h5>Price</h5>
            <div>
              <input type="radio" name="price" value="low" onChange={handlePriceChange} /> Low ($0 - $50)
            </div>
            <div>
              <input type="radio" name="price" value="medium" onChange={handlePriceChange} /> Medium ($50 - $100)
            </div>
            <div>
              <input type="radio" name="price" value="high" onChange={handlePriceChange} /> High ($100+)
            </div>
            <div>
              <input type="radio" name="price" value="" onChange={handlePriceChange} /> All
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <h4>Products</h4>
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;