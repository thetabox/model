import { PutFileResult } from '../edgeStore'
import { FileHub } from './FileHub'
import { JobStatus } from './JobStatus'
import { MediaInfo } from './MediaInfo'

/** model which is build from GatewayUpload model and is saved to firestore */
export interface FileEdgeStore extends FileHub {
	comments: string
	archive_status: JobStatus
	upload_status: JobStatus
	on_air_date?: number
	delete_date?: number
	create_time: number
	update_time: number
	mediaInfo: MediaInfo
	edgeStore: PutFileResult
	isSupported: boolean
	/** related transcode files when original is not .mp4 */
	transcodes?: FileEdgeStore[]
}
