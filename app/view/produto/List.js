/**
 * Class to list of "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.view.produto.List', {
    extend : 'Ext.ux.grid.Panel',
    alias  : 'widget.produtolist',
    store  : 'Produto',
	columns: [{
		header	 : 'Id',
		dataIndex: 'id'
	},{
		header	 : 'Descricao',
		dataIndex: 'descricao'
	},{
		header	 : 'Quantidade',
		dataIndex: 'quantidade'
	}]
});