import draw from './DrawImage';

const selectFileElement = document.getElementsByClassName('taste-icon-file');
for (let i = 0; i < selectFileElement.length; i++) {
  selectFileElement[i].addEventListener('change', (event: any) => {
    const file = event.target.files[0];
    const img: any = document.getElementsByClassName('icon');
    console.log(file);
    const reader = new FileReader();

    reader.onload = () => {
      img[i].src = reader.result;
      draw(img[i]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}
