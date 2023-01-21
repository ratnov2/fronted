export interface IGalleryItem {
	posterPath: string
	name: string
	url: string
	content?: {
		title: string
		subTitle?: string
	}
	className?:string
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
