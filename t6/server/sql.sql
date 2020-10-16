


CREATE DATABASE athletes;
USE athletes;

CREATE TABLE athlete (
    aId INT NOT NULL AUTO_INCREMENT,
    firstNames VARCHAR(64),
    lastName VARCHAR(64),
    nickName VARCHAR(64),
    yob DATE,
    weight DECIMAL(5, 2),
    imgUrl VARCHAR(255),
    sport VARCHAR(64),
    PRIMARY KEY (aId)
);

CREATE TABLE achievements (
    acId INT NOT NULL AUTO_INCREMENT,
    aId INT NOT NULL,
    name VARCHAR(64),
    achDate Date,
    PRIMARY KEY (acId),
    FOREIGN KEY (aId) REFERENCES athlete (aId)
)


insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (1, 'Ewan', 'O''Longain', '1997-01-14', 66.55, 'http://dummyimage.com/151x210.bmp/5fa2dd/ffffff', 'Tennis');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (2, 'Celestyna', 'Ellsbury', '1999-12-17', 63.29, 'http://dummyimage.com/190x146.jpg/ff4444/ffffff', 'Tennis');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (3, 'Ninetta', 'Soan', '1993-01-15', 64.51, 'http://dummyimage.com/104x249.png/5fa2dd/ffffff', 'Tennis');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (4, 'Megen', 'Eaden', '1999-08-24', 77.88, 'http://dummyimage.com/240x207.png/5fa2dd/ffffff', 'Tennis');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (5, 'Reine', 'Mourgue', '1990-05-27', 73.37, 'http://dummyimage.com/227x195.bmp/ff4444/ffffff', 'Football');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (6, 'Sibyl', 'Godsafe', '1993-05-31', 79.86, 'http://dummyimage.com/245x249.bmp/cc0000/ffffff', 'Football');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (7, 'Misty', 'Crafter', '1979-03-11', 60.0, 'http://dummyimage.com/137x157.png/ff4444/ffffff', 'Football');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (8, 'Heath', 'Maberley', '1974-01-18', 60.59, 'http://dummyimage.com/157x210.bmp/5fa2dd/ffffff', 'Football');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (9, 'Codi', 'Seman', '1973-07-18', 70.99, 'http://dummyimage.com/164x167.png/5fa2dd/ffffff', 'Football');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (10, 'Gail', 'Quilkin', '1976-08-30', 75.05, 'http://dummyimage.com/182x102.jpg/ff4444/ffffff', 'Rugby');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (11, 'Niall', 'Lambin', '1995-11-06', 70.2, 'http://dummyimage.com/185x250.bmp/dddddd/000000', 'Rugby');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (12, 'Briant', 'MacDirmid', '1987-11-21', 60.71, 'http://dummyimage.com/232x173.bmp/ff4444/ffffff', 'Rugby');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (13, 'Bernard', 'Bowland', '1999-09-15', 65.54, 'http://dummyimage.com/216x240.bmp/5fa2dd/ffffff', 'Swimming');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (14, 'Henriette', 'Aleksahkin', '1995-10-02', 75.16, 'http://dummyimage.com/190x168.png/dddddd/000000', 'Swimming');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (15, 'Northrup', 'Myderscough', '1980-11-17', 76.93, 'http://dummyimage.com/122x211.bmp/dddddd/000000', 'Swimming');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (16, 'Lucian', 'Scholl', '1993-07-25', 69.68, 'http://dummyimage.com/143x193.bmp/dddddd/000000', 'Swimming');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (17, 'Bogey', 'Switsur', '1980-12-01', 68.08, 'http://dummyimage.com/100x225.jpg/ff4444/ffffff', 'Ice-Hockey');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (18, 'Lars', 'Tiron', '1993-09-25', 77.03, 'http://dummyimage.com/228x247.png/cc0000/ffffff', 'Ice-Hockey');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (19, 'Alissa', 'Byrth', '1988-10-15', 65.21, 'http://dummyimage.com/248x249.png/cc0000/ffffff', 'Ice-Hockey');
insert into athlete (aId, firstNames, lastName, yob, weight, imgUrl, sport) values (20, 'Thurston', 'Lacelett', '1999-06-15', 68.19, 'http://dummyimage.com/243x248.bmp/cc0000/ffffff', 'Ice-Hockey');




