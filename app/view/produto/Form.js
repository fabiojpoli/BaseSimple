/**
 * Class to form of "Produto"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.view.produto.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.produtoform',
    items : [{
		name	  : 'id',
		fieldLabel: 'Id',
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