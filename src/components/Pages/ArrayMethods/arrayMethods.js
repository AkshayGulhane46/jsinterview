import ConceptSection from '../Common/conceptSection';
import { maps, filter , reduce , FiltervsForeach ,op1 , op2 , op3, op4 , op5} from './arrayMethodsData';

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
            <ConceptSection{...op4}/>
            <ConceptSection{...op5}/>
        </div>
      </div>

    </>    
    )
}


export default concept;