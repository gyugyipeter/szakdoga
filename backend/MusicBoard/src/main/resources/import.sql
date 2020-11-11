INSERT INTO `USER` (`ID`, `USER_NAME`, `PASSWORD`) VALUES (1, 'admin', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW');
INSERT INTO `USER` (`ID`, `USER_NAME`, `PASSWORD`) VALUES (2, 'Jancsi16', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW');
INSERT INTO `USER` (`ID`, `USER_NAME`, `PASSWORD`) VALUES (3, 'Icuka', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW');
INSERT INTO `USER` (`ID`, `USER_NAME`, `PASSWORD`) VALUES (4, 'Aladdin98', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW');

INSERT INTO `SONG` (`ID`, `INSTRUMENT`, `SONG_NAME`, `SONG_OBJECT`, `USER_ID`) VALUES (1, 'PIANO', 'iloveu', '{songs: ["1": [{ note: E3, key: y, time: 0 }, { note: B3, key: n, time: 1020 }], "2": [{ note: D2, key: s, time: 0 }]]}', 2);

--        "1": [
--            {
--                note: E3,
--                key: y
--                time: 0
--            },
--            {
--                note: B3,
--                key: n
--                time: 1020
--            }
--        ],
--        "2": [
--            {
--                note: D2,
--                key: s
--                time: 0
--            }
--        ]