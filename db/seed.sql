USE freshCatch;

-- Insert userData records
INSERT INTO userData (first_name, last_name, email, password)
VALUES ('Hyman', 'Dixcey', 'hdixcey0@princeton.edu', '2e1f0b2b0bc7da6fb92ea1a27a1fa74c8791498e'),
       ('Oneida', 'Stampfer', 'ostampfer1@so-net.ne.jp', 'ef9c7b2373fd94cc7fa86b81d0501ba3ae7cd98a'),
       ('Elaine', 'Jonuzi', 'ejonuzi2@msu.edu', 'd014326a8d51f55d4a429ee7fa0166cc0a5a915f');

-- Insert fishData records
INSERT INTO fishData (fish_type, fish_length, user_id, date_caught)
VALUES ('Northern Pike', 33.1, 1, '2023-05-10'),
       ('Northern Pike', 35.95, 2, '2023-04-29'),
       ('Muskie', 43.63, 3, '2023-04-30');

-- Insert lakeData records
INSERT INTO lakeData (lake_name, city)
VALUES ('Lake Nokomis', 'Minneapolis'),
       ('Lake of the Isles', 'Minneapolis'),
       ('Lake Minnetonka', 'Minnetonka');