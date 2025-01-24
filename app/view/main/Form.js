Ext.define('MyApp.view.main.Form', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    width: 400,
    layout: 'fit',
    modal: true,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: { anchor: '100%' },
            items: [
                { xtype: 'textfield', name: 'name', fieldLabel: 'Name', allowBlank: false },
                { xtype: 'textfield', name: 'email', fieldLabel: 'Email', allowBlank: false, vtype: 'email' },
                { xtype: 'textfield', name: 'phone', fieldLabel: 'Phone', allowBlank: false }
            ]
        }
    ],
    buttons: [
        {
            text: 'Save',
            handler: function (btn) {
                const window = btn.up('window');
                const form = window.down('form');
                const values = form.getValues();
                const store = Ext.getStore('users');

                if (window.mode === 'create') {
                    values.id = store.getCount() + 1; // Simple ID generation
                    store.add(values);
                } else if (window.mode === 'edit') {
                    window.record.set(values);
                }

                window.close();
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
