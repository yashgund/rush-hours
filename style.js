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
            "Team ID": "RHB024",
            "Team Name": "Thunder Trio",
            "Points": "100.1",
            "Position": "2"
        },
        {
            "Team ID": "RHA011",
            "Team Name": "Knuckleheads",
            "Points": "98",
            "Position": "3"
        },
        {
            "Team ID": "RHB011",
            "Team Name": "TEAM FRIES",
            "Points": "98",
            "Position": "4"
        },
        {
            "Team ID": "RHA019",
            "Team Name": "3 ACES",
            "Points": "90.8",
            "Position": "5"
        },
        {
            "Team ID": "RHB020",
            "Team Name": "The Eternals",
            "Points": "90.2",
            "Position": "6"
        },
        {
            "Team ID": "RHA029",
            "Team Name": "Third Degree Burns",
            "Points": "88.9",
            "Position": "7"
        },
        {
            "Team ID": "RHB003",
            "Team Name": "ThunderCookies",
            "Points": "87.5",
            "Position": "8"
        },
        {
            "Team ID": "RHA007",
            "Team Name": "A.S.U",
            "Points": "86.3",
            "Position": "9"
        },
        {
            "Team ID": "RHA026",
            "Team Name": "SPARKLETS",
            "Points": "85.4",
            "Position": "10"
        },
        {
            "Team ID": "RHB005",
            "Team Name": "Gryffindor",
            "Points": "85",
            "Position": "11"
        },
        {
            "Team ID": "RHA025",
            "Team Name": "Insidious ",
            "Points": "81.6",
            "Position": "12"
        },
        {
            "Team ID": "RHA030",
            "Team Name": "JEM",
            "Points": "81.3",
            "Position": "13"
        },
        {
            "Team ID": "RHA017",
            "Team Name": "The Trinity",
            "Points": "80",
            "Position": "14"
        },
        {
            "Team ID": "RHB004",
            "Team Name": "Westleaf",
            "Points": "79",
            "Position": "15"
        },
        {
            "Team ID": "RHA008",
            "Team Name": "Trios",
            "Points": "78.4",
            "Position": "16"
        },
        {
            "Team ID": "RHB025",
            "Team Name": "Mystery",
            "Points": "77",
            "Position": "17"
        },
        {
            "Team ID": "RHB017",
            "Team Name": "RAA",
            "Points": "75.6",
            "Position": "18"
        },
        {
            "Team ID": "RHA004",
            "Team Name": "Wanderlust minds",
            "Points": "74.7",
            "Position": "19"
        },
        {
            "Team ID": "RHA032",
            "Team Name": "FALCON",
            "Points": "70",
            "Position": "20"
        },
        {
            "Team ID": "RHA031",
            "Team Name": "The Incredibles",
            "Points": "69",
            "Position": "21"
        },
        {
            "Team ID": "RHB014",
            "Team Name": "Maelstorm",
            "Points": "66",
            "Position": "22"
        },
        {
            "Team ID": "RHA006",
            "Team Name": "Dunder Mifflin",
            "Points": "64.3",
            "Position": "23"
        },
        {
            "Team ID": "RHB028",
            "Team Name": "Mighty three",
            "Points": "63.9",
            "Position": "24"
        },
        {
            "Team ID": "RHB001",
            "Team Name": "Dua",
            "Points": "63",
            "Position": "25"
        },
        {
            "Team ID": "RHA015",
            "Team Name": "MASH",
            "Points": "61",
            "Position": "26"
        },
        {
            "Team ID": "RHB030",
            "Team Name": "REGULATORS",
            "Points": "60",
            "Position": "27"
        },
        {
            "Team ID": "RHA010",
            "Team Name": "Bakhhod",
            "Points": "59.5",
            "Position": "28"
        },
        {
            "Team ID": "RHA016",
            "Team Name": "The Three Musketeers",
            "Points": "59",
            "Position": "29"
        },
        {
            "Team ID": "RHA003",
            "Team Name": "Dhamaal",
            "Points": "57",
            "Position": "30"
        },
        {
            "Team ID": "RHB031",
            "Team Name": "Silverstone",
            "Points": "56",
            "Position": "31"
        },
        {
            "Team ID": "RHB032",
            "Team Name": "PHOENIX 5",
            "Points": "56",
            "Position": "32"
        },
        {
            "Team ID": "RHA012",
            "Team Name": "Team boatsters",
            "Points": "55.4",
            "Position": "33"
        },
        {
            "Team ID": "RHB033",
            "Team Name": "AZTECS",
            "Points": "53.2",
            "Position": "34"
        },
        {
            "Team ID": "RHA020",
            "Team Name": "Vdg Flyers",
            "Points": "49",
            "Position": "35"
        },
        {
            "Team ID": "RHA009",
            "Team Name": "The three stooges",
            "Points": "48.3",
            "Position": "36"
        },
        {
            "Team ID": "RHA028",
            "Team Name": "Team Chaos",
            "Points": "48.3",
            "Position": "37"
        },
        {
            "Team ID": "RHA018",
            "Team Name": "Phoenix 1",
            "Points": "46",
            "Position": "38"
        },
        {
            "Team ID": "RHB006",
            "Team Name": "Phoenix 2",
            "Points": "45.4",
            "Position": "39"
        },
        {
            "Team ID": "RHB026",
            "Team Name": "RESONANCE",
            "Points": "43",
            "Position": "40"
        },
        {
            "Team ID": "RHA014",
            "Team Name": "Ringmasters",
            "Points": "37",
            "Position": "41"
        },
        {
            "Team ID": "RHB029",
            "Team Name": "Phoenix 4",
            "Points": "36.1",
            "Position": "42"
        },
        {
            "Team ID": "RHA027",
            "Team Name": "Deep-T",
            "Points": "35.5",
            "Position": "43"
        },
        {
            "Team ID": "RHB007",
            "Team Name": "Phoenix 3",
            "Points": "33",
            "Position": "44"
        },
        {
            "Team ID": "RHB008",
            "Team Name": "THREE BUDS",
            "Points": "30",
            "Position": "45"
        },
        {
            "Team ID": "RHA033",
            "Team Name": "TEAM HP",
            "Points": "28.2",
            "Position": "46"
        },
        {
            "Team ID": "RHB027",
            "Team Name": "Goal Diggers",
            "Points": "28",
            "Position": "47"
        },
        {
            "Team ID": "RHA001",
            "Team Name": "Power Puff",
            "Points": "27.2",
            "Position": "48"
        },
        {
            "Team ID": "RHB019",
            "Team Name": "Team RCB",
            "Points": "27.2",
            "Position": "49"
        },
        {
            "Team ID": "RHB015",
            "Team Name": "Ignitors",
            "Points": "26",
            "Position": "50"
        },
        {
            "Team ID": "RHB016",
            "Team Name": "TRB",
            "Points": "26",
            "Position": "51"
        },
        {
            "Team ID": "RHA013",
            "Team Name": "Team Spectacleur",
            "Points": "22.5",
            "Position": "52"
        },
        {
            "Team ID": "RHB023",
            "Team Name": "Enigma",
            "Points": "18",
            "Position": "53"
        },
        {
            "Team ID": "RHB002",
            "Team Name": "hunters003",
            "Points": "17",
            "Position": "54"
        },
        {
            "Team ID": "RHB009",
            "Team Name": "AMIGOS",
            "Points": "16",
            "Position": "55"
        },
        {
            "Team ID": "RHA002",
            "Team Name": "Desi Boys",
            "Points": "15",
            "Position": "56"
        },
        {
            "Team ID": "RHA005",
            "Team Name": "Weapon_X",
            "Points": "15",
            "Position": "57"
        },
        {
            "Team ID": "RHA022",
            "Team Name": "SUPER_11",
            "Points": "13",
            "Position": "58"
        },
        {
            "Team ID": "RHA023",
            "Team Name": "Challengers",
            "Points": "13",
            "Position": "59"
        },
        {
            "Team ID": "RHB010",
            "Team Name": "Illiterates",
            "Points": "13",
            "Position": "60"
        },
        {
            "Team ID": "RHB012",
            "Team Name": "Kal aana ",
            "Points": "13",
            "Position": "61"
        },
        {
            "Team ID": "RHA021",
            "Team Name": "En-Vision The Future",
            "Points": "11",
            "Position": "62"
        },
        {
            "Team ID": "RHB021",
            "Team Name": "Spirit",
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

