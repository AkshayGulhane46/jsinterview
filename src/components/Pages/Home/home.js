import './home.css'
import {heading,concepts} from './data';
import HomeSection from './homesection'

function home(){
    return(
    <>    
        <div className='heading'>
            <HomeSection{...heading}/>            
        </div>

        <div className='concepts-section'>
        <button className='concept-btn'><a href='/arrayMethods'> Array Methods </a></button>
        <button className='concept-btn'><a href='/functions'> Functions </a></button>
        </div>    
    </>    
    )
}


export default home;