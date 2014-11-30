/**
 * Class define the model "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.model.Produto', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		'descricao',
		{name: 'quantidade', type: 'int'}
	],
	proxy : {
		type  : 'uxproxy',
		module: 'produto'
	}
});