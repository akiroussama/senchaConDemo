Ext.define('neverWalkAlone.view.login.LoginView', {
	extend: 'Ext.Container',
	xtype: 'loginview',
	cls: 'loginview',
	controller: 'loginviewcontroller',
	viewModel: {
		type: 'loginviewmodel'
	},
	layout: {
		type: 'vbox',
		align: 'center',
		pack: 'center'
	},
	items: [
		{
			xtype: 'window',
			width: 500,
			height: 550,
			modal: true,
			resizable: false,
			draggable: false,
			bodyPadding: 10,
			closable: false,
			autoShow: true,
			cls: 'mybackground',
			defaultFocus: 'txtUserName',
			items: [{
				xtype: 'form',
				id: 'loginForm',
				layout: {
					type: 'vbox',
					align: 'middle'
				},

				reference: 'form',
				autoEl: {
					tag: 'form',
					action: 'login.php',
					method: 'post'
				},
				items: [{
					xtype: 'image',
					src: 'https://seeklogo.com/images/S/sencha-logo-A37F092F24-seeklogo.com.jpg',
					width: 120,
					height: 60
				}, {
					xtype: 'component',
					html: '<h2 class="loginTitle">Virtual SenchaCon 2020<h2>',
					width: '55%'
				}, {
					xtype: 'label',
					margin: '15 0 25 0',
					text: 'Welcome, please sign in below.',
					style: 'font: normal 19px Arial !important;color:gray'
				}, {
					xtype: 'textfield',
					allowBlank: false,

					width: 220,
					height: 35,
					name: 'username',
					itemId: 'username',
					emptyText: 'Username',
					'inputAttrTpl': ['autocomplete="on"'],
					listeners: {
						afterrender: function () {
							this.inputEl.set({
								'autocomplete': 'on'
							});
						}
					}
				}, {
					xtype: 'textfield',
					allowBlank: false,

					margin: '20 0 20 0',
					width: 220,
					height: 35,
					name: 'password',
					itemId: 'password',
					inputType: 'password',
					emptyText: 'Password',
					'inputAttrTpl': ['autocomplete="on"'],
					listeners: {
						afterrender: function () {
							this.inputEl.set({
								'autocomplete': 'on'
							});
						}
					}
				}, {
					xtype: 'container',
					margin: '0 0 25 0',
					layout: {
						type: 'hbox',
						align: 'middle'
					},
					items: [{

						name: 'rememberme',
						xtype: 'checkbox',
						boxLabel: 'Remember Me'
					}, {
						xtype: 'tbspacer',
						width: 20
					}, {
						xtype: 'displayfield',
						value: 'Forgot password',
						style: 'text-decoration: underline;',
						fieldStyle: 'color: #551A8B;'
					}

					]
				}, {
					xtype: 'displayfield',
					reference: 'message',
					hidden: true,
					fieldStyle: 'color: red;',
					value: 'Username and/or Password invalid'
				}, {
					xtype: 'component',
					html: '<iframe id="submitTarget" name="submitTarget" style="display:none"></iframe>'
				}, {
					xtype: 'component',
					html: '<input type="submit" id="submitButton" style="display:none">'
				}, {
					xtype: 'button',
					itemId: 'loginButton',
					text: 'LOGIN',
					height: 40,
					width: 120,
					reference: 'loginButton',
					ui: 'default',
					handler: 'onLogin',
					listeners: {
						afterrender: function () {
							this.el.createChild({
								tag: 'input',
								type: 'submit',
								value: 'LOG IN',
								style: 'width: 100px; height: 35px; position: relative; top: -31px; left: -4px; opacity: 0;'
							});
						}
					}
				}]
			}]
		}
	]

});
