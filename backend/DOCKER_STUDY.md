# Docker Study 

## Docker Compose

### Comandos

O comando `docker-compose down` serve para parar e remover todos os recursos que foram iniciados pelo comando `docker-compose up`.

```bash
docker-compose down
```

O comando `docker-compose up` serve para construir as imagens e subir os containers, deixando o ambiente pronto para uso.

```bash
docker-compose up --build
```

### Conectando em um container

O comando `docker-compose exec` serve para executar um comando dentro de um container.

```bash
docker-compose exec api1 bash
```