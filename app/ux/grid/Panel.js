/**
 * Class to creation of list
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 14/07/2014
 */

Ext.define('Ext.ux.grid.Panel', {
	extend: 'Ext.grid.Panel',
	requires: ['Ext.toolbar.Paging'],
    border: false,
    listeners: {
		selectionchange: 'onSelectionChange',
		itemclick: 'onEdit'
	},
    tbar: [{
    	text: 'New',
    	handler: 'onNew'
    },{
    	text: 'Delete',
    	disabled: true,
    	reference: 'delete',
    	handler: 'onDelete'
    }],

	initComponent: function() {
		var me = this;
		
		me.dockedItems = {
			xtype: 'pagingtoolbar',
			dock: 'bottom',
			store: me.store,
			displayInfo: true
		};

		me.callParent(arguments);
		me.getStore().load();
	},
	
	onRender: function(){
		var me = this,
			i,
			column;
		
		me.callParent(arguments);

		for (i in me.columns){
			column = me.columns[i];
			column.flex = column.width || column.flex || 1;
		}
	}
});