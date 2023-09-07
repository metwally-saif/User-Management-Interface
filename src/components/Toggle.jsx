import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Toggle.css'
import axios from 'axios'

function Toggle(props) {

  const [state, setState] = useState(props.checked)
  const [values, setValuses] = useState({})    

  useEffect(() => {
    axios.get('http://localhost:3001/u/' + props.lable)
    .then(res => setValuses(res.data))
    .catch(err => {console.log(err + " ===" + props.lable)})
  }, [])

  const updateUser = (e, id) => {
    setValuses((prevValues) => {
      const updatedValues = { ...prevValues, status: !prevValues.status };
      
      axios.put('http://localhost:3001/u/' + id, updatedValues)
        .then((res) =>  "")
      
      return updatedValues;
    });
  };


  return (
    <div className="container-toggle">
      <div className="toggle-switch">
        <input onClick={e => updateUser(e, props.lable)} type="checkbox" className="checkbox" 
          name={`${props.lable}`} id={`${props.lable}`} defaultChecked={state} disabled={false}/>
        <label className="label" htmlFor={props.lable}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}

export default Toggle