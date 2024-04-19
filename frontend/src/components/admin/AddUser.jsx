// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import {  AddNewUser } from '../../features/admin/adminSlice'
// import { FaUser } from 'react-icons/fa'
// import { toast } from 'react-toastify' 


// function AddUser() {
//   const [formData, setFormData] = useState({
//     name:'' ,
//     email:'' ,
//     password:'' ,
//     password2:'' ,

//   })

//   const { name , email , password , password2} = formData
  
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name] : e.target.value,
//     }))
//   }

//   const onSubmit =(e) => {
//     e.preventDefault()

    


//     if (password !== password2) {
//       toast.error('password do not match')
//     }else{
//       const userData = {
//         name,
//         email,
//         password
//       }
      
//       dispatch(AddNewUser(userData));
      
//       navigate('/admin/dashboard');
//       toast.success('New user added sucessfully');
//     }
//   }





//   return (
//     <>
//       <section>
//         <h1>
//           <FaUser /> Add User
//         </h1>
//         <p > create an User Account </p>
//       </section>

//       <section className="form">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//           <input
//              type="text"
//              className="form-control"
//              id='name'
//              name='name'
//              placeholder='enter your name'
//              value={name}
//              onChange={onChange}
             
//             />
//           </div>

//           <div className="form-group">
//           <input
//              type="text"
//              className="form-control"
//              id='email'
//              name='email'
//              placeholder='enter your email'
//              onChange={onChange}
//              value={email}

//             />
//           </div>

//           <div className="form-group">
//           <input
//              type="text"
//              className="form-control"
//              id='password'
//              name='password'
//              placeholder='enter your password'
//              onChange={onChange}
//              value={password}

//             />
//           </div>

//           <div className="form-group">
//           <input
//              type="text"
//              className="form-control"
//              id='password2'
//              name='password2'
//              placeholder='Confirm  password'
//              onChange={onChange}
//              value={password2}

//             />
//           </div>

//           <div className="from-group">
//             <button type="submit" className='btn btn-block'> Submit</button>
//           </div>
          
//         </form>
//       </section>
//     </>
//   )
// }

// export default AddUser



import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddNewUser } from '../../features/admin/adminSlice'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Name validation: Check if name contains only spaces or special characters
    const nameRegex = /^[a-zA-Z0-9\s]*$/;
    if (!name.trim() || !nameRegex.test(name)) {
      toast.error('Name must not be empty and should contain only letters, numbers, and spaces');
      return;
    }

    // Password validation: Check if password is at least 6 characters long
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(AddNewUser(userData));

      navigate('/admin/dashboard');
      toast.success('New user added successfully');
    }
  }

  return (
    <>
      <section>
        <h1>
          <FaUser /> Add User
        </h1>
        <p>create a User Account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id='name'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password'
              name='password'
              placeholder='Enter your password'
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password2'
              name='password2'
              placeholder='Confirm password'
              value={password2}
              onChange={onChange}
            />
          </div>

          <div className="from-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>

        </form>
      </section>
    </>
  )
}

export default AddUser
