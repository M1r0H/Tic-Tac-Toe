const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');
const btn = document.getElementById('btn');
const player_1 = document.getElementById('player_1');
const player_2 = document.getElementById('player_2');
const round = document.getElementById('round');
let roudValue = round.innerText;
let player = 'X';
const winIndex = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];
const arr = [];
function cellClick() {
	const data = [];
	arr.push(1);
	if (!this.innerHTML) {
		this.innerHTML = player;
	} else {
		alert('Ячейка занята');
		return;
	};
	for (const key in cell) {
		if (cell[key].innerHTML === player) {
			data.push(parseInt(key));
		};
	};
	if (checkWin(data)) {
		if (player === 'X') {
			player_1.innerText = +player_1.innerText + 1;
		} else {
			player_2.innerText = +player_2.innerText + 1;
		};
		roudValue = `Раунд ${+roudValue.split(' ')[roudValue.split.length - 1] + 1}`;
		alert('Выиграл: ' + player);
		clear();
		data.splice(0);
		arr.splice(0);
	} else {
		let draw = false;
		for (const key in cell) {
			if (arr.length === cell.length) {
				draw = true;
			} else;
		};
		if (draw) {
			alert('Ничья');
			clear();
			data.splice(0);
			arr.splice(0);
		};
	};
	player = player === 'X' ? 'O' : 'X';
};
const checkWin = (data) => {
	for (const key in winIndex) {
		let win = true;
		for (const keys in winIndex[key]) {
			const id = winIndex[key][keys] - 1;
			const ind = data.indexOf(id);
			if (ind === -1) {
				win = false;
			};
		};
		if (win) return true;
	};
	return false;
};
const clear = () => {
	for (const key in cell) {
		cell[key].innerHTML = '';
	};
	arr.splice(0);
	localStorage.setItem('seveResult', `${player_1.innerText} : ${player_2.innerText}`);
};
for (let i = 0; i < cell.length; i++) {
	cell[i].addEventListener('click', cellClick);
};