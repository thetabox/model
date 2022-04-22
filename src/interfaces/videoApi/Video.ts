import { Metadata } from './Metadata'

export interface Video {
	id: string
	service_account_id: string
	create_time: string
	update_time: string
	playback_uri?: string
	player_uri?: string
	file_name?: string
	state: string
	sub_state: string
	source_upload_id: string
	source_uri?: string
	playback_policy: string
	progress: number
	error?: string
	duration?: string
	resolution?: string
	metadata: Metadata
}
