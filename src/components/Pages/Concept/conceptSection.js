import './conceptSection.css'

function conceptSection({
    topic,
    question,
    answer,
    code,
    explaination
}){
    return(
    <>    
        <div className='main'> 
            <div className='heading'>
                <h1> {topic} </h1>
            </div>
            <div className='content'>
                <div className='question'>
                    <p>{question}</p>
                </div>
                <div className='answer'>
                    <p>{answer}</p>
                </div>
                <div className='spacer'></div>
                <div className='spacer'> Example Code </div>
                <span >
                    <textarea className='code' rows={10} cols={50} defaultValue= {code}/>   
                </span>
                <div className='spacer'></div>

                <div className='spacer' > Output </div>
                <div className='explaination'> 
                    <p> {explaination} </p>
                </div>
            </div>
        </div>

    </>    
    )
}


export default conceptSection;