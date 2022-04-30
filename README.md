# Markdown Table: Sortable

This plugin adds a function to sort rendered tables by clicking on header and apply the sorting to markdown text source.
Beside simple text and numeric sorting, it can also automatically figure out some other types such as money with currency symbol, different date format.
It is based on the [sorttable](https://www.kryogenix.org/code/browser/sorttable/) script of Stuart Langridge with some minor changes.

![Preview](https://raw.githubusercontent.com/hieuthi/joplin-plugin-markdown-table-sortable/main/docs/preview-v1.2.0.png)

## Usage

Click on the header to sort, click again to reverse the order. From v1.2.0 and later you apply the sorting to markdown source text by clicking on the "Apply Sorting!" button at the top right corner of the rendered table.

From v1.1.0 and later, the string sorting is case-insensitive and there is no option to change it back.
If you really want case-sensitive sorting you can use [v.1.0.1](https://github.com/hieuthi/joplin-plugin-markdown-table-sortable/releases/tag/v1.0.1).

The plugin only changes the rendered table and not the original markdown text unless you explicitly click "Apply Sorting!" button. Otherwise, the order will be reset whenever the note is updated.

## License
[MIT](https://raw.githubusercontent.com/hieuthi/joplin-plugin-markdown-table-sortable/main/LICENSE)