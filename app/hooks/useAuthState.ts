import { TypesUserState, TypesUserState2 } from "@/store/user/userSlice";
import {useSelector} from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<TypesUserState2> = useSelector
// TS infers type: (state: RootState) => boolean
//const selectIsOn = (state: any) => state.status
export const useAuthState = () => useTypedSelector((state) => state.user)

// TS infers `isOn` is boolean
//export const useAuthState = useSelector(selectIsOn)
//export const useAuthState = useSelector((state:TypesUserState) => state)