import axios from 'axios'

const API_URL = '/api/users/'
//Register user
const register = async (userData) =>{
    console.log("in Srvice", userData);
    const response = await axios.post(API_URL,userData)
    console.log("Response in service",response);
    if(response.data) {
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

//Login user
const login = async (userData) =>{
    console.log("in Srvice", userData);
    const response = await axios.post(API_URL +'login',userData)
    console.log("Response in service",response);
    if(response.data) {
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}


//Logout user

const logout = ()=>{
    localStorage.removeItem('user')
}

const updateProfile = async(userData,token)=>{
    console.log('inside auth service', userData)
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    console.log("002",userData,token);
    const response = await axios.put(API_URL + 'me',userData, config)

    if(response.data){
        const updatedData = {...response.data,token}
        console.log(updatedData)
        localStorage.setItem('user', JSON.stringify(updatedData))
    }
    console.log(response)
    return response.data
}

const authService = {
    register,
    logout,
    login,
    updateProfile
}

export default authService 