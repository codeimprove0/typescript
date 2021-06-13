"use strict";
//class News implements  Sport,SportNew {
var News = /** @class */ (function () {
    function News(category) {
        this.newCategory = category;
    }
    News.prototype.getReport = function () {
        return 'Report Called';
    };
    News.prototype.getReport2 = function () {
        return 'Report2 Called';
    };
    return News;
}());
//let newObj:Sport = new News('Sports');
var newObj = new News('Sports');
console.log(newObj.getReport());
console.log(newObj.getReport2());
