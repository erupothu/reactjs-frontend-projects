import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const UserReducer = createSlice({
    name: 'checkout',
    initialState: {
        username: 'harish',
        password: '123'
    },
    reducers: {
        addCredentials(state: any, action: PayloadAction<any>) {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
})

export default UserReducer
