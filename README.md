# Happy Camper
> Mobile first application that allows users to search for campsites in California and save information for offline usage.

Search and overview
itinerary
Offline capability

Happy Camper is a mobile-based website that searches for

Disaster Tracker is a website that pulls disaster information from ReliefWeb and EarthquakeUSGS APIs. The right hand display uses the Google News and Twitter APIs, and clicking on the map markers filters the information to show related data.
![](demo1.gif)

Under the "Search By Location" toggle, the user is able to enter in a location and email to recieve information about nearby disasters.
![](demo2.gif)


## Installation

> 1. Clone repo
>    - `git clone https://github.com/Learning-Fuze/c718_findcampsiteinfo`
> 1. Change directory into the newly cloned repo
>    - `cd c718_findcampsiteinfo`
> 1. Install dependencies
>    - `npm install`
> 1. Copy data to MySQL database with queries from `dist/server/data/happycamp_rev1.sql`
> 1. Navigate to `dist/server/backendAPI/mysql_connect.php.config` and configure file with your mysql info as `mysql_connect.php`
> 1. Start dev server
>    - `npm start`
> 1. Open a browser and navigate to `localhost:3000`

## Authors

*Front End Developers*
Randy Dang [https://github.com/dangrt5](https://github.com/dangrt5)
Rachel Pan [https://github.com/rpan06/](https://github.com/rpan06/)

*Back End Developers*
David Ahn [https://github.com/d-ahn10](https://github.com/d-ahn10)
Hank Kim [https://github.com/citation0097](https://github.com/citation0097)
