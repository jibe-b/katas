
Au bowling, 
* on a 2 lancés (une manche) pour faire tomber 10 quilles
* on fait 10 manches
* score max = 300
* Si je fais tomber 10 quille en 2 fois : spare, qui me donne +10 sur la 1er quille tombé de la manche suivante.

score [9,0] => 9
score [9,0, 6,4] => 19

Spare :
score [9,0, 6,4, 5] => (9 + 0) + (6 + 4 + 5) + (5)
score [9,0, 6,4, 5,2] => 9 + (6 + 4 + 5) + (5 + 2)

Strike :
score [9,0, 6,4, 5, 2, 10, 7, 2] => (9 + 0) + (6 + 4 + 5) + (5 + 2) + (10 +7 + 2) + (7 + 2)

Tests de recette
score [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0] => 10
score [1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3] => 112
score [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, (10, 10)] => 300
