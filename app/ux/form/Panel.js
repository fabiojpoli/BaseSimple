/**
 * Class to form default
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 20/01/2012
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
		anchor	  : '100%',
		labelAlign: 'right',
		labelWidth: 70,
		msgTarget : 'side'
	},
	dockedItems	 : [{
		xtype: 'toolbar',
		items: [{
            text  : 'New',
            action: 'new'
		}]
	},{
        xtype: 'toolbar',
        dock : 'bottom',
        items: ['->', {
            text  : 'Save',
            action: 'save'
        },{
            text  : 'Cancel',
            action: 'cancel'
        }]
    }]
});