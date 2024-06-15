// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

// function SearchBox() {
//     const [keyword, setKeyword] = useState('')

//     let navigate= useNavigate()

//     const submitHandler = (e) => {
//         e.preventDefault()
      
//         if (keyword) {
//             navigate(`/?keyword=${keyword}&page=1`)
//         } else {
//             // navigate(navigate(navigate.location.pathname))
//             navigate('/');
//         }
//     }
//     return (
//         <Form onSubmit={submitHandler} inline>
//             <Form.Control
//                 type='text'
//                 name='q'
//                 value={keyword}
                
//                 onChange={(e) => {
//                     setKeyword(e.target.value)
//                     console.log(e.target.value)
//                 }
//             }
//                 className='mr-sm-2 ml-sm-5'
                
//             ></Form.Control>

//             <Button
//                 type='submit'
//                 variant='outline-success'
//                 className='p-2'
//             >
//                 Submit
//             </Button>
//         </Form>
//     )
// }

// export default SearchBox

import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate= useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const keyword = e.target.elements.q.value.trim();
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            // navigate(navigate(navigate.location.pathname))
            navigate('/');
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                value={keyword}
                
                onChange={(e) => {
                    setKeyword(e.target.value)
                    console.log(e.target.value);
                }
            }
                className='mr-sm-2 ml-sm-5'
                
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox