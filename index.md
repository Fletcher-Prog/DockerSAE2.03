SAE 2.03 

INSTALLATION D’UN SERVICE RÉSEAU

Équipe 05 : 

AARAB ANAS

ALI ABDALLAH AMINOU

BLÉOU KESSIN

***

Compte rendu SAE 2.03

Equipe 05 

***

Docker est une plateforme ouverte pour le développement, l'expédition et l'exécution d'applications.

Docker fait abstraction du matériel et du système d’exploitation de l’hôte en exécutant des applications dans des **conteneurs** : des compartiments isolés qui contiennent toutes les ressources d’une application ou d’un service.


# I.Projet Service Réseau 

## 1.1.Présentation

Pour la SAE 2.03, étant tous passionnés de films et séries, l'équipe 5 à réaliser un site de vidéo à la demande à l’image du célèbre netflix. 

Langage utilisé pour l’interface utilisateur : HTML / CSS / JAVASCRIPT

Langage utilisé pour le serveur                 : JAVASCRIPT

![](https://lh7-us.googleusercontent.com/gDMT7IUf3Y4RgTBRMDM5GFU32tZ3D37UQv9jy_tT8LKpcRcf3KJff6aLQBd771hrjb1Pg_33PiNYvuRR5OFbaYNNnGGQm0WqWh7_8X8wPq5HTMGE3SDgTz93w_DcWPFlxmoVUunpgmHnPNuLYZ-T3I0)


## 1.2.Les système utilisés

Pour fournir les ressources aux autres appareils connectés, nous avons créé un Serveur sur  l’environnement d'exécution Node.js . 

Nous nous sommes aidés de la Framework Express pour gérer les requêtes http entrantes, router ces requêtes vers les bonnes fonctions de traitements et générer les réponses appropriées au client.

Nous avons utilisé différentes API notamment Koa, mais qui ne répondait pas à nos différents besoins du client.

voici le code du serveur :

![](https://lh7-us.googleusercontent.com/2ZvHMCsDgLGoL6G2t4obaXYGsgzKP7bj-42_z3eanlNvih8TONZaZOYos5Ax3YpBH71DCC9akPNtYDw6W6hkr8yBCT-IA_I2ytycHr3co-tr8zixIvW_lFtZHKIsNZ41zDTWhdJd1OE8mDUr3UFzJtk)

![](https://lh7-us.googleusercontent.com/k7vcE8tElKw4n6hS2ILE8cs5p-RzzVqV4blMV5OYKKquM9CBXAK1fmSzKU2Uoxqer0t3Uvgdmy9_6J6cpIFNResQpscXKaNTSt_4ApK5ZO5uGGpcL6VuKbiS5DyG0ZueBwgu2Qt3_8VZbFgLaA4phLI)

Nous avons choisi d'utiliser un serveur avec **Node.js** avec la **framework Express** plutôt qu’un autre  type de serveur car il convenait mieux à nos attentes.

Il permet de renvoyer de manière efficace des fichiers statiques comme des images,des vidéos,des fichiers css ou html.


## Vue rapide sur le code HTML :  ![](https://lh7-us.googleusercontent.com/rQXQAAiDjBRamueUmpKv4cRsTEYLxj83Bm-4xdJglyVxZ8Y2-zkZUTmMsKVHYGnZL3PM8sdf7k9Pp4_RlATxq2PTi1hPgU0JF3Rs8NdAJusOl1X1aHxSQaJ0vBfPUXJ69TVk-7Hl0N7c91cCkCgKs4I)

\
![](https://lh7-us.googleusercontent.com/0PxLBuZwtKT418hiIQGIFpMhDqduBUPxDa4nCcwn-OFAq5QHXaOQgsCQYvG3JtMy0nOxPo5O-ciSYQvI-jgqevNeQ8q-W8xuWwt_k-Kt_FYXkBUtZl0Fxxct0v0tTDY011ghvJNpWLHGhoanvCko-mQ)\
![](https://lh7-us.googleusercontent.com/alv9vWwTHS0pNxuIBBOj1TCmaIybIoz9ULupZ5JJio8sTnuk1sz0IEmO8K6ZX73iMy4p_DBX840MmcAQBV6GH0vGkHkElJYXAFnNU7Iqq7d4OaVxvI-2mK045EeOc85cVYR91JidAZG7ec2HZAAiDgw)


## 1.3. Déplotment Test du projet 

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

![](https://lh7-us.googleusercontent.com/UeRCSCK_4_FKj6cIQh1EaOOkQhgT0OKhKYklbumpDk5OHXUEoSLfvU-ACXMqZryBX6Z8xPRVEC6lN3M4qMpgbTFe4CEIXhJXxsMY2TRzJcM6JXnOPJbwEyChSAqzAnNZJs_sGbFhDrVaoPl--F_ZCJQ)

![](https://lh7-us.googleusercontent.com/CmNEqefsTJpcryn1BvokDJ0Nop2Am7LZgovb8p-5IDjExXGK94rWZTo_oIKmjILv_F2eWz-1WRDfpXB1Tw46Dg0e2lgvnu9E7dEaXGmHtU1fA44tPN8SStq9Isb2fkfDSeSNK3MPMYIocu3Ib6g9PC4)

Chaque image renvoie à la même vidéo .

![](https://lh7-us.googleusercontent.com/H5mEJkGsev7EkqNp98Nk0U_uoUN4eVO5xeMUvxGt_J8Qloc7mnt--UksA688snpVlnAklH3QZkuscnU7ZoDmXu8lAwxVhls_U5D11TpCXAMzX8owr-R4By1hsybn05dLAsXL2AxRgYd5j7sSSyergQc)


## Défis rencontrés : 

On a eu des soucis au niveau de la création de l’API, on a pas utilisé Express dès le début, et je n'arrivais pas a exporté l’arborescence du projet ce qui a causé des problèmes de chargement du css, des images etc .C’est complications nous ont  amenés à changer de Koa vers Express qui est plus intuitif à l'implémentation.

&#x20;Compte rendu des choix des services adaptés

Pourquoi ces choix? tu fais ca 

Pourquoi ce service?

Nous avons choisi de faire un service de vidéo à la demande.

Nous avons discuté entre nous et comme nous regardions trop de films et séries sur différentes plateformes nous avons décidé de faire un serveur de vidéo à la demande, en se basant sur le fonctionnement de netflix.

nous avons fait un site web de type netflix, avec une sélection de profil utilisateur,

et accueil avec tous les filmes qui pointes vers la même vidéo car on as eu un problème de taille sur github; ca ne prenait pas tous les vidéo qu’on a voulu mettre alors on as garder une seule qu’on as mis a tout les autres. 

On a utilisé node.js est une plateforme de développement Javascript pour le serveur car c’est celle qui nous semblait plus intuitive pour notre projet.

Nous avons utilisé Express pour notre de choix de framework du serveur web car nous avons utilisé différentes API notamment Koa, mais qui ne répondait pas à nos différents besoins du client. 




