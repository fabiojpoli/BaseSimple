/**
 * Class define the model "Cliente"
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 30/11/2014
 */

Ext.define('BaseSimple.model.Cliente', {
	extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        'nome',
        'endereco'
    ],
    proxy : {
        type  : 'uxproxy',
        module: 'cliente'
    }
});