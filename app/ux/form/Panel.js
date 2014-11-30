/**
 * Class to creation of forms
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com>
 * 14/07/2014
 */
 
Ext.define('Ext.ux.form.Panel', {
    extend		 : 'Ext.form.Panel',
    requires	 : [
    	'Ext.form.field.Number'
    ],
	idRecord	 : 0,
	bodyPadding	 : 5,
	autoScroll	 : true,
	border		 : false,
	defaultType	 : 'textfield',
    layout		 : 'anchor',
	fieldDefaults: {
		allowBlank: false,
		anchor	  : '0',
		labelAlign: 'right',
		labelWidth: 70,
		msgTarget : 'side'
	},
	dockedItems	 : [{
		xtype: 'toolbar',
		items: [{
            text   : 'New',
            handler: 'onNew'
		}]
	},{
        xtype: 'toolbar',
        dock : 'bottom',
        items: ['->', {
            text: 'Save',
            reference: 'save',
            handler: 'onSave'
        },{
            text: 'Cancel',
            handler: 'onCancel'
        }]
    }]
});