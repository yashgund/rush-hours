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
            "TeamID": "RHA017",
            "TeamName": "The Trinity",
            "Points": "43",
            "Position": "2"
        },
        {
            "TeamID": "RHB022",
            "TeamName": "Battle Hawks ",
            "Points": "41.2",
            "Position": "3"
        },
        {
            "TeamID": "RHA003",
            "TeamName": "Dhamaal",
            "Points": "41",
            "Position": "4"
        },
        {
            "TeamID": "RHA011",
            "TeamName": "Knuckleheads",
            "Points": "41",
            "Position": "5"
        },
        {
            "TeamID": "RHB025",
            "TeamName": "Mystery",
            "Points": "41",
            "Position": "6"
        },
        {
            "TeamID": "RHA006",
            "TeamName": "Dunder Mifflin",
            "Points": "40",
            "Position": "7"
        },
        {
            "TeamID": "RHA016",
            "TeamName": "The Three Musketeers",
            "Points": "40",
            "Position": "8"
        },
        {
            "TeamID": "RHA018",
            "TeamName": "Phoenix 1",
            "Points": "40",
            "Position": "9"
        },
        {
            "TeamID": "RHB020",
            "TeamName": "The Eternals",
            "Points": "40",
            "Position": "10"
        },
        {
            "TeamID": "RHB011",
            "TeamName": "TEAM FRIES",
            "Points": "39",
            "Position": "11"
        },
        {
            "TeamID": "RHB014",
            "TeamName": "Maelstorm",
            "Points": "38",
            "Position": "12"
        },
        {
            "TeamID": "RHA007",
            "TeamName": "A.S.U",
            "Points": "37",
            "Position": "13"
        },
        {
            "TeamID": "RHA014",
            "TeamName": "Ringmasters",
            "Points": "37",
            "Position": "14"
        },
        {
            "TeamID": "RHB031",
            "TeamName": "Silverstone",
            "Points": "37",
            "Position": "15"
        },
        {
            "TeamID": "RHB017",
            "TeamName": "RAA",
            "Points": "36.6",
            "Position": "16"
        },
        {
            "TeamID": "RHA012",
            "TeamName": "Team boatsters",
            "Points": "36.5",
            "Position": "17"
        },
        {
            "TeamID": "RHA030",
            "TeamName": "JEM",
            "Points": "36",
            "Position": "18"
        },
        {
            "TeamID": "RHA031",
            "TeamName": "The Incredibles",
            "Points": "36",
            "Position": "19"
        },
        {
            "TeamID": "RHB001",
            "TeamName": "Dua",
            "Points": "36",
            "Position": "20"
        },
        {
            "TeamID": "RHB004",
            "TeamName": "Westleaf",
            "Points": "36",
            "Position": "21"
        },
        {
            "TeamID": "RHA029",
            "TeamName": "Third Degree Burns",
            "Points": "35.9",
            "Position": "22"
        },
        {
            "TeamID": "RHA004",
            "TeamName": "Wanderlust minds",
            "Points": "35.6",
            "Position": "23"
        },
        {
            "TeamID": "RHB028",
            "TeamName": "Mighty three",
            "Points": "35",
            "Position": "24"
        },
        {
            "TeamID": "RHB030",
            "TeamName": "REGULATORS",
            "Points": "35",
            "Position": "25"
        },
        {
            "TeamID": "RHA008",
            "TeamName": "Trios",
            "Points": "34",
            "Position": "26"
        },
        {
            "TeamID": "RHA019",
            "TeamName": "3 ACES",
            "Points": "33.8",
            "Position": "27"
        },
        {
            "TeamID": "RHB007",
            "TeamName": "Phoenix 3",
            "Points": "33",
            "Position": "28"
        },
        {
            "TeamID": "RHA025",
            "TeamName": "Insidious ",
            "Points": "30.6",
            "Position": "29"
        },
        {
            "TeamID": "RHA020",
            "TeamName": "Vdg Flyers",
            "Points": "30",
            "Position": "30"
        },
        {
            "TeamID": "RHB006",
            "TeamName": "Phoenix 2",
            "Points": "30",
            "Position": "31"
        },
        {
            "TeamID": "RHA010",
            "TeamName": "Bakhhod",
            "Points": "29.5",
            "Position": "32"
        },
        {
            "TeamID": "RHA026",
            "TeamName": "SPARKLETS",
            "Points": "29.4",
            "Position": "33"
        },
        {
            "TeamID": "RHA028",
            "TeamName": "Team Chaos",
            "Points": "29.4",
            "Position": "34"
        },
        {
            "TeamID": "RHB033",
            "TeamName": "AZTECS",
            "Points": "29.2",
            "Position": "35"
        },
        {
            "TeamID": "RHB003",
            "TeamName": "ThunderCookies",
            "Points": "28.5",
            "Position": "36"
        },
        {
            "TeamID": "RHA033",
            "TeamName": "TEAM HP",
            "Points": "28.2",
            "Position": "37"
        },
        {
            "TeamID": "RHB005",
            "TeamName": "Gryffindor",
            "Points": "28",
            "Position": "38"
        },
        {
            "TeamID": "RHB012",
            "TeamName": "Kal aana ",
            "Points": "27.1",
            "Position": "39"
        },
        {
            "TeamID": "RHA027",
            "TeamName": "Deep-T",
            "Points": "26.5",
            "Position": "40"
        },
        {
            "TeamID": "RHB008",
            "TeamName": "THREE BUDS",
            "Points": "26",
            "Position": "41"
        },
        {
            "TeamID": "RHB015",
            "TeamName": "Ignitors",
            "Points": "26",
            "Position": "42"
        },
        {
            "TeamID": "RHA032",
            "TeamName": "FALCON",
            "Points": "25",
            "Position": "43"
        },
        {
            "TeamID": "RHB029",
            "TeamName": "Phoenix 4",
            "Points": "24.5",
            "Position": "44"
        },
        {
            "TeamID": "RHA009",
            "TeamName": "The three stooges",
            "Points": "24",
            "Position": "45"
        },
        {
            "TeamID": "RHA015",
            "TeamName": "MASH",
            "Points": "24",
            "Position": "46"
        },
        {
            "TeamID": "RHB032",
            "TeamName": "PHOENIX 5",
            "Points": "22",
            "Position": "47"
        },
        {
            "TeamID": "RHA001",
            "TeamName": "Power Puff",
            "Points": "20",
            "Position": "48"
        },
        {
            "TeamID": "RHB016",
            "TeamName": "TRB",
            "Points": "19",
            "Position": "49"
        },
        {
            "TeamID": "RHB019",
            "TeamName": "Team RCB",
            "Points": "18.2",
            "Position": "50"
        },
        {
            "TeamID": "RHB023",
            "TeamName": "Enigma",
            "Points": "18",
            "Position": "51"
        },
        {
            "TeamID": "RHB027",
            "TeamName": "Goal Diggers",
            "Points": "18",
            "Position": "52"
        },
        {
            "TeamID": "RHB002",
            "TeamName": "hunters003",
            "Points": "17",
            "Position": "53"
        },
        {
            "TeamID": "RHA013",
            "TeamName": "Team Spectacleur",
            "Points": "16",
            "Position": "54"
        },
        {
            "TeamID": "RHB009",
            "TeamName": "AMIGOS",
            "Points": "16",
            "Position": "55"
        },
        {
            "TeamID": "RHA002",
            "TeamName": "Desi Boys",
            "Points": "15",
            "Position": "56"
        },
        {
            "TeamID": "RHA005",
            "TeamName": "Weapon_X",
            "Points": "15",
            "Position": "57"
        },
        {
            "TeamID": "RHA022",
            "TeamName": "SUPER_11",
            "Points": "13",
            "Position": "58"
        },
        {
            "TeamID": "RHA023",
            "TeamName": "Challengers",
            "Points": "13",
            "Position": "59"
        },
        {
            "TeamID": "RHB010",
            "TeamName": "Illiterates",
            "Points": "13",
            "Position": "60"
        },
        {
            "TeamID": "RHA021",
            "TeamName": "En-Vision The Future",
            "Points": "11",
            "Position": "61"
        },
        {
            "TeamID": "RHB026",
            "TeamName": "RESONANCE",
            "Points": "6",
            "Position": "62"
        },
        {
            "TeamID": "RHB021",
            "TeamName": "Spirit",
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

