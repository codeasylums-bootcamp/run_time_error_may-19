# run_time_error_may-19
Codeforces Stalker Website
Ip- 13.233.152.146
Team name-RunTime Error
Team Member- Utkarsh Koushik

Project description- 

The website takes user handle from the user in an input box and displays the details of the username given.
It shows a Card with the profile picture of the user along with its username, max rank acieved, number of friends, current rating and highest rating.
It also shows a Pie chart containing data about the submission status that is percentage of accepted submissions, wrong answers, run time errors, compilation error, skipped questions, challenged and also time limit excceded.
Below it also contains the a line graph of the rating of the user in contests. The contest id is placed along the X-axis and the rating after that contest is placed on the Y-axis.
If a invalid username is entered the page shows an error.

Sources used-

1. Bootstrap
2. Highcharts
3. Api of codeforces

Making of the project--

The project contains 3 files index.html, index.js, index.css. The html file contains all the links of the scripts and bootstrap.
After filling the input box and pressing enter or search button a function is called in the javascript file which adds card, pie chart and the line graph
The apis are hit through axios and the data is added to the card, pie chart and the graph by using simple methods such as looping.
If the username entered is incorrect then the function called gives an error page as .catch changes the inner html to a the error page.
