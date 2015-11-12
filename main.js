'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  'ui-grid:open' () {
    Editor.Panel.open( 'ui-grid.preview' );
  },

  'ui-grid:open-webview' () {
    Editor.Panel.open( 'ui-grid.preview-webview' );
  },
};
