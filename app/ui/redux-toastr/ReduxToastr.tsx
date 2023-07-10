
import React, { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToastrCus:FC = () => {
  return (
    <ReduxToastr
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick={true}
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
  )
}

export default ReduxToastrCus