let banner = document.querySelectorAll(".img");
let item = document.querySelectorAll(".item");
let next = e = z = n = 0;
let flag = true;
$(".itemCen,.imgText").hide();
for (let m = 0; m < item.length; m++) {
    $(`.item:nth-child(${m})`).on("click",function () {
        if (flag === false) {
            return 0;
        } else {
            flag = !flag;
            banner[n].classList.add("now");
            banner[m].classList.add("next");
            item[next].classList.add("itemText");
            banner[m].style.zIndex = z++;
            n = m;
            banner[m].addEventListener("animationend", function () {
                for (let i = 0; i < banner.length; i++) {
                    banner[i].classList.remove("next");
                    banner[i].classList.remove("now");
                    item[i].classList.remove("itemText");
                    flag = true;
                }
            });
            m = next;
        }
    });
}

let t = setInterval(move, 5000);

function move() {
    for (let i = 0; i < banner.length; i++) {
        banner[i].classList.remove("next");
        banner[i].classList.remove("now");
        item[i].classList.remove("itemText");
        $(`.item:nth-child(${i+1}) .itemCen`).hide();
        $(`.img:nth-child(${i+1}) .imgText`).slideUp();
    }
    if (next === banner.length) {
        next = 0;
    }
    banner[e].classList.add("now");
    banner[next].classList.add("next");
    item[next].classList.add("itemText");
    $(`.item:nth-child(${next+1}) .itemCen`).show();
    banner[next].style.zIndex = z++;
    e = next;
    next++;
}

$(".banner").mouseenter(function () {
    $(`.imgText`).slideDown();
    clearInterval(t);
});
$(".banner").mouseleave(function () {
    t = setInterval(move, 5000);
    $(".imgText").slideUp(1000);
});