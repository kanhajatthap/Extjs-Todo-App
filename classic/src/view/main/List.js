Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Department', dataIndex: 'department', flex: 1 }
    ],

    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE',
        listeners: {
            select: 'onGridSelect',
            deselect: 'onGridDeselect'
        }
    },

    tbar: [
        {
            xtype: 'button',
            itemId: 'add',
            text: 'Add',
            iconCls: 'x-fa fas fa-plus',
            reference: 'btnAdd',
            handler: 'addPopup'
        },
        {
            xtype: 'button',
            itemId: 'edit',
            text: 'Edit',
            iconCls: 'x-fa fas fa-edit',
            reference: 'btnEdit',
            handler: 'updatePopup',
            disabled: true
        },
        {
            xtype: 'button',
            itemId: 'delete',
            text: 'Delete',
            iconCls: 'x-fa fas fa-trash',
            reference: 'btnDelete',
            handler: 'deletePopup',
            disabled: true
        }
    ],
    

    reference: 'personnelGrid'
});
