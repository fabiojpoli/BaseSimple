/**
 * Class to define model of "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.model.Cliente', {
	extend: 'Ext.data.Model',
	proxy : {
		type  : 'uxproxyajax',
		module: 'cliente'
	},
	fields: [
		{name: 'id', type: 'int'},
		'nome',
		'endereco'
	]
});