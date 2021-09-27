const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});


const tableRow = document.querySelectorAll(".list__row");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeOverlayBtn = document.querySelector(".button--close");

const sidebarClose = () => {
  sidebar.classList.remove("is-open");
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.classList.remove("is-open");
    overlay.style.opacity = 1;
  }, 300);
};



let leaderboard = [
{
            "TeamID": "RHB024",
            "TeamName": "Thunder Trio",
            "Points": "100.1",
            "Position": "2"
        },
        {
            "TeamID": "RHA011",
            "TeamName": "Knuckleheads",
            "Points": "98",
            "Position": "3"
        },
        {
            "TeamID": "RHB011",
            "TeamName": "TEAM FRIES",
            "Points": "98",
            "Position": "4"
        },
        {
            "TeamID": "RHA019",
            "TeamName": "3 ACES",
            "Points": "90.8",
            "Position": "5"
        },
        {
            "TeamID": "RHB020",
            "TeamName": "The Eternals",
            "Points": "90.2",
            "Position": "6"
        },
        {
            "TeamID": "RHA029",
            "TeamName": "Third Degree Burns",
            "Points": "88.9",
            "Position": "7"
        },
        {
            "TeamID": "RHB003",
            "TeamName": "ThunderCookies",
            "Points": "87.5",
            "Position": "8"
        },
        {
            "TeamID": "RHA007",
            "TeamName": "A.S.U",
            "Points": "86.3",
            "Position": "9"
        },
        {
            "TeamID": "RHA026",
            "TeamName": "SPARKLETS",
            "Points": "85.4",
            "Position": "10"
        },
        {
            "TeamID": "RHB005",
            "TeamName": "Gryffindor",
            "Points": "85",
            "Position": "11"
        },
        {
            "TeamID": "RHA025",
            "TeamName": "Insidious ",
            "Points": "81.6",
            "Position": "12"
        },
        {
            "TeamID": "RHA030",
            "TeamName": "JEM",
            "Points": "81.3",
            "Position": "13"
        },
        {
            "TeamID": "RHA017",
            "TeamName": "The Trinity",
            "Points": "80",
            "Position": "14"
        },
        {
            "TeamID": "RHB004",
            "TeamName": "Westleaf",
            "Points": "79",
            "Position": "15"
        },
        {
            "TeamID": "RHA008",
            "TeamName": "Trios",
            "Points": "78.4",
            "Position": "16"
        },
        {
            "TeamID": "RHB025",
            "TeamName": "Mystery",
            "Points": "77",
            "Position": "17"
        },
        {
            "TeamID": "RHB017",
            "TeamName": "RAA",
            "Points": "75.6",
            "Position": "18"
        },
        {
            "TeamID": "RHA004",
            "TeamName": "Wanderlust minds",
            "Points": "74.7",
            "Position": "19"
        },
        {
            "TeamID": "RHA032",
            "TeamName": "FALCON",
            "Points": "70",
            "Position": "20"
        },
        {
            "TeamID": "RHA031",
            "TeamName": "The Incredibles",
            "Points": "69",
            "Position": "21"
        },
        {
            "TeamID": "RHB014",
            "TeamName": "Maelstorm",
            "Points": "66",
            "Position": "22"
        },
        {
            "TeamID": "RHA006",
            "TeamName": "Dunder Mifflin",
            "Points": "64.3",
            "Position": "23"
        },
        {
            "TeamID": "RHB028",
            "TeamName": "Mighty three",
            "Points": "63.9",
            "Position": "24"
        },
        {
            "TeamID": "RHB001",
            "TeamName": "Dua",
            "Points": "63",
            "Position": "25"
        },
        {
            "TeamID": "RHA015",
            "TeamName": "MASH",
            "Points": "61",
            "Position": "26"
        },
        {
            "TeamID": "RHB030",
            "TeamName": "REGULATORS",
            "Points": "60",
            "Position": "27"
        },
        {
            "TeamID": "RHA010",
            "TeamName": "Bakhhod",
            "Points": "59.5",
            "Position": "28"
        },
        {
            "TeamID": "RHA016",
            "TeamName": "The Three Musketeers",
            "Points": "59",
            "Position": "29"
        },
        {
            "TeamID": "RHA003",
            "TeamName": "Dhamaal",
            "Points": "57",
            "Position": "30"
        },
        {
            "TeamID": "RHB031",
            "TeamName": "Silverstone",
            "Points": "56",
            "Position": "31"
        },
        {
            "TeamID": "RHB032",
            "TeamName": "PHOENIX 5",
            "Points": "56",
            "Position": "32"
        },
        {
            "TeamID": "RHA012",
            "TeamName": "Team boatsters",
            "Points": "55.4",
            "Position": "33"
        },
        {
            "TeamID": "RHB033",
            "TeamName": "AZTECS",
            "Points": "53.2",
            "Position": "34"
        },
        {
            "TeamID": "RHA020",
            "TeamName": "Vdg Flyers",
            "Points": "49",
            "Position": "35"
        },
        {
            "TeamID": "RHA009",
            "TeamName": "The three stooges",
            "Points": "48.3",
            "Position": "36"
        },
        {
            "TeamID": "RHA028",
            "TeamName": "Team Chaos",
            "Points": "48.3",
            "Position": "37"
        },
        {
            "TeamID": "RHA018",
            "TeamName": "Phoenix 1",
            "Points": "46",
            "Position": "38"
        },
        {
            "TeamID": "RHB006",
            "TeamName": "Phoenix 2",
            "Points": "45.4",
            "Position": "39"
        },
        {
            "TeamID": "RHB026",
            "TeamName": "RESONANCE",
            "Points": "43",
            "Position": "40"
        },
        {
            "TeamID": "RHA014",
            "TeamName": "Ringmasters",
            "Points": "37",
            "Position": "41"
        },
        {
            "TeamID": "RHB029",
            "TeamName": "Phoenix 4",
            "Points": "36.1",
            "Position": "42"
        },
        {
            "TeamID": "RHA027",
            "TeamName": "Deep-T",
            "Points": "35.5",
            "Position": "43"
        },
        {
            "TeamID": "RHB007",
            "TeamName": "Phoenix 3",
            "Points": "33",
            "Position": "44"
        },
        {
            "TeamID": "RHB008",
            "TeamName": "THREE BUDS",
            "Points": "30",
            "Position": "45"
        },
        {
            "TeamID": "RHA033",
            "TeamName": "TEAM HP",
            "Points": "28.2",
            "Position": "46"
        },
        {
            "TeamID": "RHB027",
            "TeamName": "Goal Diggers",
            "Points": "28",
            "Position": "47"
        },
        {
            "TeamID": "RHA001",
            "TeamName": "Power Puff",
            "Points": "27.2",
            "Position": "48"
        },
        {
            "TeamID": "RHB019",
            "TeamName": "Team RCB",
            "Points": "27.2",
            "Position": "49"
        },
        {
            "TeamID": "RHB015",
            "TeamName": "Ignitors",
            "Points": "26",
            "Position": "50"
        },
        {
            "TeamID": "RHB016",
            "TeamName": "TRB",
            "Points": "26",
            "Position": "51"
        },
        {
            "TeamID": "RHA013",
            "TeamName": "Team Spectacleur",
            "Points": "22.5",
            "Position": "52"
        }
]

  startpoint=document.getElementById("appen").getElementsByTagName('tbody')[0];

