// Same height for cards
// Add a parent container and a child element as a parameter.
// Usage: equalheight('.row.same-height', '.card');
var equalheight = function (parent, child) {

    jQuery(parent).each(function () {
       var parentContainer = this;
        var children = jQuery(parentContainer).find(child);
        if (children.length) {
            var currentTallest = 0;
            var currentRowStart = 0;
            var rowDivs = [];
            var $el;
            var topPosition = 0;

            children.each(function () {
                var child = this;
                $el = jQuery(child);
                jQuery($el).height('auto');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }
    });
}; 
