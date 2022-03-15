import React from 'react'
import { actions, useStore } from '../store'
import { useEffect,useCallback,useMemo, useState} from 'react'
import Member from '../components/Member'
import { Link } from 'react-router-dom'
import { SORT } from '../data'

const Home = () => {
    const [state , dispatch] = useStore()
    const {member , reactMembers, javaMembers} = state
  
    useEffect(() => {
       if (javaMembers.length ===0) {
           alert("WARNING: java class is empty now")
       } else if (reactMembers.length === 0) {
           alert("WARNING: react class is empty now")
       }
     } , [reactMembers.length, javaMembers.length])

    const tranferReactToJavaMember = (index) => {
       const el = reactMembers[index];
       el.classType = "java";
       dispatch(actions.deleteReactMember(index,1))
       dispatch(actions.addJavaMember(el))   
    }
    const tranferJavaToReactMember = (index) => {
       const el = javaMembers[index];
       el.classType = "react";
       dispatch(actions.deleteJavaMember(index,1))
       dispatch(actions.addReactMember(el))   
    }

    const [searchName, setSearchName] = useState("");
    const [sortAge, setSortAge] = useState(SORT.NO);

    const getUsers = (list) => {
      let res = [...list];
      if (searchName) {
           res = res.filter((el) =>  el.name.toLowerCase().includes(searchName.toLowerCase()))
      }
      if (sortAge !== SORT.NO) {
           res.sort((a, b) => {
               if (sortAge === SORT.UP) {
                   return parseInt(a.age) - parseInt(b.age)
               } 
                if (sortAge === SORT.DOWN) {
                   return parseInt(b.age) - parseInt(a.age)
               }
               
           })
      }
      return res;
    }

    const reactMemberToRender = useMemo(() => getUsers(reactMembers), [reactMembers, sortAge]);
    const javaMemberToRender = useMemo(() => getUsers(javaMembers), [javaMembers, sortAge]);

    const getSortText = () => {
       if (sortAge === SORT.NO) {
          return "no"
       }
       if (sortAge === SORT.UP) {
          return "up"
       }
       return "down"
    }

    const getSortTextCallback = useCallback(() => getSortText(), [sortAge])

    const handleSort = () => {
       if (sortAge  === SORT.DOWN) {
          setSortAge(SORT.NO)
       }  else if (sortAge  === SORT.NO) {
          setSortAge(SORT.UP)
       } else {
          setSortAge(SORT.DOWN)
       }
    }

     const SortTitle = (props) => {
         useEffect(() => {
         }, [props.getSortText])
         return (
            <React.Fragment>Sort: {props.getSortText()}</React.Fragment>
         )
     }
    
      return (
      <div className='home-container'>
         <div className="controls">
           <Link to= "/addnew"><button className='add-new-btn'>Thêm mới member</button></Link>
                <div className="search-box">
                    <input type="text" id="search-input" placeholder="Nhập tên người dùng để tìm kiếm"
                     value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                     <button onClick={() => handleSort()}><SortTitle getSortText={getSortTextCallback}/></button>
                </div>
               
            </div>
            {/* React class */}
            <h1 className="title">List member of React class</h1>
            {reactMembers.length > 0 ? reactMemberToRender==0 ? <div className="empty-noti">Không có dữ liệu</div> : 
            reactMemberToRender.map((user, index) => {
                return  <Member id={index} name={user.name} age={user.age} classType="react" key={index} 
                handleTranfer={() => tranferReactToJavaMember(index)}/>
            }) : <div className="empty-noti">Empty class</div>}

            {/* Java class */}
            <h1 className="title">List member of Java class</h1>
            
            {javaMembers.length > 0 ? javaMemberToRender==0 ? <div className="empty-noti">Không có dữ liệu</div> : 
            javaMemberToRender.map((user,index) => {
                return <Member id={index} name={user.name} age={user.age} classType="java" key={index} 
                        handleTranfer={() => tranferJavaToReactMember(index)} />
            }) : <div className="empty-noti">Empty class</div> }
       </div>
  )
}

export default Home