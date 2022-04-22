export interface MediaInfo {
	/** FfProbe info */
	channels: number
	channel_layout: string
	width: number
	height: number
	duration: number
	thumbnail?: string
}
