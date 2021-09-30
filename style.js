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
            "Points": "213.3",
            "Position": "2"
        },
        {
            "TeamID": "RHB003",
            "TeamName": "Thunder Cookie",
            "Points": "209.5",
            "Position": "3"
        },
        {
            "TeamID": "RHB005",
            "TeamName": "Gryffindor",
            "Points": "198",
            "Position": "4"
        },
        {
            "TeamID": "RHB024",
            "TeamName": "Thunder Trio",
            "Points": "193.9",
            "Position": "5"
        },
        {
            "TeamID": "RHA025",
            "TeamName": "Insidious ",
            "Points": "189.6",
            "Position": "6"
        },
        {
            "TeamID": "RHA007",
            "TeamName": "A.S.U",
            "Points": "184.3",
            "Position": "7"
        },
        {
            "TeamID": "RHA026",
            "TeamName": "SPARKLETS",
            "Points": "184.2",
            "Position": "8"
        },
        {
            "TeamID": "RHA019",
            "TeamName": "3 ACES",
            "Points": "182.8",
            "Position": "9"
        },
        {
            "TeamID": "RHA032",
            "TeamName": "FALCON",
            "Points": "172.3",
            "Position": "10"
        },
        {
            "TeamID": "RHA029",
            "TeamName": "Third Degree Burns",
            "Points": "169.9",
            "Position": "11"
        },
        {
            "TeamID": "RHB004",
            "TeamName": "Westleaf",
            "Points": "163.6",
            "Position": "12"
        },
        {
            "TeamID": "RHB011",
            "TeamName": "TEAM FRIES",
            "Points": "156.4",
            "Position": "13"
        },
        {
            "TeamID": "RHA017",
            "TeamName": "The Trinity",
            "Points": "144.8",
            "Position": "14"
        },
        {
            "TeamID": "RHA030",
            "TeamName": "JEM",
            "Points": "137.3",
            "Position": "15"
        },
        {
            "TeamID": "RHB025",
            "TeamName": "Mystery",
            "Points": "130.4",
            "Position": "16"
        },
        {
            "TeamID": "RHA031",
            "TeamName": "The Incredibles",
            "Points": "128.6",
            "Position": "17"
        },
        {
            "TeamID": "RHB014",
            "TeamName": "Maelstorm",
            "Points": "128.2",
            "Position": "18"
        },
        {
            "TeamID": "RHA011",
            "TeamName": "Knuckleheads",
            "Points": "119.2",
            "Position": "19"
        },
        {
            "TeamID": "RHA004",
            "TeamName": "Wanderlust minds",
            "Points": "117.7",
            "Position": "20"
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

