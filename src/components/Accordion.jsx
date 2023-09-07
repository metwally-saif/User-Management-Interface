import React, { useState } from 'react'
import Toggle from './Toggle'


function Accordion(props) {
    const [index, setindex] = useState(-1)

    function toggleAcc(num) {
        setindex(num)
    }


  return (
    <div className='Accordion'>
          {[...Array(props.group)].map((x, i) => (
                <div key={x} className='group' onClick={() => toggleAcc(i)}>
                    <div className='acc-head'>
                        <div id='plus-minus'>
                        {
                            index === i ? (
                                <span>-</span>
                            ) :
                            (
                                <span>+</span>
                            )
                        }
                        </div>
                        <h3 className={index === i ? 'active accw' : "accw"}>permissions Group {i + 1}</h3>
                        <Toggle lable={'permissions Group' + i}/>
                    </div>
                    <div className={index === i ? "active" : 'inactive'}>
                        <div key={x} className='toggle-group'>
                        {
                            [...Array(5)].map((xx, irr) => (
                                <Toggle key={xx} lable={`permission` + irr}></Toggle>
                                
                            ))
                        }
                        </div>
                        <div className='toggle-names'>
                        {
                            [...Array(5)].map((xx, irr) => (
                                <p key={xx} className='p-names'>permission {irr}</p>
                            ))
                        }  
                        </div>
                    </div>
                </div>          
            )
          )
        }
    </div>
  )
}

export default Accordion