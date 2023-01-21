import { validateEmail } from '@/shared/utils/validateEmail'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from 'ui/form-ui/Field/Field'
import { TypesScopeFieldUser } from '../user-edit.interface'
//import { TypeFieldScopeProps } from "./fieldScope.interface";

const FieldScope: FC<TypesScopeFieldUser> = ({ register, errors,control }) => {
  return (
    <>
      <Field
        {...register('email', {
          required: true,
          pattern: {
            value: validateEmail,
            message: 'This email is not a valid',
          },
        })}
        type="email2"
        textLabel="email"
        error={errors.email?.message}
      />
      <Field
        {...register('password', {
          required: true,
          minLength: {
            value: 6,
            message: 'Your password less 6 characters',
          },
        })}
        type="password"
        textLabel="Password"
        error={errors.password?.message}
      />
      <Controller
            control={control}
            name="isAdmin"
            render={({ field: { value, onChange } }) => (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onChange(!value)
                }}
              >
                {value ? (
                  <span>Make as a default user</span>
                ) : (
                  <span>Make as an admin</span>
                )}
              </button>
            )}
          />
    </>
  )
}
export default FieldScope
