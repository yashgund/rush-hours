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

// tableRow.forEach(tableRow => {
//   tableRow.addEventListener("click", function () {
//     overlay.style.opacity = 0;
//     overlay.classList.add("is-open");
//     sidebar.classList.add("is-open");
//     setTimeout(() => {
//       overlay.style.opacity = 1;
//     }, 100);

//     // Sidebar content
//     const sidebarBody = document.querySelector(".sidebar__body");
//     sidebarBody.innerHTML = '';

//     const driverPlace = this.querySelector(".list__cell:nth-of-type(1) .list__value").innerHTML;
//     const driverName = this.querySelector(".list__cell:nth-of-type(2) .list__value").innerHTML;
//     const driverTeam = this.querySelector(".list__cell:nth-of-type(3) .list__value").innerHTML;
//     const driverPoints = this.querySelector(".list__cell:nth-of-type(4) .list__value").innerHTML;
//     const TeamImage = this.dataset.image;
//     const TeamLeader = this.dataset.leader;
//     const TeamMember1 = this.dataset.member1;
//     const TeamMember2 = this.dataset.member2;

//     const newDriver = document.createElement('div');
//     newDriver.classList = 'driver';

//     const driverContent = document.createElement('div');
//     driverContent.classList = 'driver__content';

//     const profile = document.createElement('div');
// 		profile.classList = 'driver__image';
// 		profile.style.backgroundImage = `url('${TeamImage}')`;
// 		newDriver.appendChild(profile);

//     const driverTitle = document.createElement('div');
//     driverTitle.classList = 'driver__title';
//     driverTitle.innerHTML = driverName;
//     driverContent.appendChild(driverTitle);

//     const driverInfo = document.createElement('div');
//     driverInfo.innerHTML = `
// 		<table class="driver__table">
// 			<tbody>
// 				<tr>
// 					<td><small>Team</small></td>
// 					<td>${driverTeam}</td>
// 				</tr>
// 				<tr>
// 					<td><small>Team Leader</small></td>
// 					<td>${TeamLeader}</td>
// 				</tr>
// 				<tr>
// 					<td><small>Team Member</small></td>
// 					<td>${TeamMember1}</td>
// 				</tr>
// 				<tr>
// 					<td><small> Team Member</small></td>
// 					<td>${TeamMember2}</td>
// 				</tr>
// 				<tr>
// 					<td><small>Points</small></td>
// 					<td>${driverPoints}</td>
// 				</tr>
// 			</tbody>
// 		</table>`;
//     driverContent.appendChild(driverInfo);

//     newDriver.appendChild(driverContent);
//     sidebarBody.appendChild(newDriver);

//   });
// });

// closeOverlayBtn.addEventListener("click", function () {
//   sidebarClose();
// });

// overlay.addEventListener("click", function () {
//   sidebarClose();
// });


