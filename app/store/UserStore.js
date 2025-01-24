Ext.define('MyApp.store.UserStore', {
    extend: 'Ext.data.Store',
    storeId: 'userStore',
    fields: ['id', 'name', 'email', 'phone'],
    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: true
});