for(a in leaderboard){
  console.log(leaderboard[a]);

  

    newrow=document.createElement('tr');
    newrow.className="list__row";
    newrow.setAttribute("data-image", "./images/event1.jpeg");
    newrow.setAttribute("data-leader", leaderboard[a].Leader);
    newrow.setAttribute("data-member1", leaderboard[a].member_1);
    newrow.setAttribute("data-member2", leaderboard[a].member_2);

    

    tname=document.createElement('td');
    tname.className="list__cell";
    tspan=document.createElement('span');
    tspan.className="list__value";
    tspan.innerHTML=leaderboard[a].TeamName;

    ptag=document.createElement('small');
    ptag.className="list__label";
    ptag.innerHTML="Team Name";
    lbr=document.createElement('br');
    tspan.appendChild(lbr);
    tname.appendChild(tspan);
    tname.appendChild(ptag);
    // tname.appendChild(tspan);

    

    tid=document.createElement('td');
    tid.className="list__cell";
    tidspan=document.createElement('span');
    tidspan.className="list_value";
    tidspan.innerHTML=leaderboard[a].TeamID;

    ptag=document.createElement('small');
    ptag.className="list__label";
    ptag.innerHTML="Team ID";
    lbr=document.createElement('br');
    tidspan.appendChild(lbr);
    tid.appendChild(tidspan);
    tid.appendChild(ptag);
    // tid.appendChild(tidspan);

   

    points=document.createElement('td');
    points.className="list__cell";
    pspan=document.createElement('span');
    pspan.className="list__value";
    pspan.innerHTML=leaderboard[a].Points;
    ptag=document.createElement('small');
    ptag.className="list__label";
    ptag.innerHTML="Points";
    lbr=document.createElement('br');
    pspan.appendChild(lbr);
    points.appendChild(pspan);
    points.appendChild(ptag);

  
    
    rank=document.createElement('td');
    rank.className="list__cell";
    dspan=document.createElement('span');
    dspan.className="list__value";
    dspan.innerHTML=leaderboard[a].Position;
    rank.appendChild(dspan);


    
    
    newrow.appendChild(rank);
    newrow.appendChild(tname);
    newrow.appendChild(tid);
    newrow.appendChild(points);    
    
    startpoint.appendChild(newrow);

}

