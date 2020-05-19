
import React,{useEffect,useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const[trainContainer,setTrainContainer]=useState([])
  const[trainInfo,setTrainInfo]=useState({
    to:'',
    from:'',
    arrive:'',
    dept:''
  });


   const handleChange=(e)=>{
    let trainInfoCopy={...trainInfo};
    trainInfoCopy[e.target.id]=e.target.value;
    setTrainInfo(trainInfoCopy)
  }
  const handleAddTrain=()=>{
      let handleAddTrainCopy=Array.from(trainContainer);
      handleAddTrainCopy.push(trainInfo);
      setTrainContainer(handleAddTrainCopy);
      console.log(handleAddTrainCopy)
  }
  useEffect(()=>{
    console.log(trainContainer) 
    },[trainContainer])
  useEffect(()=>{
    console.log(trainInfo)
  },[trainInfo])


  return (
    <div className="App">
<h4>Train Time Table</h4>
<div class="col-sm-12">
     <input type="text" id="to" placeholder="To" onChange={handleChange} />
     <input type="text" id="from" placeholder="From" onChange={handleChange} />
     <input type="text" id="arrive" placeholder="Arrive" onChange={handleChange} />
     <input type="text" id="dept" placeholder="Dept" onChange={handleChange} />
     <button onClick={handleAddTrain}  type="submit">Add Train</button>
     </div>
     <div class="col-sm-6">
     <table class="table" >
            <thead class="thead-dark">
          <td>No.</td>
          <td>To</td>
          <td>From</td>
          <td>Arrive</td>
          <td>Dept</td>
        </thead>
        <tbody>
     {trainContainer.map((el,index)=>{
       return(
        <tr key={el.index} >
          <td>{index}</td>
        <td>{el.to}</td>
        <td>{el.from}</td>
        <td>{el.arrive}</td>
        <td>{el.dept}</td>
      </tr> 
    )})
    }
     </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;