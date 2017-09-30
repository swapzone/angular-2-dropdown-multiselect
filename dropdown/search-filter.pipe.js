import { Pipe } from '@angular/core';
var MultiSelectSearchFilter = /** @class */ (function () {
    function MultiSelectSearchFilter() {
    }
    MultiSelectSearchFilter.prototype.transform = function (options, args) {
        var matchPredicate = function (option) { return option.name.toLowerCase().indexOf((args || '').toLowerCase()) > -1; }, getChildren = function (option) { return options.filter(function (child) { return child.parentId === option.id; }); }, getParent = function (option) { return options.find(function (parent) { return option.parentId === parent.id; }); };
        return options.filter(function (option) {
            return matchPredicate(option) ||
                (typeof (option.parentId) === 'undefined' && getChildren(option).some(matchPredicate)) ||
                (typeof (option.parentId) !== 'undefined' && matchPredicate(getParent(option)));
        });
    };
    MultiSelectSearchFilter.decorators = [
        { type: Pipe, args: [{
                    name: 'searchFilter'
                },] },
    ];
    /** @nocollapse */
    MultiSelectSearchFilter.ctorParameters = function () { return []; };
    return MultiSelectSearchFilter;
}());
export { MultiSelectSearchFilter };
//# sourceMappingURL=search-filter.pipe.js.map