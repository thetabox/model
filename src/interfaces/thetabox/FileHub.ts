import { FileUpload } from '.'
import { FileStatus } from './FileStatus'

/** model which is build from FileUpload model and is saved to firestore */
export interface FileHub extends FileUpload {
	account: string
	file_status: FileStatus
}
