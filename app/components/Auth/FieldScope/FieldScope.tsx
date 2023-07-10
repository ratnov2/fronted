import { validateEmail } from "@/shared/utils/validateEmail";
import React, { FC } from "react";
import Field from "ui/form-ui/Field/Field";
import { TypeFieldScopeProps } from "./fieldScope.interface";

const FieldScope:FC<TypeFieldScopeProps> = ({register,errors})=>{
    return(
       <>
        <Field 
          {...register("email",
            {required:true,
              pattern:{
                value :validateEmail,
                message:'This email is not a valid'
              }
            })
          } 
          type='email2' 
          textLabel='email' 
          error = {errors.email?.message}
        />
        <Field 
          {...register("password",
            { required: true,
              minLength:{
                value:6,
                message:"Your password less 6 characters"
              }
            })
            
          } 
          type='password' 
          textLabel='Password'
          error = {errors.password?.message}
          />
          
       </>
    )
}
export default FieldScope