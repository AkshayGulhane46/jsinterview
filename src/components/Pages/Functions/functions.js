
import ConceptSection from "../Common/conceptSection";
import {functionDeclaration,firstClassFunction,functionExpression,iife,functionScope,Hoisting
    ,op1,paramsVSArgs,spreadVsRest,op2,arrowFunctions,thiskeyword} from './functionsdata'
function Functions(){
    return(
        <> 
        <div className='mainContainer'>
        <div className='individual'>
            <ConceptSection{...functionDeclaration}/>
            <ConceptSection{...functionExpression}/>
            <ConceptSection{...firstClassFunction}/>
            <ConceptSection{...iife}/>
            <ConceptSection{...functionScope}/>
            <ConceptSection{...Hoisting}/>
            <ConceptSection{...op1}/>
            <ConceptSection{...paramsVSArgs}/>
            <ConceptSection{...spreadVsRest}/>
            <ConceptSection{...op2}/>
            <ConceptSection{...arrowFunctions}/>
            <ConceptSection{...thiskeyword}/>
            </div>
        </div>
        </>
    )
}


export default Functions;