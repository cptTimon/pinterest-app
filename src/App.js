import React, {useState, useEffect, useReducer} from 'react';
import Image from '../src/components/common/Image/Image';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import styles from './App.module.scss';
import Button from './components/common/Button/Button';

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
  
  const addPage = () => {
    setPage(page+1);
  };

  const removePage = () => {
    if (page === 1) {
      window.alert('You are on the first page!');
    } else setPage(page-1);
  };

  return (
    <div className={styles.app}>
      <MainLayout>
        <div >
          {images.map(({download_url, author}, index) => {
            return <Image key={ index } url={ download_url } name={ author }/>;
          })}
        </div>
        <Button handler={removePage} variant='amount'> 
          <i className='fas fa-minus'/>
        </Button>
        <Button handler={addPage} variant='amount'> 
          <i className='fas fa-plus'/>
        </Button>
      </MainLayout>
    </div>
  );
}

export default App;
