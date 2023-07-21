# APIRestPresentation
L'API REST est une façon pratique de faire communiquer des applications sur le web. Elle utilise des règles claires et faciles pour que différents programmes puissent échanger des informations entre eux. Les API REST sont très utilisées dans les sites web et les applications mobiles.

Caractéristiques clés de l'API REST :

- Stateless (Sans état) : Chaque fois qu'un programme envoie une demande à un autre, il doit tout expliquer dans cette demande. Rien n'est gardé en mémoire entre ces demandes, ce qui facilite le travail.

- Ressources et URIs : Les informations que l'on veut échanger sont appelées "ressources" et on les identifie par des adresses web, comme des liens. Par exemple, on peut utiliser une adresse comme "https://api.monsite.com/produits" pour parler des produits.

- Méthodes HTTP : Pour demander ou modifier une ressource, on utilise différentes méthodes standardisées. Par exemple, pour récupérer des données, on utilise GET, pour créer quelque chose, on utilise POST, pour mettre à jour, on utilise PUT, et pour supprimer, on utilise DELETE.

- Représentations : Les ressources sont échangées dans un format compréhensible par les programmes, comme JSON, qui est facile à lire et écrire pour tout le monde.

- HATEOAS (Hypermedia as the Engine of Application State) : C'est un principe qui dit que les réponses doivent contenir des liens pour d'autres informations importantes, permettant ainsi de mieux naviguer entre les données.

- Facile : L'API REST suit des règles simples, ce qui la rend accessible et facile à utiliser.
- Compatible : Les programmes écrits dans n'importe quel langage peuvent se comprendre grâce à l'API REST.
- Évolutif : Cette méthode de communication peut grandir en même temps que le nombre d'utilisateurs, sans problème.
- Sécurisé : Les échanges sont protégés grâce à des règles de sécurité standard.

En résumé, l'API REST est un moyen pratique pour faire communiquer différentes applications sur le web. Elle suit des règles simples et efficaces pour échanger des informations entre programmes de manière sécurisée et facile à comprendre.

Un exemple d'API REST peut être pris avec un guichet automatique de banque, où vous avez une interface pour effectuer différentes opérations sans avoir besoin de connaître les détails internes du fonctionnement de la banque. De la même manière, une API REST est une interface qui permet à différents programmes informatiques de communiquer entre eux de manière cohérente et facile à comprendre. Elle organise les informations en "ressources" identifiées par des adresses web (URL) et utilise des méthodes HTTP (GET, POST, PUT, DELETE) pour demander des informations ou effectuer des actions sur ces ressources. L'API REST est sans état, ce qui signifie qu'elle ne conserve pas d'informations entre les demandes, rendant ainsi son utilisation facile à gérer et évolutive.
