# Salezi

Projet Dashboard Strapi & Grafana
Bienvenue dans le projet Dashboard qui combine deux parties essentielles: un tableau de bord Strapi et une interface Grafana pour une expérience utilisateur complète.

Table des matières
Installation
Strapi Dashboard
Grafana Dashboard
Utilisation
Contributions
Licence
Installation
Strapi Dashboard
Pour démarrer le tableau de bord Strapi, suivez ces étapes:

Assurez-vous d'avoir Node.js installé sur votre machine.

Clonez le dépôt:

bash
Copy code
git clone https://github.com/votre-utilisateur/strapi-dashboard.git
Accédez au répertoire du projet:

bash
Copy code
cd strapi-dashboard
Installez les dépendances:

bash
Copy code
npm install
Configurez votre base de données dans le fichier .env en suivant le modèle .env.example.

Lancez l'application Strapi:

bash
Copy code
npm run start
Votre tableau de bord Strapi devrait être accessible à l'adresse http://localhost:1337.

Grafana Dashboard
Le tableau de bord Grafana peut être installé en suivant ces étapes rapides:

Téléchargez et installez Grafana en suivant le guide officiel sur https://grafana.com/docs/grafana/latest/installation/.

Démarrez le service Grafana (par défaut sur le port 3000):

bash
Copy code
sudo systemctl start grafana-server
Accédez à Grafana via votre navigateur à http://localhost:3000.

Connectez-vous avec les informations par défaut (admin/admin).

Ajoutez une source de données en sélectionnant Strapi comme backend. Assurez-vous de configurer les détails de connexion appropriés.

Créez un tableau de bord personnalisé et commencez à explorer vos données Strapi.

Utilisation
Une fois les deux tableaux de bord démarrés, vous pouvez utiliser l'interface Strapi pour gérer vos données et Grafana pour visualiser ces données de manière graphique. Assurez-vous de consulter la documentation de chaque outil pour une utilisation plus avancée.

Contributions
Les contributions sont les bienvenues! Si vous souhaitez contribuer à ce projet, veuillez consulter notre guide de contribution CONTRIBUTING.md.

Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.
