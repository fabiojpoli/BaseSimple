/**
 * Class to define list of "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.view.produto.List', {
    extend: 'Ext.ux.grid.Panel',
    alias : 'widget.produtolist',
    store : 'Produto',
    columns: [{
		text	 : 'ID',
		dataIndex: 'id'
	},{
		text	 : 'Descricao',
		dataIndex: 'descricao'
	},{
		text	 : 'Quantidade',
		dataIndex: 'quantidade'
	}]
});