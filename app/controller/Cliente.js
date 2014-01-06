/**
 * Class to define the controller "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.controller.Cliente', {
	extend: 'Ext.ux.app.Controller',
	module: 'cliente',
    models: ['Cliente'],
    stores: ['Cliente'],
    views : [
    	'cliente.Module',
    	'cliente.List',
    	'cliente.Form'
    ]
});