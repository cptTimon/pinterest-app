import React, { useReducer, createContext } from 'react';
import { appStoreReducer } from './appStoreReducer';
import { ACTIONS } from './appStoreReducer';
import  { initialState } from './initialState';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

// eslint-disable-next-line react/prop-types
export const AppStoreProvider = ({children}) => {
  const [appStore, dispatch] = useReducer(appStoreReducer, initialState);

  const fetchData = async (page) => {
    await fetch(`https://picsum.photos/v2/list?page=${page}&limit=25`)
      .then(response => response.json())
      .then(data => { 
        dispatch({type: ACTIONS.SET_IMAGES, payload: { data }});
      });
  };

  const setPage = (page) => {
    dispatch({type: ACTIONS.SET_PAGE, payload: { page }});
  };

  const value= {
    appStore,
    fetchData,
    setPage,
  };

  return(
    <AppContext.Provider value={ value }>{ children }</AppContext.Provider>
  );
};

//export function useAppStore() { return React.useContext(AppContext);}