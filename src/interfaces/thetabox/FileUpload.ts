/** model after uploading to the gateway */
export interface FileUpload {
	id: string
	file_name: string
	name: string
	encoding: string
	mimetype: string
	size: number
	upload_time: number
}
