Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    controllers: ['UserController'],
    launch: function() {
        Ext.create('MyApp.view.Header', {
            renderTo: Ext.getBody()
        });
        Ext.create('MyApp.view.UserGrid', {
            renderTo: Ext.getBody()
        });
        
    }
});