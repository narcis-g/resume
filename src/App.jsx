
import './normalize.css'
import Layout from './components/Layout';
import Details from './components/Details'

export default function App() {
  return (
     <Layout 
       
       left= {
         <div>
           <Details></Details>
         </div>
       }

       right = {
         <div>right side</div>
       }
       />
       
     
    
  )
}


