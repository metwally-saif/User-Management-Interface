import { useContext } from 'react'
import React from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Delete(props) {
    const { value, setValue }= useContext(UserContext)

    const navigate = useNavigate()

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/u/' + id)
        .then(res => {
            navigate('/')
        })
    }

    return (props.trigger) ? (
        <div className='popup'>
          <div className='popup-inner d-popup'>
          <button onClick={() => props.onTrigger(false)} className='close-popup'>X</button>
              <div className="container">
                <div className="text">
                  Delete User
                </div>
                <form>
                    <div className='d-form-row'>
                        <img className='delete-face' src="src\assets\face1.svg" alt="face" />
                        <h3 className='delete-user-name'>{`${value.firstName} ${value.lastName}`}</h3>
                        <p>{(value.status) ? "user is active" : "user is inactive"}</p>
                    </div>
                  <div className='form-row'>
                    <button onClick={e => handleDelete(value.id)} className='invite-btn delete-btn' type="submit">Delete User</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      ) : ""
}

export default Delete