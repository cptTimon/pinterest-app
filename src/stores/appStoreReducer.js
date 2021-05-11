export const ACTIONS = {
  SET_IMAGES: 'SET_IMAGES',
  SET_PAGE: 'SET_PAGE',
};

export const appStoreReducer = (state, action) => {
  const { data, page } = action.payload;

  switch(action.type){
    case ACTIONS.SET_IMAGES:
    {
      return {
        ...state,
        images: [...data],
      };
    }
    case ACTIONS.SET_PAGE:
    {
      return{
        ...state,
        page: page,
      };
    }
    default:
      return state; 
  }
};