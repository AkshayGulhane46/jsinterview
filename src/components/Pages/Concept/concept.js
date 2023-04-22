import './concept.css'
import Text from 'react'
import ConceptSection from './conceptSection';
import { maps, filter , reduce , FiltervsForeach ,op1 , op2 , op3} from './data';

function concept(){
    return(
    <>    
      <div className='mainContainer'>
        <div className='individual'>
            <ConceptSection{...maps}/>
            <ConceptSection{...filter}/>
            <ConceptSection{...reduce}/>
            <ConceptSection{...FiltervsForeach}/>
            <ConceptSection{...op1}/>
            <ConceptSection{...op2}/>
            <ConceptSection{...op3}/>
            

        </div>
      </div>

    </>    
    )
}


export default concept;