module.exports = {
    default: function(context) {
        return {
            plugin: function (markdownIt, _options) {
                const pluginId = context.pluginId;
                markdownIt.core.ruler.push('sortableTable', state => {

                    const tokens = state.tokens
                    for (let idx = 0; idx < tokens.length; idx++) {
                        const token = tokens[idx]
                        if (token.type !== 'table_open') {
                            continue
                        }
                        state.tokens[idx].attrJoin("class", "sortable");
                    }
                })
            },
            assets: function () {
                return [
                    { name: 'sorttable.js' },
                    { mime: 'text/css',
                      inline: true,
                      text: 'table th { cursor: pointer }' },
                ];
            },
        };
    }
}