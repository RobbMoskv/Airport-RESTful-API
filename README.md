# Express.js App - Airport RESTful API :airplane:

## Introduction

This is simple RESTful API written in Node.js by the use of the _Express.js_ web framework.
The API gives the opportunity to query a bunch of real Airports across the global.

![Image description](./image.png)

## Backend

### Instructions

1) Install NPM dependencies.

```bash
npm install
```

2) Create an _.env_ file to store config data and database credentials.

```bash
# App
ENV={environment}
PORT={your-port}
```

### OpenAPI

API documentation was done with the standard api documentation.

```javascript
const openapispec = YAML.load('./openapidoc.yaml');
```

## Database

The used MongoDB is dockerized and comes with a docker-compose file. 

### Instructions

To run and use it do as follows:

1) Run the docker-compose file with

```bash
$ docker-compose up
# or the following to run containers in the background
$ docker-compose up -d 
```
2) Open another terminal to login to the container and type:

```bash
# to see our running container
$ docker container ls 
```
3) Login to your container by using container names

```bash
$ docker exec -it <container-name> bash
```
4) Login to MongoDB with created User & Database by using

```bash
$ mongo -u <your username> -p <your password> --authenticationDatabase <your database name>
# OR
$ mongo -u <your username> --authenticationDatabase <your database name>
```

5) Connect your app to the database by using this URL as a connection:
> mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name

Thx to Clavin Junes's [Medium Post](https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3).

### Sample Data

The used sample was grateful copied from [tdreyno](https://gist.github.com/tdreyno/4278655) Github repository.