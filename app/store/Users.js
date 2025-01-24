Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    data: [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' }
    ],
    autoLoad: true
});