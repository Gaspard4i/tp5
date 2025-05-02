<img src="images/readme/header-small.jpg" >

# C. Serveur API REST <!-- omit in toc -->

_**Durant les TPs nous aurons à connecter notre appli web à une base de données grâce à une API REST qui vous est fournie ici : https://framagit.org/formation/react/api-server**_

Ce serveur (_basé sur [Express.js](http://expressjs.com/)_) fournit une API REST/JSON minimaliste mais qui va être suffisante pour connecter notre appli React à une base de données [SQLite](https://sqlite.org/index.html) (_générée au premier lancement du serveur_).

1. **Commencez par cloner le serveur :**
	```bash
	cd chemin/vers/votre/workspace
	git clone https://framagit.org/cours-react/api-server.git
	```
2. **Installez ensuite les dépendances du serveur :**
	```bash
	cd chemin/vers/votre/workspace/api-server && npm i
	```

	> <details><summary>🚧 <em>Si vous rencontrez <strong>une erreur</strong> en rapport avec node-gyp...</em></summary>
	>
	> _Si vous êtes sur Windows, c'est peut-être que vous avez oublié de cocher la case **"Automatically install the necessary tools. ..."** sur l'écran "Tools for native modules" lors de l'installation de Node.js (comme indiqué à la partie [A. Préparatifs](./A-preparatifs.md))._ \
	> _Si c'est le cas **désinstallez et réinstallez Node en prenant soin de cocher cette case**._
	>
	> _Vous pouvez aussi tenter d'installer les paquets nécessaires manuellement ([comme le fait normalement l'installeur de node](https://github.com/nodejs/node/blob/1ba508d51b3057768fa068dc3e279450d498c3d9/tools/msvs/install_tools/install_tools.bat#L41-L42)):_
	> 1. _Si vous ne l'avez pas encore, installez [chocolatey](https://chocolatey.org/) : https://chocolatey.org/install_
	> 2. _Installez ensuite les paquets [python](https://chocolatey.org/packages/python) et [visualstudio2019-workload-vctools](https://chocolatey.org/packages/visualstudio2019-workload-vctools) :_
	> 	```bash
	> 	choco install python visualstudio2019-workload-vctools
	> 	```
	> 3. _Supprimez le dossier `node_modules` et relancez la commande `npm i`._
	>
	> <br/>
	>
	> _Si l'erreur persiste ou que vous ne souhaitez/pouvez vraiment pas utiliser chocolatey, alors vous pouvez tenter d'installer le paquet npm `windows-build-tools`. Ouvrez un terminal **en tant qu'*ADMINISTRATEUR*** et tapez la commande suivante :_
    > ```bash
    > npm install --global --production --verbose windows-build-tools
    > ```
	> _**NB :** En cas de blocage de l'installation sur la ligne **"Successfully installed Python 2.7"** pendant plus de 5 ~ 10 minutes, tentez donc la manipulation décrite sur cette issue github : https://github.com/felixrieseberg/windows-build-tools/issues/172#issuecomment-484091133_
	> </details>

3. **Démarrez ensuite le serveur** en lançant la commande
	```bash
	npm start
	```

	<img src="images/readme/npm-start.gif" />

	> <details><summary>🚧 <em>Si la commande ne se lance pas...</em></summary>
	>
	> _Vérifiez que vous lancez bien cette commande dans le dossier `api-server` et que le dossier `node_modules` a bien été généré par le `npm i` qu'on a fait tout à l'heure._
	> </details>

4. **Vérifiez que la base de données SQLite a bien été créée** en vérifiant qu'un fichier `db.sqlite` figure bien maintenant dans le dossier `api-server`.

5. **Enfin, assurez-vous du bon fonctionnement de l'API REST en ouvrant l'URL http://localhost:8080/api/videos dans votre navigateur.** Si tout se passe bien vous devez voir un JSON s'afficher avec des vidéos dedans !

	<img src="images/readme/screen-01.png" />

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à la dernière étape : [D. Les devtools](D-devtools.md)