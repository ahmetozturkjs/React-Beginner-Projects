import { useEffect, useState } from "react";

import cold from "../src/assets/cold.jpg"
import hot from "../src/assets/hot.jpg"
import autumn from "../src/assets/autumn.webp"
import winter from "../src/assets/winter.jpg"
import summer from "../src/assets/summer.webp"
import spring from "../src/assets/spring.jpg"

function App() {
  const [temperature, setTemperature] = useState(25);
  const [color,setColor]=useState("#b21f1f")
  const [bgImage,setBgImge]=useState(spring)


useEffect(()=>{
  if(-10>temperature){
    setColor("#1A2A6B")
    setBgImge(cold)
  }
  else if(0>=temperature&&temperature>=-10){
    setColor("#4141b0")
    setBgImge(winter)
  }
  else if(10>temperature&&temperature>0){
    setColor("#d45961")
    setBgImge(autumn)
  }
  else if(20>=temperature&&temperature>=10){
    setColor("#d45961")
    setBgImge(spring)
  }
  else if(40>temperature&&temperature>20){
    setColor("#B72A1F")
    setBgImge(summer)
  }
  else if(temperature>=40){
    setColor("#ff0000")
    setBgImge(hot)
  }
},[temperature])




  
  console.log(temperature);
  console.log(color);


  const incrementFunk = () => {
    if (temperature>-20) {
      setTemperature(temperature-1)
      
    }
    
  };

  const decreaseFunk = () => {
    if (temperature<50) {
      setTemperature(temperature+1)
     
    }
  };



  return (
    <div className="bg"  style={{height:"100vh", backgroundImage:`url(${bgImage})`}}>
      <div
        style={{ height: "100vh" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <div
          style={{ height: "30rem", width: "25rem", borderRadius: "20px",opacity:"0.7" }}
          className="appdiv border-3 bg-primary d-flex flex-column justify-content-around align-items-center"
        >
          <div
            style={{ height: "18rem", width: "18rem", borderRadius: "50%", backgroundColor:`${color}` }}
            className="paneldiv border  d-flex justify-content-center align-items-center"
          >
            <div className=" fs-1 fw-bold">{temperature} °C</div>
          </div>
          <div className="buttonsdiv">
            <div
               onClick={ incrementFunk}
              style={{ borderRadius: "50%", width: "60px" }}
              className="btn bg-secondary mx-4 fs-2 px-3 fw-bold border-5"
            >
              -
            </div>
            <div
              onClick={ decreaseFunk}
              style={{ borderRadius: "50%", width: "60px" }}
              className="btn bg-secondary mx-4 fs-2 px-3 fw-bold border-1"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
