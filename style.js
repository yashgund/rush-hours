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
            "TeamName": "A.S.U",
            "TeamID": "RHA007",
            "Points": "17",
            "Position": "2"
        },
        {
            "TeamName": "Hunters003",
            "TeamID": "RHB002",
            "Points": "17",
            "Position": "3"
        },
        {
            "TeamName": "THUNDER TRIO",
            "TeamID": "RHB024",
            "Points": "17",
            "Position": "4"
        },
        {
            "TeamName": "THE TRINITY",
            "TeamID": "RHA017",
            "Points": "16",
            "Position": "5"
        },
        {
            "TeamName": "RINGMASTERS",
            "TeamID": "RHA014",
            "Points": "16",
            "Position": "6"
        },
        {
            "TeamName": "Maelstorm",
            "TeamID": "RHB014",
            "Points": "16",
            "Position": "7"
        },
        {
            "TeamName": "Phoenix 3",
            "TeamID": "RHB007",
            "Points": "16",
            "Position": "8"
        },
        {
            "TeamName": "BATTLE HAWKS",
            "TeamID": "RHB022",
            "Points": "16",
            "Position": "9"
        },
        {
            "TeamName": "Deep-T",
            "TeamID": "RHA027",
            "Points": "16",
            "Position": "10"
        },
        {
            "TeamName": "Thundercookies",
            "TeamID": "RHB003",
            "Points": "16",
            "Position": "11"
        },
        {
            "TeamName": "AMIGOS",
            "TeamID": "RHB009",
            "Points": "16",
            "Position": "12"
        },
        {
            "TeamName": "ENIGMA",
            "TeamID": "RHB023",
            "Points": "16",
            "Position": "13"
        },
        {
            "TeamName": "Insidious",
            "TeamID": "RHA025",
            "Points": "15",
            "Position": "14"
        },
        {
            "TeamName": "Westleaf",
            "TeamID": "RHB004",
            "Points": "15",
            "Position": "15"
        },
        {
            "TeamName": "THREE BUDS",
            "TeamID": "RHB008",
            "Points": "15",
            "Position": "16"
        },
        {
            "TeamName": "Desi boys",
            "TeamID": "RHA002",
            "Points": "15",
            "Position": "17"
        },
        {
            "TeamName": "Raa",
            "TeamID": "RHB017",
            "Points": "15",
            "Position": "18"
        },
        {
            "TeamName": "Phoenix 1",
            "TeamID": "RHA018",
            "Points": "15",
            "Position": "19"
        },
        {
            "TeamName": "Team Chaos",
            "TeamID": "RHA028",
            "Points": "15",
            "Position": "20"
        },
        {
            "TeamName": "FALCON",
            "TeamID": "RHA032",
            "Points": "15",
            "Position": "21"
        },
        {
            "TeamName": "Regulators",
            "TeamID": "RHB030",
            "Points": "15",
            "Position": "21"
        },
        {
            "TeamName": "THE ETERNALS",
            "TeamID": "RHB020",
            "Points": "15",
            "Position": "22"
        },
        {
            "TeamName": "The Three Musketeers",
            "TeamID": "RHA016",
            "Points": "15",
            "Position": "23"
        },
        {
            "TeamName": "GRYFFINDOR",
            "TeamID": "RHB005",
            "Points": "15",
            "Position": "24"
        },
        {
            "TeamName": "Weapon_X",
            "TeamID": "RHA005",
            "Points": "15",
            "Position": "25"
        },
        {
            "TeamName": "TRIOS",
            "TeamID": "RHA008",
            "Points": "14",
            "Position": "26"
        },
        {
            "TeamName": "Phoenix 5",
            "TeamID": "RHB032",
            "Points": "14",
            "Position": "27"
        },
        {
            "TeamName": "team JEM",
            "TeamID": "RHA030",
            "Points": "14",
            "Position": "28"
        },
        {
            "TeamName": "TEAM FRIES",
            "TeamID": "RHB011",
            "Points": "14",
            "Position": "29"
        },
        {
            "TeamName": "Team boatsters",
            "TeamID": "RHA012",
            "Points": "14",
            "Position": "30"
        },
        {
            "TeamName": "3 ACES",
            "TeamID": "RHA019",
            "Points": "14",
            "Position": "31"
        },
        {
            "TeamName": "KNUCKLEHEADS",
            "TeamID": "RHA011",
            "Points": "14",
            "Position": "32"
        },
        {
            "TeamName": "Wanderlust Minds",
            "TeamID": "RHA004",
            "Points": "14",
            "Position": "33"
        },
        {
            "TeamName": "Phoenix 2",
            "TeamID": "RHB006",
            "Points": "14",
            "Position": "34"
        },
        {
            "TeamName": "Ignitors",
            "TeamID": "RHB015",
            "Points": "14",
            "Position": "35"
        },
        {
            "TeamName": "THE INCREDIBLES",
            "TeamID": "RHA031",
            "Points": "14",
            "Position": "36"
        },
        {
            "TeamName": "The three stooges",
            "TeamID": "RHA009",
            "Points": "13",
            "Position": "37"
        },
        {
            "TeamName": "Dunder Mifflin",
            "TeamID": "RHA006",
            "Points": "13",
            "Position": "38"
        },
        {
            "TeamName": "Mighty Three",
            "TeamID": "RHB028",
            "Points": "13",
            "Position": "39"
        },
        {
            "TeamName": "Dhamaal",
            "TeamID": "RHA003",
            "Points": "13",
            "Position": "40"
        },
        {
            "TeamName": "SUPER_11",
            "TeamID": "RHA022",
            "Points": "13",
            "Position": "41"
        },
        {
            "TeamName": "DUA",
            "TeamID": "RHB001",
            "Points": "13",
            "Position": "42"
        },
        {
            "TeamName": "Illiterates",
            "TeamID": "RHB010",
            "Points": "13",
            "Position": "43"
        },
        {
            "TeamName": "Phoenix 4",
            "TeamID": "RHB029",
            "Points": "13",
            "Position": "44"
        },
        {
            "TeamName": "CHALLENGERS",
            "TeamID": "RHA023",
            "Points": "13",
            "Position": "45"
        },
        {
            "TeamName": "Mystery",
            "TeamID": "RHB025",
            "Points": "13",
            "Position": "46"
        },
        {
            "TeamName": "VDG FLYERS",
            "TeamID": "RHA020",
            "Points": "13",
            "Position": "47"
        },
        {
            "TeamName": "Kal Aana",
            "TeamID": "RHB012",
            "Points": "13",
            "Position": "48"
        },
        {
            "TeamName": "Mash",
            "TeamID": "RHA015",
            "Points": "12",
            "Position": "49"
        },
        {
            "TeamName": "Power puff",
            "TeamID": "RHA001",
            "Points": "12",
            "Position": "50"
        },
        {
            "TeamName": "TEAM SPECTACLEUR",
            "TeamID": "RHA013",
            "Points": "11",
            "Position": "51"
        },
        {
            "TeamName": "Trb",
            "TeamID": "RHB016",
            "Points": "11",
            "Position": "52"
        },
        {
            "TeamName": "SPARKLETS",
            "TeamID": "RHA026",
            "Points": "11",
            "Position": "53"
        },
        {
            "TeamName": "En-Vision The Future",
            "TeamID": "RHA021",
            "Points": "11",
            "Position": "54"
        },
        {
            "TeamName": "Silverstone",
            "TeamID": "RHB031",
            "Points": "11",
            "Position": "55"
        },
        {
            "TeamName": "AZTECS",
            "TeamID": "RHB033",
            "Points": "10",
            "Position": "56"
        },
        {
            "TeamName": "TEAM HP",
            "TeamID": "RHA033",
            "Points": "9",
            "Position": "57"
        },
        {
            "TeamName": "Goal diggers",
            "TeamID": "RHB027",
            "Points": "7",
            "Position": "58"
        },
        {
            "TeamName": "bakhod",
            "TeamID": "RHA010",
            "Points": "7",
            "Position": "59"
        },
        {
            "TeamName": "Team RCB",
            "TeamID": "RHB019",
            "Points": "0",
            "Position": "60"
        },
        {
            "TeamName": "Spirit",
            "TeamID": "RHB021",
            "Points": "0",
            "Position": "61"
        },
        {
            "TeamName": "RESONANCE",
            "TeamID": "RHB026",
            "Points": "0",
            "Position": "62"
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

