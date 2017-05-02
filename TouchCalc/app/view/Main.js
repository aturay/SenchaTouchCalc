Ext.define('TouchCalc.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        // add packages/calc.js
    ],

    config: {
        layout: {
            pack : 'top',
            type: 'vbox',
            align: 'stretch'
        },

        defaults: {
            flex: 1,
        },

        items: [
        {
            xtype: 'carousel',
            items: [
            {
                items: [
                    { // Title
                        xtype: 'toolbar',
                        docked: 'top',
                        title: 'Обычный'
                    }, // end title

                    { // Alert
                        xtype: 'button',
                        text: 'Alert',
                        handler: function() {
                            Ext.Msg.alert('n/0', 'Деление на ноль невозможно!', Ext.emptyFn);
                        }
                    }, // end alert

                    { // Audio
                        xtype: 'button',
                        text: 'Play',
                        handler: function() {
                            var container = this.getParent().getParent(),
                                // use ComponentQuery to get the audio component (using its xtype)
                                audio = container.down('audio');

                            audio.toggle();
                            this.setText(audio.isPlaying() ? 'Pause' : 'Play');
                        }
                    },
                    {
                        xtype : 'audio',
                        hidden: true,
                        url   : 'resources/audios/button-09.mp3'
                    }, // end Audio

                    { // Calc
                      // include 'packages/calc.js'
                    } // end calc
                ]
            },
            {
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        title: 'Инженерный'
                    },
                    {
                        xtype: 'button',
                        text: 'Alert',
                        handler: function() {
                            Ext.Msg.alert('n/0', 'Деление на ноль невозможно!', Ext.emptyFn);
                        }
                    }
                ]
            }]
        }]
    }
});
