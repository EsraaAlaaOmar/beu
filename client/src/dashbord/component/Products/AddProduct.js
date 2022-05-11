import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Images from './Images';

const AddProduct = () => {
    const [color, setColor] = useState(null);
    const [colors, setColors]=useState(['#FFA200', '#000', '#fff'])
    const renderedColors=colors.map((color) =><span className="color" style={{backgroundColor:color}}></span>)
  return (
        <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4>New Product</h4>
                        <div className='input-div'>
                                <label> Product Title</label>
                                <input type='text' placeholder='title'/>
                                <span className='validation'>Validation success message</span>
                            </div>
                            <div className='input-div'>
                                <label>Colors</label>
                                <div className='colorList'>

                                    {renderedColors}               
                                    <span className='oposite' onClick={()=>document.getElementById("color").click()}>
                                        +
                                    </span>
                                    <input id='color' type='color' onChange={e => {setColor(e.target.value)}
                                } />
                                </div>
                                { color &&<div className='add-color'>
                                    <span className='selected' style={{backgroundColor:color}}></span>
                                     <button onClick={()=>setColors([...colors,color])}>Add</button>
                                </div>}
                                
                                <div>

                                </div>
                            </div>
                            <div className='input-div'>
                                <label>Sizes</label>
                                
                                <select className=''>
                                    <option value>S </option>
                                    <option value>M</option>
                                    <option value>L</option>
                                    <option value>XL</option>
                                    <option value>XXL</option>
                                </select>
                            
                            </div>
                            <div className='input-div'>
                                <label>Sizes</label>
                                <textarea>
                                Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus se
                                </textarea>
                            </div>
                            
                           
                            <div className='buttons'>
                                <Link to='/dashbord/products'>
                                    <button className='confrim'>Confirm</button>
                                </Link>
                                <Link to='/dashbord/products'>
                                    <button className='discard'>Discard</button>
                                </Link>
                            </div>
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={8}>
                        <Images colors={colors} />
                    </Col>
                    </Row>
                
              </div>
        </div>
    </div>
  )
}

export default AddProduct