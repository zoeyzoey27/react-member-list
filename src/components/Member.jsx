import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Member = (props) => {
    const {id,name, age, classType, handleTranfer, handleEdit, handleDelete} = props;
    const navigate = useNavigate()
    let idClass;
    {props.classType === 'react' ? idClass=0 : idClass=1}
    return (
        <div className="member-list">
           <div>Name: {props.name} - Age: {props.age}</div>
           <button className="user-list-button" onClick={() => handleTranfer()}>tranfer</button>
           <button className="user-list-button" onClick={() => {navigate(`/edit/${props.id}/${idClass}`)}}>edit</button>
           {/* <Link to="/edit"><button className="user-list-button">edit</button></Link> */}
           <button className="user-list-button" onClick={() => handleDelete()}>delete</button>
       </div>
    )
}

export default Member