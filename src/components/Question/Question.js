import React,{useState} from 'react';
import './question.css';
import data from './data';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';


const Question = ({ques,ans}) => {
          const [likes ,setLikes] = useState(false);

          const handleLike = () => {
                    setLikes(likes + 1);
          };


  return (
    <div className='question'>
          <span className='question-span'>Why Do Hiring Manager or HR Professionals use this ?</span>
          <div className='question-item'>
                    {data.map((item,id)=>(
                              <div className='q-item' key={id}>
                                        <span className='q-span'>
                                                  {item.id} {item.ques}
                                                  
                                                  <p className="q-like">
                                                            <AiOutlineLike onClick={handleLike} size={20} style={{color:"#F24C3D"}}/>
                                                            {likes} 
                                                  </p>
                                                  
                                        </span>
                                        <p className='q-par'>{item.ans}</p>
                              </div>

                    ))}



          </div>
      
    </div>
  )
}

export default Question
