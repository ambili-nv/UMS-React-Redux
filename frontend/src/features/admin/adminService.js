import axios from 'axios'


const API_URL = '/api/admin/'

//login admin

const login = async(adminData) =>{
    console.log("Servise",adminData);

    const response = await axios.post(API_URL + 'login',adminData)

    if(response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }
    return response.data
}

const logoutAdmin = () => {
    console.log('admin logout service');

    localStorage.removeItem('admin')
}

const getAllusers =async(token)=>{
    const config = {
        headers: {
          athorization: `Bearer ${token}`
        }
      }
      const response = await axios.get(API_URL + 'getUserData', config)
      console.log("djgfjsdgf",response.data);
      return response.data
}

const editUser = async(token, userId, name , email)=>{
    const config = {
        headers: {
          athorization: `Bearer ${token}`
        }
      }
      return await axios.put(API_URL + 'editUser', { userId, name, email }, config)
}


const blockUser = async(userId, token)=>{
    console.log("call 3", userId);

    const config = {
        headers:{
            athorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'userBlock', {userId}, config)
    console.log("call 4",response);
    return response.data
}


const createUser = async (token, userData) => {
    const config = {
      headers: {
        Athorization: `Bearer ${token}`
      }
    }
    return await axios.post(API_URL + 'addUser', userData, config);
  
  }


const authService = {
    login,
    getAllusers,
    editUser,
    blockUser,
    createUser,
    logoutAdmin

}

export default authService