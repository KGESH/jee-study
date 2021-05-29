import draw from './DrawImage';
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
