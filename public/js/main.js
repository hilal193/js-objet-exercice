// Exo 1
let client = {
    nom:"hilal",
    argent: 30,
    article:[]
}
let articleDuMagasin= ["chocolat","tartine"];
let magasin = true;
let choix = alert(`article restant : ${articleDuMagasin}`);
let article= prompt("quel article voulez vous acheter");
let article2= prompt("quel article voulez vous acheter");
if (article=="chocolat" ||article2=="tartine") {
    console.log(`vous avez acheter pour 2€ de chocolat`);
    client.argent = (client.argent-2);
    client.article.push("chocolat");

    console.log(`vous avez acheter pour 3,50€ de tartine`);
    client.argent = (client.argent-3.50);
    client.article.push("tartine");
}
else if (article == "chocolat" ||article2=="tartine") {
    console.log(`vous avez acheter pour 3,50€ de tartine`);
    client.argent = (client.argent-3.50);
    client.article.push("tartine");

    console.log(`vous avez acheter pour 2€ de chocolat`);
    client.argent = (client.argent-2);
    client.article.push("tartine");
}
else{
    alert("article indisponible");
}

console.log(client.article);
console.log(`j'ai au final ${client.argent} € qui me reste dans ma poche`);

// Exo 2

let vieille_dame = {
    age:18,
    nom:"hilalk",
    prenom:"hilal",
    moral:"mal",
    objet: "canne",
    se_plaindre1(a){
        if (a == "mal") {
         return   alert("Vous me dérangez");
        }else if (a == "bien") {
          return  alert(`Bonjour monsieur ${vieil_homme.nom}`)
        }else{
         return   console.log("repondez par bien ou mal");
        }
    },
    // Exo 2 B
    se_promener(pkmn){
        return this.objet= pkmn;
    }
}
console.log(vieille_dame.se_plaindre1("bien"));
alert(vieille_dame.se_plaindre1("bien"));

// Exo 2 B
console.log(vieille_dame.se_promener("fleche"));
console.log(vieille_dame.objet);
// Exo 3

let vieil_homme={
    nom:"vieux",
    age:93,
    saluer(){
        return `Bonjour ${vieille_dame.nom} ${vieille_dame.prenom} ${vieille_dame.se_plaindre1()}`
    },
    adoucir(){
        if (vieille_dame.moral == "mal") {
            return vieille_dame.moral = "bien"
        }else{
            return vieille_dame.moral = "mal"
        }
    }
}
vieille_dame.moral = "mal";
vieil_homme.adoucir();
alert(vieille_dame.moral)

