export function newId(): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let autoId = ''
	for (let i = 0; i < 40; i++) {
		autoId += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return autoId.toString()
}
