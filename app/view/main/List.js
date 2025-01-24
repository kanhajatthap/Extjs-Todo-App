Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    requires: [
        'MyApp.store.Users',
        'MyApp.view.main.Form'
    ],
    title: 'User Management',
    store: { type: 'users' },
    columns: [
        { text: 'ID', dataIndex: 'id', width: 50 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            xtype: 'actioncolumn',
            width: 100,
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Edit',
                    handler: function (grid, rowIndex) {
                        const record = grid.getStore().getAt(rowIndex);
                        Ext.create('MyApp.view.main.Form', {
                            record: record,
                            title: 'Edit User',
                            mode: 'edit'
                        }).show();
                    }
                },
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete',
                    handler: function (grid, rowIndex) {
                        grid.getStore().removeAt(rowIndex);
                    }
                }
            ]
        }
    ],
    tbar: [
        {
            text: 'Add User',
            handler: function () {
                Ext.create('MyApp.view.main.Form', {
                    title: 'Add User',
                    mode: 'create'
                }).show();
            }
        }
    ]
});
