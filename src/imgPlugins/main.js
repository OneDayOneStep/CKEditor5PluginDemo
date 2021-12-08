import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ToolbarUI from './toolbar-ui';
import IMGEditing from './editing';
import { COMMAND_NAME__IMG } from './constant';

export default class IMG extends Plugin {
    static get requires() {
        return [ IMGEditing, ToolbarUI ];
    }
    static get pluginName() {
        return COMMAND_NAME__IMG;
    }
}
