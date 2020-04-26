Ext.define('neverWalkAlone.view.personnel.PersonnelView', {
	extend: 'Ext.grid.Panel',
	xtype: 'personnelview',
	cls: 'personnelview',
	requires: [],
	controller: 'personnelviewcontroller',
	viewModel: { type: 'personnelviewmodel' },
	store: { type: 'personnelviewstore' },
	columns: [
		{
			text: 'Name',
			dataIndex: 'name',
			flex: 1,
			cell: { userCls: 'bold' }
		},
		{ text: 'Email', dataIndex: 'email', width: 230 },
		{
			text: 'Phone',
			dataIndex: 'phone',
			flex: 1.5
		}
	],
	listeners: {
		select: 'onItemSelected'
	}
});
