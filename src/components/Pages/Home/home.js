import './home.css'
import {heading,concepts} from './data';
import HomeSection from './homesection'

function home(){
    return(
    <>    
        <div className='heading'>
            <HomeSection{...heading}/>            
        </div>
        <div className='concepts'>
            <HomeSection{...concepts}/>
        </div>
    </>    
    )
}


export default home;