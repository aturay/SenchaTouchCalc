Ext.onReady(function() {

    var calc = window.calc = Ext.create('Ext.ux.Calculator',{
        renderTo: document.body
    });

    calc.setUI('apple');
});