const imgGallery = () => {
  const gallery = '.js-gallery';
  const galleryThumbnails = document.querySelectorAll('.js-gallery-thumbnail');
  const galleryMainImg = '.js-gallery-main img';
  const classFadeIn = 'is-fade-in';
  const classFadeOut = 'is-fade-Out';
  const fadeTime = 200;

  galleryThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {
      const src = e.currentTarget.querySelector("img").getAttribute("src");
      const targetImg = e.currentTarget.closest(gallery).querySelectorAll(galleryMainImg);
      // console.log(src);

      targetImg.forEach(img => {
        // フェードアウト
        img.classList.add(classFadeOut);
        img.addEventListener('transitionend', () => {
          // フェードアウト完了後にsrcを変更して、フェードイン
          img.setAttribute('src', src);
          img.classList.remove(classFadeOut);
          img.classList.add(classFadeIn);
          setTimeout(() => {
            img.classList.remove(classFadeIn);
          }, fadeTime);
        });
      });

    });
  });
}

window.onload = () => {
  imgGallery();
}
