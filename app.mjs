import { listWidgets } from '../lumen-sdk/index.mjs';

const widgets = await listWidgets();
for (const widget of widgets) {
  console.log(widget.title);
}
