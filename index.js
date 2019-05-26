var ht;
var p;
function fun(){
    console.log("inside")
    document.getElementById('card1').innerHTML=`
        <div class="row">
            <div class="col-lg-3" >
                <div class="card">
                    <div id="img">
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">User Info</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item active" id="l1">Username: </li>
                            <li class="list-group-item" id="l2">Current Rating: </li>
                            <li class="list-group-item" id="l3">Max Rating: </li>
                            <li class="list-group-item" id="l4">Max Rank: </li>
                            <li class="list-group-item" id="l5">No. of friends: </li>
                        </ul>
                </div>
                </div>
                <div class="col-lg-9" id="containers" >
                </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-12" id="container2"  ></div>
        </div>
        <br><br>
        <div style="margin-left: 45%"> By: Utkarsh Koushik</div>
    `



            document.getElementById('l1').innerHTML='Username: ';
            document.getElementById('l2').innerHTML='Current Rating: ';
            document.getElementById('l3').innerHTML='Max Rating: ';
            document.getElementById('l4').innerHTML='Max Rank: ';
            document.getElementById('l5').innerHTML='No. of friends: ';

 p=document.getElementById('input').value;
 console.log(p);
ht= "http://codeforces.com/api/user.info?handles=" + p;



axios.get(ht)
        .then((response) => {
            var x=response.data.result[0].handle;
            var y=response.data.result[0].rating;
            var z=response.data.result[0].maxRating;
            var a=response.data.result[0].maxRank;
            var b=response.data.result[0].titlePhoto;
            var c=response.data.result[0].friendOfCount;
            b="http:"+b;
            document.getElementById('l1').innerHTML+=x;
            document.getElementById('l2').innerHTML+=y;
            document.getElementById('l3').innerHTML+=z;
            document.getElementById('l4').innerHTML+=a;
            document.getElementById('img').innerHTML= `<img src="${b}" class="card-img-top" alt="Image not available">`;
            document.getElementById('l5').innerHTML+=c;

            
            
            
    })
        
        
        .catch((err) => {
            document.getElementById('body').innerHTML=`<div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                
            </div>
        </div>`
        })

        
        pt="http://codeforces.com/api/user.rating?handle="+p;
        axios.get(pt)
        .then((response) => {
        Highcharts.chart('container2', {

            title: {
                text: 'Rating'
            },
        
            subtitle: {
                text: 'Codeforces'
            },
        
            yAxis: {
                title: {
                    
                    text: 'Rating'
                }
            },

            xAxis: {
                title: {
                    
                    text: 'Contest Id'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Rating',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    var siz=response.data.result.length
                    console.log(siz);
                    for (i = 0; i < siz; i += 1) {
                        data.push([
                            response.data.result[i].contestId,
                            response.data.result[i].newRating
                        ]);
                    }
                    return data;
                }())
            }, ],


        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });})

        .catch((err) => {
            document.getElementById('body').innerHTML=`<div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                
            </div>
        </div>`
        })
    
        var pi="http://codeforces.com/api/user.status?handle=" + p;
        axios.get(pi)
        .then((response) => {
            var sizee=response.data.result.length
            var wa=0;
            var ok=0;
            var tle=0;
            var chal=0;
            var ski=0;
            var run=0;
            var come=0;
            for(var l=0;l<sizee;l++)
            {
                if(response.data.result[l].verdict==="OK")
                {ok++;}
                else if(response.data.result[l].verdict==="WRONG_ANSWER")
                {wa++;}
                else if(response.data.result[l].verdict==="TIME_LIMIT_EXCEEDED")
                {
                    tle++;
                }
                else if (response.data.result[l].verdict==="CHALLENGED")
                {chal++;}
                else if(response.data.result[l].verdict==="SKIPPED")
                {ski++;}
                else if(response.data.result[l].verdict==="RUNTIME_ERROR")
                {run++;}
                else if(response.data.result[l].verdict==="COMPILATION_ERROR")
                {come++}
            }

            
            
            Highcharts.chart('containers', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Submission status'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
        



            series: [{
                name: 'Submission status',
                
                data:
                 [
                    { name: 'Accepted', y: ok },
                    { name: 'Wrong answer', y: wa },
                    { name: 'TLE', y: tle },
                    { name: 'Challenged', y: chal },
                    { name: 'Skipped', y: ski },
                    { name: 'Runtime', y: run },
                    { name: 'Compilation error', y: come },
                ],
            }]
        });})

        .catch((err) => {
            document.getElementById('body').innerHTML=`<div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                
            </div>
        </div>`
        })
    
    
    
    
    
    }


