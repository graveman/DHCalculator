/**
 * Created by Nika on 19.09.2014.
 * 
 */
var Element = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text = ko.observable(text);    
};

var Skill = function (value, text, slug) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
    self.Slug  = ko.observable(slug);
};

var BreakPoint = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
};

var LightningHit = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
};

var Rune = function (value, text, skill, element, single, singlecap, singleaoe, multi, multicap, multiaoe, type, hits, slug) {
    var self = this;
    self.Value      = ko.observable(value);
    self.Text       = ko.observable(text);
    self.Skill      = ko.observable(skill);
    self.Element    = ko.observable(element);             // Elemental type
    self.Single     = ko.observable(single);              // damage multiplier for primary strike
    self.SingleCap  = ko.observable(singlecap);           // max number of targets for primary strike
    self.SingleAoE  = ko.observable(singleaoe);           // primary strike AoE, true or false
    self.Multi      = ko.observable(multi);               // damage multiplier for secondary strikes
    self.MultiCap   = ko.observable(multicap);            // max number of targets for secondary strikes
    self.MultiAoE   = ko.observable(multiaoe);            // secondary strike AoE, true or false
    self.Type       = ko.observable(type);                // 1 for Rocket, 2 for Grenade, 0 for no specific type
    self.Hits       = ko.observable(hits);                // allow for multiple hits to same enemy, true or false
    self.Slug       = ko.observable(slug);
};

function formatNumber(number) {
    var x = Math.round(number) + '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x)) {
        x = x.replace(rgx, '$1' + ' ' + '$2');
    }
    return x;
};

