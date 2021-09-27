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
            "Team ID": "RHB020",
            "Team Name": "The Eternals",
            "Points": "147.2",
            "Position": "2"
        },
        {
            "Team ID": "RHA029",
            "Team Name": "Third Degree Burns",
            "Points": "146.9",
            "Position": "3"
        },
        {
            "Team ID": "RHB003",
            "Team Name": "Thunder Cookie",
            "Points": "144.5",
            "Position": "4"
        },
        {
            "Team ID": "RHA007",
            "Team Name": "A.S.U",
            "Points": "141.3",
            "Position": "5"
        },
        {
            "Team ID": "RHB005",
            "Team Name": "Gryffindor",
            "Points": "141",
            "Position": "6"
        },
        {
            "Team ID": "RHB024",
            "Team Name": "Thunder Trio",
            "Points": "136.9",
            "Position": "7"
        },
        {
            "Team ID": "RHA026",
            "Team Name": "SPARKLETS",
            "Points": "135.4",
            "Position": "8"
        },
        {
            "Team ID": "RHA025",
            "Team Name": "Insidious ",
            "Points": "130.6",
            "Position": "9"
        },
        {
            "Team ID": "RHB011",
            "Team Name": "TEAM FRIES",
            "Points": "130.4",
            "Position": "10"
        },
        {
            "Team ID": "RHA032",
            "Team Name": "FALCON",
            "Points": "128",
            "Position": "11"
        },
        {
            "Team ID": "RHA019",
            "Team Name": "3 ACES",
            "Points": "126.8",
            "Position": "12"
        },
        {
            "Team ID": "RHB004",
            "Team Name": "Westleaf",
            "Points": "124.6",
            "Position": "13"
        },
        {
            "Team ID": "RHA030",
            "Team Name": "JEM",
            "Points": "115.3",
            "Position": "14"
        },
        {
            "Team ID": "RHB017",
            "Team Name": "RAA",
            "Points": "111.6",
            "Position": "15"
        },
        {
            "Team ID": "RHA011",
            "Team Name": "Knuckleheads",
            "Points": "111.2",
            "Position": "16"
        },
        {
            "Team ID": "RHB014",
            "Team Name": "Maelstorm",
            "Points": "109.2",
            "Position": "17"
        },
        {
            "Team ID": "RHB025",
            "Team Name": "Mystery",
            "Points": "103.4",
            "Position": "18"
        },
        {
            "Team ID": "RHA031",
            "Team Name": "The Incredibles",
            "Points": "92.4",
            "Position": "19"
        },
        {
            "Team ID": "RHA017",
            "Team Name": "The Trinity",
            "Points": "80",
            "Position": "20"
        },
        {
            "Team ID": "RHA008",
            "Team Name": "Trios",
            "Points": "78.4",
            "Position": "21"
        },
        {
            "Team ID": "RHA004",
            "Team Name": "Wanderlust minds",
            "Points": "74.7",
            "Position": "22"
        },
        {
            "Team ID": "RHB031",
            "Team Name": "Silverstone",
            "Points": "74",
            "Position": "23"
        },
        {
            "Team ID": "RHA006",
            "Team Name": "Dunder Mifflin",
            "Points": "64.3",
            "Position": "24"
        },
        {
            "Team ID": "RHB028",
            "Team Name": "Mighty three",
            "Points": "63.9",
            "Position": "25"
        },
        {
            "Team ID": "RHB001",
            "Team Name": "Dua",
            "Points": "63",
            "Position": "26"
        },
        {
            "Team ID": "RHA015",
            "Team Name": "MASH",
            "Points": "61",
            "Position": "27"
        },
        {
            "Team ID": "RHA020",
            "Team Name": "Vdg Flyers",
            "Points": "60.2",
            "Position": "28"
        },
        {
            "Team ID": "RHB030",
            "Team Name": "REGULATORS",
            "Points": "60",
            "Position": "29"
        },
        {
            "Team ID": "RHB032",
            "Team Name": "PHOENIX 5",
            "Points": "60",
            "Position": "30"
        },
        {
            "Team ID": "RHA010",
            "Team Name": "Bakhhod",
            "Points": "59.5",
            "Position": "31"
        },
        {
            "Team ID": "RHA016",
            "Team Name": "The Three Musketeers",
            "Points": "59",
            "Position": "32"
        },
        {
            "Team ID": "RHA003",
            "Team Name": "Dhamaal",
            "Points": "57",
            "Position": "33"
        },
        {
            "Team ID": "RHA012",
            "Team Name": "Team boatsters",
            "Points": "55.4",
            "Position": "34"
        },
        {
            "Team ID": "RHB033",
            "Team Name": "AZTECS",
            "Points": "53.2",
            "Position": "35"
        },
        {
            "Team ID": "RHA027",
            "Team Name": "Deep-T",
            "Points": "50.5",
            "Position": "36"
        },
        {
            "Team ID": "RHB026",
            "Team Name": "RESONANCE",
            "Points": "49.4",
            "Position": "37"
        },
        {
            "Team ID": "RHA009",
            "Team Name": "The three stooges",
            "Points": "48.3",
            "Position": "38"
        },
        {
            "Team ID": "RHA028",
            "Team Name": "Team Chaos",
            "Points": "48.3",
            "Position": "39"
        },
        {
            "Team ID": "RHA018",
            "Team Name": "Phoenix 1",
            "Points": "46",
            "Position": "40"
        },
        {
            "Team ID": "RHB006",
            "Team Name": "Phoenix 2",
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

