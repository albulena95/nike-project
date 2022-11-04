const changeImg = (id) => {
  switch (id) {
    case 0:
      document.getElementById("imgid").src = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/65bf4345-c14d-44f0-b74a-f7715025e53b/hyperfuel-24oz-water-bottle-ZNchhD.png";
      break;
    case 1:
      document.getElementById("imgid").src = "https://m.media-amazon.com/images/I/51u5iI4pGKL._SY355_.jpg"

      break;
    case 2:
      document.getElementById("imgid").src = "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw5b1e16e5/images/529445/Rebel_529445_blue_hi-res.jpg?sw=1000&sh=1000&sm=fit"

      break;

    case 3:
      document.getElementById("imgid").src = "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwa72dfa6a/images/529445/Rebel_529445_hi-res.jpg?sw=1000&sh=1000&sm=fit"

      break;
    default:
      document.getElementById("imgid").src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19258198-fc27-4303-8b44-48a7fa684268/court-vision-alta-womens-shoes-TbljXk.png"

      break;
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less"
    moreText.style.display = "inline"
  }

}

// addCart button

function SwitchButtons(button1) {
  var hideBtn, showBtn, menuToggle;
  if (button1 == 'button1') {
    menuToggle = 'menu2';
    showBtn = 'button2';
    hideBtn = 'button1';
  } else {
    menuToggle = 'menu3';
    showBtn = 'button1';
    hideBtn = 'button2';
  }

  document.getElementById(showBtn).style.display = 'none';
  document.getElementById(showBtn).style.display = '';


}

//   video



function myButonn() {
  var video = document.getElementById("myVideo");

  var btn = document.getElementById("idBtn")

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// shoes 
const shoeImg = (id) => {
  switch (id) {
      case 0:
          document.getElementById("shoeImage").src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/46081461-5341-42a8-be41-df94abb8c1fb/air-force-1-pixel-womens-shoe-3qrstC.png";
          break;
      case 1:
          document.getElementById("shoeImage").src= "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0e3b493d-8665-4c5a-9758-6b6e16def48f/air-force-1-pixel-womens-shoe-3qrstC.png"

          break;
      case 2:
          document.getElementById("shoeImage").src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bfe80b18-6756-433c-8945-7d957a2b25ea/air-force-1-pixel-womens-shoe-3qrstC.png"

          break;

      case 3:
          document.getElementById("shoeImage").src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7277263-511f-4355-b58e-5799f290c810/air-force-1-pixel-womens-shoe-3qrstC.png"

          break;
      default:
          document.getElementById("shoeImage").src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7db7404d-765d-4f31-8ff4-1d9e4b4fb39c/air-force-1-pixel-womens-shoe-3qrstC.png"

          break;
  }
}