/**
 * Class to form of "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.view.cliente.Form', {
    extend: 'Ext.ux.form.Panel',
    alias : 'widget.clienteform',
    items : [{
		name	  : 'id',
		fieldLabel: 'Id',
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