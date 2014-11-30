Ext.define('Ext.ux.app.ViewController', {
    extend: 'Ext.app.ViewController',

    onRenderModule: function() {
        var me = this,
            idProperty;

        me.list = me.lookupReference(me.type + 'list');
        me.formPanel = me.lookupReference(me.type + 'form');
        me.saveButton = me.lookupReference('save');
        me.store = me.list.store;
        me.idProperty = me.store.model.idProperty;

        me.store.on('write', me.onWriteStore, me);
        me.store.getProxy().on('exception', me.onErrorAction, me);
        me.list.on('afterdestroy', me.onAfterDestroy, me);
        me.formPanel.on('aftersave', me.onAfterSave, me);
    },

    onDestroyModule: function() {
        var me = this;

        me.store.un('write', me.onWriteStore, me);
        me.store.getProxy().un('exception', me.onErrorAction, me);
        me.list.un('afterdestroy', me.onAfterDestroy, me);
        me.formPanel.un('aftersave', me.onAfterSave, me);
    },

    onNew: function() {
        var me = this;

        me.formPanel.getForm().reset();
        me.formPanel.idRecord = 0;
        me.formPanel.expand();
        me.formPanel.fireEvent('edit', me.formPanel);
    },

    onEdit: function() {
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0],
            idRecord = record.get(me.idProperty);

        me.formPanel.idRecord = idRecord;
        me.formPanel.recordStore = record;
        me.formPanel.loadRecord(record);
        me.formPanel.expand();
        me.formPanel.fireEvent('edit', me.formPanel);
    },

    onSave: function(){
        var me = this,
            form = me.formPanel.getForm(),
            recordStore = form.getRecord() && me.store.findRecord(me.idProperty, form.getRecord().getId(), 0, false, false, true),
            values = form.getFieldValues();

        if(!form.isValid()) {
            Ext.ux.Alert.alert('Warning', 'Form invalid!', 'warning');
            return;
        }

        me.saveButton.disable();
        me.formPanel.setLoading('Wait...');

        if (!me.formPanel.idRecord) {
            recordStore = Ext.create(me.store.model.entityName);
            values[me.idProperty] = 0;
            recordStore.set(values);

            me.store.add(recordStore);
        }
        else {
            form.getRecord().set(values);
            recordStore.set(values);

            if(!me.store.getUpdatedRecords().length) {
                me.saveButton.enable();
                me.formPanel.setLoading(false);
                return;
            }
        }

        me.store.sync();
    },

    onCancel: function() {
        this.formPanel.collapse();
    },

    onSelectionChange: function(selModel, selections) {
        this.lookupReference('delete').setDisabled(!selections.length);
    },

    onDelete: function() {
        var me = this;

        Ext.Msg.confirm('Confirmation', 'Really delete record selected?', function(btn){
            if(btn === 'yes') {
                var record = me.list.getSelectionModel().getSelection()[0],
                    store = me.list.getStore();

                store.remove(record);
                store.sync();
            }
        }, me);
    },

    onAfterDestroy: function(formPanel) {
        var me = this;

        formPanel = formPanel || me.formPanel;
        formPanel.getForm().reset();
        formPanel.idRecord = 0;
    },

    onAfterSave: function(formPanel) {
        var me = this;

        formPanel = formPanel || me.formPanel;

        if(!formPanel.idRecord) {
            formPanel.getForm().reset();
        }

        me.saveButton.enable();
        formPanel.setLoading(false);
    },

    onErrorAction: function(proxy, response) {
        var me = this,
            obj = Ext.decode(response.responseText);

        Ext.ux.Alert.show('Error', obj.msg, 'error');
        me.store.load();
        me.formPanel.setLoading(false);
        me.list.setLoading(false);
        me.saveButton.enable();
    },

    onWriteStore: function(proxy, operation) {
        var me = this,
            obj = Ext.decode(operation.getResponse().responseText);

        if(obj.success) {
            Ext.ux.Alert.show('Success', obj.msg, 'success');

            if(operation.action === 'destroy') {
                me.list.fireEvent('afterdestroy', me.formPanel);
            }
            else {
                me.formPanel.fireEvent('aftersave', me.formPanel);
            }
        }
        else {
            Ext.ux.Alert.show('Error', obj.msg, 'error');
            me.store.load();
        }

        me.formPanel.setLoading(false);
        me.list.setLoading(false);
        me.saveButton.enable();
    }
});