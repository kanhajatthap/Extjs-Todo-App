Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", department: "HTML"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", department: "CSS"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", department: "PHP" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", department: "Wordpress"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