function Stats(data) {
    var self = this;
    self.BreakPoint               = ko.observable(1, { persist: 'DC-BreakPoint' });
    self.ShowSize                 = ko.observable(false, { persist: 'DC-ShowSize' });
    self.EnemySize                = ko.observable(1, { persist: 'DC-EnemySize' });

    self.Weapon                   = ko.observable(1, { persist: 'DC-Weapon' });
    self.WeaponDamage1            = ko.observable(0, { persist: 'DC-WeaponDamage1' });
    self.WeaponDamage2            = ko.observable(0, { persist: 'DC-WeaponDamage2' });
    self.JewelryDamage1           = ko.observable(0, { persist: 'DC-JewelryDamage1' });
    self.JewelryDamage2           = ko.observable(0, { persist: 'DC-JewelryDamage2' });

    self.Dexterity                = ko.observable(0, { persist: 'DC-Dexterity' });
    self.CHC                      = ko.observable(0, { persist: 'DC-CHC' });
    self.CHCBonus                 = ko.observable(0, { persist: 'DC-CHCBonus' });
    self.CHCTotal                 = ko.observable(0, { persist: 'DC-CHCTotal' });
    self.CHD                      = ko.observable(0, { persist: 'DC-CHD' });
    self.CHDBonus                 = ko.observable(0, { persist: 'DC-CHDBonus' });
    self.CHDTotal                 = ko.observable(0, { persist: 'DC-CHDTotal' });
    self.EliteDamage              = ko.observable(0, { persist: 'DC-EliteDamage' });

    self.ColdDamage               = ko.observable(0, { persist: 'DC-ColdDamage' });
    self.FireDamage               = ko.observable(0, { persist: 'DC-FireDamage' });
    self.LightningDamage          = ko.observable(0, { persist: 'DC-LightningDamage' });
    self.PhysicalDamage           = ko.observable(0, { persist: 'DC-PhysicalDamage' });

    self.NumberofTargets          = ko.observable(1, { persist: 'DC-NumberofTargets' });
    self.NumberofHits             = ko.observable(1, { persist: 'DC-NumberofHits' });
    self.NumberofAoETargets       = ko.observable(1, { persist: 'DC-NumberofAoETargets' });
    self.NumberofSpenders         = ko.observable(3, { persist: 'DC-NumberofSpenders' });

    self.SentryDamage             = ko.observable(0, { persist: 'DC-SentryDamage' });
    self.CADamage                 = ko.observable(0, { persist: 'DC-CADamage' });
    self.MultishotDamage          = ko.observable(0, { persist: 'DC-MultishotDamage' });
    self.EADamage                 = ko.observable(0, { persist: 'DC-EADamage' });
    self.ImpaleDamage             = ko.observable(0, { persist: 'DC-ImpaleDamage' });
    self.ChakramDamage            = ko.observable(0, { persist: 'DC-ImpaleDamage' });
    self.WolfCompanion            = ko.observable(false, { persist: 'DC-WolfCompanion' });
    self.MarkedforDeath           = ko.observable(false, { persist: 'DC-MarkedforDeath' });
    self.Caltrops                 = ko.observable(false, { persist: 'DC-Caltrops' });

    self.WeaponCompare            = ko.observable(0, { persist: 'DC-WeaponCompare' });
    self.WeaponDamage1Compare     = ko.observable(0, { persist: 'DC-WeaponDamage1Compare' });
    self.WeaponDamage2Compare     = ko.observable(0, { persist: 'DC-WeaponDamage2Compare' });
    self.JewelryDamage1Compare    = ko.observable(0, { persist: 'DC-JewelryDamage1Compare' });
    self.JewelryDamage2Compare    = ko.observable(0, { persist: 'DC-JewelryDamage2Compare' });
    self.DexterityCompare         = ko.observable(0, { persist: 'DC-DexterityCompare' });
    self.CHCCompare               = ko.observable(0, { persist: 'DC-CHCCompare' });
    self.CHDCompare               = ko.observable(0, { persist: 'DC-CHDCompare' });
    self.EliteCompare             = ko.observable(0, { persist: 'DC-EliteCompare' });
    self.ColdCompare              = ko.observable(0, { persist: 'DC-ColdCompare' });
    self.FireCompare              = ko.observable(0, { persist: 'DC-FireCompare' });
    self.LightningCompare         = ko.observable(0, { persist: 'DC-LightningCompare' });
    self.PhysicalCompare          = ko.observable(0, { persist: 'DC-PhysicalCompare' });
    self.SentryCompare            = ko.observable(0, { persist: 'DC-SentryCompare' });
    self.CACompare                = ko.observable(0, { persist: 'DC-CACompare' });
    self.MultishotCompare         = ko.observable(0, { persist: 'DC-MultishotCompare' });
    self.EACompare                = ko.observable(0, { persist: 'DC-EACompare' });
    self.ImpaleCompare            = ko.observable(0, { persist: 'DC-ImpaleCompare' });
    self.ChakramCompare           = ko.observable(0, { persist: 'DC-ImpaleCompare' });

    self.CulltheWeak              = ko.observable(false, { persist: 'DC-CulltheWeak' });
    self.SteadyAim                = ko.observable(false, { persist: 'DC-SteadyAim' });
    self.Ballistics               = ko.observable(false, { persist: 'DC-Ballistics' });
    self.Grenadier                = ko.observable(false, { persist: 'DC-Grenadier' });
    self.Ambush                   = ko.observable(false, { persist: 'DC-Ambush' });
    self.Archery                  = ko.observable(false, { persist: 'DC-Archery' });
    self.SingleOut                = ko.observable(false, { persist: 'DC-SingleOut' });
    
    self.BaneofthePowerful              = ko.observable(false, { persist: 'DC-BaneofthePowerfulRank' });
    self.Enforcer                       = ko.observable(false, { persist: 'DC-Enforcer' });
    self.EnforcerRank                   = ko.observable(0, { persist: 'DC-EnforcerRank' });
    self.EnforcerPercentage               = ko.observable(0, { persist: 'DC-EnforcerPercentage' });
    self.BaneoftheTrapped               = ko.observable(false, { persist: 'DC-BaneoftheTrapped' });    
    self.BaneoftheTrappedRank           = ko.observable(0, { persist: 'DC-BaneoftheTrappedRank' });
    self.ZeisStoneofVengeance           = ko.observable(false, { persist: 'DC-ZeisStoneofVengeance' });
    self.ZeisStoneofVengeanceRank       = ko.observable(0, { persist: 'DC-ZeisStoneofVengeanceRank' });
    self.ZeisStoneofVengeanceDistance   = ko.observable(1, { persist: 'DC-ZeisStoneofVengeanceDistance' });
    self.GemofEfficaciousToxin          = ko.observable(false, { persist: 'DC-GemofEfficaciousToxin' });    
    self.GemofEfficaciousToxinRank      = ko.observable(0, { persist: 'DC-GemofEfficaciousToxinRank' });
    
    self.HexingPantsofMrYan               = ko.observable(false, { persist: 'DC-HexingPantsofMrYan' });
    self.OverwhelmingDesire               = ko.observable(false, { persist: 'DC-OverwhelmingDesire' });
    self.Calamity                         = ko.observable(false, { persist: 'DC-Calamity' });
    self.StrongarmBracers                 = ko.observable(false, { persist: 'DC-StrongarmBracers' });
    self.StrongarmBracersPercentage       = ko.observable(20, { persist: 'DC-StrongarmBracersPercentage' }); 
    self.HarringtonsWaistguard            = ko.observable(false, { persist: 'DC-HarringtonsWaistguard' });  
    self.HarringtonsWaistguardPercentage  = ko.observable(100, { persist: 'DC-HarringtonsWaistguard' });  
    self.MeticulousBolts                  = ko.observable(false, { persist: 'DC-MeticulousBolts' });  
    self.MeticulousBoltsPercentage        = ko.observable(40, { persist: 'DC-MeticulousBoltsPercentage' });   

    self.BigBadVoodoo             = ko.observable(false, { persist: 'DC-BigBadVoodoo' });
    self.MassConfusion            = ko.observable(false, { persist: 'DC-MassConfusion' });
    self.Piranhas                 = ko.observable(false, { persist: 'DC-Piranhas' });
    self.MantraofConviction       = ko.observable(false, { persist: 'DC-MantraofConviction' });
    self.InnerSanctuary           = ko.observable(false, { persist: 'DC-InnerSanctuary' });
    self.CripplingWave            = ko.observable(false, { persist: 'DC-CripplingWave' });

    self.Weapons = ko.observableArray([
        { Value: 1, Text: "Crossbow" },
        { Value: 2, Text: "Bow" },
        { Value: 3, Text: "Hand Crossbow" }
    ]);

    self.Elements = ko.observableArray([
        new Element(1, "Cold"),
        new Element(2, "Fire"),
        new Element(3, "Lightning"),
        new Element(4, "Physical")
    ]);
    
    self.BreakPoints = ko.observableArray([
        new BreakPoint(1, "1.102"),
        new BreakPoint(2, "1.256"),
        new BreakPoint(3, "1.459"),
        new BreakPoint(4, "1.742"),
        new BreakPoint(5, "2.160"),
        new BreakPoint(6, "2.842"),
        new BreakPoint(7, "4.154")
    ]);

    self.LightningHits = ko.observableArray([
        new LightningHit(30, "3.35"),
        new LightningHit(31, "3.25"),
        new LightningHit(32, "3.15"),
        new LightningHit(33, "3.05"),
        new LightningHit(34, "2.95"),
        new LightningHit(35, "2.85"),
        new LightningHit(36, "2.8"),
        new LightningHit(37, "2.7"),
        new LightningHit(38, "2.65"),
        new LightningHit(39, "2.55"),
        new LightningHit(40, "2.5")
    ]);

    self.ActiveSkills = ko.observableArray([
        new Skill(1, "Cluster Arrow", "cluster-arrow"),
        new Skill(2, "Elemental Arrow", "elemental-arrow"),
        new Skill(3, "Multishot", "multishot"),
        new Skill(4, "Impale", "impale"),
//        new Skill(5, "Chakram")                                               // I'll wait until I figure out how to properly implement this
        new Skill(6, "Sentry", "sentry")
    ]);

    self.Runes = ko.observableArray([
        new Rune(1, "Dazzling Arrow",       1, 3, 5.5, 1, true, 8.8, 1, true, 2, false, "e"),
        new Rune(2, "Shooting Stars",       1, 4, 5.5, 1, true, 6, 3, false, 1, false, "b"),
        new Rune(3, "Maelstrom",            1, 1, 5.5, 1, true, 4.5, 5, false, 1, false, "d"),
//        new Rune(4, "Cluster Bombs",        1, 2, 0, 0, 0, 0),                                    // No idea how many grenades actually spawn
        new Rune(5, "Loaded for Bear",      1, 2, 7.7 , 1, true, 8.8, 1, true, 2, false, "a"),
        new Rune(1, "Frost  Arrow",         2, 1, 0, 0, false, 3.3, 11, false, 0, false, "a"),
        new Rune(2, "Ball Lightning",       2, 3, 1.5, 1, true, 0, 0, true, 0, true, "b"),
        new Rune(3, "Immolation Arrow",     2, 2, 3, 1, false, 3.15, 1, true, 0, false, "c"),
        new Rune(4, "Lightning Bolts",      2, 3, 3, 1, false, 0, 0, false, 0, false,"e"),
//        new Rune(5, "Nether Tentacles",     2, 4, 3, 1, 0, 0, 0, true, "d"),                      // Due to implementation of Meticulous Bolts
        new Rune(1, "Burst Fire",           3, 1, 3.6, 11, false, 2, 1, true, 0, false, "b"),       // Chose arrows as primary, cold burst as secondary
        new Rune(2, "Full Broadside",       3, 4, 4.6, 11, false, 0, 0, false, 0, false, "a"),      // Chose arrows as primary
        new Rune(3, "Arsenal",              3, 2, 3.6, 11, false, 3, 3, false, 1, false, "c"),      // Chose arrows as primary, rockets as secondary
        new Rune(4, "Fire at Will",         3, 3, 3.6, 11, false, 0, 0, false, 0, false, "d"),      // Chose arrows as primary
        new Rune(5, "Suppression Fire",     3, 4, 3.6, 11, false, 0, 0, false, 0, false, "e"),      // Chose arrows as primary
        new Rune(1, "Impact",               4, 4, 7.5, 1, false, 0, 0, false, 0, false, "b"),
        new Rune(2, "Chemical Burn",        4, 2, 7.5, 1, false, 5, 1, false, 0, false, "c"),
        new Rune(3, "Grievous Wounds",      4, 4, 7.5, 1, false, 0, 0, false, 0, false, "e"),
        new Rune(4, "Overpenetration",      4, 1, 7.5, 1, false, 0, 0, false, 0, false, "a"),
        new Rune(5, "Ricochet",             4, 3, 7.5, 3, false, 0, 0, false, 0, false, "d"),
        new Rune(1, "Spitfire Turret",      6, 2, 2.8, 1, false, 1.2, 1, false, 1, false, "c"),     // Bolts as primary, rockets as secondary
        new Rune(2, "Polar Station",        6, 1, 2.8, 1, false, 0, 0, false, 1, false, "d")        // Bolts as primary
        //       new Rune(1, "Twin Chakrams",        5, 2, 0, 0, 0, 0, 0)                           // I'll wait until I figure out how to properly implement this
    ]);
    
    self.NumberofTargets.subscribe(function(newValue) {
        if (parseInt(self.NumberofAoETargets()) > parseInt(newValue)) {
            self.NumberofAoETargets(newValue);
        }
    });

    self.ActiveSkill1           = ko.observable(6, { persist: 'DC-ActiveSkill1' });
    self.ActiveSkill1Data       = ko.computed(function () {
        var r = ko.utils.arrayFilter(self.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill1();
        });
        return r[0];
    }, this);
    self.ActiveSkill1Rune       = ko.observable(1, { persist: 'DC-ActiveSkill1Rune' });
    self.ActiveSkill1Runes      = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill1();
        });
    }, this);
    self.ActiveSkill1RuneData   = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill1() && rune.Value() === self.ActiveSkill1Rune();
        });
        return r[0];
    }, this);

    self.ActiveSkill2           = ko.observable(2, { persist: 'DC-ActiveSkill2' });
    self.ActiveSkill2Data       = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill2();
        });
        return r[0];
    }, this);
    self.ActiveSkill2Rune       = ko.observable(1, { persist: 'DC-ActiveSkill2Rune' });
    self.ActiveSkill2Runes      = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill2();
        });
    }, this);
    self.ActiveSkill2RuneData = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill2() && rune.Value() === self.ActiveSkill2Rune();
        });
        return r[0];
    }, this);

    self.ActiveSkill3           = ko.observable(3, { persist: 'DC-ActiveSkill3' });
    self.ActiveSkill3Rune       = ko.observable(1, { persist: 'DC-ActiveSkill3Rune' });
    self.ActiveSkill3Runes      = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill3();
        });
    }, this);
    self.ActiveSkill3Data       = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill3();
        });
        return r[0];
    }, this);
    self.ActiveSkill3RuneData   = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill3() && rune.Value() === self.ActiveSkill3Rune();
        });
        return r[0];
    }, this);

    self.ActiveSkill4           = ko.observable(4, { persist: 'DC-ActiveSkill4' });
    self.ActiveSkill4Rune       = ko.observable(1, { persist: 'DC-ActiveSkill4Rune' });
    self.ActiveSkill4Runes      = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill4();
        });
    }, this);
    self.ActiveSkill4Data       = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill4();
        });
        return r[0];
    }, this);
    self.ActiveSkill4RuneData   = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill4() && rune.Value() === self.ActiveSkill4Rune();
        });
        return r[0];
    }, this);

    self.ShowSize   = ko.computed(function () {
        if (self.ActiveSkill2() === 2 && self.ActiveSkill2Rune() === 2) { return true; }
        if (self.ActiveSkill3() === 2 && self.ActiveSkill3Rune() === 2) { return true; }
        if (self.ActiveSkill4() === 2 && self.ActiveSkill4Rune() === 2) { return true; }
        return false;        
    }, this);

    self.SpenderCombo = ko.computed(function () {
        var r;
        if (parseInt(self.NumberofSpenders()) === 1) { r = self.ActiveSkill2(); }
        if (parseInt(self.NumberofSpenders()) === 2) {
            r = [self.ActiveSkill2(),self.ActiveSkill3()];
            r.sort();
            r = r.join('');
        }
        if (parseInt(self.NumberofSpenders()) === 3) {
            r = [self.ActiveSkill2(),self.ActiveSkill3(),self.ActiveSkill4()];
            r.sort();
            r = r.join('');
        }
        return r;
    }, this);

    self.CHCBonus = ko.computed(function () {
        var r = 0;
        if (self.SingleOut() === true) { r = r + 25; }
        if (self.Archery() === true && self.Weapon() === 3) { r = r + 5; }
        if (self.Caltrops() === true) { r = r + 10; }  
        return r;
    }, this);
    
    self.CHDBonus = ko.computed(function () {
        var r = 0;
        if (self.Archery() === true && self.Weapon() === 1) { r = r + 50; }   
        return r;
    }, this);
    
    self.CHCTotal = ko.computed(function () {
        var r = parseFloat(self.CHC()) + self.CHCBonus();
        return r;
    },this);

    self.CHDTotal = ko.computed(function () {
        var r = parseInt(self.CHD()) + self.CHDBonus();
        return r;
    },this);

    self.BaseWeaponDamage = ko.computed(function () {
        var r = 0;        
        r = (parseInt(self.WeaponDamage1()) + parseInt(self.JewelryDamage1()) + parseInt(self.WeaponDamage2()) + parseInt(self.JewelryDamage2())) / 2;       
        return r;
    }, this);

    self.CompareWeaponDamage = ko.computed(function () {
        var r = parseInt(self.WeaponDamage1()) + parseInt(self.WeaponDamage2());
        if (parseInt(self.WeaponDamage1Compare()) + parseInt(self.WeaponDamage2Compare()) > 0) {
            r = parseInt(self.WeaponDamage1Compare()) + parseInt(self.WeaponDamage2Compare()); 
        }
        r = r + parseInt(self.JewelryDamage1()) + parseInt(self.JewelryDamage1Compare());
        r = r + parseInt(self.JewelryDamage2()) + parseInt(self.JewelryDamage2Compare());     
        r = r / 2;
        return r;
    }, this);

    self.ArcheryCHC = ko.computed(function () {
        var r = 0;
        if (self.WeaponCompare() === 3 && self.Weapon() !== 3 && self.Archery() === true) { r = 5; }
        if (self.WeaponCompare() !== 3 && self.Weapon() === 3 && self.Archery() === true) { r = -5; }
        return r;       
    }, this);

    self.ArcheryCDC = ko.computed(function () {
        var r = 0;
        if (self.WeaponCompare() === 1 && self.Weapon() !== 1 && self.Archery() === true) { r = 50; }
        if (self.WeaponCompare() !== 1 && self.Weapon() === 1 && self.Archery() === true) { r = -50; }
        return r;       
    }, this);

    self.BaneoftheTrappedPercentage = ko.computed(function () {
        var r = 1;
        if (self.BaneoftheTrapped() === true) {
            r = r * (100 + 15 + parseInt(self.BaneoftheTrappedRank()) * 0.3) / 100;
        }
        return r;
    }, this);

    self.EnforcerPercentage = ko.computed(function () {
        var r = 0;      
        if (self.Enforcer() === true) {
            r = r + 15 + parseInt(self.EnforcerRank()) * 0.3;
        }
        r = r / 100;
        return r;
    }, this);

    self.ZeisStoneofVengeancePercentage = ko.computed(function () {
        var r = 1;
        if (self.ZeisStoneofVengeance() === true) {
            r = r * (100 + (4 + parseInt(self.ZeisStoneofVengeanceRank()) * 0.05) * parseInt(self.ZeisStoneofVengeanceDistance())) / 100;
        };
        return r;
    }, this);

    self.AdditiveModifier = ko.computed(function () {
        var r = 0;
        if (self.Archery() === true && self.Weapon() === 2) { r = 1; } 
        return CalculateAdditive(r);
    }, this);

    self.AdditiveModifierCompare = ko.computed(function () {
        var r = 0;
        if (self.Archery() === true && self.WeaponCompare() === 2) { r = 1; } 
        return CalculateAdditive(r);
    }, this);

    function CalculateAdditive(bow) {
        var r = 100;
        if (self.SteadyAim() === true) { r = r + 20; }
        if (self.MarkedforDeath() === true) { r = r + 20; }
        if (self.Calamity() === true) { r = r + 20; }
        if (self.OverwhelmingDesire() === true) { r = r + 35; } 
        if (self.WolfCompanion() === true) { r = r + 30; } 
        if (self.HexingPantsofMrYan() === true) { r = r + 25; }
        if (self.BaneofthePowerful() === true) { r = r + 20; } 
        if (self.MassConfusion() === true) { r = r + 20; }      
        if (self.Piranhas() === true) { r = r + 15; }
        if (self.BigBadVoodoo() === true) { r = r + 30; } 
        if (self.CripplingWave() === true) { r = r + 10; } 
        if (self.MantraofConviction() === true) { r = r + 20; }
        if (self.InnerSanctuary() === true) { r = r + 30; }  
        if (self.HarringtonsWaistguard() === true) { r = r + parseInt(self.HarringtonsWaistguardPercentage()); } 
        if (self.StrongarmBracers() === true) { r = r + parseInt(self.StrongarmBracersPercentage()); } 
        r = r + 8 * bow;
        r = r / 100;   
        return r;
    }

    self.MultiplicativeModifier = ko.computed(function () {
        var r = 1;
        r = r * self.BaneoftheTrappedPercentage();
        r = r * self.ZeisStoneofVengeancePercentage();       
        if (self.Ambush() === true) { r = r * 1.077; }
        if (self.CulltheWeak() === true) { r = r * 1.2; }

        console.log('r' + r); 
        return r;
    }, this);

    self.ActiveSkill1Damage = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return Calculate(self.ActiveSkill1(), self.ActiveSkill1Rune(), 0, a);
    }, this);

    self.ActiveSkill2Damage = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return Calculate(self.ActiveSkill2(), self.ActiveSkill2Rune(), 0, a);
    }, this);

    self.ActiveSkill3Damage = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return Calculate(self.ActiveSkill3(), self.ActiveSkill3Rune(), 0, a);
    }, this);
    
    self.ActiveSkill4Damage = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return Calculate(self.ActiveSkill4(), self.ActiveSkill4Rune(), 0, a);
    }, this);

    self.TotalDPS = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return CalculateTotal(0, a);  
    }, this);

    self.UnitDPS = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return CalculateTotal(1, a);  
    }, this);

    self.UnitDifference = ko.computed(function () {
        var r = parseFloat(self.UnitDPS());
        r = r - parseFloat(self.TotalDPS());
        return r;       
    }, this);

    self.ComparisonDPS = ko.computed(function () {
        var a = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        return CalculateTotal(0, a);    
    }, this);
    
    self.TotalEliteDPS = ko.computed(function () {
        return self.TotalDPS() * (parseInt(self.EliteDamage()) + 100) / 100;
    }, this);
    
    self.UnitEliteDPS = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return CalculateTotal(1, a) * (parseInt(self.EliteDamage()) + 100) / 100;
    }, this);
 
     self.UnitEliteDifference = ko.computed(function () {
        var r = parseFloat(self.UnitEliteDPS()) - parseFloat(self.TotalEliteDPS());
        return r;       
    }, this);
 
    self.ComparisonEliteDPS = ko.computed(function () {
        return self.ComparisonDPS() * (parseInt(self.EliteDamage()) + 100 + parseInt(self.EliteCompare())) / 100;   
    }, this); 

    self.TrashDPSDifference = ko.computed(function () {
        var r = parseFloat(self.ComparisonDPS()) - parseFloat(self.TotalDPS());
        if (isNaN(r)) { return 0; }
        return formatNumber(r);
    }, this);

    self.EliteDPSDifference = ko.computed(function () {
        var r = parseFloat(self.ComparisonEliteDPS()) - parseFloat(self.TotalEliteDPS());
        if (isNaN(r)) { return 0; }
        return formatNumber(r);
    }, this);

    self.DexDifference = ko.computed(function () {
        var a = [1,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal( 0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.CHCDifference = ko.computed(function () {
        var a = [0,1,0,0,0,0,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.CHDDifference = ko.computed(function () {
        var a = [0,0,1,0,0,0,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.EliteDifference = ko.computed(function () {
        var r = (self.TotalDPS() * (parseInt(self.EliteDamage()) + parseInt(self.EliteCompare()) + 100) / 100) - self.TotalEliteDPS();
        r = r / self.UnitEliteDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.ColdDifference = ko.computed(function () {
        var a = [0,0,0,1,0,0,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.FireDifference = ko.computed(function () {
        var a = [0,0,0,0,1,0,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.LightningDifference = ko.computed(function () {
        var a = [0,0,0,0,0,1,0,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);
    
    self.PhysicalDifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,1,0,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);
   
    self.SentryDifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,1,0,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.CADifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,1,0,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.EADifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,1,0,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.MultishotDifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,1,0,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.ImpaleDifference = ko.computed(function () {
        var a = [0,0,0,0,0,0,0,0,0,0,0,1,0,0];
        var r = (CalculateTotal(0, a) - parseFloat(self.TotalDPS())) / self.UnitDifference();
        if (isNaN(r)) { return 0; }
        return Math.round(r);
    }, this);

    self.ActiveSkill1Percentage = ko.computed(function () {
        return Percentage(self.ActiveSkill1Damage(), self.TotalDPS());
    }, this);

    self.ActiveSkill2Percentage = ko.computed(function () {
        return Percentage(self.ActiveSkill2Damage(), self.TotalDPS());
    }, this);

    self.ActiveSkill3Percentage = ko.computed(function () {
        return Percentage(self.ActiveSkill3Damage(), self.TotalDPS());
    }, this);

    self.ActiveSkill4Percentage = ko.computed(function () {
        return Percentage(self.ActiveSkill4Damage(), self.TotalDPS());     
    }, this);

    self.TotalDPSFormat = ko.computed(function () {
        var r = self.TotalDPS();
        if (isNaN(r)) { return 0; }
        return formatNumber(r);    
    }, this);
    
    self.TotalDPSEliteFormat = ko.computed(function () {
        var r = self.TotalEliteDPS();      
        if (isNaN(r)) { return 0; }
        return formatNumber(r);    
    }, this);

    function CalculateTotal(compare, dex, set) {
        var r;
        if (parseInt(self.NumberofSpenders()) === 1) {
            r = Calculate(self.ActiveSkill1(), self.ActiveSkill1Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill2(), self.ActiveSkill2Rune(), compare, dex, set);
        }
        if (parseInt(self.NumberofSpenders()) === 2) {
            r = Calculate(self.ActiveSkill1(), self.ActiveSkill1Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill2(), self.ActiveSkill2Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill3(), self.ActiveSkill3Rune(), compare, dex, set);
        }
        if (parseInt(self.NumberofSpenders()) === 3) {
            r = Calculate(self.ActiveSkill1(), self.ActiveSkill1Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill2(), self.ActiveSkill2Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill3(), self.ActiveSkill3Rune(), compare, dex, set);
            r = r + Calculate(self.ActiveSkill4(), self.ActiveSkill4Rune(), compare, dex, set);
        }
        return r;   
    }
    
    function Percentage(activeSkill,total) {
        var r = activeSkill/total;
        if (r > 0) {
            r = (Math.round(r * 10000) / 100);
            return r + ' %';
        }
        return 0 + ' %';   
    };

    function Calculate(activeSkill, activeRune, dex, set){
        var r = ko.utils.arrayFilter( self.Runes(), function (rune) {
            return rune.Skill() === activeSkill && rune.Value() === activeRune;
        });

        if (r.length > 0) {
            var criticalModifier = 1;
            var critChance = parseFloat(self.CHCTotal()) + set[1] * parseFloat(self.CHCCompare()) + set[13] * self.ArcheryCHC();
            var critDam = parseInt(self.CHDTotal()) + set[2] * parseFloat(self.CHDCompare()) + set[13] * self.ArcheryCDC();
            if (r[0].Value() === 3 && r[0].Skill() === 4) { critDam = critDam + 330; }
            criticalModifier = (critChance * (critDam + 100) / 10000) + (100 - critChance) / 100;

            var skillModifier = 0;
            switch (r[0].Skill()) {
                case 1: skillModifier = (parseInt(self.CADamage()) + set[8] * parseInt(self.CACompare())) / 100; break;
                case 2: skillModifier = (parseInt(self.EADamage()) + set[9] * parseInt(self.EACompare())) / 100; break;
                case 3: skillModifier = (parseInt(self.MultishotDamage()) + set[10] * parseInt(self.MultishotCompare())) / 100; break;
                case 4: skillModifier = (parseInt(self.ImpaleDamage()) + set[11] * parseInt(self.ImpaleCompare())) / 100; break;
                case 5: skillModifier = (parseInt(self.ChakramDamage()) + set[12] * parseInt(self.ChakramCompare())) / 100; break;
            }

            var elementalModifier = 0;
            switch (r[0].Element()) {
                case 1: elementalModifier = (parseInt(self.ColdDamage()) + set[3] * parseInt(self.ColdCompare())) / 100; break;
                case 2: elementalModifier = (parseInt(self.FireDamage()) + set[4] * parseInt(self.FireCompare())) / 100; break;
                case 3: elementalModifier = (parseInt(self.LightningDamage()) + set[5] * parseInt(self.LightningCompare())) / 100; break;
                case 4: elementalModifier = (parseInt(self.PhysicalDamage()) + set[6] * parseInt(self.PhysicalCompare())) / 100; break;
            }
            
            var sizeModifier = 1;
            if (activeSkill === 2 && activeRune === 2) {
                sizeModifier = parseInt(self.EnemySize()) + 1;
                if (self.MeticulousBolts() === true) {
                    var a = ko.utils.arrayFilter( self.LightningHits(), function (lightninghit) {
                        return lightninghit.Value() === parseInt(self.MeticulousBoltsPercentage());
                    });
                    if (a.length > 0) {
                        sizeModifier = sizeModifier * a[0].Text();
                    }
                }            
            }
            console.log('sizeModifier' + sizeModifier);

            var singleAoEModifier = 1;
            if (r[0].SingleAoE() === true) { singleAoEModifier = parseInt(self.NumberofAoETargets()); }
            console.log('singleAoEModifier' + singleAoEModifier);
            
            var multiAoEModifier = 1;
            if (r[0].MultiAoE() === true) { multiAoEModifier = parseInt(self.NumberofAoETargets()); }
            console.log('multiAoEModifier' + multiAoEModifier);

            var typeModifier = 1;
            if (self.Ballistics() === true && r[0].Type() === 1) { typeModifier = 2; }
            if (self.Grenadier() === true && r[0].Type() === 2) { typeModifier = 1.1; }
            console.log('typeModifier' + typeModifier);

            var singleCap,multiCap;
            self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
            self.NumberofTargets() > r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();

            var hits = 1;
            if (r[0].Hits() === true) { hits = parseInt(self.NumberofHits()); }

            var castsArray = ko.utils.arrayFilter(SpenderData, function (combo) {
                return combo.BP() === parseInt(self.BreakPoint()) && combo.Code() === parseInt(self.SpenderCombo());
            });

            if (castsArray.length > 0) {
                var total = 0;

                if (activeSkill === 6){
                    var rockets = 0;
                    var bolts = 0;
                    if (activeRune === 1) { rockets = castsArray[0].Total(); }
                    bolts = castsArray[0].Bolts();
                    total = singleCap * r[0].Single() * hits * bolts + multiCap * r[0].Multi() * typeModifier * rockets * (1 + elementalModifier);
                }
                else {
                    var casts = 0;
                    switch (activeSkill) {
                        case 1: casts = castsArray[0].CA(); break;
                        case 2: casts = castsArray[0].EA(); break;
                        case 3: casts = castsArray[0].MS(); break;
                        case 4: casts = castsArray[0].Imp(); break;
                        case 5: casts = castsArray[0].Chak(); break;
                    }
                    total = (singleCap * r[0].Single() * singleAoEModifier * hits * sizeModifier + multiCap * r[0].Multi() * multiAoEModifier * typeModifier) * casts * (1 + self.EnforcerPercentage() + elementalModifier);
                }
                total = total / 30;
                total = total * (self.BaseWeaponDamage() * (1 - set[13]) + set[13] * self.CompareWeaponDamage());
                total = total * criticalModifier;
                total = total * (self.AdditiveModifier() * (1 - set[13]) + skillModifier + set[13] * self.AdditiveModifierCompare());
                total = total * self.MultiplicativeModifier();
                total = total * (parseInt(self.Dexterity()) + 100 + dex + (set[0] * parseInt(self.DexterityCompare()))) / 100;
                total = total * (parseInt(self.SentryDamage()) + 100 + set[7] * parseInt(self.SentryCompare())) / 100;
                return total;
            }
        }

        return 0;
    };
};