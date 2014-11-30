/**
 * Class to define list of "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.view.cliente.List', {
    extend: 'Ext.ux.grid.Panel',
    alias : 'widget.clientelist',
    store : 'Cliente',
    columns: [{
		text	 : 'ID',
		dataIndex: 'id'
	},{
		text	 : 'Nome',
		dataIndex: 'nome'
	},{
		text	 : 'Endereco',
		dataIndex: 'endereco'
	}]
});