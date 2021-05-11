import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import Image from '../src/components/common/Image/Image';

const ACTIONS = {
  ADD: 'ADD',
};

function reducer(images, action)
{
  const { data } = action.payload;
  switch(action.type){
    case ACTIONS.ADD:
    {
      return [...data];
    }
    default:
      return []; 
  }
}

function App() {
  const [page, setPage] = useState(4);
  const [images, dispatch] = useReducer(reducer, []);
  
  const ConvertToObjects = data => {
    console.log('nastepny');
    dispatch({type: ACTIONS.ADD, payload: {data}});
  };

  useEffect(()=>{
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=25`)
      .then(response => response.json())
      .then(data => { 
        ConvertToObjects(data);
      });
  },[page]);
  
  return (
    <div className="App">
      <h3>My pinterest-app 
          nr strony: { page } 
      </h3>
      {images.map(({download_url, author}, index) => {
        return <Image key={ index } url={ download_url } name={ author }/>;
      })}
      <button onClick={() => setPage(page-1)}> 
        Minus
      </button>
      <button onClick={() => setPage(page+1)}> 
        Plus
      </button>
    </div>
  );
}

export default App;
