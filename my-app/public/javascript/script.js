document.getElementById('enter').addEventListener('click', function () {
    document.getElementById('loader').style.display = 'flex';

    setTimeout(function () {
        window.location.href = 'menu.html';
    }, 3000);
});
/*click on the  Opportunities*/
const clickOpp = document.getElementById('employee');
const text = document.querySelector('.jobcontainer');

function opportunities() {
    clickOpp.addEventListener("click", function () {
        text.style.display = 'block';
    });
}
opportunities();
