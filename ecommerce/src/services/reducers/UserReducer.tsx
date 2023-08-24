import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserCredentials {
    email: string,
    password: string
}

const credential: UserCredentials = {
    email: '',
    password: ''
}

const UserReducer = createSlice({
    name: 'credentials',
    initialState: credential,
    reducers: {
        addCredentials(state: any, action: PayloadAction<any>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})
export const { addCredentials } = UserReducer.actions
export default UserReducer
