use flightsdb;

-- 1. A query which returns flight_no, source_airport, and dest_airport for all flights by a specific airline.
SELECT flight_no, source_airport, dest_airport
    FROM flights
    -- LEFT JOIN
    -- ON
    WHERE airline = 2;

-- 2. A query which searches for a specific flight and returns all data for it.
SELECT *
    FROM flights
    WHERE flight_no = 28;

-- 3. A query which returns all data contained within a specific id range.
SELECT *
    FROM flights
    WHERE id BETWEEN 10 and 20;

-- 4. A query which returns the first 20 flights ordered alphabetically by source_airport.
SELECT *
    FROM flights
    WHERE id <= 20 ORDER BY source_airport;

-- ## Challenge:

-- 5. A query which returns all source_airports which appear in our dataset more than once.
SELECT source_airport
    FROM flights
    GROUP BY source_airport
    HAVING COUNT(*) > 1;

-- 6. A query which returns all flights with a source_airport that begins with "C".

-- 7. A query which returns the top 20 dest_airport ordered based on how many times they appear in the dataset.