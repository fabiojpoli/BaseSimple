/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('BaseSimple.Application', {
    extend: 'Ext.app.Application',
    requires: ['Ext.ux.Alert'],
    
    name: 'BaseSimple',

    views: [
    	'cliente.Module',
    	'cliente.List',
    	'cliente.Form',
    	'produto.Module',
    	'produto.List',
    	'produto.Form'
    ],

    stores: [
        'Cliente',
        'Produto'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
