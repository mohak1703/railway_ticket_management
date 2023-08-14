Create Table Trains (
	Train_Number varchar(5) primary key,
	Name varchar(50),
	wifi boolean NOT NULL,
	Food boolean NOT NULL,	
);

Create table Stations(
	Station_Code varchar(5) Primary Key,
	Station_Name varchar(50)
);

Create table Stoppage(
    Train_Number varchar(5) ,
	Station_Code varchar(5) ,
	Arrival_Time varchar(10),
	Departure_Time varchar(10),
	PRIMARY KEY (Train_Number,Station_Code),
	Constraint fk_Train_1 Foreign KEY (Train_Number) references Trains(Train_Number),
	Constraint fk_st_code Foreign KEY (Station_Code) references Stations(Station_Code)
);

Create table Account(
	User_Email varchar(50) Primary Key,
	Username varchar(50),
	Password varchar(30) NOT NULL
);

Create table Admin(
	Adminname varchar(50) Primary Key,
	Password varchar(30) NOT NULL
);

Create table Ticket (
	Train_Number varchar(5),
	PNR varchar(11),
	Date_of_Journey date,
	User_Email varchar(50),
	PRIMARY KEY (Train_Number, PNR),
	constraint fk_Train_2 foreign key (Train_Number) references Trains(Train_Number),
	constraint fk_usrn1 foreign key (User_Email) references Account(User_Email)
);

Create table Passenger(
	Passenger_id int Primary Key,
	Passenger_Name varchar(50),
	Date_of_birth date,
	Gender varchar(6),
	PNR varchar(11),
	Train_Number varchar(5),
	Constraint fk_Train_3 Foreign KEY (Train_Number) references Trains(Train_Number),
	Constraint fk_pnr Foreign KEY (PNR) references Ticket(PNR)
);

INSERT INTO Account values ('bhuwanjsh02@gmail.com', 'Bhuwan Joshi', 'Bhuwanjsh02@');
INSERT INTO Account values ('bhuwanjsh0@gmail.com', 'Bhuwan Joshi', 'Bhuwanjsh02@');


INSERT INTO Trains values ('100', 'Rajdhani Express', 400, true, true);
INSERT INTO Trains values ('101', 'Kerala Express', 450, true, true);
INSERT INTO Trains values ('102', 'Shatabadi Express', 500, true, true);


INSERT INTO Stations values ('100', 'Durgapura Station, Jaipur');
INSERT INTO Stations values ('101', 'Gandhi Nagar Station, Jaipur');
INSERT INTO Stations values ('102', 'Jaipur Junction, Jaipur');
INSERT INTO Stations values ('103', 'Indira Gandhi Station, Delhi');


INSERT INTO Stoppage values ('100', '100','10:00','10:05');
INSERT INTO Stoppage values ('100', '101','10:25','10:30');
INSERT INTO Stoppage values ('100', '102','11:00','11:15');
INSERT INTO Stoppage values ('100', '103','13:30','13:45');

INSERT INTO Admin values ('admin', 'admin');