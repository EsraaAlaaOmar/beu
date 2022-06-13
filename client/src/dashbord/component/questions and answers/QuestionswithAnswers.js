import React,{useEffect,useState} from 'react'

import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import FeedbackRow from '../feedback/FeedbackRow'
import QuestionRow from './QuestionRow'
import { Link, Route, Routes } from 'react-router-dom'
import NewQuestion from './NewQuestion'
import EditeQuestion from './EditeQuestion'
import { useSelector, useDispatch } from 'react-redux';
import {getQuestions,clearstate} from'../../store/questionSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg'

const QuestionswithAnswers = ({setActiveIndex}) => {
   setActiveIndex()
   const dispatch = useDispatch()

      //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)
   
   
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)


    const {questionList,isLoading,updated,added, error } =useSelector((state)=> state.question)
    useEffect(() =>{
      dispatch(getQuestions())
    
  
    },[dispatch,updated])

   
    const renderedQuestions= questionList&& questionList.map((question)=>  <QuestionRow  clearstate={clearstate} setInfoFlashmsg={setInfoFlashmsg}question={question} />)
    return (
      <>
      <Nav first_link='Questions & Answers'  second_link='Feedback' first_link_url='/dashbord/questions'   second_link_url='/dashbord/feedback' />
      
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
           <div className="box">
           <div className="title-text">Questions & Answers</div>
           {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
        
               {flashmsg && added && <FlashMsg 
                    title={`discount Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {flashmsg && updated && <FlashMsg 
                     title={`A discount has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
           {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
           <div className="table-box no-butons">
           <div className="oposite">
                    
                    <Link to='/dashbord/questions/add'>
                      <button onClick={() =>dispatch(clearstate())} >
                        <span className='big-sizes'> + Add New</span>
                        <span className='small-sizes'> + Add </span>
                       </button>
                    </Link>
                    </div>
                    <br/>
                 <table className='Table'>
                 <thead>
                 <tr className="head">
                    
                     <th>QUESTION</th>
                     <th></th>
                     <th>ANSWER 1</th>
                     <th></th>
                 
                    <th>ANSWER 2</th>
                    <th></th>
                    <th>ANSWER 2</th>
                    <th></th>
                    <th></th>
                     
                 </tr>
                 </thead>
                    <tbody>
                      {renderedQuestions}
                    </tbody>
                </table>
                   
             </div>
             <Routes>
             <Route path="/add" element={<NewQuestion />} exact />
             <Route path="/edite" element={<EditeQuestion />} exact />
             </Routes>
  
          </div>
}
    </>
    )
}

export default QuestionswithAnswers