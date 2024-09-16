const initialState = {
    items: [],
    filteredItems: [],
    filters: {
      category: [],
      price: ''
    },
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          items: action.payload,
          filteredItems: action.payload,
        };
      case 'FILTER_PRODUCTS':
        const { category, price } = state.filters;
        let filtered = state.items;

      if (category.length > 0) {
        filtered = filtered.filter(item => category.includes(item.category));
      }

      if (price) {
        if (price === 'low') filtered = filtered.filter(item => item.price < 50);
        else if (price === 'medium') filtered = filtered.filter(item => item.price >= 50 && item.price < 100);
        else if (price === 'high') filtered = filtered.filter(item => item.price >= 100);
      }

      return {
        ...state,
        filteredItems: filtered,
      };

    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload,
        },
      };

    case 'SET_PRICE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          price: action.payload,
        },
      };

    default:
      return state;
  }
};

export default productReducer;