'use strict';

id_feedfriend.onclick = gotoDonate;
id_forvolunteers.onclick = gotoDonate;

function gotoDonate() {
	location.href = './../donate/index.html';
};

id_submitinput.onclick = gotoValid;

function gotoValid() {
	id_inputemail.classList.remove('inputinvalid');
	id_submitinput.classList.remove('submitinvalid');
	if (id_inputemail.validity.valueMissing) {
		id_inputemail.classList.add('inputinvalid');
		id_submitinput.classList.add('submitinvalid');
	} else if (id_inputemail.validity.typeMismatch) {
		id_inputemail.classList.add('inputinvalid');
		id_submitinput.classList.add('submitinvalid');
	} else {
		return;
	};
};

const navList = document.querySelectorAll('.navigation');

navList.forEach((node) => node.addEventListener('click', eventLink));

function activeLink(nodas, target) {
	const nodelist = nodas.querySelectorAll('.navlink');
	
		for (let node of nodelist) {
			node.classList.remove('active');
			if (node.innerText === target.innerText) {
				node.classList.add('active');
			};
		};
};

function eventLink(event) {
	const nodelist = this.querySelectorAll('.navlink');
	
		for (let node of nodelist) {
			node.classList.remove('active');
		};
		event.target.classList.add('active');
		
		if (this.classList.contains('header-menu')) {
			return activeLink(navList[1], event.target);
		} else if (this.classList.contains('footer-menu')) {
			return activeLink(navList[0], event.target);
		};
};
