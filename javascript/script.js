document.getElementById('enter').addEventListener('click', function () {
    // نمایش لودر
    document.getElementById('loader').style.display = 'flex';

    // بعد از 3 ثانیه به صفحه بعدی هدایت شود
    setTimeout(function () {
        window.location.href = 'menu.html'; // آدرس صفحه بعدی را وارد کنید
    }, 3000);
});