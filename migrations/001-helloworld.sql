-- Up
CREATE TABLE activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    timeStart INTEGER,
    timeEnd INTEGER,
    week INTEGER,
    producers TEXT,
    faculty TEXT,
    link TEXT
);

CREATE TABLE markers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    massart_id TEXT,
    role TEXT,
    latitude INTEGER,
    longitude INTEGER
);

INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('Big Meeting & Announcements', 'Welcome back, everyone! <br/><br/>1:30 PM - As folks enter the meeting, Phillip Sossou and Max Ryan will perform music and running visuals respectively. <br/><br/>1:40 PM - A welcome back statement delivered by Phillip and Max, with explanation of the day’s schedule.<br/><br/>1:50 PM - Announcements.<br/><br/>2:00 PM - Kahoot! Activity, produced by Ace Epstein', 130, 200, 1, 'Phillip Sossou, Max Ryan, and Ace Epstein', 'All of them', 'http://bit.ly/PozenCenter');

INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('Explanation of the Official SIM Website', 'Phillip Sossou will explain how to use the official SIM website, specifically how to update and maintain your profile on the Names/Faces page and why it matters.', 230, 330, 1, 'Phillip Sossou', 'None', 'http://bit.ly/PozenCenter');
INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('How to Collaborate and Produce Activities', 'Max Ryan and Ena Kantardzic will go over the best practices for collaborating with fellow students and walk through the process for proposing an Activity to the faculty.', 230, 330, 1, 'Max Ryan, and Ena Kantardzic ', 'None', 'http://bit.ly/PozenCenter');
INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('Explanation of This Website', 'Anthony Fader will show you how to use the Thursday Activities scheduling tool and the Collaboration Map on this website.', 230, 330, 1, 'Anthony Fader', 'None', 'http://bit.ly/PozenCenter');
INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('Information and Q&A with the Faculty', 'The faculty will, among other things, talk about what your academic requirements are and answer any questions you may have about the semester going forward.', 230, 330, 1, 'None', 'All of them', 'http://bit.ly/PozenCenter');

INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('SIMtv Episode #4 & #5 Critique Group', 'Two breakout groups, produced by Kes Maro and Tori Rego respectively, will gather ‘round and talk about the last two episodes of SIMtv: “Episode #4: SIM Showcase” and “Episode #5: What do we do now?”. Students must watch these episodes beforehand. They can be found here: https://www.simtv.org/episodes', 400, 430, 1, 'Kes Maro, and Tori Rego', 'All of them', 'http://bit.ly/PozenCenter');
INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('SIM Roundtable', 'SIM Roundtable is an opportunity for students to come together and talk about the future of the department.All feedback is welcome and will be considered thoughtfully.', 430, 630, 1, 'Everyone', 'All of them', 'http://bit.ly/PozenCenter');


INSERT INTO Markers (name, massart_id, role, latitude, longitude) values('Anthony Fader', "afader", "student", 42.33601, -71.09757);


-- Down
DROP TABLE Activities;
DROP TABLE Markers;