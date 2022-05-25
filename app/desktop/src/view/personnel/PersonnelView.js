Ext.define('ModernApp.view.personnel.PersonnelView', {
  xtype: 'personnelview',
  cls: 'personnelview',
  controller: { type: 'personnelviewcontroller' },
  viewModel: { type: 'personnelviewmodel' },
  extend: 'Ext.grid.Grid',
  requires: ['Ext.grid.rowedit.Plugin'],
  store: { type: 'personnelviewstore' },
  grouped: true,
  groupFooter: {
    xtype: 'gridsummaryrow',
  },
  plugins: {
    rowedit: {
      autoConfirm: false,
    },
  },
  columns: [
    {
      text: 'Name',
      dataIndex: 'name',
      editable: true,
      width: 100,
      cell: { userCls: 'bold' },
    },
    { text: 'Email', dataIndex: 'email', editable: true, width: 230 },
    {
      text: 'Phone',
      dataIndex: 'phone',
      editable: true,
      width: 150,
    },
  ],
  listeners: {
    canceledit: 'onEditCancelled',
  },
})
