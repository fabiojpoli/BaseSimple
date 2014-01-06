/**
 * Class to menu
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 28/09/2012
 */

Ext.define('BaseSimple.view.Menu' ,{
    extend	   : 'Ext.tree.Panel',
    alias      : 'widget.mainmenu',
    region     : 'west',
    title	   : 'Menu',
	width	   : 200,
	rootVisible: false,
	root	   : {
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
});