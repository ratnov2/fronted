import Router from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import style from './RouterAndFirstLoading.module.scss'
import { useBlockOverflow } from '@/hooks/useBlockOverflow'
import { Loader } from 'ui/loader/Loader'
import { useAuthState } from '@/hooks/useAuthState'

const RouterAndFirstLoading = () => {
  const { status } = useAuthState()
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    if (!status) {
      setTimeout(() => {
        setIsLoader(true)
      }, 62500)
    }
  }, [status])

  const nodeRef = useRef<any>(null)

  return (
    <CSSTransition
      timeout={1000}
      classNames={{
        enter: style.enter,
        enterActive: style.enterActive,
        exit: style.exit,
        exitActive: style.exitActive,
        exitDone: style.exitDone,
      }}
      in={!isLoader}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="h-[100%] w-[100vw] fixed z-50 top-0">
        <Loader />
      </div>
    </CSSTransition>
  )
}
export default RouterAndFirstLoading
