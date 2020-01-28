db.createUser(
  {
    user: "airportuser",
    pwd: "airport",
    roles: [
      {
        role: "readWrite",
        db: "airportDb",
      }
    ]
  }
);
