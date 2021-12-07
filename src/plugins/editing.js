import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import BoldCommand from "./command";
import { COMMAND_NAME__BOLD } from "./constant";

export default class BoldEditing extends Plugin {
    static get pluginName() {
        return "BoldEditing";
    }
    init() {
        const editor = this.editor;
        // 注册一个 BoldCommand 命令
        editor.commands.add(COMMAND_NAME__BOLD, new BoldCommand(editor));
    }
}