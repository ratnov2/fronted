import Router from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import style from './RouterAndFirstLoading.module.scss'
import { useBlockOverflow } from '@/hooks/useBlockOverflow'
import Loader from 'ui/loader/Loader'

const RouterAndFirstLoading = () => {
  const [isLoadingRoute, setIsLoadingRoute] = useState(false)
  const [isLoadingFirst, setIsLoadingFirst] = useState(true)
  const [inProp, setInProp] = useState(false)
  const { setIsHidden } = useBlockOverflow(true)
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoadingRoute(true)
    })
    Router.events.on('routeChangeComplete', (url) => {
      setTimeout(() => {
        setIsLoadingRoute(false)
      }, 1000)
    })

    Router.events.on('routeChangeError', (url) => {
      setIsLoadingRoute(false)
    })
  }, [Router])

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingFirst(false)
      setIsHidden(false)
    }, 2000)
  }, [])

  useEffect(() => {
    if (isLoadingRoute || isLoadingFirst) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }, [isLoadingRoute, isLoadingFirst])

  const nodeRef = useRef(null)

  return (
    <CSSTransition
      timeout={2000}
      classNames={{
        enter: style.enter,
        enterActive: style.enterActive,
        exit: style.exit,
        exitActive: style.exitActive,
        exitDone: style.exitDone,
      }}
      in={inProp}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="h-[100vh] absolute z-50">
        <Loader />
      </div>
    </CSSTransition>
  )
}
export default RouterAndFirstLoading
