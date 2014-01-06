/**
 * Class default for proxy
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 26/11/2011
 */

Ext.define('Ext.ux.data.proxy.Ajax', {
	extend		 : 'Ext.data.proxy.Ajax',
	alias		 : 'proxy.uxproxyajax',
    type		 : 'ajax',
    baseUrl		 : 'controller',
    actionRead   : 'Controller.php?action=read',
    actionCreate : 'Controller.php?action=save',
    actionUpdate : 'Controller.php?action=save',
    actionDestroy: 'Controller.php?action=destroy',
    reader		 : {
        type		   : 'json',
        root		   : 'rows',
        successProperty: 'success'
    },
    writer: {
        type		  : 'json',
        root		  : 'rows',
        writeAllFields: false,
        encode		  : true
    },
    
    constructor: function() {
		var me = this;
		me.callParent(arguments);

		if(me.url === undefined && !Ext.Object.getValues(me.api).length)
		{        
			me.api.read = me.baseUrl + '/' + me.ucWords(me.module) + me.actionRead;
			me.api.create = me.baseUrl + '/' + me.ucWords(me.module) + me.actionCreate;
			me.api.update = me.baseUrl + '/' + me.ucWords(me.module) + me.actionUpdate;
			me.api.destroy = me.baseUrl + '/' + me.ucWords(me.module) + me.actionDestroy;
        }
    },
    
    ucWords: function(string) {
		return string.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
	        return $1.toUpperCase();
	    });
	}
});