let leaderboard = [
{
            "TeamName": "Knuckleheads",
            "TeamID": "RHA011",
            "Points": "71",
            "Position": "2"
        },
        {
            "TeamName": "Thunder Trio",
            "TeamID": "RHB024",
            "Points": "70.1",
            "Position": "3"
        },
        {
            "TeamName": "The Trinity",
            "TeamID": "RHA017",
            "Points": "70",
            "Position": "4"
        },
        {
            "TeamName": "TEAM FRIES",
            "TeamID": "RHB011",
            "Points": "69",
            "Position": "5"
        },
        {
            "TeamName": "Mystery",
            "TeamID": "RHB025",
            "Points": "68",
            "Position": "6"
        },
        {
            "TeamName": "RAA",
            "TeamID": "RHB017",
            "Points": "66.6",
            "Position": "7"
        },
        {
            "TeamName": "JEM",
            "TeamID": "RHA030",
            "Points": "66",
            "Position": "8"
        },
        {
            "TeamName": "Maelstorm",
            "TeamID": "RHB014",
            "Points": "66",
            "Position": "9"
        },
        {
            "TeamName": "The Eternals",
            "TeamID": "RHB020",
            "Points": "65",
            "Position": "10"
        },
        {
            "TeamName": "Third Degree Burns",
            "TeamID": "RHA029",
            "Points": "64.9",
            "Position": "11"
        },
        {
            "TeamName": "Trios",
            "TeamID": "RHA008",
            "Points": "64",
            "Position": "12"
        },
        {
            "TeamName": "3 ACES",
            "TeamID": "RHA019",
            "Points": "63.8",
            "Position": "13"
        },
        {
            "TeamName": "Dua",
            "TeamID": "RHB001",
            "Points": "63",
            "Position": "14"
        },
        {
            "TeamName": "Westleaf",
            "TeamID": "RHB004",
            "Points": "63",
            "Position": "15"
        },
        {
            "TeamName": "The Incredibles",
            "TeamID": "RHA031",
            "Points": "60",
            "Position": "16"
        },
        {
            "TeamName": "REGULATORS",
            "TeamID": "RHB030",
            "Points": "60",
            "Position": "17"
        },
        {
            "TeamName": "Bakhhod",
            "TeamID": "RHA010",
            "Points": "59.5",
            "Position": "18"
        },
        {
            "TeamName": "The Three Musketeers",
            "TeamID": "RHA016",
            "Points": "59",
            "Position": "19"
        },
        {
            "TeamName": "ThunderCookies",
            "TeamID": "RHB003",
            "Points": "58.5",
            "Position": "20"
        },
        {
            "TeamName": "Wanderlust minds",
            "TeamID": "RHA004",
            "Points": "57.6",
            "Position": "21"
        },
        {
            "TeamName": "Insidious ",
            "TeamID": "RHA025",
            "Points": "57.6",
            "Position": "22"
        },
        {
            "TeamName": "Dhamaal",
            "TeamID": "RHA003",
            "Points": "57",
            "Position": "23"
        },
        {
            "TeamName": "A.S.U",
            "TeamID": "RHA007",
            "Points": "57",
            "Position": "24"
        },
        {
            "TeamName": "Team boatsters",
            "TeamID": "RHA012",
            "Points": "55.4",
            "Position": "25"
        },
        {
            "TeamName": "SPARKLETS",
            "TeamID": "RHA026",
            "Points": "55.4",
            "Position": "26"
        },
        {
            "TeamName": "Gryffindor",
            "TeamID": "RHB005",
            "Points": "55",
            "Position": "27"
        },
        {
            "TeamName": "Mighty three",
            "TeamID": "RHB028",
            "Points": "53.9",
            "Position": "28"
        },
        {
            "TeamName": "AZTECS",
            "TeamID": "RHB033",
            "Points": "53.2",
            "Position": "29"
        },
        {
            "TeamName": "MASH",
            "TeamID": "RHA015",
            "Points": "53",
            "Position": "30"
        },
        {
            "TeamName": "FALCON",
            "TeamID": "RHA032",
            "Points": "52",
            "Position": "31"
        },
        {
            "TeamName": "PHOENIX 5",
            "TeamID": "RHB032",
            "Points": "52",
            "Position": "32"
        },
        {
            "TeamName": "Kal aana ",
            "TeamID": "RHB012",
            "Points": "51.1",
            "Position": "33"
        },
        {
            "TeamName": "The three stooges",
            "TeamID": "RHA009",
            "Points": "48.3",
            "Position": "34"
        },
        {
            "TeamName": "Team Chaos",
            "TeamID": "RHA028",
            "Points": "48.3",
            "Position": "35"
        },
        {
            "TeamName": "Phoenix 1",
            "TeamID": "RHA018",
            "Points": "46",
            "Position": "36"
        },
        {
            "TeamName": "Silverstone",
            "TeamID": "RHB031",
            "Points": "46",
            "Position": "37"
        },
        {
            "TeamName": "Dunder Mifflin",
            "TeamID": "RHA006",
            "Points": "40",
            "Position": "38"
        },
        {
            "TeamName": "Vdg Flyers",
            "TeamID": "RHA020",
            "Points": "39",
            "Position": "39"
        },
        {
            "TeamName": "Ringmasters",
            "TeamID": "RHA014",
            "Points": "37",
            "Position": "40"
        },
        {
            "TeamName": "Phoenix 2",
            "TeamID": "RHB006",
            "Points": "36.4",
            "Position": "41"
        },
        {
            "TeamName": "Phoenix 3",
            "TeamID": "RHB007",
            "Points": "33",
            "Position": "42"
        },
        {
            "TeamName": "RESONANCE",
            "TeamID": "RHB026",
            "Points": "33",
            "Position": "43"
        },
        {
            "TeamName": "THREE BUDS",
            "TeamID": "RHB008",
            "Points": "30",
            "Position": "44"
        },
        {
            "TeamName": "TEAM HP",
            "TeamID": "RHA033",
            "Points": "28.2",
            "Position": "45"
        },
        {
            "TeamName": "Phoenix 4",
            "TeamID": "RHB029",
            "Points": "28.1",
            "Position": "46"
        },
        {
            "TeamName": "Goal Diggers",
            "TeamID": "RHB027",
            "Points": "28",
            "Position": "47"
        },
        {
            "TeamName": "Power Puff",
            "TeamID": "RHA001",
            "Points": "27.2",
            "Position": "48"
        },
        {
            "TeamName": "Team RCB",
            "TeamID": "RHB019",
            "Points": "27.2",
            "Position": "49"
        },
        {
            "TeamName": "Deep-T",
            "TeamID": "RHA027",
            "Points": "26.5",
            "Position": "50"
        },
        {
            "TeamName": "Ignitors",
            "TeamID": "RHB015",
            "Points": "26",
            "Position": "51"
        },
        {
            "TeamName": "TRB",
            "TeamID": "RHB016",
            "Points": "26",
            "Position": "52"
        },
        {
            "TeamName": "Team Spectacleur",
            "TeamID": "RHA013",
            "Points": "22.5",
            "Position": "53"
        },
        {
            "TeamName": "Enigma",
            "TeamID": "RHB023",
            "Points": "18",
            "Position": "54"
        },
        {
            "TeamName": "hunters003",
            "TeamID": "RHB002",
            "Points": "17",
            "Position": "55"
        },
        {
            "TeamName": "AMIGOS",
            "TeamID": "RHB009",
            "Points": "16",
            "Position": "56"
        },
        {
            "TeamName": "Desi Boys",
            "TeamID": "RHA002",
            "Points": "15",
            "Position": "57"
        },
        {
            "TeamName": "Weapon_X",
            "TeamID": "RHA005",
            "Points": "15",
            "Position": "58"
        },
        {
            "TeamName": "SUPER_11",
            "TeamID": "RHA022",
            "Points": "13",
            "Position": "59"
        },
        {
            "TeamName": "Challengers",
            "TeamID": "RHA023",
            "Points": "13",
            "Position": "60"
        },
        {
            "TeamName": "Illiterates",
            "TeamID": "RHB010",
            "Points": "13",
            "Position": "61"
        },
        {
            "TeamName": "En-Vision The Future",
            "TeamID": "RHA021",
            "Points": "11",
            "Position": "62"
        },
        {
            "TeamName": "Spirit",
            "TeamID": "RHB021",
            "Points": "0",
            "Position": "63"
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

