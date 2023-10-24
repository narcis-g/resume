
import './normalize.css'
import Layout from './components/Layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import Avatar from './components/Avatar'
import Education from './components/Education'

export default function App() {
  return (
     <Layout 
       
       left= {
         <div>
           <Details></Details>
           <WorkExperience></WorkExperience>
         </div>
       }

       right = {
         <div>
           <Avatar></Avatar> 
           <Education></Education>
         </div>
       }
       />
       
     
    
  )
}


