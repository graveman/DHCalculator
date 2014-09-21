/**
 * Created by Nika on 19.09.2014.
 * 
 */
var Element = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text = ko.observable(text);    
}

var Skill = function (value, text, slug) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
    self.Slug  = ko.observable(slug);
};

var Rune = function (value, text, skill, element, single, singlecap, multi, multicap, type, hits, slug) {
    var self = this;
    self.Value      = ko.observable(value);
    self.Text       = ko.observable(text);
    self.Skill      = ko.observable(skill);
    self.Element    = ko.observable(element);             // Elemental type
    self.Single     = ko.observable(single);              // damage multiplier for primary strike
    self.SingleCap  = ko.observable(singlecap);           // max number of targets for primary strike
    self.Multi      = ko.observable(multi);               // damage multiplier for secondary strikes
    self.MultiCap   = ko.observable(multicap);            // max number of targets for secondary strikes
    self.Type       = ko.observable(type);                // 1 for Rocket, 2 for Grenade, 0 for no specific type
    self.Hits       = ko.observable(hits);                // allow for multiple hits to same enemy, true or false
    self.Slug       = ko.observable(slug);
};


function Stats(data) {
    var self = this;
    self.Weapon                   = ko.observable(0, { persist: 'DC-Weapon' });
    self.AttackSpeed              = ko.observable(0, { persist: 'DC-AttackSpeed' });
    self.TTBuff                   = ko.observable(0, { persist: 'DC-TTBuff' });

    self.WeaponDamage1            = ko.observable(0, { persist: 'DC-WeaponDamage1' });
    self.WeaponDamage2            = ko.observable(0, { persist: 'DC-WeaponDamage2' });
    self.JewelryDamage1             = ko.observable(0, { persist: 'DC-JewelryDamage1' });
    self.JewelryDamage2             = ko.observable(0, { persist: 'DC-JewelryDamage2' });

    self.Dexterity                = ko.observable(0, { persist: 'DC-Dexterity' });
    self.CHC                      = ko.observable(0, { persist: 'DC-CHC' });
    self.CHD                      = ko.observable(0, { persist: 'DC-CHD' });
    self.EliteDamage              = ko.observable(0, { persist: 'DC-EliteDamage' });

    self.ColdDamage               = ko.observable(0, { persist: 'DC-ColdDamage' });
    self.FireDamage               = ko.observable(0, { persist: 'DC-FireDamage' });
    self.LightningDamage          = ko.observable(0, { persist: 'DC-LightningDamage' });
    self.PhysicalDamage           = ko.observable(0, { persist: 'DC-PhysicalDamage' });

    self.NumberofTargets          = ko.observable(1, { persist: 'DC-NumberofTargets' });
    self.NumberofHits             = ko.observable(1, { persist: 'DC-NumberofHits' });

    self.SentryDamage             = ko.observable(0, { persist: 'DC-SentryDamage' });
    self.CADamage                 = ko.observable(0, { persist: 'DC-CADamage' });
    self.MultishotDamage          = ko.observable(0, { persist: 'DC-MultishotDamage' });
    self.EADamage                 = ko.observable(0, { persist: 'DC-EADamage' });
    self.ImpaleDamage             = ko.observable(0, { persist: 'DC-ImpaleDamage' });
    self.ChakramDamage             = ko.observable(0, { persist: 'DC-ImpaleDamage' });
    self.WolfCompanion            = ko.observable(false, { persist: 'DC-WolfCompanion' });
    self.MarkedforDeath           = ko.observable(false, { persist: 'DC-MarkedforDeath' });

    self.CulltheWeak              = ko.observable(false, { persist: 'DC-CulltheWeak' });
    self.SteadyAim                = ko.observable(false, { persist: 'DC-SteadyAim' });
    self.Ballistics               = ko.observable(false, { persist: 'DC-Ballistics' });
    self.Grenadier                = ko.observable(false, { persist: 'DC-Grenadier' });
    self.Ambush                   = ko.observable(false, { persist: 'DC-Ambush' });
    self.Archery                  = ko.observable(false, { persist: 'DC-Archery' });
    
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
    
    self.HexingPantsofMrYan             = ko.observable(false, { persist: 'DC-HexingPantsofMrYan' });
    self.OverwhelmingDesire             = ko.observable(false, { persist: 'DC-OverwhelmingDesire' });
    self.StrongarmBracers               = ko.observable(false, { persist: 'DC-StrongarmBracers' });
    self.StrongarmBracersModifier       = ko.observable(20, { persist: 'DC-StrongarmBracersModifier' }); 
    self.HarringtonsWaistguard          = ko.observable(false, { persist: 'DC-HarringtonsWaistguard' });  
    self.HarringtonsWaistguardModifier  = ko.observable(100, { persist: 'DC-HarringtonsWaistguard' });   

    self.BigBadVoodoo             = ko.observable(false, { persist: 'DC-BigBadVoodoo' });
    self.MassConfusion            = ko.observable(false, { persist: 'DC-MassConfusion' });
    self.Piranhas                 = ko.observable(false, { persist: 'DC-Piranhas' });
    self.MantraofConviction       = ko.observable(false, { persist: 'DC-MantraofConviction' });
    self.InnerSanctuary           = ko.observable(false, { persist: 'DC-InnerSanctuary' });
    self.CripplingWave            = ko.observable(false, { persist: 'DC-CripplingWave' });

    self.ActiveSkills = ko.observableArray([
        new Skill(1, "Cluster Arrow", "cluster-arrow"),
        new Skill(2, "Elemental Arrow", "elemental-arrow"),
        new Skill(3, "Multishot", "multishot"),
        new Skill(4, "Impale", "impale"),
//        new Skill(5, "Chakram")                                               // I'll wait until I figure out how to properly implement this
        new Skill(6, "Sentry", "sentry")
    ]);

    self.Runes = ko.observableArray([
        new Rune(1, "Dazzling Arrow",       1, 3, 5.5, 1, 8.8, 1, 2, false, "e"),
        new Rune(2, "Shooting Stars",       1, 4, 5.5, 1, 6, 3, 1, false, "b"),
        new Rune(3, "Maelstrom",            1, 1, 5.5, 1, 4.5, 5, 1, false, "d"),
//        new Rune(4, "Cluster Bombs",        1, 2, 0, 0, 0, 0),                // No idea how many grenades actually spawn
        new Rune(5, "Loaded for Bear",      1, 2, 7.7 , 1, 8.8, 1, 2, false, "a"),
        new Rune(1, "Ball Lightning",       2, 3, 3, 1, 0, 0, 0, true, "b"),
        new Rune(2, "Frost  Arrow",         2, 1, 0, 0, 3.3, 11, 0, false, "a"),
        new Rune(3, "Immolation Arrow",     2, 2, 3, 1, 3.15, 1, 0, false, "c"),
        new Rune(4, "Lightning Bolts",      2, 3, 3, 1, 0, 0, 0, false,"e"),
        new Rune(5, "Nether Tentacles",     2, 4, 3, 1, 0, 0, 0, true, "d"),
        new Rune(1, "Burst Fire",           3, 1, 3.6, 11, 2, 1, 0, false, "b"),     // Chose arrows as primary, cold burst as secondary
        new Rune(2, "Full Broadside",       3, 4, 4.6, 11, 0, 0, 0, false, "a"),     // Chose arrows as primary
        new Rune(3, "Arsenal",              3, 2, 3.6, 11, 3, 3, 1, false, "c"),     // Chose arrows as primary, rockets as secondary
        new Rune(4, "Fire at Will",         3, 3, 3.6, 11, 0, 0, 0, false, "d"),     // Chose arrows as primary
        new Rune(5, "Suppression Fire",     3, 4, 3.6, 11, 0, 0, 0, false, "e"),     // Chose arrows as primary
        new Rune(1, "Impact",               4, 4, 7.5, 1, 0, 0, 0, false, "b"),
        new Rune(2, "Chemical Burn",        4, 2, 7.5, 1, 5, 1, 0, false, "c"),
        new Rune(3, "Grievous Wounds",      4, 4, 7.5, 1, 0, 0, 0, false, "e"),
        new Rune(4, "Overpenetration",      4, 1, 7.5, 1, 0, 0, 0, false, "a"),
        new Rune(5, "Ricochet",             4, 3, 7.5, 3, 0, 0, 0, false, "d"),
        new Rune(1, "Spitfire Turret",      6, 2, 2.8, 1, 1.2, 1, 1, false, "c"),    // Bolts as primary, rockets as secondary
        new Rune(2, "Polar Station",        6, 1, 2.8, 1, 0, 0, 1, false, "d")       // Bolts as primary
        //       new Rune(1, "Twin Chakrams",        5, 2, 0, 0, 0, 0, 0)              // I'll wait until I figure out how to properly implement this
    ]);

    self.ActiveSkill1           = ko.observable(6, { persist: 'DC-ActiveSkill1' });
    self.ActiveSkill1Data       = ko.computed(function () {
        var r = ko.utils.arrayFilter(self.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill1();
        });
        return r[0];
    }, this);
    self.ActiveSkill1Rune       = ko.observable(6, { persist: 'DC-ActiveSkill1Rune' });
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


    self.ActiveSkill2        = ko.observable(2, { persist: 'DC-ActiveSkill2' });
    self.ActiveSkill2Data = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill2();
        });
        return r[0];
    }, this);
    self.ActiveSkill2Rune    = ko.observable(1, { persist: 'DC-ActiveSkill2Rune' });
    self.ActiveSkill2Runes = ko.computed(function () {
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

    self.BaseWeaponDamage         = ko.observable(0, { persist: 'DC-BaseWeaponDamage' });
    self.AdditiveModifier         = ko.observable(0, { persist: 'DC-AdditiveModifier' });
    self.MultiplicativeModifier   = ko.observable(0, { persist: 'DC-MultiplicativeModifier' });

    self.Weapons = ko.observableArray([
        { Value: 1, Text: "Crossbow" },
        { Value: 2, Text: "Bow" },
        { Value: 3, Text: "Hand crossbow" }
    ]);

    self.Elements = ko.observableArray([
        new Element(1, "Cold"),
        new Element(2, "Fire"),
        new Element(3, "Lightning"),
        new Element(4, "Physical")
    ]);

    self.BreakPoint = ko.computed(function () {
        var aps = parseFloat(self.AttackSpeed());

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

    self.AdditiveModifier = ko.computed(function () {
        var r = 100;
        if (self.SteadyAim() === true) { r = r + 20; }
        if (self.Archery() === true) { r = r + 8; }      
        if (self.MarkedforDeath() === true) { r = r + 20; }
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
        r = r * (parseInt(self.SentryDamage()) + 100) / 100;
        if (self.Ambush() === true) { r = r * 1.1; }
        if (self.CulltheWeak() === true) { r = r * 1.2; }

        console.log('r' + r); 
        return r;
    }, this);

    self.ActiveSkill1Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill1() && rune.Value() === self.ActiveSkill1Rune(); 
        });
        
        if (r.length > 0) {
            var criticalModifier = 1;
            if (r[0].Value() === 3 && r[0].Skill() === 4) {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100 + 330) / 10000) + (100 - parseFloat(self.CHC())) / 100;
            }
            else {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100) / 10000) + (100 - parseFloat(self.CHC())) / 100;
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
            
            var typeModifier = 1;
            if (self.Ballistics() === true && r[0].Type() === 1) { typeModifier = 2; }
            if (self.Grenadier() === true && r[0].Type() === 2) { typeModifier = 1.1; }
            console.log('typeModifier' + typeModifier);

            var singleCap,multiCap;
            self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
            self.NumberofTargets() > r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();

            var hits = 1;
            if (r[0].Hits() === true) { hits = parseInt(self.NumberofHits()); }
            
            var total = 0;
            total = singleCap * r[0].Single() * hits + multiCap * r[0].Multi() * typeModifier;
            total = total * self.BaseWeaponDamage();
            total = total * criticalModifier;
            total = total * (1 + self.EnforcerModifier() + elementalModifier);
            total = total * (self.AdditiveModifier() + skillModifier);
            total = total * self.MultiplicativeModifier();
            total = total * (parseInt(self.EliteDamage()) + 100) / 100;
            return total;
        }
        return 0;      
    }, this);

    self.ActiveSkill2Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill2() && rune.Value() === self.ActiveSkill2Rune(); 
        });
        
        if (r.length > 0) {
            var criticalModifier = 1;
            if (r[0].Value() === 3 && r[0].Skill() === 4) {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100 + 330) / 10000) + (100 - parseFloat(self.CHC())) / 100;
            }
            else {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100) / 10000) + (100 - parseFloat(self.CHC())) / 100;
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
            
            var typeModifier = 1;
            if (self.Ballistics() === true && r[0].Type() === 1) { typeModifier = 2; }
            if (self.Grenadier() === true && r[0].Type() === 2) { typeModifier = 1.1; }
            console.log('typeModifier' + typeModifier);

            var singleCap,multiCap;
            self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
            self.NumberofTargets() > r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();

            var hits = 1;
            if (r[0].Hits() === true) { hits = parseInt(self.NumberofHits()); }
            
            var total = 0;
            total = singleCap * r[0].Single() * hits + multiCap * r[0].Multi() * typeModifier;
            total = total * self.BaseWeaponDamage();
            total = total * criticalModifier;
            total = total * (1 + self.EnforcerModifier() + elementalModifier);
            total = total * (self.AdditiveModifier() + skillModifier);
            total = total * self.MultiplicativeModifier();
            total = total * (parseInt(self.EliteDamage()) + 100) / 100;
            return total;
        }
        return 0;      
    }, this);

    self.ActiveSkill3Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill3() && rune.Value() === self.ActiveSkill3Rune(); 
        });
        
        if (r.length > 0) {
            var criticalModifier = 1;
            if (r[0].Value() === 3 && r[0].Skill() === 4) {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100 + 330) / 10000) + (100 - parseFloat(self.CHC())) / 100;
            }
            else {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100) / 10000) + (100 - parseFloat(self.CHC())) / 100;
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
            
            var typeModifier = 1;
            if (self.Ballistics() === true && r[0].Type() === 1) { typeModifier = 2; }
            if (self.Grenadier() === true && r[0].Type() === 2) { typeModifier = 1.1; }
            console.log('typeModifier' + typeModifier);

            var singleCap,multiCap;
            self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
            self.NumberofTargets() > r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();

            var hits = 1;
            if (r[0].Hits() === true) { hits = parseInt(self.NumberofHits()); }
            
            var total = 0;
            total = singleCap * r[0].Single() * hits + multiCap * r[0].Multi() * typeModifier;
            total = total * self.BaseWeaponDamage();
            total = total * criticalModifier;
            total = total * (1 + self.EnforcerModifier() + elementalModifier);
            total = total * (self.AdditiveModifier() + skillModifier);
            total = total * self.MultiplicativeModifier();
            total = total * (parseInt(self.EliteDamage()) + 100) / 100;
            return total;
        }
        return 0;       
    }, this);
    
    self.ActiveSkill4Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill4() && rune.Value() === self.ActiveSkill4Rune(); 
        });
        
        if (r.length > 0) {
            var criticalModifier = 1;
            if (r[0].Value() === 3 && r[0].Skill() === 4) {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100 + 330) / 10000) + (100 - parseFloat(self.CHC())) / 100;
            }
            else {
                criticalModifier = (parseFloat(self.CHC()) * (parseInt(self.CHD()) + 100) / 10000) + (100 - parseFloat(self.CHC())) / 100;
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
            
            var typeModifier = 1;
            if (self.Ballistics() === true && r[0].Type() === 1) { typeModifier = 2; }
            if (self.Grenadier() === true && r[0].Type() === 2) { typeModifier = 1.1; }
            console.log('typeModifier' + typeModifier);

            var singleCap,multiCap;
            self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
            self.NumberofTargets() > r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();

            var hits = 1;
            if (r[0].Hits() === true) { hits = parseInt(self.NumberofHits()); }
            
            var total = 0;
            total = singleCap * r[0].Single() * hits + multiCap * r[0].Multi() * typeModifier;
            total = total * self.BaseWeaponDamage();
            total = total * criticalModifier;
            total = total * (1 + self.EnforcerModifier() + elementalModifier);
            total = total * (self.AdditiveModifier() + skillModifier);
            total = total * self.MultiplicativeModifier();
            total = total * (parseInt(self.EliteDamage()) + 100) / 100;
            return total;
        }
        return 0;     
    }, this);
}