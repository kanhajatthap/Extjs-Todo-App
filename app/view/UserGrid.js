Ext.define('MyApp.view.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    title: 'User List',
    store: Ext.create('MyApp.store.UserStore'),
    cls: "userData",
    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Email', dataIndex: 'email', flex: 3 },
        { text: 'Phone', dataIndex: 'phone', flex: 3 },
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 150, // Adjust the width of the actions column
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Edit this user',
                    handler: function (grid, rowIndex) {
                        const record = grid.getStore().getAt(rowIndex);
                        Ext.create('MyApp.view.UserForm', {
                            editMode: true,
                            record: record,
                            listeners: {
                                beforerender: function (win) {
                                    const form = win.down('form').getForm();
                                    form.loadRecord(record); // Load record into the form
                                }
                            }
                        }).show();
                    },
                    // Custom class to style the icon as a button
                    cls: 'action-btn'
                },
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete this user',
                    handler: function (grid, rowIndex) {
                        const record = grid.getStore().getAt(rowIndex);
                        Ext.Msg.confirm('Delete User', 'Are you sure?', function (choice) {
                            if (choice === 'yes') {
                                Ext.Ajax.request({
                                    url: 'http://localhost:3000/users/' + record.get('id'),
                                    method: 'DELETE',
                                    success: function () {
                                        grid.getStore().reload(); // Reload store
                                    }
                                });
                            }
                        });
                    },
                    // Custom class to style the icon as a button
                    cls: 'action-btn'
                }
            ]
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Add User',
            handler: function () {
                Ext.create('MyApp.view.UserForm').show(); // Show pop-up for adding a user
            },
            style: {
                'background': '#5fa2dd',
                'border-radius': '100px',
                'font-weight': 'bold',
                'border': '0'
            },
            cls: "addUserBtns"
        }
    ],
    
});
var style = document.createElement('style');
style.innerHTML = `
    .x-action-col-icon {
        cursor: pointer;
        margin-right: 10px;
    }

    .x-action-col-icon:hover {
        background-color: #ddd;
    }
.userData {
    max-width: 980px;
    margin: 50px auto 50px auto;
}
    .addUserBtns span.x-btn-inner {
    color: #fff !important;
    border-radius: 100px;
    font-size: 14px;
    padding: 2px 15px;
}
`;
document.head.appendChild(style);