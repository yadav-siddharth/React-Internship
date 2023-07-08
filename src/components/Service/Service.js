import React from 'react';
import './service.css';
import data from './data';
import {MdOutlineTrackChanges,MdOutlineTimelapse,MdOutlineFilterAltOff} from 'react-icons/md';
import {FcCollaboration} from 'react-icons/fc';

const Service = ({name,desc,icon}) => {
  return (
    <div className='service'>
          <span className='service-header'>What are the key features ?</span>
          <div className='service-item'>
                    {data.map((item,id)=>(
                              <div className='item' key={id}>
                                        <span>{item.icon}{item.name}</span>
                                        <p className='par2'>{item.desc}</p>
                              </div>

                    ))}
          </div>
      
    </div>
  )
}

export default Service
