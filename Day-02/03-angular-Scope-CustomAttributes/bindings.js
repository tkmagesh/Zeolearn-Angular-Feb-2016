    $(function(){

        $("[app-model]").each(function(index, element){
            var $element = $(element),
                model = $element.attr('app-model');

            $element.change(function(){
                var $self = $(this);
                scope.$apply(function(){
                    var expr = model + ' = ' + $self.val();
                    scope.$eval(expr);
                });
            });

            scope.$watch(model, function(newValue, oldValue){
                $element.val(newValue);
            });
        });

        $('[app-click]').each(function(index, element){
            var $element = $(element),
                expr = $element.attr('app-click');
            $element.click(function(){
                scope.$apply(function(){
                    scope.$eval(expr);
                });
            });
        });

        $("[app-bind]").each(function(index, element){
            var $element = $(element),
                model = $element.attr('app-bind');


            scope.$watch(model, function(newValue, oldValue){
                $element.html(newValue);
            });
        });
    });
