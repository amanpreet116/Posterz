import React from 'react';
import {useNavigate} from "react-router-dom"
import './Categories.scss';
import Product from '../../components/product/Product';

function Categories() {
    const navigate= useNavigate();

    const categoryList = [{
        id: "comics",
        value: 'Comics'
    },
    {
        id: "tv-shows",
        value: 'TV Shows'
    },
    {
        id: "sports",
        value: 'Sports'
    },
];

// on clicking any of the 3 options this fiunction will be called and 
// it will direct to that particular page inside category 
  function updateCategory(e)
  {
    navigate(`/category/${e.target.value}`);
    
  }
  return (
    <div className='Categories'>
        <div className="container">
        <div className="header">
            <div className="info">
                <h2>Explore All Print and Artwork</h2>
                <p>India's largest collection of wall posters for you</p>
            </div>
            <div className="sort-by">
                <div className="sort-by-container">
                    <h3 className="sort-by-text">Sort By</h3>
                    <select className='select-sort-by' name="sort-by" id="sort-by">
                        <option value="relevence">Relevence</option>
                        <option value="newest-first">Newest First</option>
                        <option value="price-lth">Price- Low To High</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="filter-box">
                <div className="category-filter">
                    <h3>Category</h3>

                    {categoryList.map((item) => (
                    <div key={item.id} className="filter-radio">
                        <input 
                               name="category"
                               type="radio" 
                               value={item.id}
                               id= {item.id}
                               onChange={updateCategory}
                               />
                        <label htmlFor={item.id}>{item.value}</label>
                    </div>
                    ))}

                    
                </div>
            </div>
            <div className="product-box">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Categories