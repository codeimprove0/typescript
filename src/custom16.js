///  <reference path="./custom16-2.ts"/>
var Market;
(function (Market) {
    var Shoes = /** @class */ (function () {
        function Shoes(sBrand) {
            this.name = 'test';
            this.sBrand = sBrand;
        }
        Shoes.prototype.getShoes = function () {
            return 'Bata,Sparx, Addidas ' + this.sBrand;
        };
        return Shoes;
    }());
    Market.Shoes = Shoes;
    function area() {
        return "India";
    }
    Market.area = area;
})(Market || (Market = {}));
var mkt = new Market.Shoes('Nike');
console.log(mkt.getShoes());
console.log(Market.area());
//# sourceMappingURL=custom16.js.map