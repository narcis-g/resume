
import './normalize.css'
import Layout from './components/Layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import Avatar from './components/Avatar'
import Education from './components/Education'
import Skills from './components/Skills'
import Hobby from './components/Hobby'

export default function App() {
  return (
     <Layout 
       
       left= {
         <div>
           <Details></Details>
           <WorkExperience></WorkExperience>
           <Hobby></Hobby>
         </div>
       }

       right = {
         <div>
           <Avatar></Avatar> 
           <Education></Education>
           <Skills></Skills>
         </div>
       }
       />
       
     
    
  )
}


