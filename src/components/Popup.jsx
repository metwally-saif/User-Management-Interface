import axios from 'axios';
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Popup(props) {
  const [values, setValuse] = useState({
    id: Math.floor(Math.random() * 1000),
    firstName: "",
    lastName: "",
    email: "",
    status: true,
    role: "user"
  })


  const postUser = (e) => {
    axios.post('http://localhost:3001/u', values)
    .then(res => {
      console.log(res);
      props.trigger(false)
      
    })
  }


  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <button onClick={() => props.onTrigger(false)} className='close-popup'>X</button>
          <div className="container">
            <div className="text">
              Invite New User
            </div>
            <form onSubmit={postUser}>
              <div className="form-row">
                <img src="src\assets\face.svg" alt="face-icon" />
                <div className="input-data">
                  <input type="text" id='first' required onChange={e => setValuse({...values, firstName: e.target.value})}></input>
                  <label htmlFor="first">First Name</label>
                </div>
               <div className="input-data">
                  <input type="text" id='last' required onChange={e => setValuse({...values, lastName: e.target.value})}/>
                  <label htmlFor="last">Last Name</label>
                </div>
              </div>
              <div className="form-row">
                <img src="src/assets/alternate_email.svg" alt="@-icon" />
                <div className="input-data">
                  <input type="text" id='email' required onChange={e => setValuse({...values, email: e.target.value})}/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="form-row">
                <img src="src/assets/vpn_key.svg" alt="key-icon" />
                <div className="input-data">
                  <select name='role' id='role' required defaultValue='user' onChange={e => setValuse({...values, role: e.target.value})}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  <img src="src/assets/Polygon.svg" alt="arrow" />
                  <label htmlFor="role" className='role-label'>Role</label>
                </div>
              </div>
              <div className='form-row'>
                <button className='invite-btn' type="submit">invite user</button>
                <h3 className='validator-text'>Fill in all the fields</h3>
              </div>
            </form>
          </div>
      </div>
    </div>
  ) : ""
}

export default Popup