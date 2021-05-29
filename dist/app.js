"use strict";
var draw = function (img) {
    var canvas = document.getElementsByClassName('canvas');
    var ctx = canvas[0].getContext('2d');
    img.addEventListener('load', function (e) {
        ctx.drawImage(img, 50, 50, 50, 50);
    });
};
var SelectIcon = function () {
    var selectFileElement = document.getElementsByClassName('taste-icon-file');
    var _loop_1 = function (i) {
        selectFileElement[i].addEventListener('change', function (event) {
            var file = event.target.files[0];
            var img = document.getElementsByClassName('icon');
            console.log(file);
            var reader = new FileReader();
            reader.onload = function () {
                img[i].src = reader.result;
                draw(img[i]);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    };
    for (var i = 0; i < selectFileElement.length; i++) {
        _loop_1(i);
    }
};
var App = function () {
    SelectIcon();
};
App();
