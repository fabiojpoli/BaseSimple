/**
 * Class to list of "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.view.cliente.List', {
    extend : 'Ext.ux.grid.Panel',
    alias  : 'widget.clientelist',
    store  : 'Cliente',
	columns: [{
		header	 : 'Id',
		dataIndex: 'id'
	},{
		header	 : 'Nome',
		dataIndex: 'nome'
	},{
		header	 : 'Endereco',
		dataIndex: 'endereco'
	}]
});