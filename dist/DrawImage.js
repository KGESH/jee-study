var draw = function (img) {
    var canvas = document.getElementsByClassName('canvas');
    var ctx = canvas[0].getContext('2d');
    img.addEventListener('load', function (e) {
        ctx.drawImage(img, 100, 100, 100, 100);
    });
};
export default draw;
