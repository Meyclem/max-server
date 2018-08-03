# Serveur local Loom
> Ce projet a été crée en partenariat avec  le **[Videomapping European Center](http://videomappingcenter.com/)**, **Ludovic Burczykowski**, PhD Aesthetic, Sciences & Technologies of Arts et **Jérémy Deschamps**, Game developper.

Ce serveur permet un transfert d'informations en temps réel entre une [application web distante](https://nuxt-websocket.herokuapp.com/mouse) et un logiciel de diffusion tel que [Max Msp](https://cycling74.com/downloads).
___

## Installation
#### Téléchargement des fichiers
Soit **en ligne de commande**, éxécuter: `git clone git@github.com:Meyclem/max-server.git`

Soit **en [téléchargement direct](https://github.com/Meyclem/max-server/archive/master.zip)**, il est ensuite nécessaire de décompresser les fichiers.


#### Installation des outils nécessaires
**Vous devez avoir Node.js installé. Si ce n'est pas le cas, suivez ces étapes:**

Afin d'utiliser le serveur il est obligatoire d'installer ce qui suit avec les lignes de commande correspondantes dans le terminal.

**Homebrew**
```
brew -v
```
si hombrew est installé vous devriez voir la version comme ici:
```
Homebrew 1.7.1
```
Si ce n'est pas le cas, il faut l'installer avec:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
```

**Node.js**
```
node -v
```
Si node est installé vous devriez avoir une version indiquée:
```
v10.0.0
```
Si ce n'est pas le cas:
```
brew install node
```

**yarn**
```
yarn -v
```
Si yarn est installé vous devriez avoir une version indiquée:
```
1.7.0
```
Si ce n'est pas le cas:
```
brew install yarn
```

**nodemon**
Dans le terminal:
`yarn global add nodemon`

#### Installation des dépendances du serveur
Après avoir vérifié les versions et/ou installé le nécessaire, allez dans le répertoire du projet avec le terminal puis lancez:
```
yarn install
````
Cette commande permet l'installation des dépendances nécessaires au lancement du serveur.
___
## Utilisation
**POUR LES DIFFUSIONS**

Afin d'utiliser le serveur lors d'une diffusion, ouvrez le terminal, allez dans le répertoire du serveur puis:
```
yarn serve
```
Cette commande permet au serveur local d'écouter les évènements émis par les utilisateurs de l'application web.

**POUR LES TESTS EN MODE LOCAL**

Allez dans le dossier racine du serveur puis:
```
yarn dev
```
Le serveur se lancera en écoutant les évènements émis sur `http://localhost:3000`.
Il est possible de redémarrer le serveur à tout moment en tapant `rs` dans le terminal.
___
## Documentations externes
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Yarn](https://yarnpkg.com/fr/)
- [Nodemon](https://github.com/remy/nodemon)
- [osc-js](https://github.com/adzialocha/osc-js)
- [socket.io](https://socket.io/docs/)