import Command from "@ckeditor/ckeditor5-core/src/command";
import { SCHEMA_NAME__IMG } from "./constant";

export default class IMGCommand extends Command {
    constructor(editor) {
        super(editor);
        this.attributeKey = SCHEMA_NAME__IMG;
    }

    refresh() {
        console.log("command refresh");
        const model = this.editor.model;
        const selection = model.document.selection;

        // 如果选中的文本含有 IMG 属性，设置 value 为 true，
        // 由于已在 toolbar-ui 中关联，当 value 为 true 时会高亮工具栏按钮
        this.value = this._getValueFromFirstAllowedNode();

        // 校验选中的 Schema 是否允许 IMG 属性，若不允许则禁用按钮
        this.isEnabled = model.schema.checkAttributeInSelection(
            selection,
            this.attributeKey
        );
    }

    execute() {
        console.log("command start");
        const model = this.editor.model;
        const selection = model.document.selection;

        const value = !this.value;

        // 对选中文本设置 IMG 属性
        model.change((writer) => {
            console.log("command writer", writer);
            if (selection.isCollapsed) {
                if (value) {
                    writer.setSelectionAttribute(this.attributeKey, true);
                } else {
                    writer.removeSelectionAttribute(this.attributeKey);
                }
            } else {
                const ranges = model.schema.getValidRanges(
                    selection.getRanges(),
                    this.attributeKey
                );

                for (const range of ranges) {
                    if (value) {
                        writer.setAttribute(this.attributeKey, value, range);
                    } else {
                        writer.removeAttribute(this.attributeKey, range);
                    }
                }
            }
        });
    }

    _getValueFromFirstAllowedNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;

        // 选区的锚点和焦点是否位于同一位置
        if (selection.isCollapsed) {
            return selection.hasAttribute(this.attributeKey);
        }

        for (const range of selection.getRanges()) {
            for (const item of range.getItems()) {
                if (schema.checkAttribute(item, this.attributeKey)) {
                    return item.hasAttribute(this.attributeKey);
                }
            }
        }

        return false;
    }
}
