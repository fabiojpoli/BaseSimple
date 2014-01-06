/**
 * Class controller default
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 26/11/2011
 */

Ext.define('Ext.ux.app.Controller', {
	extend: 'Ext.app.Controller',
	
	constructor: function() {
		var me = this,
			defaultRefs;
		
		me.form = Ext.String.format('{0}module {0}form', me.module);
    	me.list = Ext.String.format('{0}module {0}list', me.module);
		
    	defaultRefs = [{
			ref     : 'list',
	        selector: me.list
		},{
			ref     : 'formPanel',
			selector: me.form
		},{
			ref		: 'buttonSave',
			selector: me.form + ' button[action=save]'
		},{
			ref		: 'panelDetail',
			selector: me.module + 'module panel[region=east]'
		}];
		
		me.refs = me.refs ? Ext.Array.merge(me.refs, defaultRefs) : defaultRefs;
		me.callParent(arguments);
	},
	
	init: function() {
		var me = this,
			listeners = {},
			btnNew = me.list + ' button[action=new]',
			btnNewForm = me.form + ' button[action=new]',
			btnCancel = me.form + ' button[action=cancel]',
			btnDestroy = me.list + ' button[action=delete]',
			btnSave = me.form + ' button[action=save]';

		listeners[btnNew] = {
			click: me.edit
		};
		listeners[btnNewForm] = {
			click: me.edit
		};
		listeners[btnCancel] = {
			click: me.cancel
		};
		listeners[me.list] = {
			itemclick: me.edit
		};
		listeners[btnDestroy] = {
			click: me.destroy
		};
		listeners[btnSave] = {
			click: me.save
		};
		listeners[me.module + 'module'] = {
			render: me.registerEvents
		};
			
		me.listeners = Ext.Object.merge(listeners, me.listeners);
		
		me.control(me.listeners);
	},
	
	registerEvents: function() {
		var me = this,
			store = me.getList().getStore();
			
		store.on('write', me.onWriteStore, me);
		store.getProxy().on('exception', me.onErrorAction, me);
	},
	
	onErrorAction: function(proxy, response){
		var me = this,
			obj = Ext.decode(response.responseText),
			store = me.getList().getStore();
		
		Ext.ux.Alert.show('Error', obj.msg, 'error');
		store.load();
		me.getFormPanel().setLoading(false);
		me.getList().setLoading(false);
		me.getButtonSave().enable();
    },
    
    onWriteStore: function(proxy, operation){
		var me = this,
			obj = Ext.decode(operation.response.responseText),
			btn = me.getButtonSave(),
			store = me.getList().getStore(),
			idProperty = store.getProxy().getReader().getIdProperty();
			
		if(obj.success)
		{
			Ext.ux.Alert.show('Success', obj.msg, 'success');

			if(operation.action === 'destroy') {
				me.getFormPanel().getForm().reset();
			}
			else {
				if(!me.getFormPanel().idRecord) {
					me.getFormPanel().getForm().reset();
				}
				
				me.getFormPanel().idRecord = obj.rows[idProperty];
			}
		}
		else
		{
			Ext.ux.Alert.show('Error', obj.msg, 'error');
			store.load();
		}
		
		me.getFormPanel().setLoading(false);
		me.getList().setLoading(false);
		btn.enable();
	},
	
    edit: function(btn) {
		var me = this,
			store = me.getList().getStore(),
			record = me.getList().getSelectionModel().getSelection()[0];
        
        if(btn.action === 'new')
        {
        	me.getFormPanel().getForm().reset();
			me.getFormPanel().idRecord = 0;
        }
        else if(record)
        {
			me.getFormPanel().idRecord = record.get(store.getProxy().getReader().getIdProperty());
			me.getFormPanel().loadRecord(record);
        }
        
        me.getPanelDetail().expand();
    },
    
    cancel: function() {
    	this.getPanelDetail().collapse();
    },
    
    destroy: function() {
		var me = this;

		Ext.Msg.confirm('Confirmation', 'Really delete record selected?', function(btn){
            if(btn === 'yes') {
				var record = me.getList().getSelectionModel().getSelection()[0],
					store = me.getList().getStore();

				store.remove(record);
				store.sync();
            }
        }, me);
    },
    
	save: function(){
		var me = this,
            form = me.getFormPanel().getForm(),
            record = form.getRecord(),
            store = me.getList().getStore(),
			btn = me.getButtonSave(),
			values = form.getValues();

		if(!form.isValid())
		{
			Ext.ux.Alert.show('Warning', 'Form invalid!', 'warning');
			return;
        }
        
        btn.disable();
        me.getFormPanel().setLoading('Wait...');

        if (!me.getFormPanel().idRecord)
		{
			record = Ext.create(store.getProxy().getModel().modelName);
			record.set(values);
			store.add(record);	
		}	
		else
		{
			record.set(values);
			if(!store.getUpdatedRecords().length)
			{
				btn.enable();
				me.getFormPanel().setLoading(false);
				return;
			}
		}

		store.sync();
    }
});