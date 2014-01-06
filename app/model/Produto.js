/**
 * Class to define model of "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.model.Produto', {
	extend: 'Ext.data.Model',
	proxy : {
		type  : 'uxproxyajax',
		module: 'produto'
	},
	fields: [
		{name: 'id', type: 'int'},
		'descricao',
		{name: 'quantidade', type: 'int'}
	]
});