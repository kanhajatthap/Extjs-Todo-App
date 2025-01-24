Ext.define('MyApp.view.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    title: 'Add/Edit User',
    modal: true,
    layout: 'fit',
    width: 400,
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            allowBlank: false // Fields are required
        },
        items: [
            {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
            },
            {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Phone'
            }
        ]
    }],
    buttons: [
        {
            text: 'Save',
            handler: function (btn) {
                const win = btn.up('window');
                const form = win.down('form').getForm();
                if (form.isValid()) {
                    const values = form.getValues();

                    // Add or Edit Logic
                    if (win.editMode) {
                        // Update user
                        Ext.Ajax.request({
                            url: 'http://localhost:3000/users/' + win.record.get('id'),
                            method: 'PUT',
                            jsonData: values,
                            success: function () {
                                Ext.getStore('userStore').reload();
                                win.close();
                            }
                        });
                    } else {
                        // Add new user
                        Ext.Ajax.request({
                            url: 'http://localhost:3000/users',
                            method: 'POST',
                            jsonData: values,
                            success: function () {
                                Ext.getStore('userStore').reload();
                                win.close();
                            }
                        });
                    }
                }
            }
        },
        {
            text: 'Cancel',
            handler: function (btn) {
                btn.up('window').close();
            }
        }
    ]
});
