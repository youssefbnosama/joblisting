export default function Worker(props){
    function click(e){
        let span = document.createElement(`span`)
        span.append(e)
        if(props.value){
            let x = 0
           props.value.forEach((r)=>{
            if(e != r){
                x +=1
            }
            if(x == props.value.length){
                props.click(span)
            }
           })
        }else {
            props.click(span)
        }
    }
    
    return(
        <>
            <div className="b">
            <div className="img"></div>
            <div className="info">
                <ul className="top">
                    {props.top.map((e,index)=>{
                     if(index == 2){
                        return <li className="featured" key={index}>{e}</li>
                     }else if(index ==1){
                        return <li className="new" key={index}>{e}</li>
                     }else{
                        return <li key={index}>{e}</li>
                     }
                    })}
                </ul>
                <h2 className="title">{props.title}</h2>
                <ul className="bottom">
                    {props.bottom.map((e,index)=>{
                        return <li  key={index}>{e}</li>
                    })}
                </ul>
                
            </div>                
            </div>

            <ul className="skills">
                {props.skills.map((e,index)=>{
                    return( <li onClick={()=>{click(e)}} key={index}>{e}</li>)
                })}
            </ul>
        </>
    )
}