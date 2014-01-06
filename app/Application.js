Ext.define('BaseSimple.Application', {
    name: 'BaseSimple',

    requires: [
    	'Ext.ux.Alert',
    	'Overrides.*'
    ],

    extend: 'Ext.app.Application',

    controllers: [
        'Main',
        'Cliente',
        'Produto'
    ]
});
