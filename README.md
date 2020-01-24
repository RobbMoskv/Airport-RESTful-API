# Express.js - REST API Application

## Database

The used MongoDB is dockerized and comes with a docker-compose file:

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
$ mongo -u <your username> -authenticationDatabase <your database name>
```

5) Connect your app to the database by using this URL as a connection:
> mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name