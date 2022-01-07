# Markdown Table: Sortable

This plugin adds the ability to sort rendered tables by clicking on header.
Beside simple text and numeric sorting, it can also automatically figure out some other types such as money with currency symbol, different date format.
It is based on the [sorttable](https://www.kryogenix.org/code/browser/sorttable/) script of Stuart Langridge with some minor changes.

![Preview](https://raw.githubusercontent.com/hieuthi/joplin-plugin-markdown-table-sortable/main/docs/preview.png)

## Usage

Click on the header to sort, click again to reverse the order.

From v1.1.0 and later, the string sorting is case-insentitive and there is no option to change it back.
If you really want case-sentitive sorting you can use [v.1.0.1](https://github.com/hieuthi/joplin-plugin-markdown-table-sortable/releases/tag/v1.0.1).

This plugin only change the rendered table and not the original markdown text, the ordering is reset whenever the note is updated.

## License
[MIT](https://raw.githubusercontent.com/hieuthi/joplin-plugin-markdown-table-sortable/main/LICENSE)