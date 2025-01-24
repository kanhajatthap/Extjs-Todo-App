Ext.define('MyApp.controller.UserController', {
    extend: 'Ext.app.Controller',
    views: ['UserGrid'],
    init: function() {
        this.control({
            'usergrid': {
                render: this.onUserGridRender
            }
        });
    },
    onUserGridRender: function() {
        console.log('User Grid Rendered');
    }
});
