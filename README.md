# Exemple Dockerfile (créer une image)

Exemple de **dockerfile + github** pour lancer un serveur web basé sur l'image ```httpd```

## Instructions pour lancer l'application

- Vérifiez si docker est installé :
```shell
docker --version
```

- Cloner le référentiel :
 ```shell
git clone git@github.com:Fletcher-Prog/DockerSAE2.03.git
```

- Aller au référentiel :
```shell
cd DockerSAE2.03/serveurVideo
```

- Construisez l'image décrite dans dockerfile avec docker build : 
```shell
sudo docker build -t serveursae:1.0 .
```

- Lancer le serveur web :
```shell
sudo docker run -d -p 3012:3002 serveursae:1.0
```

- Vérifier que l'application est en cours d'exécution. Pour ce faire, ouvrez un navigateur et tapez ```localhost:3012```

- Vérifier que le conteneur associé est actif :
```shell
docker ps
```

- La sortie de ```docker ps``` doit être similaire à :
```shell
CONTAINER ID   IMAGE              COMMAND                  CREATED             STATUS             PORTS                                       NAMES
af5aabfc85d4   serveursae:1.0     "docker-entrypoint.s…"   5 minutes ago       Up 5 minutes       0.0.0.0:3012->3002/tcp, :::3012->3002/tcp   mystifying_antonelli
```

- Finalement, arrêtez le conteneur avec la commande suivante (les dernières chiffres sont le code de hachage affiché par docker ps):
```shell
docker stop af5aabfc85d4 
```

- Encore, si on souhaite supprimer le conteneur, on peut taper :
```shell
docker rm af5aabfc85d4 
```

**NOTE :** Au lieu du code de hachage, on peut toujours taper le nom du conteneur. Dans le cas d'exemple ce nom est ```serveursae```




