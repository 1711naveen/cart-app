import React, { useState } from 'react'
import Products from './Products'
import { Link } from 'react-router-dom';

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div >
      <div className="row">
        <div className="col-2 border-end border-5">
          <div className="border-bottom p-2">
            <strong>Filters</strong>
            <div className='mt-3 '>

            </div>
          </div>
        </div>
        <div className="col-10">
          <div className='container'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "80%" }}
            />
            <span> <Link to='/cart' className='btn btn-primary btn-sm mb-1'>Go to Cart</Link> </span>
          </div>
          <hr />
          <Products searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  )
}

export default Home
