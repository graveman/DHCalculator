(function (ko) {
    // Wrap ko.observable and ko.observableArray
    var methods = ['observable', 'observableArray'];

    ko.utils.arrayForEach(methods, function (method) {
        var saved = ko[method];
        ko[method] = function (initialValue, options) {
            options = options || {};

            var key = options.persist;
            var item = window.localStorage.getItem(key);
            // Load existing value if set
            if (key &&  item !== null) {
                try {
                    initialValue = JSON.parse(item)
                } catch (e) { };
            }

            // Create observable from saved method
            var observable = saved(initialValue);

            // Subscribe to changes, and save to localStorage
            if (key) {
                observable.subscribe(function (newValue) {
                    window.localStorage.setItem(key, ko.toJSON(newValue));
                });
            };

            return observable;
        }
    })
})(ko);