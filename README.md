# chatDiscussion
Chat de discussion effectué en nodeJs dans le cadre du cours de 3WEB à SUPINFO


CONTRAINTES TECHNIQUES :
    Mise en place d'un serveur web en nodeJS avec express (https://github.com/expressjs/express). L'objectif est de réaliser un petit chat en ligne.
Pour cela l'utilisation de socket.io (http://socket.io/) a été requis. Les routes ont été éditées via express.Router().
Concernant l'interface utilisateur, elle est générée par le serveur grâce à Jade(https://github.com/jadejs/jade).


MISE EN PLACE :
    Afin de lancer le chat et discuter entre amis, vous avez juste à insérer votre ip dans le fichier /static/client.js à la ligne 22. Remplacez localhost par celle-ci.
    Ensuite lancez le fichier main.js en faisant 'node main.js' dans le terminal à l'emplacement du fichier.
    Il ne reste plus qu'à vous connecter avec votre navigateur sur l'adresse ip sans omettre le port. Indiquez celle-ci à vos collègues, amis... et vous voici dans le chat.


ORGANISATION :
    main.js          ->  serveur web à lancer via la commande 'node main.js'
    controller.js    ->  classe contenant le code pour chaque route
    Readme           ->  fichier explicatif du projet(celui-ci)
    |
    -> static/       ->  dossier contenant les fichiers JS et CSS
       |
       -> client.js  ->  fichier javascript
          style.css  ->  fichier css
    |
    -> templates/
       |
       -> chat.jade  ->  interface pour le chat
          index.jade ->  interface d'accueil


LICENCE :
    Ce projet nommé 'chatDiscussion' est déposé sur GitHub par Le Déroff Kévin, étudiant en B.Sc à SUPINFO Caen pour l'année universitaire 2015-2016.
L'auteur vous autorise a adapté son travail à votre guise, de le partager, et d'effectuer des versions commerciales tant que la paternité est respectée.

"This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/."

 + Vous pourrez retrouver ses informations en en-tête de chaque fichier source.
