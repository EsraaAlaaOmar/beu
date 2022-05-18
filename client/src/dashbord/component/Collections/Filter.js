import React,{useRef, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// use ref  function 
function useOutsideAlerter(ref,navigate) {
    useEffect(() =>{
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          
            navigate('/dashbord/collections')
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      
    }}, [ref]);
  }
const Filter = () => {
    const navigate = useNavigate()
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, navigate);
  return (
    <div className='addpage filter'>
    <div className='opacity'>
        <div className='add'  ref={wrapperRef}>
            <h4>Filter on Collection</h4>
      
        <form>
            <div className='input-div'>
                <label>Collection Title</label>
                <input type='text' placeholder='Title' required/>
            
            </div>
            <div className='choose'>
                <Row>
                    <Col>
                        <input id='new' type="radio" name="time" value="new" />
                        <label for="new">&nbsp; Newest</label><br/>
                    </Col>
                    <Col>
                        <input id='old' type="radio" name="time" value="old"/>
                        <label for="old">&nbsp; Oldest</label><br/>
                    </Col>
            
                </Row>
            </div>
            <div className='choose'>
                <Row>
                    <Col>
                        <input id='much' type="radio" name="productsQuan" value="much" />
                        <label for="much">&nbsp; Much Product</label><br/>
                    </Col>
                    <Col>
                        <input id='less' type="radio" name="productsQuan" value="less"/>
                        <label for="less">&nbsp; Less Products</label><br/>
                    </Col>
            
                </Row>
            </div>
            <div className='buttons'>
                
                    <input className='confrim' type='submit' value='Confirm' />
            
                <Link to='/dashbord/collections'>
                    <button className='discard'>Discard</button>
                </Link>
            </div>
        </form>
        </div>
      </div>
   </div>
  )
}

export default Filter