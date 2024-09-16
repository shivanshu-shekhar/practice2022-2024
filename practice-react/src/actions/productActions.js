export const fetchProducts = () => async (dispatch) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({
      type: 'SET_PRODUCTS',
      payload: data,
    });
  };
  
  export const setCategoryFilter = (category) => {
    return {
      type: 'SET_CATEGORY_FILTER',
      payload: category,
    };
  };
  
  export const setPriceFilter = (price) => {
    return {
      type: 'SET_PRICE_FILTER',
      payload: price,
    };
  };
  
  export const filterProducts = () => {
    return {
      type: 'FILTER_PRODUCTS',
    };
  };