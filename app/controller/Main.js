/**
 * Class that implements the general application actions
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.controller.Main', {
	extend	: 'Ext.ux.app.Controller',
	requires: [
		'Ext.layout.container.Border',
		'Ext.tree.Panel',
		'Ext.ux.data.proxy.Ajax',
		'Ext.toolbar.TextItem',
		'Ext.tab.Panel',
		'Ext.ux.Alert'
	],
	views   : [
	    'Footer',
	    'Home',
		'Menu'
    ],
    refs	: [{
		ref     : 'tabPanel',
		selector: 'main #tabPanelCenter'
	}],

	init: function() {
		this.control({
			'mainmenu': {
				itemclick: this.createTab
			}
		});
	},

	createTab: function(tree, record){
		var me = this,
			tabOpen;
		
		if (record.get('leaf')) 
		{
			tabOpen = me.getTabPanel().items.findBy(function(tab){
				return tab.title === record.get('text');
			});

			if(!tabOpen)
			{
				tabOpen = me.getTabPanel().add({
					xtype: record.raw.module + 'module',
					title: record.get('text'),
					autoShow: true,
					closable: true
    			});
    		}
    		
    		me.getTabPanel().setActiveTab(tabOpen);
    	}
    }
});