import React from "react";
import './hero.css';
import stud1 from '../../assests/stud1.jpg';
import stud2 from '../../assests/stud2.jpg';
import {MdOutlineScheduleSend,MdOutlineReviews,MdWorkOutline} from 'react-icons/md';
import {PiStudentBold} from 'react-icons/pi';
import {HiOfficeBuilding} from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="user">
          <div className="student"><PiStudentBold /> For Student</div>
          <div className="employeer"><MdWorkOutline /> For Employeer</div>
          <div className="company"><HiOfficeBuilding /> For Company</div>
        </div>
        <div className="content">
          <h1 className="heading">Next generation hiring solution</h1>
          <p >Powerful agile all-in-one hiring tool for your recuriting</p>
          <p className="par">needs built with productivityat heart and loaded with features to help you hire 
            more effectivetly
          </p>
          <button className="btn">Have a Look</button>
        </div>
      </div>

      <div className="right">
        <div className="photo-section">
          <div className="photo-content1">
            <img src={stud1} className="photo-stud1" alt="stud1"/>
            <div className="stud1-content">
            <span><MdOutlineReviews size={70}/>" Recommended by my Friend , I Appiled to my dream Job with the help of recuriting
                Amazing Results Thank You!. "</span>
            </div>
          </div>

          <div className="photo-content2">
            <div className="stud2-content">
            <span><MdOutlineScheduleSend size={20}/> Appiled 3 days ago.</span>
            </div>
            <img src={stud2} className="photo-stud2" alt="stud1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
