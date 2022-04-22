export interface RpcData {
	jsonrpc: string
	method: string
	params: any[]
	id?: number
}
