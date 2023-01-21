export interface IVideoPlayer {
	videoSource: string | undefined
	slug: string | undefined
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullscreen?: () => void
}
