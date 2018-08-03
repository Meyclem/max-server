# Serveur local Loom
> Ce projet a été crée en partenariat avec  le **Videomapping European Center** et **Ludovic BURCZYKOWSKI**, PhD Aesthetic, Sciences & Technologies of Arts.

Ce serveur permet un transfert d'informations en temps réel entre une [application web distante](https://nuxt-websocket.herokuapp.com/mouse) et un logiciel de diffusion tel que [Max Msp](https://cycling74.com/downloads).
___

## Installation
#### Téléchargement des fichiers
Soit **en ligne de commande**, éxécuter: `git clone git@github.com:Meyclem/max-server.git`

Soit **en [téléchargement direct](https://github.com/Meyclem/max-server/archive/master.zip)**, il est ensuite nécessaire de décompresser les fichiers


#### Installation des outils nécessaires
<u>Vous devez avoir Node.js installé. Si ce n'est pas le cas, suivez ces étapes:</u>
Afin d'utiliser le serveur il est obligatoire d'installer ce qui suit avec les lignes de commande correspondantes dans le terminal.
**Homebrew**
`brew -v`
si hombrew est installé vous devriez en voir la version comme ici:
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
```
brew install node
```
**yarn**
`brew install yarn`

**nodemon**
Dans le terminal:
`yarn global add nodemon`
___
## Utilisation
utilisation en projection
```
yarn serve
```
tests en local
```
yarn dev
```
___
## Documentations externes
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Yarn](https://yarnpkg.com/fr/)
- [osc-js](https://github.com/adzialocha/osc-js)
- [socket.io](https://socket.io/docs/)