import React from 'react';
import './location.css';
import data from './data';


const Location = ({img,add}) => {
  return (
  <> 
    <h2 className='l-h2'>Where to Find Us ?</h2>
    <div className='location-bg'>
          <div className='location-item'>
            {data.map((item,id)=>(
                <div className='l-item' key={item.id}>
                  <img src={item.img} alt='' className='loc-img' />
                  <span>{item.add}</span>
                </div>

            ))}

          </div>
      
    </div>
  </> 
  )
}

export default Location
