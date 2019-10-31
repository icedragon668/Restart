use flightsdb;

-- **Scenarios**

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

-- ## Challenge:

-- 3. Tanner's Travels, an international travel agency, is interested in contracting you to help them with their most popular destinations list per airline. Construct a query that returns the airline name, destination airport, and the count of the number of flights to that airport, sorted first by the airline, then by the number of flights in descending order.