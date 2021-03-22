CREATE SCHEMA chirpr;
USE chirpr;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(35) NOT NULL,
    _created DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE chirps (
    id INT NOT NULL AUTO_INCREMENT,
    userid INT NOT NULL,
    content VARCHAR(250) NOT NULL,
    location VARCHAR(70) NOT NULL,
    _created DATETIME DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE mentions (
    chirpid INT NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY (chirpid, userid),
    FOREIGN KEY (chirpid) REFERENCES chirps(id) ON DELETE CASCADE,
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);
