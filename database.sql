CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50), 
    adresse VARCHAR(50), 
    portable VARCHAR(50),
    fixe VARCHAR(50),
    email VARCHAR(50),
    naissance VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE education (
    id int NOT NULL,
    periode VARCHAR(50),
    description VARCHAR(200)
);

CREATE TABLE employement (
    id int NOT NULL,
    periode VARCHAR(50),
    description VARCHAR(200)
);

CREATE TABLE skills (
    id int NOT NULL,
    skill VARCHAR(50),
    description VARCHAR(200)
);

INSERT INTO user (nom,prenom,adresse,portable,fixe,email,naissance) VALUES ('HASSLER','Alexandre','17 rue de Bruxelle \n 69100 Villeurbanne', '0674979530', '0388254544', 'alexandre@hassler.fr','06-06-1986')

INSERT INTO education (id, periode,description) VALUES (1,"2013-2016","3-year computer science, UCBL, Universite Claude Bernard Lyon 1, Lyon")

INSERT INTO education (id, periode,description) VALUES (1,"2009-2011","2-year training course in architecture, INSA, Institut National des Sciences Appliquees, Strasbourg.")

INSERT INTO education (id, periode, description) VALUES (1,"2005-2008","3-year engineer-preparatory school, Lycée Saint Augustin, Bitche")

INSERT INTO education (id, periode, description) VALUES (1,"2005-2001","Graduated from highschool specializing in mathematics, Lycée Fustel de Coulanges, Strasbourg."

INSERT INTO employement (id,periode,description,etablissement,ville) VALUES (1,"2012","Apprentice cook", "Frankys Dinner restaurant", "Strasbourg")
