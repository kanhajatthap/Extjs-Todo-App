Ext.define('YourApp.controller.UserController', {
    extend: 'Ext.app.Controller',
    views: ['UserGrid'], // Reference to the view we defined earlier (UserGrid)

    init: function() {
        this.control({
            'usergrid': {
                render: this.onUserGridRender // Event handling for the grid render event
            }
        });
    },

    onUserGridRender: function() {
        console.log('User Grid Rendered');
    }
});
