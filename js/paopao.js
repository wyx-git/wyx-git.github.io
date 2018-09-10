let date=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
let newPao = [];
let pLeft;
let pTop;
date.forEach(function (text) {
	let paoPao = document.createElement("div");
	do {
		pLeft = Math.floor(Math.random() * (window.innerWidth - 20));
		pTop = Math.floor(Math.random() * (window.innerHeight - 20));
		r = Math.floor(Math.random() * 4)+1;
	}
	while (checkpoint(pLeft, pTop));
	paoPao.style.cssText = `width:30px;height:30px;
    background: url("../wyx-github/img/paopao${r}.png") no-repeat center/100%;
        left:${pLeft}px;top:${pTop}px;position:absolute;z-index:99998;opacity:0.4;
            border-radius: 50%;`;
	paoPao.innerText = text;
	$("#container").append(paoPao);
	newPao.push({l: pLeft, t: pTop, e: paoPao});
	// setInterval(move,1000);
	// function move() {
	// 	newPao.forEach(function (ele) {
	// 		// ele.classList.add("active");
	// 		g = Math.floor(Math.random() * 4)+1;
	// 		let bac=ele.style;
	// 		bac=bac.replace(`${g}`,`${r}`);
	// 		ele.style.background=bac;
	// 	});
	// }
});

function checkpoint(l, t) {
	for (let i = 0; i < newPao.length; i++) {
		if (l < newPao[i].l + 5 && l > newPao[i].l - 5 && t < newPao[i].t + 3 && t > newPao[i].t - 3) {
			return true;
		}
	}
	return false;
}

// let maxPTop = window.innerHeight - 5;
for (let i = 0; i < newPao.length; i++) {
	let nLeft = newPao[i].t;
	setInterval(function () {
		if (nLeft < 0) {
			nLeft = $("#container").height();
		}
		nLeft -= speed;
		newPao[i].e.style.top = nLeft + "px";
	}, 5)
}