/**
 * Class for assembling the application layout
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 22/08/2012
 */

Ext.define('BaseSimple.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias : 'widget.main',
    layout: 'border',
    items : [{
        xtype: 'footer'
    },{
        xtype: 'mainmenu'
    },{
        region   : 'center',
        xtype    : 'tabpanel',
        itemId   : 'tabPanelCenter',
        activeTab: 0,
        plain    : true,
        border   : false,
        defaults : {
            border: false
        },
        items    : [{
            xtype: 'home'
        }]
    }]
});