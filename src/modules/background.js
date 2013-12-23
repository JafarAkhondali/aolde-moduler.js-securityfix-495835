﻿(function ($) {
    "use strict";

    var background = moduler('background', {
        defaults: {
          color: 'red'
        },
    
        init: function (module) {
            $(module.element).on('click', mo.data(module), background.listen.toggle);
            background.listen.toggle(module);
        },

        listen: {
            toggle: mo.event(function (module) {
                module.settings.color = module.settings.color == 'red' ? 'green' : 'red';

                module.$element.removeClass('red green');
                module.$element.addClass(module.settings.color);
            })
        }
    });
    
})(jQuery);
