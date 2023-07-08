import React from 'react';
import  { useState, useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar';
import './search.css';
import NET from 'vanta/dist/vanta.net.min';
import {AiFillPlusCircle} from 'react-icons/ai';
import {  FaMailBulk,FaPhone} from 'react-icons/fa';
import data from './data';
import './candidate.css';


const Search = ({name,img,desc,location,date}) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: "ffffff",
        backgroundColor: "#08182b",
        points: 15.00,
        maxDistance: 10.00,
        spacing: 20.00

  }))
}
return () => {
  if (vantaEffect) vantaEffect.destroy()
}
}, [vantaEffect])

  const [searchTerm,setSearchTerm] = useState('');
  const [searchTerm2,setSearchTerm2] = useState('');


  return (
  <>
    <div className='search'>
      <Navbar />
      <div className='left1' ref={myRef}>
        <div className='content1'>
          <h1 className="heading1">Find a candidate </h1>
          <p >that suits your requirement</p>
        </div>
        <div className="input-group1">
          <input type="text" className="input"  placeholder="Job-description" autocomplete="off" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <input className="button--submit" value="Job Desc" type="submit" /><br></br>
        </div>
        <div className="input-group1">
          <input type="text" className="input"  placeholder="Find Location" autocomplete="off" onChange={(e)=>setSearchTerm2(e.target.value)}/>
          <input className="button--submit" value="Location" type="submit" />
        </div>
      </div>
    </div>
    {searchTerm ?(
    <div className='candi-item'>
      <div className='aditional'>
        <h3>Select Candidate</h3>
        <button className='add' ><AiFillPlusCircle size={30}/></button>
      </div>
      {data.filter((val)=>{
        if(searchTerm==""){
          return val;
        }else if(val.desc.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val)=>{
      return (
      <div className='c-item' key={val.id}>
        <button className='tag'>Internship</button>
        <div className='c-profile'>
          <img src={val.img} alt=' ' className='c-stud1' />
          <h2>{val.name}</h2>
          <span className='c-desc'>{val.desc}</span>
        </div>
        <div className='c-details'>
          <h2>Location : {val.location}</h2>
          <h4>Date : {val.date}</h4>
          <span><FaMailBulk size={20}/> <FaPhone size={20}/></span>
        </div>  
      </div>
       )
      })}
    </div>
    ):(
      <div className='candi-item'>
      {data.filter((val)=>{
        if(searchTerm2==""){
          return val;
        }else if(val.location.toLowerCase().includes(searchTerm2.toLowerCase())){
          return val;
        }
      }).map((val)=>{
      return (
      <div className='c-item' key={val.id}>
        <button className='tag'>Internship</button>
        <div className='c-profile'>
          <img src={val.img} alt=' ' className='c-stud1' />
          <h2>{val.name}</h2>
          <span className='c-desc'>{val.desc}</span>
        </div>
        <div className='c-details'>
          <h2>Location : {val.location}</h2>
          <h4>Date : {val.date}</h4>
          <span><FaMailBulk size={20}/> <FaPhone size={20}/></span>
        </div>  
      </div>
       )
      })}
    </div>
    )}
   

    
  </>
  )
}

export default Search
