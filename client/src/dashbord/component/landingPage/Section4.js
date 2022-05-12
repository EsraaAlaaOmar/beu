import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import {BsFillCameraFill} from 'react-icons/bs'
const Section4 = () => {
  return (
    <div className="section-4 section">
    <div className='first-line'>Section 4 # What's Popular</div>
    <div className='second-line'>Uploaded Photos Have To Be With Required Sizes</div>
    <div className='images'>
      <Row>
      
      <Col lg={3} md={6}>
            <div className='popular-box'>
                <div className='img'>
                
                <div className='overlayer'>   </div>
                <div className='img-text'>
                    <BsFillCameraFill />
                    <div>385 * 478</div>
                </div>
                    <img  alt='section 1 image'
                    src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                    />
                
                </div>
                <input />
                <textarea  className='italic-input'/>
            </div>
        
          </Col>
          <Col lg={3} md={6}>
            <div className='popular-box'>
                <div className='img'>
                
                <div className='overlayer'>   </div>
                <div className='img-text'>
                    <BsFillCameraFill />
                    <div>385 * 478</div>
                </div>
                    <img  alt='section 1 image'
                    src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                    />
                
                </div>
                <input />
                <textarea  className='italic-input'/>
            </div>
        
          </Col>
          <Col lg={3} md={6}>
            <div className='popular-box'>
                <div className='img'>
                
                <div className='overlayer'>   </div>
                <div className='img-text'>
                    <BsFillCameraFill />
                    <div>385 * 478</div>
                </div>
                    <img  alt='section 1 image'
                    src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                    />
                
                </div>
                <input />
                <textarea  className='italic-input'/>
            </div>
        
          </Col>
          <Col lg={3} md={6}>
            <div className='popular-box'>
                <div className='img'>
                
                <div className='overlayer'>   </div>
                <div className='img-text'>
                    <BsFillCameraFill />
                    <div>385 * 478</div>
                </div>
                    <img  alt='section 1 image'
                    src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                    />
                
                </div>
                <input />
                <textarea  className='italic-input'/>
            </div>
        
          </Col>
      
      </Row>
      <div className='buttons'>
            <button >Confirm</button>
            <button className='discard'>Discard</button>
      </div>
    </div>


</div>
  )
}

export default Section4