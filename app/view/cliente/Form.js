/**
 * Class to define form to "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com>
 * 30/11/2014
 */

Ext.define('BaseSimple.view.cliente.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.clienteform',
    items : [{
		name	  : 'id',
		fieldLabel: 'ID',
		disabled  : true
	},{
		name	  : 'nome',
		fieldLabel: 'Nome',
		maxLength : 100
	},{
		name	  : 'endereco',
		fieldLabel: 'Endereco',
		maxLength : 100
	}]
});