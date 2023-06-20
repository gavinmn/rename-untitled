import { Plugin } from "obsidian";

var moment = require("moment");

export default class MyPlugin extends Plugin {
	async onload() {
		this.app.vault.on("create", async (file) => {
			if (file.name.startsWith("Untitled")) {
				const timestamp = moment().format("YYYYMMDDHHmmss");
				if (file.parent) {
					await this.app.fileManager.renameFile(
						file,
						`${file.parent.path}/${timestamp}.md`
					);
				}
			}
		});
	}
}
