/**
 * Class to main layout of the app
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com>
 * 09/07/2014
 */

Ext.define('BaseSimple.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias : 'widget.main',
    layout: 'border',
    controller: 'main',
    items: [{
        region: 'south',
        frame : true,
        html  : '<center>© Copyright '+ new Date().getFullYear() +' - Policeno Sistemas</center>'
    },{
        region     : 'west',
        xtype      : 'treepanel',
        title      : 'Menu',
        width      : 200,
        split      : true,
        rootVisible: false,
        autoScroll : true,
        listeners: {
            itemclick: 'createTab'
        },
        root       : {
            children: [{
                text  : 'Clientes',
                module: 'cliente',
                leaf  : true
            },{
                text  : 'Produtos',
                module: 'produto',
                leaf  : true
            }]
        }
    },{
        region   : 'center',
        xtype    : 'tabpanel',
        reference: 'tabPanelCenter',
        items    : {
            title: 'Home',
            html: '<b>Welcome to Base Simple!</b>'
        }
    }]
});