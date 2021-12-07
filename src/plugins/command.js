import Command from "@ckeditor/ckeditor5-core/src/command";

export default class BoldCommand extends Command {
    refresh() {
        this.isEnabled = true;
    }
    execute() {
        console.log("Execute Plugin-Bold");
    }
}