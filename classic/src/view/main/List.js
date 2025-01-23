/**
 * This view is an example list of people.
 */
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

    renderTo:Ext.getBody(),
    selModel: {
        selType: 'checkboxmodel', // Correct key and value
        mode: 'SINGLE', // Use 'SINGLE' or 'MULTI' for selection mode
        listeners: {
            select: function (selModel, record, index, eOpts) {
                console.log('Selected:', record.getData());
            }
        }
    },


    tbar:[
        {
            xtype: 'button',
            iteamId: 'add',
            text: 'Add',
            iconCls: 'x-fa fas fa-plus',
            reference: 'btnadd',
            handler: 'addPopup'
        },
        {
            xtype: 'button',
            iteamId: 'edit',
            text: 'Edit',
            iconCls: 'x-fa fas fa-edit',
            reference: 'btnedit',
            handler: 'updatePopup',
            disabled:true,
        },
        {
            xtype: 'button',
            iteamId: 'delete',
            text: 'Delete',
            iconCls: 'x-fa fas fa-trash',
            reference: 'btndelete',
            handler: 'deletePopup',
            disabled:true,
        }
    ]
});
