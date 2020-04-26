Ext.define('neverWalkAlone.util.Component', {
    override: 'Ext.Component',

    onBoxReady: function (view, width, height) {
        var me = this,
            el = me.getEl();
        me.callParent(arguments);

        const cyId = this.haveCypressId();
        console.log(this.$className);
        if (el && el.dom && !Ext.isEmpty(cyId)) {
            debugger;
            const attId = me.cyAtt || 'data-cy';
            el.dom.setAttribute(attId, cyId)
        }
    },
    haveCypressId: function () {
        return !Ext.isEmpty(this.cyId) || !Ext.isEmpty(this.itemId) ? (this.cyId || this.itemId) : "";
    },

});                   