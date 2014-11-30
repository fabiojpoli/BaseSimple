/**
 * Class to proxy default
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 14/07/2014
 */

Ext.define('Ext.ux.data.proxy.Ajax', {
	extend: 'Ext.data.proxy.Ajax',
	alias: 'proxy.uxproxy',
    simpleSortMode: true,
    type: 'ajax',
    baseUrl: 'controller',
    actionRead: 'Controller.php?action=read',
    actionCreate: 'Controller.php?action=save',
    actionUpdate: 'Controller.php?action=save',
    actionDestroy: 'Controller.php?action=destroy',
    reader: {
        type: 'json',
        rootProperty: 'rows',
        successProperty: 'success',
        totalProperty: 'count'
    },
    writer: {
        type: 'json',
        rootProperty: 'rows',
        writeAllFields: false,
        encode: true
    },
    
    constructor: function() {
		var me = this,
            module;

		me.callParent(arguments);

        module = me.config.module;

		if(!Ext.Object.getValues(me.api).length) {
            me.api.read = me.baseUrl + '/' + me.ucWords(module) + me.actionRead;
            me.api.create = me.baseUrl + '/' + me.ucWords(module) + me.actionCreate;
            me.api.update = me.baseUrl + '/' + me.ucWords(module) + me.actionUpdate;
            me.api.destroy = me.baseUrl + '/' + me.ucWords(module) + me.actionDestroy;
        }
    },
    
    ucWords: function(string) {
        return string.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }
});