import { FileEdgeStore } from '.'
import { Upload, Video } from '../videoApi'
import { JobStatus } from './JobStatus'

/** model after file is presigned for theta network delivery */
export interface FileNetwork extends FileEdgeStore {
	account: string
	transcode_status: JobStatus
	restore_status: JobStatus
	/** presigned */
	network?: Upload
	/** transcoded */
	video?: Video
}
