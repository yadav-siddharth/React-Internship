import React from 'react'
import './candidate.css';
import stud3 from '../../assests/stud3.jpg';
import {  FaMailBulk,FaPhone} from 'react-icons/fa';
import {AiFillPlusCircle} from 'react-icons/ai';
import data from './data';


const Candidate = ({name,img,desc,location,date}) => {
  return (
    <div className='candidate'>
      <div className='aditional'>
        <h3>Select Candidate</h3>
        <button className='add' ><AiFillPlusCircle size={30}/></button>
      </div>

          <div className='candi-item'>
            {data.map((item,id)=>(
              <div className='c-item' key={item.id}>
                <button className='tag'>Internship</button>
                <div className='c-profile'>
                  <img src={item.img} alt=' ' className='c-stud1' />
                  <h2>{item.name}</h2>
                  <span className='c-desc'>{item.desc}</span>
                </div>
                <div className='c-details'>
                  <h2>Location : {item.location}</h2>
                  <h4>Date : {item.date}</h4>
                  <span><FaMailBulk size={20}/> <FaPhone size={20}/></span>
                </div>  
              </div>

            ))}

          </div>
      
    </div>
  )
}

export default Candidate
