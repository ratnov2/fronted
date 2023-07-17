import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'ui/form-ui/button/Button'
import { SubmitHandler } from 'react-hook-form'
import style from './auth.module.scss'
import Field from 'ui/form-ui/Field/Field'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FieldScope from './FieldScope/FieldScope'
import { IInputs } from './auth.interface'
import { useMutation } from 'react-query'
import { authApi } from '@/api/dataAPI'
import { TypePostAuth } from '@/api/api.interface'
import { useActions } from '@/hooks/useActions'
import { useAuthState } from '@/hooks/useAuthState'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { toastr } from 'react-redux-toastr'

const Auth: FC = () => {
  const [auth, isAuth] = useState<'login' | 'registration'>('login')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputs>({
    mode: 'onChange',
  })
  useAuthRedirect()
  const { registerAction, loginAction } = useActions()
  const { status } = useAuthState()

  const onSubmit: SubmitHandler<IInputs> = (data: TypePostAuth) => {
    if (auth === 'login') {
      loginAction(data)
    }
    if (auth === 'registration') {
      registerAction(data)
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Auth</h2>
      <div className={style.share}>
        <FieldScope register={register} errors={errors} />
        <div className={style.buttons}>
          <Button
            className="bg-red-100 rounded-l-lg"
            onClick={() => isAuth('login')}
            disabled={status}
          >
            Login
          </Button>
          <Button
            className="bg-red-200 rounded-r-lg ml-10"
            onClick={() => isAuth('registration')}
            disabled={status}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Auth
