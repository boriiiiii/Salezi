# Salezi

Bienvenue dans le projet Dashboard qui combine deux parties essentielles: un tableau de bord Strapi et une interface Grafana pour une expérience utilisateur complète.

### Installation

#### Strapi Dashboard
Pour démarrer le tableau de bord Strapi, suivez ces étapes:

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2.Clonez le dépôt:

```
git clone https://github.com/votre-utilisateur/strapi-dashboard.git
```

Accédez au répertoire du projet:

```
cd strapi-dashboard
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

Utilisation
Une fois les deux tableaux de bord démarrés, vous pouvez utiliser l'interface Strapi pour gérer vos données et Grafana pour visualiser ces données de manière graphique. Assurez-vous de consulter la documentation de chaque outil pour une utilisation plus avancée.
