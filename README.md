# cyberpunk-404

## Avant-propos
L'objectif est de créer une page 404, statique, au sein d'une application web simulée. 

## Technologies utilisées
- [x] HTML
- [x] JavaScript
- [x] SCSS (une fois compilé CSS)

## Cahier des charges

### Une barre de navigation :
- Doit contenir le bouton permettant d’afficher / cacher le burger menu
- Doit être positionné en haut de la fenêtre d’affichage
- Doit prendre 100% de la largeur de la fenêtre
- Doit s’adapter à la taille du support d’affichage
### Un menu accordéon :
- Doit avoir des sections fermées et qui s'ouvrent quand on passe la souris dessus (ou au click)
- Doit contenir au moins 2 catégories
- Chaque catégories 3 enfants (liens) minimum par catégorie
- Au clic sur un lien afficher un loader (CF : Section loader)
### Un burger menu :
- Doit s’afficher dans le contenu de la page en version Desktop (+768px)
- Doit s’afficher au-dessus du contenu avec un fond noir transparent (-768px)
- Doit contenir un menu en accordéon animé
- Doit être animé à l’affichage et à la disparition (Desktop)
- Doit s’adapter à la taille du support d’affichage
### Une animation au choix utilisant un keyframe :
- Ne doit pas être une transition
- Doit contenir minimum 3 états (To et From comptent pour 2 états)
- Doit être fait sur l’élément de votre page et de votre choix
- Doit pouvoir être déclenchée par une action de l’utilisateur (Clique, Entré au clavier, konami
code, etc…)
### Un Loader animé :
- Doit être centré dans la fenêtre
- Doit être une animation infinie
- Doit avoir un « backdrop » lorsque qu’il est affiché
- Idéalement au clique sur le « backdrop » le loader est caché 
