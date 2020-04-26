Ext.define('neverWalkAlone.view.home.HomeView', {
	xtype: 'homeview',
	cls: 'homeview',
	controller: { type: 'homeviewcontroller' },
	viewModel: { type: 'homeviewmodel' },
	requires: [],
	extend: 'Ext.Container',
	scrollable: true,
	items: [{
		xtype: 'form',
		frame: true,
		layout: 'form',
		items: [{
			xtype: 'textfield',
			name: 'textfield1',
			inputAttrTpl: 'data-cy=extjsVersion',
			fieldLabel: 'ExtJs Version',
			value: 'Text field value'
		}, {
			xtype: 'hiddenfield',
			name: 'hidden1',
			value: 'Hidden field value'
		}, {
			xtype: 'textfield',
			name: 'password1',
			inputType: 'password',
			itemId: 'pwd',
			fieldLabel: 'Password field'
		}, {
			xtype: 'filefield',
			name: 'file1',
			fieldLabel: 'File upload'
		}, {
			xtype: 'textareafield',
			name: 'textarea1',
			fieldLabel: 'TextArea',
			value: 'Textarea value'
		}, {
			xtype: 'displayfield',
			name: 'displayfield1',
			fieldLabel: 'Display field',
			value: 'Display field <span style="color: "green";">value</span>'
		}, {
			xtype: 'numberfield',
			name: 'numberfield1',
			fieldLabel: 'Number field',
			value: 5,
			minValue: 0,
			maxValue: 50
		}, {
			xtype: 'checkboxfield',
			name: 'checkbox1',
			fieldLabel: 'Checkbox',
			boxLabel: 'box label'
		}, {
			xtype: 'radiofield',
			name: 'radio1',
			value: 'radiovalue1',
			fieldLabel: 'Radio buttons',
			boxLabel: 'radio 1'
		}, {
			xtype: 'radiofield',
			name: 'radio1',
			value: 'radiovalue2',
			fieldLabel: '',
			labelSeparator: '',
			hideEmptyLabel: false,
			boxLabel: 'radio 2'
		}, {
			xtype: 'datefield',
			name: 'date1',
			fieldLabel: 'Date Field'
		}, {
			xtype: 'timefield',
			name: 'time1',
			fieldLabel: 'Time Field',
			minValue: '1:30 AM',
			maxValue: '9:15 PM'
		}]
	}]
});