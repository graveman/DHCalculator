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
    self.EnforcerModifier               = ko.observable(0, { persist: 'DC-EnforcerModifier' });
    self.BaneoftheTrapped               = ko.observable(false, { persist: 'DC-BaneoftheTrapped' });    
    self.BaneoftheTrappedRank           = ko.observable(0, { persist: 'DC-BaneoftheTrappedRank' });
    self.BaneoftheTrappedModifier       = ko.observable(0, { persist: 'DC-BaneoftheTrappedModifier' });
    self.ZeisStoneofVengeance           = ko.observable(false, { persist: 'DC-ZeisStoneofVengeance' });
    self.ZeisStoneofVengeanceRank       = ko.observable(0, { persist: 'DC-ZeisStoneofVengeanceRank' });
    self.ZeisStoneofVengeanceModifier   = ko.observable(0, { persist: 'DC-ZeisStoneofVengeanceModifier' });
    self.ZeisStoneofVengeanceDistance   = ko.observable(1, { persist: 'DC-ZeisStoneofVengeanceDistance' });
    self.GemofEfficaciousToxin          = ko.observable(false, { persist: 'DC-GemofEfficaciousToxin' });    
    self.GemofEfficaciousToxinRank      = ko.observable(0, { persist: 'DC-GemofEfficaciousToxinRank' });
    self.GemofEfficaciousToxinModifier  = ko.observable(0, { persist: 'DC-GemofEfficaciousToxinModifier' });
    
    self.HexingPantsofMrYan             = ko.observable(false, { persist: 'DC-HexingPantsofMrYan' });
    self.OverwhelmingDesire             = ko.observable(false, { persist: 'DC-OverwhelmingDesire' });
    self.Calamity                       = ko.observable(false, { persist: 'DC-Calamity' });
    self.StrongarmBracers               = ko.observable(false, { persist: 'DC-StrongarmBracers' });
    self.StrongarmBracersModifier       = ko.observable(20, { persist: 'DC-StrongarmBracersModifier' }); 
    self.HarringtonsWaistguard          = ko.observable(false, { persist: 'DC-HarringtonsWaistguard' });  
    self.HarringtonsWaistguardModifier  = ko.observable(100, { persist: 'DC-HarringtonsWaistguard' });  
    self.MeticulousBolts                = ko.observable(false, { persist: 'DC-MeticulousBolts' });  
    self.MeticulousBoltsModifier        = ko.observable(40, { persist: 'DC-MeticulousBoltsModifier' });   

    self.BigBadVoodoo             = ko.observable(false, { persist: 'DC-BigBadVoodoo' });
    self.MassConfusion            = ko.observable(false, { persist: 'DC-MassConfusion' });
    self.Piranhas                 = ko.observable(false, { persist: 'DC-Piranhas' });
    self.MantraofConviction       = ko.observable(false, { persist: 'DC-MantraofConviction' });
    self.InnerSanctuary           = ko.observable(false, { persist: 'DC-InnerSanctuary' });
    self.CripplingWave            = ko.observable(false, { persist: 'DC-CripplingWave' });
    
    self.TotalDPS = ko.observable(0, { persist: 'DC-TotalDPS' });

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

    self.BaseWeaponDamage         = ko.observable(0, { persist: 'DC-BaseWeaponDamage' });
    self.AdditiveModifier         = ko.observable(0, { persist: 'DC-AdditiveModifier' });
    self.MultiplicativeModifier   = ko.observable(0, { persist: 'DC-MultiplicativeModifier' });


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
        var r = parseInt(self.CHC()) + self.CHCBonus();
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

    self.BaneoftheTrappedModifier = ko.computed(function () {
        var r = 1;
        if (self.BaneoftheTrapped() === true) {
            r = r * (100 + 15 + parseInt(self.BaneoftheTrappedRank()) * 0.3) / 100;
        }
        return r;
    }, this);

    self.EnforcerModifier = ko.computed(function () {
        var r = 0;      
        if (self.Enforcer() === true) {
            r = r + 15 + parseInt(self.EnforcerRank()) * 0.3;
        }
        r = r / 100;
        return r;
    }, this);

    self.ZeisStoneofVengeanceModifier = ko.computed(function () {
        var r = 1;
        if (self.ZeisStoneofVengeance() === true) {
            r = r * (100 + (4 + parseInt(self.ZeisStoneofVengeanceRank()) * 0.05) * parseInt(self.ZeisStoneofVengeanceDistance())) / 100;
        };
        return r;
    }, this);

    self.AdditiveModifier = ko.computed(function () {
        var r = 100;
        if (self.SteadyAim() === true) { r = r + 20; }
        if (self.Archery() === true && self.Weapon() === 2) { r = r + 8; }      
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
        if (self.HarringtonsWaistguard() === true) { r = r + parseInt(self.HarringtonsWaistguardModifier()); } 
        if (self.StrongarmBracers() === true) { r = r + parseInt(self.StrongarmBracersModifier()); } 
        r = r / 100;

        console.log('r' + r);    
        return r;
    }, this);

    self.MultiplicativeModifier = ko.computed(function () {
        var r = 1;
        r = r * (parseInt(self.Dexterity()) + 100) / 100;
        r = r * self.BaneoftheTrappedModifier();
        r = r * self.ZeisStoneofVengeanceModifier();       
        r = r * (parseInt(self.SentryDamage()) + 100) / 100;
        if (self.Ambush() === true) { r = r * 1.077; }
        if (self.CulltheWeak() === true) { r = r * 1.2; }

        console.log('r' + r); 
        return r;
    }, this);

    self.ActiveSkill1Damage = ko.computed(function () {
        return Calculate(self.ActiveSkill1(), self.ActiveSkill1Rune());
    }, this);

    self.ActiveSkill2Damage = ko.computed(function () {
        return Calculate(self.ActiveSkill2(), self.ActiveSkill2Rune());
    }, this);

    self.ActiveSkill3Damage = ko.computed(function () {
        return Calculate(self.ActiveSkill3(), self.ActiveSkill3Rune());
    }, this);
    
    self.ActiveSkill4Damage = ko.computed(function () {
        return Calculate(self.ActiveSkill4(), self.ActiveSkill4Rune());
    }, this);

    self.TotalDPS = ko.computed(function () {
        var r;
        if (parseInt(self.NumberofSpenders()) === 1) { r = self.ActiveSkill1Damage() + self.ActiveSkill2Damage(); }
        if (parseInt(self.NumberofSpenders()) === 2) { r = self.ActiveSkill1Damage() + self.ActiveSkill2Damage() + self.ActiveSkill3Damage(); }
        if (parseInt(self.NumberofSpenders()) === 3) { r = self.ActiveSkill1Damage() + self.ActiveSkill2Damage() + self.ActiveSkill3Damage() + self.ActiveSkill4Damage(); }
        return r;    
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
        return formatNumber(r);    
    }, this);

    self.TotalDPSEliteFormat = ko.computed(function () {
        var r = self.TotalDPS() * (parseInt(self.EliteDamage()) + 100) / 100;        
        return formatNumber(r);    
    }, this);

    function Percentage(activeSkill,total) {
        var r = activeSkill/total;
        if (r > 0) {
            r = (Math.round(r * 10000) / 100);
            return r + ' %';
        }
        return 0 + ' %';   
    };

    function Calculate(activeSkill, activeRune){
        var r = ko.utils.arrayFilter( self.Runes(), function (rune) {
            return rune.Skill() === activeSkill && rune.Value() === activeRune;
        });

        if (r.length > 0) {
            var criticalModifier = 1;
            if (r[0].Value() === 3 && r[0].Skill() === 4) {
                criticalModifier = (parseFloat(self.CHCTotal()) * (parseInt(self.CHDTotal()) + 100 + 330) / 10000) + (100 - parseFloat(self.CHCTotal())) / 100;
            }
            else {
                criticalModifier = (parseFloat(self.CHCTotal()) * (parseInt(self.CHDTotal()) + 100) / 10000) + (100 - parseFloat(self.CHCTotal())) / 100;
            }

            var skillModifier = 0;
            switch (r[0].Skill()) {
                case 1: skillModifier = parseInt(self.CADamage()) / 100; break;
                case 2: skillModifier = parseInt(self.EADamage()) / 100; break;
                case 3: skillModifier = parseInt(self.MultishotDamage()) / 100; break;
                case 4: skillModifier = parseInt(self.ImpaleDamage()) / 100; break;
                case 5: skillModifier = parseInt(self.ChakramDamage()) / 100; break;
            }

            var elementalModifier = 0;
            switch (r[0].Element()) {
                case 1: elementalModifier = parseInt(self.ColdDamage()) / 100; break;
                case 2: elementalModifier = parseInt(self.FireDamage()) / 100; break;
                case 3: elementalModifier = parseInt(self.LightningDamage()) / 100; break;
                case 4: elementalModifier = parseInt(self.PhysicalDamage()) / 100; break;
            }
            
            var sizeModifier = 1;
            if (activeSkill === 2 && activeRune === 2) {
                sizeModifier = parseInt(self.EnemySize()) + 1;
                if (self.MeticulousBolts() === true) {
                    var a = ko.utils.arrayFilter( self.LightningHits(), function (lightninghit) {
                        return lightninghit.Value() === parseInt(self.MeticulousBoltsModifier());
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
                    total = (singleCap * r[0].Single() * singleAoEModifier * hits * sizeModifier + multiCap * r[0].Multi() * multiAoEModifier * typeModifier) * casts * (1 + self.EnforcerModifier() + elementalModifier);
                }
                total = total / 30;
                total = total * self.BaseWeaponDamage();
                total = total * criticalModifier;
                total = total * (self.AdditiveModifier() + skillModifier);
                total = total * self.MultiplicativeModifier();
                return total;
            }
        }

        return 0;
    };
};