const request = require('request')
/* Base url : https://splatoon2.ink/data/schedules.json */

let langs = {
    fr: {
        "tower_control": "Expédition risquée",
        "claim_blitz": "Pluie de palourdes",
        "splat_zones": "Défense de zone",
        "rainmaker": "Mission bazookarpe",
        "regular": "Guerre de Territoire",
        "MakoMart": "Supermarché Cétacé",
        "Walleye Warehouse": "Encrepot",
        "Kelp Dome": "Serre goémon",
        "Snapper Canal": "Canalamar",
        "Arowana Mall": "Centre Arowana",
        "Goby Arena": "Stade Bernique",
        "Wahoo World": "Parc Carapince",
        "Manta Maria": "Manta Maria",
        "Port Mackerel": "Docks Haddock",
        "Shellendorf Institute": "Galerie des Abysses",
        "Humpback Pump Track": "Piste Méroule",
        "Starfish Mainstage": "Scène Sirène",
        "Blackbelly Skatepark": "Skatepark Mako",
        "Skipper Pavilion": "Lagune aux gobies",
        "Moray Towers": "Tours Girelle",
        "Ancho-V Games": "Tentatec Studio",
        "New Albacore Hotel": "Hôtel Atoll",
        "Camp Triggerfish": "Hippo-camping",
        "Sturgeon Shipyard": "Chantier Narval",
        "Musselforge Fitness": "Gymnase Ancrage",
        "The Reff": "Allées sallées",
        "Inkbolt Art Academy": "Institut Calam'arts",
        "Piranha Pit": "Carrière Caviar"
    },
    en: {
        "tower_control": "Tower control",
        "claim_blitz": "Claim Blitz",
        "splat_zones": "Splat zones",
        "rainmaker": "Rainmaker",
        "regular": "Regular Battle",
        "MakoMart": "MakoMart",
        "Walleye Warehouse": "Welleye Warehouse",
        "Kelp Dome": "Kelp Dome",
        "Snapper Canal": "Snapper Canal",
        "Arowana Mall": "Arowana Mall",
        "Goby Arena": "Goby Arena",
        "Wahoo World": "Wahoo World",
        "Manta Maria": "Manta Maria",
        "Port Mackerel": "Port Mackerel",
        "Shellendorf Institute": "Shellendorf Institute",
        "Humpback Pump Track": "Humpback Pump Track",
        "Starfish Mainstage": "Starfish Mainstage",
        "Blackbelly Skatepark": "Blackbelly Skatepark",
        "Skipper Pavilion": "Skipper Pavilion",
        "Moray Towers": "Moray Towers",
        "Ancho-V Games": "Ancho-V Games",
        "New Albacore Hotel": "New Albacore Hotel",
        "Camp Triggerfish": "Camp Triggerfish",
        "Sturgeon Shipyard": "Sturgeon Shipyard",
        "Musselforge Fitness": "Musselforge Fitness",
        "The Reff": "The Reff",
        "Inkbolt Art Academy": "Inkbolt Art Academy",
        "Piranha Pit": "Piranha Pit"
    }
}

class Client {
    constructor(lang){
        this.baseURL = "https://splatoon2.ink/data/schedules.json";
        this.createdTimestamp = Date.now()
        if (!lang) this.lang = "en" 
        else this.lang = lang
        if (!langs[lang]) this.lang = "en"
    }

    getStages(callback){
        request.get('https://splatoon2.ink/data/schedules.json', {json: true}, (err, res, body) => {
            if (err) throw err;
            let data = {first: {}, next: {}}
            data.first.ranked = {
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.gachi[0].rule.key]
            }
            data.first.league = {
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.league[0].rule.key]
            }
            data.first.regular={
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.regular[0].game_mode.key]
            }

            data.next.ranked = {
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.gachi[1].rule.key]
            }
            data.next.league = {
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.league[1].rule.key]
            }
            data.next.regular={
                stage_a:{},
                stage_b:{},
                mode: langs[this.lang][body.regular[1].game_mode.key]
            }
            data.next.starts_at = body.gachi[1].start_time
            data.next.ends_at = body.gachi[1].end_time

            data.first.starts_at = body.gachi[0].start_time
            data.first.ends_at = body.gachi[0].end_time
            
            // Ranked

            data.first.ranked.stage_a.name = langs[this.lang][body.gachi[0].stage_a.name]
            data.first.ranked.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.gachi[0].stage_a.image
            data.first.ranked.stage_b.name = langs[this.lang][body.gachi[0].stage_b.name]
            data.first.ranked.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.gachi[0].stage_b.image

            data.next.ranked.stage_a.name = langs[this.lang][body.gachi[1].stage_a.name]
           data.next.ranked.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.gachi[1].stage_a.image
           data.next.ranked.stage_b.name = langs[this.lang][body.gachi[1].stage_b.name]
           data.next.ranked.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.gachi[1].stage_b.image

            // Regular
           
            data.first.regular.stage_a.name = langs[this.lang][body.regular[0].stage_a.name]
            data.first.regular.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.regular[0].stage_a.image
            data.first.regular.stage_b.name = langs[this.lang][body.regular[0].stage_b.name]
            data.first.regular.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.regular[0].stage_b.image

            data.next.regular.stage_a.name = langs[this.lang][body.regular[1].stage_a.name]
            data.next.regular.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.regular[1].stage_a.image
            data.next.regular.stage_b.name = langs[this.lang][body.regular[1].stage_b.name]
            data.next.regular.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.regular[1].stage_b.image

            // League

            data.first.league.stage_a.name = langs[this.lang][body.league[0].stage_a.name]
            data.first.league.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.league[0].stage_a.image
            data.first.league.stage_b.name = langs[this.lang][body.league[0].stage_b.name]
            data.first.league.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.league[0].stage_b.image

            data.next.league.stage_a.name = langs[this.lang][body.league[1].stage_a.name]
            data.next.league.stage_a.image = "https://splatoon2.ink/assets/splatnet"+body.league[1].stage_a.image
            data.next.league.stage_b.name = langs[this.lang][body.league[1].stage_b.name]
            data.next.league.stage_b.image = "https://splatoon2.ink/assets/splatnet"+body.league[1].stage_b.image

            return callback(data)
        })
    }
}
module.exports = {Client: Client}
