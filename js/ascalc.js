/**
 * Created by Nika on 19.09.2014.
 */

function Gear(data) {
    var self = this;

    self.Weapon1BaseAS = ko.observable(1.1, { persist: 'AS-Weapon1BaseAS' });
    self.Weapon1IAS    = ko.observable(0, { persist: 'AS-Weapon1IAS' });
    self.Weapon1AS     = ko.observable(0);
    self.Amulet        = ko.observable(0, { persist: 'AS-Amulet' });
    self.Gloves        = ko.observable(0, { persist: 'AS-Gloves' });
    self.TTBuff        = ko.observable(0, { persist: 'AS-TTBuff' });
    self.Bracers       = ko.observable(0, { persist: 'AS-Bracers' });
    self.Rucksack      = ko.observable(0, { persist: 'AS-Rucksack' });
    self.Belt          = ko.observable(0, { persist: 'AS-Belt' });
    self.Ring1         = ko.observable(0, { persist: 'AS-Ring1' });
    self.Ring2         = ko.observable(0, { persist: 'AS-Ring2' });
    self.Paragon       = ko.observable(0, { persist: 'AS-Paragon' });
    self.Weapons       = ko.observableArray([
        { Value: 1.1, Text: "1.1 - Crossbow" },
        { Value: 1.4, Text: "1.4 - Bow" },
        { Value: 1.6, Text: "1.6 - Hand crossbow" }
    ]);

    self.BreakPoints = ko.observableArray([
        { BP: 0, MinAPS: 0.98182, MaxAPS: 1.10204, SentryAPS: 1.1 },
        { BP: 1, MinAPS: 1.10205, MaxAPS: 1.25581, SentryAPS: 1.25 },
        { BP: 2, MinAPS: 1.25582, MaxAPS: 1.4545,  SentryAPS: 1.42857 },
        { BP: 3, MinAPS: 1.45946, MaxAPS: 1.74193, SentryAPS: 1.67 },
        { BP: 4, MinAPS: 1.74194, MaxAPS: 2.16,    SentryAPS: 2 },
        { BP: 5, MinAPS: 2.16001, MaxAPS: 2.8421,  SentryAPS: 2.5 },
        { BP: 6, MinAPS: 2.84211, MaxAPS: 4.15385, SentryAPS: 3.3 },
        { BP: 7, MinAPS: 4.15386, MaxAPS: "CAP",   SentryAPS: 5 }
    ]);

    self.Weapon1AS = ko.computed(function () {
        return +(self.Weapon1BaseAS()*(1 + self.Weapon1IAS()/100)).toFixed(4);
    }, this);

    self.TotalIAS = ko.computed(function () {
        return parseFloat(self.Amulet()) + parseFloat(self.Gloves()) + parseFloat(self.Bracers()) + parseFloat(self.Rucksack()) + parseFloat(self.Belt()) + parseFloat(self.Ring1()) + parseFloat(self.Ring2()) + parseFloat(self.Paragon());
    }, this);


    self.BaseAPS = ko.computed(function () {
        var baseAPS = (self.Weapon1BaseAS() * (1 + self.Weapon1IAS() / 100)) * (1 + self.TotalIAS() / 100);
        return +(baseAPS).toFixed(4);
    }, this);

    self.TTAPS = ko.computed(function () {
        var ttAPS = ((self.Weapon1BaseAS() * (1 + self.Weapon1IAS() / 100)) * (1 + self.TotalIAS() / 100)) * (1 + self.TTBuff() / 100);
        return +(ttAPS).toFixed(4);
    }, this);

    self.BreakPoint = ko.computed(function () {
        var ttAPS = ((self.Weapon1BaseAS() * (1 + self.Weapon1IAS() / 100)) * (1 + self.TotalIAS() / 100)) * (1 + self.TTBuff() / 100);

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


    self.CAMSImp = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "MS": 12, "Imp": 12, "Bolts": 0 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "MS": 21, "Imp": 10, "Bolts": 0 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "MS": 24, "Imp": 12, "Bolts": 0 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "MS": 24, "Imp": 24, "Bolts": 0 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "MS": 24, "Imp": 24, "Bolts": 13 },
        { "BP": 6, "TotalBolts": 97, "CA": 13, "MS": 31, "Imp": 31, "Bolts": 22 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "MS": 33, "Imp": 33, "Bolts": 70 }
    ]);

    self.CAMSChak = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "MS": 12, "Chak": 2 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "MS": 21, "Chak": 10 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "MS": 24, "Chak": 12 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "MS": 24, "Chak": 24 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "MS": 24, "Chak": 37 },
        { "BP": 6, "TotalBolts": 97, "CA": 14, "MS": 29, "Chak": 54 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "MS": 36, "Chak": 100 }
    ]);

    self.CAMSEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "MS": 12, "EA": 12 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "MS": 21, "EA": 10 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "MS": 24, "EA": 12 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "MS": 24, "EA": 24 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "MS": 24, "EA": 37 },
        { "BP": 6, "TotalBolts": 97, "CA": 14, "MS": 29, "EA": 54 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "MS": 36, "EA": 100 }
    ]);

    self.CAImpChak = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "Imp": 12, "Chak": 12 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "Imp": 21, "Chak": 10 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "Imp": 24, "Chak": 12 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "Imp": 24, "Chak": 24 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "Imp": 24, "Chak": 37 },
        { "BP": 6, "TotalBolts": 97, "CA": 14, "Imp": 29, "Chak": 54 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "Imp": 36, "Chak": 100 }
    ]);

    self.CAImpEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "Imp": 12, "EA": 12 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "Imp": 21, "EA": 10 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "Imp": 24, "EA": 12 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "Imp": 24, "EA": 24 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "Imp": 24, "EA": 37 },
        { "BP": 6, "TotalBolts": 97, "CA": 14, "Imp": 29, "EA": 54 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "Imp": 36, "EA": 100 }
    ]);

    self.CAChakEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "CA": 13, "Chak": 12, "EA": 12 },
        { "BP": 2, "TotalBolts": 42, "CA": 11, "Chak": 16, "EA": 15 },
        { "BP": 3, "TotalBolts": 49, "CA": 13, "Chak": 18, "EA": 18 },
        { "BP": 4, "TotalBolts": 60, "CA": 12, "Chak": 24, "EA": 24 },
        { "BP": 5, "TotalBolts": 74, "CA": 13, "Chak": 31, "EA": 30 },
        { "BP": 6, "TotalBolts": 97, "CA": 13, "Chak": 42, "EA": 42 },
        { "BP": 7, "TotalBolts": 150, "CA": 14, "Chak": 68, "EA": 68 }
    ]);

    self.MSImpChak = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "MS": 19, "Imp": 18, "Chak": 0 },
        { "BP": 2, "TotalBolts": 42, "MS": 21, "Imp": 21, "Chak": 0 },
        { "BP": 3, "TotalBolts": 49, "MS": 25, "Imp": 24, "Chak": 0 },
        { "BP": 4, "TotalBolts": 60, "MS": 30, "Imp": 30, "Chak": 0 },
        { "BP": 5, "TotalBolts": 74, "MS": 25, "Imp": 25, "Chak": 24 },
        { "BP": 6, "TotalBolts": 97, "MS": 33, "Imp": 32, "Chak": 32 },
        { "BP": 7, "TotalBolts": 150, "MS": 38, "Imp": 38, "Chak": 74 }
    ]);

    self.MSImpEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "MS": 19, "Imp": 18, "EA": 0 },
        { "BP": 2, "TotalBolts": 42, "MS": 21, "Imp": 21, "EA": 0 },
        { "BP": 3, "TotalBolts": 49, "MS": 25, "Imp": 24, "EA": 0 },
        { "BP": 4, "TotalBolts": 60, "MS": 30, "Imp": 30, "EA": 0 },
        { "BP": 5, "TotalBolts": 74, "MS": 2, "Imp": 25, "EA": 24 },
        { "BP": 6, "TotalBolts": 97, "MS": 33, "Imp": 32, "EA": 32 },
        { "BP": 7, "TotalBolts": 150, "MS": 38, "Imp": 38, "EA": 74 }
    ]);

    self.MSChakEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "MS": 19, "Chak": 9, "EA": 9 },
        { "BP": 2, "TotalBolts": 42, "MS": 21, "Chak": 11, "EA": 10 },
        { "BP": 3, "TotalBolts": 49, "MS": 25, "Chak": 12, "EA": 12 },
        { "BP": 4, "TotalBolts": 60, "MS": 30, "Chak": 15, "EA": 15 },
        { "BP": 5, "TotalBolts": 74, "MS": 25, "Chak": 25, "EA": 24 },
        { "BP": 6, "TotalBolts": 97, "MS": 33, "Chak": 32, "EA": 32 },
        { "BP": 7, "TotalBolts": 150, "MS": 38, "Chak": 56, "EA": 56 }
    ]);

    self.ImpChakEA = ko.observableArray([
        { "BP": 1, "TotalBolts": 37, "Imp": 19, "Chak": 9, "EA": 9 },
        { "BP": 2, "TotalBolts": 42, "Imp": 21, "Chak": 11, "EA": 10 },
        { "BP": 3, "TotalBolts": 49, "Imp": 25, "Chak": 2, "EA": 12 },
        { "BP": 4, "TotalBolts": 60, "Imp": 30, "Chak": 15, "EA": 15 },
        { "BP": 5, "TotalBolts": 74, "Imp": 25, "Chak": 5, "EA": 24 },
        { "BP": 6, "TotalBolts": 97, "Imp": 33, "Chak": 32, "EA": 32 },
        { "BP": 7, "TotalBolts": 150, "Imp": 38, "Chak": 56, "EA": 56 }
    ]);
}
