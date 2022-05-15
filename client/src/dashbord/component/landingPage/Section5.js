import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShowMoreText from 'react-show-more-text';
const Section5 = () => {
  return (
    <div className="section-5 section">
    <div className='first-line'>Section 5 # Customer Sayings</div>
    
    <Row>
        <Col md={6}>
            <div className='selected-feedbacks'>
            <div className='second-line'>Uploaded Ones Maximum 4 :</div>
                <div className='feedback'>
            
                <ShowMoreText
                        /* Default options */
                        lines={5}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="more"
                        expanded={false}
                        
                        truncatedEndingComponent={"... "}
                    >
                            Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas porta mi vestibulum, lobortis est ac, hendrerit dui. Pellentesque auctor id enim sit amet molestie.
                    </ShowMoreText>
                <div class="delete">Delete</div>
                <br/>
                </div>

                <div className='feedback'>
            
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="more"
                    expanded={false}
                    
                    truncatedEndingComponent={"... "}
                >
                        Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas porta mi vestibulum, lobortis est ac, hendrerit dui. Pellentesque auctor id enim sit amet molestie.
                </ShowMoreText>
            <div class="delete">Delete</div>
            <br/>
            </div>
        </div>

        </Col>
        <Col md={6}>
        
        <div className="add">
              <div className="title"> Add New</div> 
        
            <div className='feedback'>
                
                <ShowMoreText
                        /* Default options */
                        lines={5}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="more"
                        expanded={false}
                        
                        truncatedEndingComponent={"... "}
                    >
                            Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas porta mi vestibulum, lobortis est ac, hendrerit dui. Pellentesque auctor id enim sit amet molestie.
                    </ShowMoreText>
                <div class="delete">Delete</div>
                <br/>
                </div>
            <div className='buttons'>
                <button >Confirm</button>
                <button className='discard'>Discard</button>
        </div>
       </div>
        </Col>
    </Row>

 
    </div>
    
  )
}

export default Section5