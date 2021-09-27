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
            "TeamID": "RHB020",
            "TeamName": "The Eternals",
            "Points": "147.2",
            "Position": "2"
        },
        {
            "TeamID": "RHA029",
            "TeamName": "Third Degree Burns",
            "Points": "146.9",
            "Position": "3"
        },
        {
            "TeamID": "RHB003",
            "TeamName": "Thunder Cookie",
            "Points": "144.5",
            "Position": "4"
        },
        {
            "TeamID": "RHA007",
            "TeamName": "A.S.U",
            "Points": "141.3",
            "Position": "5"
        },
        {
            "TeamID": "RHB005",
            "TeamName": "Gryffindor",
            "Points": "141",
            "Position": "6"
        },
        {
            "TeamID": "RHB024",
            "TeamName": "Thunder Trio",
            "Points": "136.9",
            "Position": "7"
        },
        {
            "TeamID": "RHA026",
            "TeamName": "SPARKLETS",
            "Points": "135.4",
            "Position": "8"
        },
        {
            "TeamID": "RHA025",
            "TeamName": "Insidious ",
            "Points": "130.6",
            "Position": "9"
        },
        {
            "TeamID": "RHB011",
            "TeamName": "TEAM FRIES",
            "Points": "130.4",
            "Position": "10"
        },
        {
            "TeamID": "RHA032",
            "TeamName": "FALCON",
            "Points": "128",
            "Position": "11"
        },
        {
            "TeamID": "RHA019",
            "TeamName": "3 ACES",
            "Points": "126.8",
            "Position": "12"
        },
        {
            "TeamID": "RHB004",
            "TeamName": "Westleaf",
            "Points": "124.6",
            "Position": "13"
        },
        {
            "TeamID": "RHA030",
            "TeamName": "JEM",
            "Points": "115.3",
            "Position": "14"
        },
        {
            "TeamID": "RHB017",
            "TeamName": "RAA",
            "Points": "111.6",
            "Position": "15"
        },
        {
            "TeamID": "RHA011",
            "TeamName": "Knuckleheads",
            "Points": "111.2",
            "Position": "16"
        },
        {
            "TeamID": "RHB014",
            "TeamName": "Maelstorm",
            "Points": "109.2",
            "Position": "17"
        },
        {
            "TeamID": "RHB025",
            "TeamName": "Mystery",
            "Points": "103.4",
            "Position": "18"
        },
        {
            "TeamID": "RHA031",
            "TeamName": "The Incredibles",
            "Points": "92.4",
            "Position": "19"
        },
        {
            "TeamID": "RHA017",
            "TeamName": "The Trinity",
            "Points": "80",
            "Position": "20"
        },
        {
            "TeamID": "RHA008",
            "TeamName": "Trios",
            "Points": "78.4",
            "Position": "21"
        },
        {
            "TeamID": "RHA004",
            "TeamName": "Wanderlust minds",
            "Points": "74.7",
            "Position": "22"
        },
        {
            "TeamID": "RHB031",
            "TeamName": "Silverstone",
            "Points": "74",
            "Position": "23"
        },
        {
            "TeamID": "RHA006",
            "TeamName": "Dunder Mifflin",
            "Points": "64.3",
            "Position": "24"
        },
        {
            "TeamID": "RHB028",
            "TeamName": "Mighty three",
            "Points": "63.9",
            "Position": "25"
        },
        {
            "TeamID": "RHB001",
            "TeamName": "Dua",
            "Points": "63",
            "Position": "26"
        },
        {
            "TeamID": "RHA015",
            "TeamName": "MASH",
            "Points": "61",
            "Position": "27"
        },
        {
            "TeamID": "RHA020",
            "TeamName": "Vdg Flyers",
            "Points": "60.2",
            "Position": "28"
        },
        {
            "TeamID": "RHB030",
            "TeamName": "REGULATORS",
            "Points": "60",
            "Position": "29"
        },
        {
            "TeamID": "RHB032",
            "TeamName": "PHOENIX 5",
            "Points": "60",
            "Position": "30"
        },
        {
            "TeamID": "RHA010",
            "TeamName": "Bakhhod",
            "Points": "59.5",
            "Position": "31"
        },
        {
            "TeamID": "RHA016",
            "TeamName": "The Three Musketeers",
            "Points": "59",
            "Position": "32"
        },
        {
            "TeamID": "RHA003",
            "TeamName": "Dhamaal",
            "Points": "57",
            "Position": "33"
        },
        {
            "TeamID": "RHA012",
            "TeamName": "Team boatsters",
            "Points": "55.4",
            "Position": "34"
        },
        {
            "TeamID": "RHB033",
            "TeamName": "AZTECS",
            "Points": "53.2",
            "Position": "35"
        },
        {
            "TeamID": "RHA027",
            "TeamName": "Deep-T",
            "Points": "50.5",
            "Position": "36"
        },
        {
            "TeamID": "RHB026",
            "TeamName": "RESONANCE",
            "Points": "49.4",
            "Position": "37"
        },
        {
            "TeamID": "RHA009",
            "TeamName": "The three stooges",
            "Points": "48.3",
            "Position": "38"
        },
        {
            "TeamID": "RHA028",
            "TeamName": "Team Chaos",
            "Points": "48.3",
            "Position": "39"
        },
        {
            "TeamID": "RHA018",
            "TeamName": "Phoenix 1",
            "Points": "46",
            "Position": "40"
        },
        {
            "TeamID": "RHB006",
            "TeamName": "Phoenix 2",
            "Points": "45.4",
            "Position": "41"
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

