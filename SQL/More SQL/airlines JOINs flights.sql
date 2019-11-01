use flightsdb;

-- Section 1

-- 1. A client is requesting that you create a query that will return the flight number, source airport, and destination airport for a specific named airline, e.g. `JetBlue Airways`. Create the query to test that it actually works as intended.
SELECT flight_no, source_airport, dest_airport
    FROM flights
    LEFT JOIN airlines
    ON flights.airline = airlines.id
    WHERE airlines.airline = 'JetBlue Airways'
    --solution sugests airlines.id...
    --because the fields need to match >.<
    --or HAVING
    -- GROUP BY
    -- ORDER BY
    ;

-- 2. You are creating an application where users can search for a specific source airport in the `flights` table that returns the airline name and the destination airport. Write the query that will be able to accomplish this.

SELECT airlines.airline, dest_airport
    FROM flights
    LEFT JOIN airlines
    ON flights.airline = airlines.id
    WHERE source_airport = 'ABY'
    --GROUP BY is not needed here

-- 3. Tanner's Travels, an international travel agency, is interested in contracting you to help them with their most popular destinations list per airline. Construct a query that returns the airline name, destination airport, and the count of the number of flights to that airport, sorted first by the airline, then by the number of flights in descending order.

--count
SELECT airlines.airline, dest_airport, count(*) AS Count
    FROM flights
    LEFT JOIN airlines
    ON flights.airline = airlines.id
    GROUP BY airlines.airline, dest_airport
    ORDER BY airlines.airline, Count DESC;


--Section 2

-- 1. Create a query to retrieve the flight number, airline, and source airport name for all flights for the airline, `Delta Airlines`.
SELECT flight_no, airlines.airline, name
    FROM flights
    LEFT JOIN airlines
      ON flights.airline = airlines.id
    LEFT JOIN airports
      ON flights.source_airport = airports.code
    WHERE airlines.airline = 'Delta Airlines';
    --source_airport needs to be the name not the code
    --there's a third table now lol >.<
    --why is it name and not airports.name? because it's unique. airline appears twice

-- 2. Create a query to retrieve the flight number, airline, and destination airport city for all flights with the source airport code, `AKK`.
SELECT flight_no, airlines.airline, city
    FROM flights
    LEFT JOIN airlines
      ON flights.airline = airlines.id
    LEFT JOIN airports
      ON flights.dest_airport = airports.code
    WHERE source_airport = 'AKK';

-- 3. Create a query to retrieve the flight number, airline, source
--  airport name, and destination airport name for all flights in our database.
SELECT flight_no, airlines.airline, a1.name AS source, a2.name AS dest
    FROM flights
    LEFT JOIN airlines
      ON flights.airline = airlines.airline
    LEFT JOIN airports
      AS source
      ON flights.source_airport = airports.code
    LEFT JOIN airports
      AS dest
      ON flights.dest_airport = airports.code
    --there's a couple difference here.. let's see what's what
    --ha! skipped a step in the aliasing
    --lines 68 and 71 should be the "a"s not source/dest
    