/**
 * Class to define the controller "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.controller.Produto', {
	extend: 'Ext.ux.app.Controller',
	module: 'produto',
    models: ['Produto'],
    stores: ['Produto'],
    views : [
    	'produto.Module',
    	'produto.List',
    	'produto.Form'
    ]
});