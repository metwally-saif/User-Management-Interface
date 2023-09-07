import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navmenu from './navmenu'
import '../styles/App.css'
import Toggle from './Toggle'
import { UserContext } from '../UserContext'
import axios from 'axios'
import Delete from './Delete'


function Home() {
    const [users, setUsers] = useState([]);
    const { value, setValue }= useContext(UserContext);
    const [trigger, setTrigger] = useState(false);

    const [search, setSearch] = useState("")

    const[ order, setOrder ] = useState("ASC");

    console.log(search);


    useEffect(() => {
        axios.get('http://localhost:3001/u')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])


    const sorting = (col) => {
        if (col === "status" ) {

            const sorted = [...users].sort((a,b) => {
                if (order === "ASC") {
                  return a[col].status ? 1 : -1;
                } else {
                  return b[col].status ? 1 : -1;
                }
              });
              setUsers(sorted);
              setOrder(order === "ASC" ? "DSC" : "ASC");
        }
        else {
            if (order === "ASC" ) {
                const sorted = [...users].sort((a,b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                setUsers(sorted);
                setOrder("DSC");
            };
            if (order === "DSC") {
                const sorted = [...users].sort((a,b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                setUsers(sorted);
                setOrder("ASC");
            };
        }
    }


  return (
    <>
      <Navmenu addSearch={word => setSearch(word)} type={true} />
      <Delete trigger={trigger} onTrigger={setTrigger}/>
      <div className='table'>
        <div className='table-header'>
          <h3 onClick={() => sorting("firstName")} className='column'>USER<button className='no-style sort-name'><img src="src\assets\Polygon.svg" alt="sort" /></button></h3>
          <h3 onClick={() => sorting("role")} className='column column-role'>ROLE<button className='no-style sort-role'><img src="src\assets\Polygon.svg" alt="sort" /></button></h3>
          <h3 onClick={() => sorting("status")} className='column'>STATUS<button className='no-style sort-status'><img src="src\assets\Polygon.svg" alt="sort" /></button></h3>
          <h3 className='column column-action'>ACTION</h3>
        </div>
        <hr />
        <div className='table-content'>
            {
                users.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(search)
                }).map((user, i) => (
                    <>
                        <div key={i} className={(user.status) ? 'table-row' : 'table-row switched-off'}>
                            <div className='ppf'> <img src=".\src\assets\Group.svg" alt="ppf" /></div>
                            <div className='user'>
                                <h4 className='user-name'>{`${user.firstName} ${user.lastName}`}</h4>
                                <h4>{user.email}</h4>
                            </div>
                            <div className='role'>
                                <div className='admin'></div>
                                <h4>{user.role}</h4>
                            </div>
                            <div className='status'>
                                <Toggle checked={user.status} lable={user.id}/>
                            </div>
                            <div className='action column column-action'>
                                <Link to={`/update`}><button className='no-style' onClick={() => setValue(user)}><img src="src\assets\settings.svg" alt="settings" /></button></Link>
                                <button onClick={() => {setTrigger(true); setValue(user)} } className='no-style'><img src="src\assets\delete.svg" alt="delete" /></button>
                            </div>
                        </div> 
                        <hr style={{opacity: ".5"}} />
                    </>
                ))
            }         
        </div>
      </div>
    </>
  )
}

export default Home