import './App.css';
import { useContext, useEffect, useRef, useState } from 'react';
import Worker from './Components/Worker';
function App() { 
    let arr = [   {
   title:"FullStack Developer",
   skills:[`React`,`Python`,`midweight`,`Fullstack`],
   top:[`Photosnap`,`New!`,`Featured`],
   bottom:[`1day ago`,`Fulltime`,`USA only`]
  },{
   title:"Senior front-end developer",
   skills:[`HTML`,`CSS`,`JavaScript`,`Front-end`,`Senior`],
   top:[`Manage`,`New!`,`Featured`],
   bottom:[`1day ago`,`PartTime`,`Remote`]
  },
  {
   title:"Junior Front-en Developer",
   skills:[`sass`,`JavaScript`,`Front-end`,`Junior`],
   top:[`Account`,`New!`],
   bottom:[`2day ago`,`PartTime`,`USA only`]
  },
  {
   title:"Junior Front-en Developer",
   skills:[`CSS`,`JavaScript`,`Front-end`,`Junior`],
   top:[`MyHome`],
   bottom:[`2day ago`,`PartTime`,`USA only`]
  },
  {
   title:"Frontend",
   skills:[`sass`,`JS`,`Front-end`,`Junior`],
   top:[`Account`,`New!`],
   bottom:[`5d ago`,`Contract`,`USA only`]
  },
  {
   title:"Junior Front-en Developer",
   skills:[`sass`,`JS`,`Front-end`,`Junior`],
   top:[`Account`,`New!`],
   bottom:[`2day ago`,`PartTime`,`USA only`]
  },
  {
   title:"Software Engineer",
   skills:[`sass`, `Ruby`,`JavaScript`,`Midweight`,`Fullstack`],
   top:[`Loop Studios`,`New!`],
   bottom:[`1w ago`,`Full Time`,`Worldwide`]
  },
  {
   title:"Junior Backend Developer",
   skills:[`Ruby`,`RoR`,`Backend`,`Junior`],
   top:[`FaceIt`],
   bottom:[`2w ago`,`Full Time`,`Worldwide`]
  },
  {
   title:"Junior Developer",
   skills:[`sass`,`JavaScript`,`Vue`,`Junior`],
   top:[`Insure`],
   bottom:[`2w ago`,`Full Time`,`USA only`]
  },
  {
   title:"Full Stack Engineer",
   skills:[`Python`,`JavaScript`,`Fullstack`,`Midweight`,`Django`],
   top:[`Eyecam Co.`],
   bottom:[`3w ago`,`Full Time`,`Worldwide`]
  },
  {
   title:"Front-end Dev",
   skills:[`Sass`,`JavaScript`,`React`,`Midweight`,`Django`],
   top:[`The Air Filter Company.`],
   bottom:[`1mo ago`,`Part Time`,`Worldwide`]
  }
]
let a = []
let input = useRef(null)
let btn = useRef(null)
     let [value,setValue] = useState(``)
     let [workers,setWorkers] = useState(arr)
     let [alt,setAlt] = useState([])
   useEffect(()=>{
      setValue(input.current.innerHTML)
   },[])
   useEffect(()=>{
      let kkk = []
      if(value != ``){
            input.current.style.display = `flex`
            btn.current.style.display = `block`
      }else{
         input.current.style.display = `none`
         btn.current.style.display = `none`
      }
      arr.forEach((e,index)=>{
         let skills = e.skills
         let v = 0
         if(value){
            value.forEach((x)=>{
               skills.forEach((s)=>{
                  if(x == s){
                     v += 1
                  }
               })
            })
         }
         if(v == value.length && v != 0){
            kkk.push(e)
            }
            
            })
         if(kkk.length > 0){
            setWorkers(kkk)
         }
      
   },[value])
   
return(
   <>
   <div className='header'></div>
   
   <div className='input' ref={input} >
      </div>
   <button ref={btn} className='clear' onClick={()=>{setWorkers(arr);input.current.innerHTML = ``;setValue(``)}}>clear</button>
   <div className='list'>
      {workers.map((e,index)=>{
         return(
            <div className="worker" key={index}>
         <Worker  title={e.title}
   skills={e.skills} 
   top={e.top} 
    bottom={e.bottom}
    value={value}
    click={(e)=>{input.current.append(e);setValue([...value,e.innerHTML])}}
   />  
   </div>
         )
      })}

   </div>
</>
)
}
export default App;
