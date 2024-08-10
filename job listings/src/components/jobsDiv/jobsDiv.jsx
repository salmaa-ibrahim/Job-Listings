import './jobsDiv.css'
// import photosnap from"../../assets/images/photosnap.svg"
function JobsDiv(prop){
    // const ArrayOfBtns = [...prop.tools , ...prop.languages]

    const ArrayOfBtns = [...prop.tools]


    return(
        <div className='jobsDiv' style={prop.new ==true? {borderLeft:" 5px solid hsl(180, 29%, 50%)"}:null}>
            <div className="leftDiv">
                <img src={prop.Img} alt="" />
                <div className="details">
                    <div className="txtOne">
                        <span>{prop.companyName}</span>
                        {prop.new == true? <button className="new">New!</button> : null}
                        {prop.featured == true? <button className="featured">Featured</button> : null }
                    </div>
                    <div className="txtTwo">
                        <p>{prop.jobTitle}</p>
                    </div>
                    <div className="txtThree">
                        <p>{prop.duration}</p>
                        <div className="dot"></div>
                        <p>{prop.time}e</p>
                        <div className="dot"></div>
                        <p>{prop.describe}</p>
                    </div>
                </div>
            </div>
            <hr className='line'/>
            <div className='btns'>
                {/* {ArrayOfBtns.map((name)=>{
                    return <><button>{name}</button></>
                })} */}

                {
                    ArrayOfBtns.map((item)=>{
                        return(
                            <><p className='tools'>{item}</p></>
                        )
                    })
                }






            </div>
            
        </div>
    )
}

export default JobsDiv