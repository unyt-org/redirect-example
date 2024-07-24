import { provideFile, provideRedirect } from "uix/html/entrypoint-providers.tsx"

export default {
	// show backend (hybrid) rendered page on /backend
	'/module': provideRedirect('/module@version'),
	'/module@version': provideFile('./module.js'),
	'*': provideFile('./index.html')
}