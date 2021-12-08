
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import IMGCommand from "./command";
import { COMMAND_NAME__IMG, SCHEMA_NAME__IMG } from "./constant";

export default class IMGEditing extends Plugin {
    static get requires() {
        return [Widget];
    }
    static get pluginName() {
        return "IMGEditing";
    }
    init() {
        const editor = this.editor;

        this._defineSchema();
        this._defineConverters();

        // 注册一个 IMGCommand 命令
        editor.commands.add(COMMAND_NAME__IMG, new IMGCommand(editor));
    }

    // 注册 schema
    _defineSchema() {
        const schema = this.editor.model.schema;
        schema.extend("$text", { allowAttributes: SCHEMA_NAME__IMG });
    }

    // 定义转换器
    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.attributeToElement({
            model: SCHEMA_NAME__IMG,
            view: "strong",
            upcastAlso: ["b"],
        });
    }
}
