Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onGridSelect: function (selModel, record, index, eOpts) {
        this.lookupReference('btnEdit').setDisabled(false);
        this.lookupReference('btnDelete').setDisabled(false);
    },

    onGridDeselect: function (selModel, record, index, eOpts) {
        if (selModel.getSelection().length === 0) {
            this.lookupReference('btnEdit').setDisabled(true);
            this.lookupReference('btnDelete').setDisabled(true);
        }
    },

    addPopup: function () {
        // Add functionality
    },

    updatePopup: function () {
        // Edit functionality
    },

    deletePopup: function () {
        // Delete functionality
    }
});
