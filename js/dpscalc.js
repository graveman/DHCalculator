/**
 * Created by Nika on 19.09.2014.
 * Edited by K on 20.09.2014.
 */
var Element = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text = ko.observable(text);    
}

var Skill = function (value, text) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
};

var Rune = function (value, text, skill, element, single, singlecap, multi, multicap, type) {
    var self = this;
    self.Value = ko.observable(value);
    self.Text  = ko.observable(text);
    self.Skill = ko.observable(skill);
    self.Element = ko.observable(element);          // Elemental type
    self.Single = ko.observable(single);            // damage multiplier for primary strike
    self.SingleCap = ko.observable(singlecap);      // max number of targets for primary strike 
    self.Multi  = ko.observable(multi);             // damage multiplier for secondary strikes
    self.MultiCap = ko.observable(multicap);        // max number of targets for secondary strikes
    self.Type = ko.observable(type);                // 1 for Rocket, 2 for Grenade, 0 for no specific type
};

function Stats(data) {
    var self = this;
    self.Weapon                   = ko.observable(0, { persist: 'DC-Weapon' });
    self.WeaponDamage1            = ko.observable(0, { persist: 'DC-WeaponDamage1' });
    self.WeaponDamage2            = ko.observable(0, { persist: 'DC-WeaponDamage2' });
    self.ExtraDamage1             = ko.observable(0, { persist: 'DC-ExtraDamage1' });
    self.ExtraDamage2             = ko.observable(0, { persist: 'DC-ExtraDamage2' });
    self.AttackSpeed              = ko.observable(0, { persist: 'DC-AttackSpeed' });
    self.TTBuff                   = ko.observable(0, { persist: 'DC-TTBuff' });
    self.Dexterity                = ko.observable(0, { persist: 'DC-Dexterity' });
    self.CHC                      = ko.observable(0, { persist: 'DC-CHC' });
    self.CHD                      = ko.observable(0, { persist: 'DC-CHD' });
    self.EliteDamage              = ko.observable(0, { persist: 'DC-EliteDamage' });
    self.ColdDamage               = ko.observable(0, { persist: 'DC-ColdDamage' });
    self.FireDamage               = ko.observable(0, { persist: 'DC-FireDamage' });
    self.LightningDamage          = ko.observable(0, { persist: 'DC-LightningDamage' });
    self.NumberofTargets          = ko.observable(0, { persist: 'DC-NumberofTargets' });
    self.PhysicalDamage           = ko.observable(0, { persist: 'DC-PhysicalDamage' });
    self.SentryDamage             = ko.observable(0, { persist: 'DC-SentryDamage' });
    self.CADamage                 = ko.observable(0, { persist: 'DC-CADamage' });
    self.MultishotDamage          = ko.observable(0, { persist: 'DC-MultishotDamage' });
    self.EADamage                 = ko.observable(0, { persist: 'DC-EADamage' });
    self.ImpaleDamage             = ko.observable(0, { persist: 'DC-ImpaleDamage' });
    self.ActiveSentryRune         = ko.observable(0, { persist: 'DC-ActiveSentryRune' });
    self.CulltheWeak              = ko.observable(false, { persist: 'DC-CulltheWeak' });
    self.SteadyAim                = ko.observable(false, { persist: 'DC-SteadyAim' });
    self.Ballistics               = ko.observable(false, { persist: 'DC-Ballistics' });
    self.Grenadier                = ko.observable(false, { persist: 'DC-Grenadier' });
    self.Ambush                   = ko.observable(false, { persist: 'DC-Ambush' });
    self.Archery                  = ko.observable(false, { persist: 'DC-Archery' });
    self.BaneofthePowerfulRank    = ko.observable(0, { persist: 'DC-BaneofthePowerfulRank' });
    self.EnforcerRank             = ko.observable(0, { persist: 'DC-EnforcerRank' });
    self.BaneoftheTrappedRank     = ko.observable(0, { persist: 'DC-BaneoftheTrappedRank' });
    self.ZeisStoneofVengeanceRank = ko.observable(0, { persist: 'DC-ZeisStoneofVengeanceRank' });
    self.HexingPantsofMrYan       = ko.observable(false, { persist: 'DC-HexingPantsofMrYan' });
    self.OverwhelmingDesire       = ko.observable(false, { persist: 'DC-OverwhelmingDesire' });
    self.WolfCompanion            = ko.observable(false, { persist: 'DC-WolfCompanion' });
    self.MarkedforDeath           = ko.observable(false, { persist: 'DC-MarkedforDeath' });

    self.ActiveSkill1        = ko.observable(1, { persist: 'DC-ActiveSkill1' });
    self.ActiveSkill1Rune    = ko.observable(1, { persist: 'DC-ActiveSkill1Rune' });

    self.ActiveSkill2     = ko.observable(2, { persist: 'DC-ActiveSkill2' });
    self.ActiveSkill2Rune = ko.observable(1, { persist: 'DC-ActiveSkill2Rune' });

    self.ActiveSkill3     = ko.observable(3, { persist: 'DC-ActiveSkill3' });
    self.ActiveSkill3Rune = ko.observable(1, { persist: 'DC-ActiveSkill3Rune' });

    self.Weapons = ko.observableArray([
        { Value: 1, Text: "Crossbow" },
        { Value: 2, Text: "Bow" },
        { Value: 3, Text: "Hand crossbow" }
    ]);

    self.SentryRunes = ko.observableArray([
        { Value: 1, Text: "Spitfire Turret", Element: 2 },
        { Value: 2, Text: "Polar Station", Element: 1 }
    ]);

    self.Runes = ko.observableArray([
        new Rune(1, "Dazzling Arrow",       1, 3, 5.5, 1, 8.8, 1, 2),
        new Rune(2, "Shooting Stars",       1, 4, 5.5, 1, 6, 3, 1),
        new Rune(3, "Maelstrom",            1, 1, 5.5, 1, 4.5, 5, 1),
//        new Rune(4, "Cluster Bombs",        1, 2, 0, 0, 0, 0),                // No idea how many grenades actually spawn
        new Rune(5, "Loaded for Bear",      1, 2, 7.7 , 1, 8.8, 1, 2),
//        new Rune(1, "Ball Lightning",       2, 3, 3, 1, 0, 0, 0),             // I'll wait until I figure out how to properly implement this
        new Rune(2, "Frost  Arrow",         2, 1, 0, 0, 3.3, 11, 0),
        new Rune(3, "Immolation Arrow",     2, 2, 3, 1, 3.15, 1, 0),
        new Rune(4, "Lightning Bolts",      2, 3, 3, 1, 0, 0, 0),
//        new Rune(5, "Nether Tentacles",     2, 4, 3, 1, 0, 0, 0),             // I'll wait until I figure out how to properly implement this
        new Rune(1, "Burst Fire",           3, 1, 3.6, 20, 2, 1, 0),            // Chose arrows as primary, cold burst as secondary
        new Rune(2, "Full Broadside",       3, 4, 4.6, 20, 0, 0, 0),            // Chose arrows as primary
        new Rune(3, "Arsenal",              3, 2, 3.6, 20, 3, 3, 1),          // Chose arrows as primary, rockets as secondary
        new Rune(4, "Fire at Will",         3, 3, 3.6, 20, 0, 0, 0),            // Chose arrows as primary
        new Rune(1, "Impact",               4, 4, 7.5, 1, 0, 0, 0),
        new Rune(2, "Chemical Burn",        4, 2, 7.5, 1, 5, 1, 0),
        new Rune(3, "Grievous Wounds",      4, 4, 7.5, 1, 0, 0, 0),            
        new Rune(4, "Overpenetration",      4, 1, 7.5, 1, 0, 0, 0),
        new Rune(5, "Ricochet",             4, 3, 7.5, 3, 0, 0, 0)
 //       new Rune(1, "Twin Chakrams",        5, 2, 0, 0, 0, 0, 0)              // I'll wait until I figure out how to properly implement this
    ]);

    self.ActiveSkills = ko.observableArray([
        new Skill(1, "Cluster Arrow"),
        new Skill(2, "Elemental Arrow"),
        new Skill(3, "Multishot"),
        new Skill(4, "Impale")
//        new Skill(5, "Chakram")                                               // I'll wait until I figure out how to properly implement this
    ]);

    self.Elements = ko.observableArray([
        new Element(1, "Cold"),
        new Element(2, "Fire"),
        new Element(3, "Lightning"),
        new Element(4, "Physical")
    ]);

    self.ActiveSkill1Rune = ko.observable(1, { persist: 'DC-ActiveSkill1Rune' });

    self.ActiveSkill1Runes = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill1();
        });
    }, this);

    self.ActiveSkill1Name = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill1();
        });
        return r[0].Text();
    }, this);

    self.ActiveSkill2Runes = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill2();
        });
    }, this);

    self.ActiveSkill2Name = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill2();
        });
        return r[0].Text();
    }, this);

    self.ActiveSkill3Runes = ko.computed(function () {
        return ko.utils.arrayFilter(this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill3();
        });
    }, this);

    self.ActiveSkill3Name = ko.computed(function () {
        var r = ko.utils.arrayFilter(this.ActiveSkills(), function (skill) {
            return skill.Value() === self.ActiveSkill3();
        });
        return r[0].Text();
    }, this);


    self.SentryTotalDamage = ko.computed(function () {
        return 0;
    }, this);

    self.ActiveSkill1Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill1() && rune.Value() === self.ActiveSkill1Rune(); 
        });
        var singleCap = 0
        var multiCap = 0;
        self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
        self.NumberofTargets() >= r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();
        return singleCap * r[0].Single() + multiCap * r[0].Multi();
    }, this);

    self.ActiveSkill2Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill2() && rune.Value() === self.ActiveSkill2Rune(); 
        });
        var singleCap = 0
        var multiCap = 0;
        self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
        self.NumberofTargets() >= r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();
        return singleCap * r[0].Single() + multiCap * r[0].Multi();
    }, this);

    self.ActiveSkill3Damage = ko.computed(function () {
        var r = ko.utils.arrayFilter( this.Runes(), function (rune) {
            return rune.Skill() === self.ActiveSkill3() && rune.Value() === self.ActiveSkill3Rune(); 
        });
        var singleCap = 0
        var multiCap = 0;
        self.NumberofTargets() > r[0].SingleCap() ? singleCap = r[0].SingleCap() : singleCap = self.NumberofTargets();
        self.NumberofTargets() >= r[0].MultiCap() ? multiCap = r[0].MultiCap() : multiCap = self.NumberofTargets();
        return singleCap * r[0].Single() + multiCap * r[0].Multi();
    }, this);
}