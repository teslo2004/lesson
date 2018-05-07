function Being(name, health, attack, protection, damage_min, damage_max, speed){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.protection = protection;
    this.damage_min = damage_min;
    this.damage_max = damage_max;
    this.speed = speed;
}

Being.prototype = {
    constructor: Being,
    attackInfo: function(fighter){
        var damage = Math.floor(this.damage_min+(this.damage_max-this.damage_min)*Math.random());
        var damagePlayer = damage + damage*this.attack;
        var protectPlayer = damagePlayer - damagePlayer*fighter.protection;
        fighter.health = fighter.health - protectPlayer;
        if(fighter.health < 0){
            fighter.health = 0
        };
    },
    liveInfo: function(){
        return this.health > 0;
    },
    
}

var elf = new Being("elf", 50000, 50, 20, 50, 80, 10);
var ork = new Being("ork", 45000, 60, 18, 60, 90, 8);
var human = new Being("human", 48000, 60, 15, 60, 90, 12);
var gnom = new Being("gnom", 46000, 50, 55, 22, 70, 6);

function Artifact(nameArt, health_bonus, attack_bonus, protection_bonus, damage_min_bonus, damage_max_bonus, speed_bonus){
    this.nameArt = nameArt;
    this.health_bonus = health_bonus;
    this.attack_bonus = attack_bonus;
    this.protection_bonus = protection_bonus;
    this.damage_min_bonus = damage_min_bonus;
    this.damage_max_bonus = damage_max_bonus;
    this.speed_bonus = speed_bonus;
}

Artifact.prototype = {
    constructor: Artifact,
    addArt: function(gamer){
        gamer.health = gamer.health + this.health_bonus;
        gamer.attack = gamer.attack + this.attack_bonus;
        gamer.protection = gamer.protection + this.protection_bonus;
        gamer.damage_max = gamer.damage_max + this.damage_max_bonus;
        gamer.damage_min = gamer.damage_min + this.damage_min_bonus;
        gamer.speed = gamer.speed + this.speed_bonus;

    }
}

var giftOfSky = new Artifact("giftOfSky", 20000, 20, 20, 20, 20, 5);
var blackDragon = new Artifact("blackDragon", 10000, 40, 10, 30, 50, 3);
var rainbow = new Artifact("rainbow", 5000, 10, 10, 10, 10, 2);
var satiety = new Artifact("satiety", 2000, 10, 10, 10, 10, 1);


