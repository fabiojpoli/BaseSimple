/**
 * Class to define form to "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.view.produto.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.produtoform',
    items : [{
		name	  : 'id',
		fieldLabel: 'ID',
		disabled  : true
	},{
		name	  : 'descricao',
		fieldLabel: 'Descricao',
		maxLength : 100
	},{
		name	  : 'quantidade',
		fieldLabel: 'Quantidade',
		xtype	  : 'numberfield',
		maxLength : 11
	}]
});