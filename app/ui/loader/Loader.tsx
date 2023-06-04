import Link from 'next/link'
import React, { FC } from 'react'

//import loader from './Loader.module.scss'
import loader from './Loader.module.css'

const Loader: FC<any> = ({opacity}) => {
	return (
		<div className={loader.share} style={{opacity:opacity}}>
			<div className={loader.body}>
				<div className={loader.scene}>
					<div className={loader.shadow}></div>
					<div className={loader.jumper}>
						<div className={loader.spinner}>
							<div className={loader.scaler}>
								<div className={loader.loader}>
									<div className={loader.cuboid}>
										<div
											className={loader.cuboid__side}
										></div>
										<div
											className={loader.cuboid__side}
										></div>
										<div
											className={loader.cuboid__side}
										></div>
										<div
											className={loader.cuboid__side}
										></div>
										<div
											className={loader.cuboid__side}
										></div>
										<div
											className={loader.cuboid__side}
										></div>
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

