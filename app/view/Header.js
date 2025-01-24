Ext.define('MyApp.view.Header', {
    extend: 'Ext.Container', // Use Container or Panel, depending on your design
    xtype: 'app-header', // A custom xtype for easy reference
    layout: 'hbox', // Layout type, adjust as needed
    // layout: 'custom',
    cls: 'header-bar',
    items: [
        {
            xtype: 'container', // Use an image component for logo
            cls: 'logo',
            items: [
                {
                    xtype: 'image', // Use an image component for logo
                    src: 'https://static.vecteezy.com/system/resources/thumbnails/017/764/201/small_2x/bird-freedom-fly-animal-line-art-linear-simple-abstract-minimalist-circle-border-logo-design-vector.jpg',
                    width: 50, // Adjust logo size
                    height: 50, // Adjust logo size
                    margin: '0 20 0 0' // Add margin for spacing
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'menu-number',
            items: [
                {
                    xtype: 'button',
                    text: 'Home',
                    handler: function () {
                        // Add home button functionality
                    }
                },
                {
                    xtype: 'button',
                    text: 'About',
                    handler: function () {
                        // Add about button functionality
                    }
                },
                {
                    xtype: 'button',
                    text: 'Services',
                    handler: function () {
                        // Add services button functionality
                    }
                },
                {
                    xtype: 'button',
                    text: 'Contact Us',
                    handler: function () {
                        // Add contact button functionality
                    }
                },
                {
                    xtype: 'displayfield', // To show contact number
                    value: '<a href="tel:9926572718">call / 9926572718</a>',
                    margin: '0 0 0 20', // Add margin to separate the number
                    cls: "mobile-number",
                    style: {
                        'font-size': '16px',
                        'font-weight': 'bold'
                    }
                }
            ]
        }
    ]
});

var style = document.createElement('style');
style.innerHTML = `
.header-bar {
    padding-left:15px;
    padding-right:15px;
}
.header-bar .x-box-inner>.x-box-target {
    display: flex;
    justify-content: space-between;
    position: relative !important;
    align-items: center;
    padding-top: 0;
}
.header-bar .x-box-item {
    position:relative !important;
    left: 0 !important;
    top: 0 !important;
}
.header-bar {
    background: #f0f0f0;
    border-bottom: solid 2px #5fa2dd;
}
.header-bar .menu-number .x-autocontainer-innerCt {
    display: flex;
    align-items: center;
}
.header-bar .x-btn-default-small {
    margin: 0 3px;
    border-radius: 100px;
}
.header-bar .mobile-number .x-form-display-field {
    font-weight: 600;
    font-size: 20px;
    padding-top: 2px;
}
.header-bar .x-btn-default-small span.x-btn-inner.x-btn-inner-default-small {
    font-size: 14px;
    padding: 2px 15px;
}
.mobile-number a {
    color:#000;
    text-decoration: none;
}
`;
document.head.appendChild(style);