/**
 * Class to define the store "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.store.Cliente', {
	extend: 'Ext.data.Store',
    model : 'BaseSimple.model.Cliente',
    pageSize: 4
});