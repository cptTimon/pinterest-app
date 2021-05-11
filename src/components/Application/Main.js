import React, { useEffect } from 'react';
import Image from '../../components/common/Image/Image';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import styles from './Main.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppStore } from '../../hooks/useAppStore';

export const Main = () => {
  const { appStore, fetchData, setPage } = useAppStore();
  const { images, page } = appStore;

  useEffect(()=>{
    fetchData(page);
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
          {images.map(({author, download_url}, index) => {
            return <Image key={ index } name={ author } url={ download_url } />;
          })}
        </div>
        <Button handler={ removePage } variant='amount'> 
          <i className='fas fa-minus'/>
        </Button>
        <Button handler={ addPage } variant='amount'> 
          <i className='fas fa-plus'/>
        </Button>
      </MainLayout>
    </div>
  );
};
