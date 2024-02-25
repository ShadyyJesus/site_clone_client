import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [listOfProduct, setListOfProduct] = useState([]);
  const [MainImage, setMainImage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      setListOfProduct(response.data);
    });
    axios.get("http://localhost:3001/gallary").then((response) => {
      setMainImage(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className='App-header'>
        <div className='container'>
          <div className='header-top'>
            <div className='leftwrapper'>
              <a href='http://localhost:3000'>
                <strong className="logo">ANBU WEAR</strong>
              </a>
            </div>
            <div className='rightwrapper'>
              <ul className='list-menu'>
                <li className='list-item'>
                  <a href='' className='list-link'>КАТЕГОРИИ</a>
                </li>
                <li className='list-item'>
                  <a href='' className='list-link'>КОЛЛКЦИИ</a>
                </li>
                <li className='list-item'>
                  <a href='' className='list-link'>ДРУГОЕ</a>
                </li>
                <li className='list-item'>
                  <a href='' className='list-link'>RU</a>
                </li>
                <li className='list-item'>
                  <a href='' className='list-link'>EN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {MainImage.map((value, key) => {
        let imgtrue = true;
        if (value.img == "") imgtrue = false;
        return (
          <div className='Main-Image'>
            <div className='image'> {imgtrue && <img src={value.img} className='main-img' />} </div>
          </div>
        );
      })}
      {listOfProduct.map((value, key) => {
        return (
          <div className='Product'>
            <div className='Product'>
              <div className='product-image'> <img src={value.productimg} className='productimg'/> </div>
              <div className='title'> {value.title} </div>
              <div className='body'> {value.productText} </div>
              <div className='price'> {value.price} </div>
            </div>
          </div>);
      })}
    </div>
  );
}

export default App;
