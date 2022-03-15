import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useStore,actions } from '../store'
import { useState,useRef } from 'react'
import { INIT_DATA } from '../data'

const Edit = () => {
  const {id,idClass} = useParams()
  console.log(id,idClass)
  const [state , dispatch] = useStore()
  let {member , reactMembers, javaMembers} = state
  
  const [userSelected, setUserSelected] = useState (reactMembers[id])
 
  console.log(userSelected)

  const nameInput = useRef();
  
  const handleInput = (e) => {
      setUserSelected({
         ...userSelected,
         [e.target.name]: e.target.value
      })
  }
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(actions.editReactMember(id,userSelected))
    setUserSelected(INIT_DATA)
    nameInput.current.focus();
  }
  return (
    <div className='edit-container'>
        <h1 className="title">Form Edit</h1>
        <form onSubmit={handleEdit}>
               <div className="info-input">
                  <label> Name: </label>
                  <input type="text" name="name" ref={nameInput} value={userSelected.name} onChange={(e) => handleInput(e)}/>
                  <label> Age: </label>
                  <input type="text" name="age" value={userSelected.age} onChange={(e) => handleInput(e)}/>
                  <select name="classType" value={userSelected.classType} onChange={(e) => handleInput(e)}>
                      <option value="react">React class</option>
                      <option value="java">Java class</option>
                  </select>
               </div>
               <input type="submit" value="Submit" className='submit-input'/>
            </form>
            <Link to="/"><button>Quay lại Trang chủ</button></Link>
    </div>
  )
}

export default Edit