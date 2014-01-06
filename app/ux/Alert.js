/**
 * Ux for alerts
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 26/11/2011
 */

Ext.define('Ext.ux.Alert', {
	msgAlert: null,

	/**
     * Show message of alert in top/center of app
     * @param {String} title Title of message
     * @param {String} msg Message
     * @param {String} type The type of alert (notification, information, success, warning and error)
     */
	show: function(title, msg, type) {
		var me = this,
			msgBox = {},
			content,
			tpl,
			tagTitle = '<h3 style="padding-left: 0px;">'+title+'</h3>';

		if(!me.msgAlert) {
			me.msgAlert = Ext.core.DomHelper.insertFirst(Ext.getBody(), {cls: 'alert-box'}, true);
		}

		content = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
		tpl = ['<table class="alert-', type, '">',
					'<tbody>',
						'<tr>',
							'<td>', tagTitle, '</td>',
						'</tr>',
						'<tr>',
							'<td><p>', content, '<p></td>',
						'</tr>',
					'</tbody>',
				'</table>'];

		msgBox = Ext.core.DomHelper.append(me.msgAlert, tpl, true);

		// msgBox.hide();
		// msgBox.slideIn('t');
		msgBox.ghost('t', {delay: 3000, remove: true});
	}
},

function() {
	/**
	 * @class Ext.ux.Alert
	 * Singleton instance of {@link Abstracts.MessageBox}.
	 */
	Ext.ns('Ext.ux');
	Ext.ux.Alert = new this();
});