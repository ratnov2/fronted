import { useEffect, useState } from 'react'

export const useBlockOverflow = (isHiddenIn?: boolean) => {
	const [isHidden, setIsHidden] = useState(isHiddenIn || false)

	useEffect(() => {
		if (isHidden) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}, [isHidden])

	return { isHidden, setIsHidden }
}
