import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(1);

  const decrementsfonk = () => {
    setResult(result - amount);
   
  };
  const incrementfonk = () => {
    setResult(result + amount);
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <div>
        <div
          style={{ width: "100px", height: "50px", lineHeight: "50px",position:"relative" }}
          className="my-3 mx-auto fs-1 text-primary fw-bold  text-center"
        >
          {result}
          <div style={{position:"absolute",fontSize:"20px",bottom:"0",right:"0"}} className="smallamountdiv text-warning my-5 ">{amount}</div>
        </div>
        <div className="">
          <button
            className="mx-3 btn btn-danger fs-3 px-4"
            onClick={() => {
              decrementsfonk();
            }}
          >
            -
          </button>
          <button
            className="mx-3 btn btn-success fs-3 px-4"
            onClick={() => {
              incrementfonk();
            }}
          >
            +
          </button>
        </div>
        <div className="amountsdiv border d-flex mt-5 justify-content-between">
          <div onClick={()=>setAmount(1)}  className="mx-1 border bg-secondary px-2 text-white fw-bold btn">
            1
          </div>
          <div onClick={()=>setAmount(2)} className="mx-1 border bg-secondary px-2 text-white fw-bold btn">
            2
          </div>
          <div onClick={()=>setAmount(5)} className="mx-1 border bg-secondary px-2 text-white fw-bold btn">
            5
          </div>
          <div onClick={()=>setAmount(10)} className="mx-1 border bg-secondary px-2 text-white fw-bold btn">
            10
          </div>
          <div onClick={()=>setAmount(100)} className="mx-1 border bg-secondary px-2 text-white fw-bold btn">
            100
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
