export interface TranscodeUploadBodyBase {
	playback_policy: string
}

export interface TranscodeUploadBody extends TranscodeUploadBodyBase {
	source_upload_id: string
	file_name: string
}

export interface TranscodeUploadBodyExternal extends TranscodeUploadBodyBase {
	source_uri: string
}
