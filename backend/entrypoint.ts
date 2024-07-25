import { provideFile, provideRedirect } from "uix/html/entrypoint-providers.tsx"

export default {
	'/module': provideRedirect('/module@version'),
	'/module@version': provideFile('./module.js'),

	'/test.js': provideFile('./test.js'),
	'*': provideFile('./test.html')
}