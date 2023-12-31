# Salezi

Bienvenue dans le projet Salezi qui combine deux parties essentielles: un tableau de bord Strapi et une interface Grafana pour une expérience utilisateur complète.

### Installation

#### Strapi Dashboard
Pour démarrer le tableau de bord Strapi, suivez ces étapes:

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2.Clonez le dépôt:

```
git clone git@github.com:boriiiiii/Salezi.git
```

3.Accédez au répertoire du projet:

```
cd salezi
```

4.Installez les dépendances:

```
npm install
```

Lancez l'application Strapi:

```
npm run start
```

Votre tableau de bord Strapi devrait être accessible à l'adresse http://localhost:1337.

#### Grafana Dashboard
Le tableau de bord Grafana peut être installé en suivant ces étapes rapides:

Téléchargez et installez Grafana en suivant le guide officiel sur https://grafana.com/docs/grafana/latest/installation/.

Démarrez le service Grafana (par défaut sur le port 3000):
Accédez à Grafana via votre navigateur à http://localhost:3000.

Connectez-vous avec les informations par défaut (admin/admin).

Ajoutez une source de données en sélectionnant Strapi comme backend. Assurez-vous de configurer les détails de connexion appropriés.

Créez un tableau de bord personnalisé et commencez à explorer vos données Strapi.

Une fois les deux tableaux de bord démarrés, vous pouvez utiliser l'interface Strapi pour gérer vos données et Grafana pour visualiser ces données de manière graphique. Assurez-vous de consulter la documentation de chaque outil pour une utilisation plus avancée.

#### Postman GraphQL

##### Installation du plugin GraphQL sur Strapi :

A gauche vous allez dans Marketplace,
Chercher GraphQL
Installer
Redémarrer le dashboard strapi
Vérifié dans plugins que GraphQL est bien installé

##### Utilisation de GraphQL sur Postman :

Crée une requete GraphQL avec le lien suivant :

{localhost}/graphql

Exemple :
http://localhost:1337/graphql

Et ensuite cochez les cases pour que ca renvoie des informations de votre database

Si vous souahitez utilisé l'API la documentation est la suivante :

http://localhost:1337/documentation/v1.0.0#/



