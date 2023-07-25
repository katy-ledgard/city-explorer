# Project City Explorer

**Author**: Katy Ledgard  
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
This project is part of the Tech Educators Full-Stack Bootcamp. This application will utilise LocationIQ's API so that a user can search for a city and see name of the location and a static map of the location they have searched for.

1. As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.

    - Given that a user enters a valid location in the input
    - When the user clicks the "Explore!" button
    - Then the latitude and longitude will be displayed on the page  
<br>
2. As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.

    - Given that a user enters a valid location in the input
    - When the user clicks the "Explore!" button
    - Then the map of the city is displayed on the page.
<br>
3. Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.
    - Given that a user does not enter a valid location (eg: empty string) in the input
    - When the user clicks the "Explore!" button
    - Then the user will receive an error message on the page and the data will not be rendered properly

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
This is a React App that uses JSX and Javascript. It utilises Axios and dotenv.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

24-07-2023 15:39 - Applicatication now has a GET route to find location data. User can search for a location and will get the name, longitute and lattitude rendered onto the page.

24-07-2023 15:59 - Application now has GET route to find location map. User will get a static image of the map of the location they have searched.



## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
[LocationIQ API](https://locationiq.com/)  
[Tech Educators](https://techeducators.co.uk/)

## Time Estimates
For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____