Ext.define('BaseSimple.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
    	'Ext.tab.Panel',
        'Ext.tree.Panel'
    ],

    createTab: function(tree, record){
        var me = this,
            tabPanel = me.lookupReference('tabPanelCenter'),
            tabOpen;
        
        if (record.get('leaf')) {
            tabOpen = tabPanel.items.findBy(function(tab){
                return tab.title === record.get('text');
            });

            if(!tabOpen) {
                tabOpen = tabPanel.add({
                    xtype: record.get('module') + 'module',
                    module: record.get('module'),
                    title: record.get('text'),
                    autoShow: true,
                    closable: true
                });
            }
            
            tabPanel.setActiveTab(tabOpen);
        }
    }
});