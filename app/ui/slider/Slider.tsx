import React, { useEffect, useRef } from 'react'
import MaterialIcon from 'ui/MaterialIcon'
import style from './slider.module.scss'
import { useSliderEffect } from './useSliderEffect'
import { CSSTransition } from 'react-transition-group'
import SliderItem from './slider-item/SliderItem'

const Slider = () => {
  const { handleClick, popularMoviesConverted, currentIdx, slideIn } =
    useSliderEffect()

  const nodeRef = useRef(null)

  return (
    <div className={style.slider}>
      <CSSTransition
        nodeRef={nodeRef}
        in={slideIn}
        timeout={300}
        classNames="slide-animation"
      >
        <div ref={nodeRef}>
          <SliderItem
            currentImg={popularMoviesConverted[currentIdx].bigPoster}
            movie={popularMoviesConverted[currentIdx]}
          />
        </div>
      </CSSTransition>
      <div className={style.buttonGroup}>
        <button onClick={() => handleClick('left')}>
          <MaterialIcon name="MdArrowBackIos" />
        </button>
        <button onClick={() => handleClick('right')}>
          <MaterialIcon name="MdArrowForwardIos" />
        </button>
      </div>
    </div>
  )
}

export default Slider
