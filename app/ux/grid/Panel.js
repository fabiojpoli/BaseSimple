/**
 * Class to default list
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 26/11/2011
 */

Ext.define('Ext.ux.grid.Panel', {
	extend: 'Ext.grid.Panel',
    border: false,
    tbar  : [{
    	text  : 'New',
    	action: 'new'
    },{
    	text	: 'Delete',
    	action	: 'delete',
    	disabled: true
    }],

	initComponent: function() {
		var me = this;
		
		me.on('render', me.applyDefaultColumns, me);
        me.getSelectionModel().on('selectionchange', me.onSelectionChange, me);
		me.callParent(arguments);
		me.getStore().load();
	},
	
	applyDefaultColumns: function(){
		var me = this,
			i,
			column;
		
		for (i in me.columns){
			column = me.columns[i];
			column.flex = column.width || column.flex || 1;
		}
	},
	
	onSelectionChange: function(selModel, selections){
		var me = this;
		me.down('button[action=delete]').setDisabled(selections.length !== 1);
    }
});