/**
 * Created by Nika on 19.09.2014.
 */
function Gear(data) {
    var self = this;

    self.Weapon        = ko.observable(1, { persist: 'AS-Weapon' });
    self.WeaponIAS     = ko.observable(0, { persist: 'AS-WeaponIAS' });
    self.WeaponAS      = ko.observable(0);
    self.Amulet        = ko.observable(0, { persist: 'AS-Amulet' });
    self.Gloves        = ko.observable(0, { persist: 'AS-Gloves' });
    self.TTBuff        = ko.observable(0, { persist: 'AS-TTBuff' });
    self.Bracers       = ko.observable(0, { persist: 'AS-Bracers' });
    self.Quiver        = ko.observable(0, { persist: 'AS-Quiver' });
    self.Belt          = ko.observable(0, { persist: 'AS-Belt' });
    self.Ring1         = ko.observable(0, { persist: 'AS-Ring1' });
    self.Ring2         = ko.observable(0, { persist: 'AS-Ring2' });
    self.Paragon       = ko.observable(0, { persist: 'AS-Paragon' });
    self.Enchantress   = ko.observable(false, { persist: 'AS-Enchantress' });
    
    self.Weapons = ko.observableArray([
        new Weapon (1, "Crossbow", 1.1),
        new Weapon (2, "Bow", 1.4),
        new Weapon (3, "Hand Crossbow", 1.6)
    ]);

    self.BreakPoints = ko.observableArray([
        new BreakPoint(1, "1.102", 1.10205, 1.25581, 1.25),
        new BreakPoint(2, "1.256", 1.25582, 1.4545, 1.42857),
        new BreakPoint(3, "1.459", 1.45946, 1.74193, 1.67),
        new BreakPoint(4, "1.742", 1.74194, 2.16, 2),
        new BreakPoint(5, "2.160", 2.16001, 2.8421, 2.5),
        new BreakPoint(6, "2.842", 2.84211, 4.15385, 3.3),
        new BreakPoint(7, "4.154", 4.15386, 10, 5)
    ]);

    self.WeaponBaseAS = ko.computed(function () {
        var r = ko.utils.arrayFilter(self.Weapons(), function (weapon) {
            return weapon.Value() === self.Weapon();
        });
        return r[0].AS();
    }, this);
   
    self.WeaponAS = ko.computed(function () {
        return +(self.WeaponBaseAS()*(1 + self.WeaponIAS()/100)).toFixed(4);
    }, this);

    self.TotalIAS = ko.computed(function () {
        var r = 0;
        if (self.Enchantress() === true) { r = 3; }
        return parseFloat(self.Amulet()) + parseFloat(self.Gloves()) + parseFloat(self.Bracers()) + parseFloat(self.Quiver()) + parseFloat(self.Belt()) + parseFloat(self.Ring1()) + parseFloat(self.Ring2()) + (parseFloat(self.Paragon()) / 5) + r;
    }, this);


    self.BaseAPS = ko.computed(function () {
        var baseAPS = (self.WeaponBaseAS() * (1 + self.WeaponIAS() / 100)) * (1 + self.TotalIAS() / 100);
        return +(baseAPS).toFixed(4);
    }, this);

    self.TTAPS = ko.computed(function () {
        var ttAPS = ((self.WeaponBaseAS() * (1 + self.WeaponIAS() / 100)) * (1 + self.TotalIAS() / 100)) * (1 + self.TTBuff() / 100);
        return +(ttAPS).toFixed(4);
    }, this);

    self.BreakPoint = ko.computed(function () {
        var ttAPS = ((self.WeaponBaseAS() * (1 + self.WeaponIAS() / 100)) * (1 + self.TotalIAS() / 100)) * (1 + self.TTBuff() / 100);

        if (ttAPS >= 0.98182 && ttAPS <= 1.10204)
            return 0;
        if (ttAPS >= 1.10205 && ttAPS <= 1.25581)
            return 1;
        if (ttAPS >= 1.25582 && ttAPS <= 1.4545)
            return 2;
        if (ttAPS >= 1.45946 && ttAPS <= 1.74193)
            return 3;
        if (ttAPS >= 1.74194 && ttAPS <= 2.16)
            return 4;
        if (ttAPS >= 2.16001 && ttAPS <= 2.8421)
            return 5;
        if (ttAPS >= 2.84211 && ttAPS <= 4.15385)
            return 6;
        if (ttAPS >= 4.15386)
            return 7;
        return 0;
    }, this);

    self.NextBreakPoint = ko.computed(function () {
        if (self.BreakPoint() !== 7) {
            var a = ko.utils.arrayFilter(self.BreakPoints(), function (breakpoint) {
                    return breakpoint.Value() === self.BreakPoint() + 1;
                }); 

            var r = ((a[0].MinAPS() / (self.WeaponBaseAS() * (1 + self.WeaponIAS() / 100) * (1 + self.TTBuff() / 100))) * 100) - 100 - parseFloat(self.TotalIAS());
            r = Math.ceil(r * 10) / 10;
            return r + ' %';
        }
        return 'CAP';
    }, this);
}
