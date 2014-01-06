/**
 * Classe to creation of module default
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 18/04/2012
 */
 
Ext.define('Ext.ux.panel.Module' ,{
    extend: 'Ext.panel.Panel',
    layout: 'border',
	
    initComponent: function(){
        var me = this;
        
        me.titleList = 'List of ' + me.titleModule;
    	me.items = [{
        	region: 'center',
        	flex  : 2,
        	title : me.titleList,
    		xtype: me.module + 'list'
        },{
        	region	   : 'east',
        	flex	   : 1,
        	title	   : 'Details',
        	collapsed  : true,
        	collapsible: true,
            split: true,
    		xtype: me.module + 'form'
        }];

        me.callParent(arguments);
    }
});