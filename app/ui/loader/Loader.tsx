import React, { FC } from 'react'

import loader from './Loader.module.css'


const Loader: FC<any> = ({ opacity, nodeRef }) => {
  return (
    <div className={loader.share} ref={nodeRef} style={{ opacity: opacity }}>
      <div className={loader.body}>
        <div className={loader.scene}>
          <div className={loader.shadow}></div>
          <div className={loader.jumper}>
            <div className={loader.spinner}>
              <div className={loader.scaler}>
                <div className={loader.loader}>
                  <div className={loader.cuboid}>
                    <div className={loader.cuboid__side}></div>
                    <div className={loader.cuboid__side}></div>
                    <div className={loader.cuboid__side}></div>
                    <div className={loader.cuboid__side}></div>
                    <div className={loader.cuboid__side}></div>
                    <div className={loader.cuboid__side}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
