import { findOptimalInsertionRange } from "@ckeditor/ckeditor5-widget/src/utils";

export default function insertImage(model, attributes = {}) {
    if (!attributes || !attributes.src) {
        return;
    }
    model.change((writer) => {
        const imageElement = writer.createElement("image", attributes);
        model.insertContent(imageElement);
    });
}
