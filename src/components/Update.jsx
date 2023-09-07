import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navmenu from './navmenu'
import '../styles/Update.css'
import Accordion from './Accordion'
import { UserContext } from '../UserContext'
import Toggle from './Toggle'

function Update() {
    const {value, setValue} = useContext(UserContext);
    const [values, setValuses] = useState(value)    
    const navigate = useNavigate()
    
    const updateUser = (e, id) => {
        e.preventDefault()
        axios.put('http://localhost:3001/u/' + id, values)
        .then(res => {
            navigate('/')
        })
    }

  return (
    <>
        <Navmenu type={false}/>
        <div className='update-page' style={(values.status) ? {} : {opacity: ".5"}}>
            <div className='user-photo'>
                <div className='user-photo'>
                    <img id="ppp" src="src\assets\Group2.svg" alt="user photo" />
                    <p id='add-photo'>upload a photo</p>
                </div>
                <div className='name-email'>
                    <h1 id='fname'>{values.firstName}</h1>
                    <h1 id='lname'>{values.lastName}</h1>
                    <h6 id='email'>{values.email}</h6>
                </div>
                <div className='resend'>
                    <button style={(values.status) ? {} : {visibility: "hidden"}} onClick={e => e.preventDefault()}id='resend-btn'>Resend The Invite</button>
                </div>
            </div>
            <form>
            <div className='user-details'>
                <div className='title-detail'>
                    <h2 id='details-title'>Details</h2>
                </div>
                <div className='active-switch'>
                    <Toggle label={values.id} checked={values.status}/>
                    <p id='active'>The user is <span id='a-status'>{(values.status) ? "Active" : "Inactive"}</span></p>
                </div>
                <div className='info-update'>
                        <div className="form-row update-row">
                            <div className="input-data">
                                <input type="text" id='first' required defaultValue={values.firstName} onChange={e => setValuses({...values, firstName: e.target.value})} />
                                <label for="first">First Name</label>
                            </div>
                        </div>
                        <div className="form-row update-row" id='lastn'>
                            <div className="input-data">
                            <input type="text" id='last' required  defaultValue={values.lastName} onChange={e => setValuses({...values, lastName: e.target.value})}/>
                            <label for="last">Last Name</label>
                            </div>
                        </div>
                        <div className="form-row update-row">
                            <div className="input-data">
                            <select name='role' id='role' className='role-page' required defaultValue={values.role} onChange={e => setValuses({...values, lastName: e.target.value})}>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            <img src="src/assets/Polygon.svg" alt="arrow" />
                            <label for="role" className='role-label update-role'>Role</label>
                            </div>
                        </div>
                </div>
                <div className='save'>
                    <button style={(values.status) ? {} : {visibility: "hidden"}} type='submit' onClick={e => updateUser(e, values.id)} className='save-btn'>Save Changes</button>
                </div>
            </div>
            </form>
            <div className='user-permissions'>
                <div className='permissions-id'>
                    <h2 id='permissions-title'>Permissions</h2>
                    <Accordion group={3}/>
                </div>
                <div className='toggles'></div>
            </div>
        </div>
    </>
  )
}

export default Update