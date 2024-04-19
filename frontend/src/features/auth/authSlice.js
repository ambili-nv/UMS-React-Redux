import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user:user ? user:null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//Register user
export const register = createAsyncThunk('auth/register',async (user,thunkAPI)=>{
    console.log("in Slice",user);
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Login User
export const login = createAsyncThunk('auth/login',async (user,thunkAPI)=>{
    console.log("in Slice",user);
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout',
async()=>{
    await authService.logout()
})


//update user
export const updateProfile = createAsyncThunk(
    "auth/me",
    async (userData, thunkAPI) => {
      try {
        console.log("inside update profile slice" + userData);
        const token = thunkAPI.getState().auth.user.token;
  
        const response = await authService.updateProfile(userData, token);
        return { ...response, token };
      } catch (error) {
        console.log(error);
        console.log("abcccc");
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading =  false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },

    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        .addCase(logout.fulfilled,(state)=>{
            state.user = null
        })

        .addCase(updateProfile.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
          })
          .addCase(updateProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
          })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer