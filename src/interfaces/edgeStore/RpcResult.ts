import { GetStatusResult } from './GetStatusResult'
import { PutFileResult } from './PutFileResult'
import { RpcError } from './RpcError'
import { GetFileResult } from './GetFileResult'

export interface RpcResult {
	jsonrpc: string
	id: number
	error?: RpcError
	result: GetStatusResult | GetFileResult | PutFileResult
}
