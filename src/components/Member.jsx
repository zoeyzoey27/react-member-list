import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Member = (props) => {
    const {id,name, age, classType, handleTranfer, handleEdit, handleDelete} = props;
    const navigate = useNavigate()
    return (
        <div className="member-list">
           <div>Name: {props.name} - Age: {props.age}</div>
           <button className="user-list-button" onClick={() => handleTranfer()}>tranfer</button>
           <button className="user-list-button" onClick={() => {navigate(`/edit/${props.id}`)}}>edit</button>
           {/* <Link to="/edit"><button className="user-list-button">edit</button></Link> */}
           <button className="user-list-button" onClick={() => handleDelete()}>delete</button>
       </div>
    )
}

export default Member