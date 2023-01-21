import { TypePostAuth } from '@/api/api.interface'
import { authApi } from '@/api/dataAPI'
import { saveToStorage } from '@/services/auth/auth.helper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import Cookies from 'js-cookie'
import { toastError } from '@/shared/utils/api/withToastErrorRedux'
import { errorCatch } from '@/api/api.helpers'

export const registerAction = createAsyncThunk(
  'api/register',
  async (data: TypePostAuth, thunkAPI) => {
    try {
      const response = await authApi.register(data)
      toastr.success('Registration', 'Completed successfully')
      return response
    } catch (error: any) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const loginAction = createAsyncThunk(
  'api/login',
  async (data: TypePostAuth, thunkAPI) => {
    try {
      const response = await authApi.login(data)
      toastr.success('Login', 'Completed successfully')
      if (response.data.accessToken) saveToStorage(response.data)

      return response.data
    } catch (error: any) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const logoutAction = createAsyncThunk(
  'logout',
  async () => await console.log('')
)

export const checkAuth = createAsyncThunk(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await authApi.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				)
				thunkAPI.dispatch(logoutAction())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)