const draw = (img: any): void => {
  const canvas: any = document.getElementsByClassName('canvas');
  const ctx: any = canvas[0].getContext('2d');

  img.addEventListener('load', (e: any) => {
    ctx.drawImage(img, 100, 100, 100, 100);
  });
};

export default draw;
