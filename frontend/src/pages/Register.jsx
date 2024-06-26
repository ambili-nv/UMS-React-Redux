// import { useState, useEffect } from "react"
// import {useSelector,useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {toast} from 'react-toastify'
// import { FaUser } from "react-icons/fa"
// import {register,reset} from '../features/auth/authSlice'
// import Spinner from "../components/Spinner"
// function Register() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password2: ''
//     })

//     const { name, email, password, password2 } = formData
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const {user,isLoading,isError,isSuccess,message} = useSelector(
//         (state)=>state.auth)

//         useEffect(()=>{
//             if(isError){
//                 toast.error(message)
//             }
//             if(isSuccess||user){
//                 navigate('/login')
//             }
//             dispatch(reset())
//         },[user,isError.isSuccess,message,navigate,dispatch])


//     const onChange = (e) => {
//         setFormData((prevState)=>({
//             ...prevState,
//             [e.target.name] : e.target.value,
//         }))
//     }
//     const onSubmit = (e) =>{
//         e.preventDefault()

//         if(password !== password2){
//             toast.error('Password do not match')
//         } else {
//             const userData = {
//                 name,
//                 email,
//                 password
//             }
//             dispatch(register(userData))
//         }
//     }

//     if(isLoading){
//         return <Spinner/>
//     }
//     return (
//         <div>
//             <section className="heading">
//                 <h1>
//                     <FaUser />
//                     Register
//                 </h1>
//                 <p>Please create an account</p>
//             </section>
//             <section className="form">
//                 <form onSubmit={onSubmit}>
//                     <div className="form-group">
//                         <input type="text"
//                             className="form-control"
//                             id="name"
//                             name='name'
//                             value={name}
//                             placeholder="Enter your name"
//                             onChange={onChange} />
//                     </div>
//                     <div className="form-group">
//                         <input type="email"
//                             className="form-control"
//                             id="email"
//                             name='email'
//                             value={email}
//                             placeholder="Enter your email"
//                             onChange={onChange} />
//                     </div>
//                     <div className="form-group">
//                         <input type="password"
//                             className="form-control"
//                             id="password"
//                             name='password'
//                             value={password}
//                             placeholder="Enter Password"
//                             onChange={onChange} />
//                     </div>
//                     <div className="form-group">
//                         <input type="password"
//                             className="form-control"
//                             id="password2"
//                             name='password2'
//                             value={password2}
//                             placeholder="Confirm Password"
//                             onChange={onChange} />
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-block">Submit</button>
//                     </div>
//                 </form>
//             </section>
//         </div>
//     )
// }

// export default Register



import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa"
import { register, reset } from '../features/auth/authSlice'
import Spinner from "../components/Spinner"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/login')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // Name validation: Check if name contains only spaces
        if (!name.trim()) {
            toast.error('Name cannot be empty or contain only spaces')
            return
        }

        // Password validation: Check if password is at least 6 characters long
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long')
            return
        }

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <section className="heading">
                <h1>
                    <FaUser />
                    Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="name"
                            name='name'
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            id="email"
                            name='email'
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            id="password"
                            name='password'
                            value={password}
                            placeholder="Enter Password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            id="password2"
                            name='password2'
                            value={password2}
                            placeholder="Confirm Password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Register
