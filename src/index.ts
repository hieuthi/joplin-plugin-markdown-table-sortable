import joplin from 'api';
import { ContentScriptType } from "api/types";

joplin.plugins.register({
	onStart: async function() {
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			'sortableMdTable',
			'./sortableMdTable.js'
		);
		await joplin.contentScripts.register(
			ContentScriptType.CodeMirrorPlugin,
			'sortableMdCtrl',
			'./sortableMdCtrlCM6.js'
		);
		await joplin.contentScripts.onMessage('sortableMdTable', (message:any) => {
			joplin.commands.execute('editor.execCommand', {
				name: 'sortableApply', args: [message]
			});
			joplin.commands.execute('editor.focus');
		});
	},
});
