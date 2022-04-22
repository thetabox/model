export interface Upload {
	id: string
	service_account_id: string
	presigned_url: string
	presigned_url_expiration: string
	presigned_url_expired: boolean
	create_time: string
	update_time: string
}
