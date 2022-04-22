import { UploadBody } from './UploadBody'
import { VideoBody } from './VideoBody'

export interface Response {
	status: string
	body: VideoBody | UploadBody
}
