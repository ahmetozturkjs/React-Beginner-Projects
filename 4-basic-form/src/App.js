import { useState } from "react";

function App() {

  const [inputInfo,setInputInfo]=useState({
    email:"",
    firstname:"",
    surname:""
  })
  const [color,setColor]=useState("")
  const [success,setSuccess]=useState("")
  const HandleSubmit=(e)=>{
    e.preventDefault()
    if(inputInfo.email&&inputInfo.firstname&&inputInfo.surname){
      setColor("text-success")
      setSuccess("Successfully registered")
    }
    else{
      setColor("text-danger")
      setSuccess("All fields must be filled")
    }

    setTimeout(() => {
      setSuccess("")
    }, 2000);
  }
  
  return (
    <div className="d-flex justify-content-center py-5 my-5">
      <form onSubmit={HandleSubmit} className="w-25 border  p-4 rounded-5 bg-secondary">
        {<p className={`${color}`} >{success}</p> }
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-white">
            Email address
          </label>
          <input
          onChange={(e)=>setInputInfo({...inputInfo,email:e.target.value})}
            placeholder="Email adress"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {!inputInfo.email&& <span className="text-warning">*Email information cannot be left blank.</span>}
        </div>
        <div className="mb-3">
          <label for="firstname" className="form-label text-white">
            FirstName
          </label>
          <input
          onChange={(e)=>setInputInfo({...inputInfo,firstname:e.target.value})}
            placeholder="First Name"
            type="text"
            className="form-control"
            id="firstname"
          />
          {!inputInfo.firstname&& <span className="text-warning">*Firstname information cannot be left blank.</span>}
        </div>
        <div className="mb-3">
          <label for="surname" className="form-label text-white">
            Surname
          </label>
          <input
          onChange={(e)=>setInputInfo({...inputInfo,surname:e.target.value})}
            placeholder="Sur Name"
            type="text"
            className="form-control"
            id="surname"
          />
          {!inputInfo.surname&& (<span className="text-warning">*Surname information cannot be left blank.</span>)}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
