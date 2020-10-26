var prompt = require('prompt-sync')();

var controlleur = '';
var nombreMoteurs = 0;
var cameraUsb = '';
var matriceLeds = '';
var totalFacture = 0;
var resume = 'Robot avec ';

// Programme, sans validations (nous assumons donc que l'utilisateur saisit les bonnes valeurs)
controlleur = prompt('Veuillez chosir un contrôlleur (1. RaspBerry Pi (55$)     2.Raspberry Pi Zero (15$): ');
if(controlleur === '1') {
    resume += 'RaspBerry Pi, ';
    totalFacture += 55;
} else {
    resume += 'Raspberry Pi Zero, ';
    totalFacture += 15;
}

nombreMoteurs = parseInt(prompt('Veuillez chosir le nombre de moteurs (entre 2 et 24): '));
resume += nombreMoteurs + ' moteurs, ';
totalFacture += nombreMoteurs * 5;

cameraUsb = prompt('Voulez vous une caméra USB? (o/n): ');
if(cameraUsb.toUpperCase() === 'O') {
    resume += ' avec caméra, ';
    totalFacture += 35;
} else {
    resume += ' pas de caméra, ';
}

matriceLeds = prompt('Voulez vous une matrice de LEDS pour les yeux? (o/n): ');
if(matriceLeds.toUpperCase() === 'O') {
    resume += ' avec matrice de LEDS, ';
    totalFacture += 10;
} else {
    resume += ' pas de matrice de LEDS, ';
}

// Ajout du filament 3D
totalFacture += 20;

// Ajour de la batterie USB
totalFacture += 15;

console.log(resume);
console.log('Prix total : ' + totalFacture);

// Le total de la facture + frais de livraison se calcule de plusieurs façons
console.log('Prix total : ' + totalFacture * 1.15);
// ou 
//console.log('Prix total : ' + (totalFacture + (totalFacture * 0.15)));
// ou 
//console.log('Prix total : ' + (totalFacture + (totalFacture * 15/100)));

// Pour afficher seulement 2 décimales, vous pouvez utiliser la méthode .toFixed(2)
// Exemple : console.log('Prix total : ' + (totalFacture * 1.15).toFixed(2));
