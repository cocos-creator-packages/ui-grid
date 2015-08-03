module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'ui-grid:open': function () {
        Editor.Panel.open( 'ui-grid.preview' );
    },

    'ui-grid:open-webview': function () {
        Editor.Panel.open( 'ui-grid.preview-webview' );
    },
};
