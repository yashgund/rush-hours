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
            "TeamName": "RHB024",
            "TeamID": "Thunder Trio",
            "Points": "43.1",
            "Position": "1"
        },
        {
            "TeamName": "RHA017",
            "TeamID": "The Trinity",
            "Points": "43",
            "Position": "2"
        },
        {
            "TeamName": "RHB022",
            "TeamID": "Battle Hawks ",
            "Points": "41.2",
            "Position": "3"
        },
        {
            "TeamName": "RHA003",
            "TeamID": "Dhamaal",
            "Points": "41",
            "Position": "4"
        },
        {
            "TeamName": "RHA011",
            "TeamID": "Knuckleheads",
            "Points": "41",
            "Position": "5"
        },
        {
            "TeamName": "RHB025",
            "TeamID": "Mystery",
            "Points": "41",
            "Position": "6"
        },
        {
            "TeamName": "RHA006",
            "TeamID": "Dunder Mifflin",
            "Points": "40",
            "Position": "7"
        },
        {
            "TeamName": "RHA016",
            "TeamID": "The Three Musketeers",
            "Points": "40",
            "Position": "8"
        },
        {
            "TeamName": "RHA018",
            "TeamID": "Phoenix 1",
            "Points": "40",
            "Position": "9"
        },
        {
            "TeamName": "RHB020",
            "TeamID": "The Eternals",
            "Points": "40",
            "Position": "10"
        },
        {
            "TeamName": "RHB011",
            "TeamID": "TEAM FRIES",
            "Points": "39",
            "Position": "11"
        },
        {
            "TeamName": "RHB014",
            "TeamID": "Maelstorm",
            "Points": "38",
            "Position": "12"
        },
        {
            "TeamName": "RHA007",
            "TeamID": "A.S.U",
            "Points": "37",
            "Position": "13"
        },
        {
            "TeamName": "RHA014",
            "TeamID": "Ringmasters",
            "Points": "37",
            "Position": "14"
        },
        {
            "TeamName": "RHB031",
            "TeamID": "Silverstone",
            "Points": "37",
            "Position": "15"
        },
        {
            "TeamName": "RHB017",
            "TeamID": "RAA",
            "Points": "36.6",
            "Position": "16"
        },
        {
            "TeamName": "RHA012",
            "TeamID": "Team boatsters",
            "Points": "36.5",
            "Position": "17"
        },
        {
            "TeamName": "RHA030",
            "TeamID": "JEM",
            "Points": "36",
            "Position": "18"
        },
        {
            "TeamName": "RHA031",
            "TeamID": "The Incredibles",
            "Points": "36",
            "Position": "19"
        },
        {
            "TeamName": "RHB001",
            "TeamID": "Dua",
            "Points": "36",
            "Position": "20"
        },
        {
            "TeamName": "RHB004",
            "TeamID": "Westleaf",
            "Points": "36",
            "Position": "21"
        },
        {
            "TeamName": "RHA029",
            "TeamID": "Third Degree Burns",
            "Points": "35.9",
            "Position": "22"
        },
        {
            "TeamName": "RHA004",
            "TeamID": "Wanderlust minds",
            "Points": "35.6",
            "Position": "23"
        },
        {
            "TeamName": "RHB028",
            "TeamID": "Mighty three",
            "Points": "35",
            "Position": "24"
        },
        {
            "TeamName": "RHB030",
            "TeamID": "REGULATORS",
            "Points": "35",
            "Position": "25"
        },
        {
            "TeamName": "RHA008",
            "TeamID": "Trios",
            "Points": "34",
            "Position": "26"
        },
        {
            "TeamName": "RHA019",
            "TeamID": "3 ACES",
            "Points": "33.8",
            "Position": "27"
        },
        {
            "TeamName": "RHB007",
            "TeamID": "Phoenix 3",
            "Points": "33",
            "Position": "28"
        },
        {
            "TeamName": "RHA025",
            "TeamID": "Insidious ",
            "Points": "30.6",
            "Position": "29"
        },
        {
            "TeamName": "RHA020",
            "TeamID": "Vdg Flyers",
            "Points": "30",
            "Position": "30"
        },
        {
            "TeamName": "RHB006",
            "TeamID": "Phoenix 2",
            "Points": "30",
            "Position": "31"
        },
        {
            "TeamName": "RHA010",
            "TeamID": "Bakhhod",
            "Points": "29.5",
            "Position": "32"
        },
        {
            "TeamName": "RHA026",
            "TeamID": "SPARKLETS",
            "Points": "29.4",
            "Position": "33"
        },
        {
            "TeamName": "RHA028",
            "TeamID": "Team Chaos",
            "Points": "29.4",
            "Position": "34"
        },
        {
            "TeamName": "RHB033",
            "TeamID": "AZTECS",
            "Points": "29.2",
            "Position": "35"
        },
        {
            "TeamName": "RHB003",
            "TeamID": "ThunderCookies",
            "Points": "28.5",
            "Position": "36"
        },
        {
            "TeamName": "RHA033",
            "TeamID": "TEAM HP",
            "Points": "28.2",
            "Position": "37"
        },
        {
            "TeamName": "RHB005",
            "TeamID": "Gryffindor",
            "Points": "28",
            "Position": "38"
        },
        {
            "TeamName": "RHB012",
            "TeamID": "Kal aana ",
            "Points": "27.1",
            "Position": "39"
        },
        {
            "TeamName": "RHA027",
            "TeamID": "Deep-T",
            "Points": "26.5",
            "Position": "40"
        },
        {
            "TeamName": "RHB008",
            "TeamID": "THREE BUDS",
            "Points": "26",
            "Position": "41"
        },
        {
            "TeamName": "RHB015",
            "TeamID": "Ignitors",
            "Points": "26",
            "Position": "42"
        },
        {
            "TeamName": "RHA032",
            "TeamID": "FALCON",
            "Points": "25",
            "Position": "43"
        },
        {
            "TeamName": "RHB029",
            "TeamID": "Phoenix 4",
            "Points": "24.5",
            "Position": "44"
        },
        {
            "TeamName": "RHA009",
            "TeamID": "The three stooges",
            "Points": "24",
            "Position": "45"
        },
        {
            "TeamName": "RHA015",
            "TeamID": "MASH",
            "Points": "24",
            "Position": "46"
        },
        {
            "TeamName": "RHB032",
            "TeamID": "PHOENIX 5",
            "Points": "22",
            "Position": "47"
        },
        {
            "TeamName": "RHA001",
            "TeamID": "Power Puff",
            "Points": "20",
            "Position": "48"
        },
        {
            "TeamName": "RHB016",
            "TeamID": "TRB",
            "Points": "19",
            "Position": "49"
        },
        {
            "TeamName": "RHB019",
            "TeamID": "Team RCB",
            "Points": "18.2",
            "Position": "50"
        },
        {
            "TeamName": "RHB023",
            "TeamID": "Enigma",
            "Points": "18",
            "Position": "51"
        },
        {
            "TeamName": "RHB027",
            "TeamID": "Goal Diggers",
            "Points": "18",
            "Position": "52"
        },
        {
            "TeamName": "RHB002",
            "TeamID": "hunters003",
            "Points": "17",
            "Position": "53"
        },
        {
            "TeamName": "RHA013",
            "TeamID": "Team Spectacleur",
            "Points": "16",
            "Position": "54"
        },
        {
            "TeamName": "RHB009",
            "TeamID": "AMIGOS",
            "Points": "16",
            "Position": "55"
        },
        {
            "TeamName": "RHA002",
            "TeamID": "Desi Boys",
            "Points": "15",
            "Position": "56"
        },
        {
            "TeamName": "RHA005",
            "TeamID": "Weapon_X",
            "Points": "15",
            "Position": "57"
        },
        {
            "TeamName": "RHA022",
            "TeamID": "SUPER_11",
            "Points": "13",
            "Position": "58"
        },
        {
            "TeamName": "RHA023",
            "TeamID": "Challengers",
            "Points": "13",
            "Position": "59"
        },
        {
            "TeamName": "RHB010",
            "TeamID": "Illiterates",
            "Points": "13",
            "Position": "60"
        },
        {
            "TeamName": "RHA021",
            "TeamID": "En-Vision The Future",
            "Points": "11",
            "Position": "61"
        },
        {
            "TeamName": "RHB026",
            "TeamID": "RESONANCE",
            "Points": "6",
            "Position": "62"
        },
        {
            "TeamName": "RHB021",
            "TeamID": "Spirit",
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

