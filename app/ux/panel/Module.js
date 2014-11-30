/**
 * Class to create modules
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com>
 * 14/07/2014
 */

Ext.define('Ext.ux.panel.Module' ,{
    extend: 'Ext.container.Container',
    layout: 'border',
    listeners: {
        render: 'onRenderModule',
        destroy: 'onDestroyModule',
        scope: 'controller'
    },
    
    initComponent: function(){
        var me = this;

        me.titleModule = me.title;
        me.items = [{
            region: 'center',
            flex  : 2,
            title : 'List of ' + me.titleModule,
            reference: me.module + 'list',
            xtype: me.module + 'list',
            border: false
        },{
            region     : 'east',
            reference  : me.module + 'form',
            flex       : 1,
            title      : 'Details',
            collapsed  : true,
            collapsible: true,
            split: true,
            xtype: me.module + 'form'
        }];

        me.callParent(arguments);
    }
});