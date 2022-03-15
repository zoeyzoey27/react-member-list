import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useStore,actions } from '../store'

const Edit = () => {
  const {id} = useParams()
  const [state , dispatch] = useStore()
  let {member , reactMembers, javaMembers} = state
  const userSelected = reactMembers[id]
  
  

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(actions.deleteReactMember(id,1))
    dispatch(actions.addReactMember(member))
  }
  return (
    <div className='edit-container'>
        <h1 className="title">Form Edit</h1>
        <form onSubmit={handleEdit}>
               <div className="info-input">
                  <label> Name: </label>
                  <input type="text" name="name" value={member.name} onChange={(e) => {
                       dispatch(actions.setMemberInput({
                         ...member,
                         [e.target.name]: e.target.value}))
                  }}/>
                  <label> Age: </label>
                  <input type="text" name="age" value={member.age} onChange={(e) => {
                       dispatch(actions.setMemberInput({
                         ...member,
                         [e.target.name]: e.target.value}))
                  }}/>
                  <select name="classType" value={member.classType} onChange={(e) => {
                       dispatch(actions.setMemberInput({
                         ...member,
                         [e.target.name]: e.target.value}))
                  }}>
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