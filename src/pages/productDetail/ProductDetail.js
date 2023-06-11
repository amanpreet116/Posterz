import React from 'react'
import dummyImg from '../../assets/poster (5).jpg';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className='ProductDetail'>
        <div className="container">
            <div className="product-layout">
                <div className="product-img center">
                    
                    <img src={dummyImg} alt="product img" />
                    
                </div>
                <div className="product-info">
                    <h1 className="heading">
                        This is the Title, wall poster
                    </h1>
                    <h3 className="price"> ₹549</h3>
                    <p className='description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus quisquam at porro assumenda veritatis obcaecati voluptatum minima nam ab amet deserunt commodi saepe, quas, consequatur quam facere tempore aliquam!
                    </p>

                    <div className="cart-options">
                        <div className="quantity-selector">
                             <span className='btn decrement'>-</span>
                             <span className='quantity'>2</span>
                             <span className='btn increment'>+</span>
                        </div>
                       <button className='btn-primary add-to-cart'>Add to Cart</button>
                    </div>

                    <div className="return-policy">
                        <ul>
                            <li>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quis cumque commodi unde perferendis quia, laboriosam laudantium non? Ducimus, labore velit? Voluptas tempore doloribus accusamus dolore numquam ipsam quae nobis!
                                
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex quam deleniti consectetur nulla perspiciatis voluptate dicta suscipit molestiae dignissimos totam corporis ad iure ipsa, blanditiis, neque sit deserunt? Amet.

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail