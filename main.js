'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    open () {
      Editor.Panel.open( 'ui-grid.preview' );
    },

    'open-webview' () {
      Editor.Panel.open( 'ui-grid.preview-webview' );
    },
  }
};
