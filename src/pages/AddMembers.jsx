import React from 'react'
import { useStore,actions } from '../store'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const AddMembers = () => {
     const [state , dispatch] = useStore()
     const {member , reactMembers, javaMembers} = state
     const nameInput = useRef();
     
     const handleSubmit = (e) => {
         e.preventDefault();
         if (member.classType === 'react') dispatch(actions.addReactMember(member))
         else dispatch(actions.addJavaMember(member))
         dispatch(actions.setMemberInput({name:"",age:"",classType:"react"}))
         nameInput.current.focus();
     }
     console.log(member.classType)
     console.log(reactMembers,javaMembers)
     return (
        <div className='addmember-container'>
            <h1 className="title">Add Member</h1>
            <form onSubmit={handleSubmit}>
               <div className="info-input">
                  <label> Name: </label>
                  <input type="text" name="name" ref={nameInput} value={member.name} onChange={(e) => {
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
               <input type="submit" value="Submit" className='submit-input' />
            </form>
            <Link to="/"><button>Quay lại Trang chủ</button></Link>
            
        </div>
      )
}

export default AddMembers