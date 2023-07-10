
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './user/userSlice'
import {reducer as toastrReducer} from 'react-redux-toastr'

const store = configureStore({
  reducer: {
    user:counterReducer,
    toastr:toastrReducer
  }
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch