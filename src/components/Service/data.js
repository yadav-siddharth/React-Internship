import {MdOutlineTrackChanges,MdOutlineTimelapse,MdOutlineFilterAltOff} from 'react-icons/md';
import {FcCollaboration} from 'react-icons/fc';

const data = [
          {
          id:1,          
          name :"Applicant Tracking System (ATS)",
          desc:"It allows for the efficient management of resumes/CVs, job applications, and candidate data. ATS features like sorting, filtering, and rating applications simplify the screening and shortlisting of candidates.",
          icon:<MdOutlineTrackChanges size={30}/>,
          },
          {
          id:2,
          name :"Time and Cost Efficiency",
          desc:"By automating various processes, such as job posting, application management, and communication,employers can significantly reduce manual efforts and associated expenses.",
          icon:<MdOutlineTimelapse size={30}/>,
          },
          {
          id:3,
          name :"Candidate Sourcing and Screening",
          desc:"Online recruitment solutions provide advanced search and filtering capabilities,allowing employers to identify suitable candidates based on specific criteria.",
          icon:<MdOutlineFilterAltOff size={30}/>,
          },
          {
          id:4,
          name :"Improved Collaboration",
          desc:"Online recruitment solutions facilitate collaboration among hiring teams, enabling multiple stakeholders to access and review candidate profiles, share feedback,and communicate effectively. ",
          icon:<FcCollaboration size={30}/>,
          },
]

export default data;