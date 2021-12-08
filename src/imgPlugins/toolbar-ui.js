import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import IMGIcon from "./image.svg?raw";
import { COMMAND_NAME__IMG, COMMAND_LABEL__IMG } from "./constant";

import insertImage from "./insertImage";

export default class IMGToolbarUI extends Plugin {
    init() {
        this._createToolbarButton();
    }

    _createToolbarButton() {
        const editor = this.editor;
        const command = editor.commands.get(COMMAND_NAME__IMG);
        editor.ui.componentFactory.add(COMMAND_NAME__IMG, (locale) => {
            const view = new ButtonView(locale);
            view.set({
                label: COMMAND_LABEL__IMG,
                tooltip: true,
                icon: IMGIcon,
                // withText: true, // 在按钮上展示 label
                class: "toolbar_button_IMG",
            });
            // 将按钮的状态关联到命令对应值上
            view.bind("isOn", "isEnabled").to(command, "value", "isEnabled");
            // 点击按钮时触发相应命令
            this.listenTo(view, "execute", () => {
                // console.log(editor);
                insertImage(editor.model, {
                    src: "https://t7.baidu.com/it/u=3455716679,610864806&fm=193&f=GIF"
                });
                // console.log("toobar-ui execute");
                // editor.execute(COMMAND_NAME__IMG)
            });
            return view;
        });
    }
}
