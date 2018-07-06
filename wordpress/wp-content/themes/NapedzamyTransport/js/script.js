// hamburger
function myFunction(x) {
 x.classList.toggle("change");
var menu = document.querySelectorAll(".menu");
console.log(menu);
    if (menu[0].style.display === "inline-block") {
    menu[0].style.display = 'none';}
    else {
    menu[0].style.display = 'inline-block';}
}
//cog
function rotateCogs() {
  var cogs = document.querySelectorAll(".cog");
  console.log(cogs);
  cogs[0].style.animation = "rspin 3s infinite";
  for(var i =1; i<= cogs.length; i++) {
    cogs[i].style.animation = "spin 3s infinite";
      console.log(cogs[i]);
  }

  }

document.addEventListener('click', function (){rotateCogs();});

// //typing
 document.addEventListener("DOMContentLoaded", function(event) {

    var MobilityIsAllAbout = document.querySelectorAll(".MobilityIsAllAbout");
    var Allabout = ['<h2>TWOJĄ PODRÓŻ</h2>','<h2>PODRÓŻNYCH</h2>','<h2>USŁUGI</h2>', '<h2>CZAS</h2>','<h2>ŚRODOWISKO</h2>', '<h2>STYL ŻYCIA</h2>', '<h2>BYCIE "SMART"</h2>', '<h2>BYCIE "GREEN"<h2>','<h2>ZRÓWNOWAŻONY ROZWÓJ</h2>','<h2>ZARZĄDZANIE OPARTE O FAKTY</h2>',
     '<h2>DOSTĘPNOŚĆ</h2>','<h2>PRZEPŁYW INFORMACJI</h2>','<h2>UX</h2>', '<h2>CZAS</h2>', '<h2>PIENIĄDZE</h2>', '<h2>CYFRYZACJĘ</h2>', '<h2>POSTĘP</h2','</h2>INTERMODALNOŚĆ</h2>' ];

function dodajSlowo(){
    var r = Math.floor(Math.random() * (Allabout.length-1));
    MobilityIsAllAbout[0].innerHTML = "w Mobilności chodzi o: \n" + Allabout[r];
    }
dodajSlowo();

document.addEventListener('mouseover', function (){dodajSlowo();});









//}



    //  var i =0;
    //  var j=0;
    // function pickWord(){
    //   for (i;i<=Allabout.length-1; i++) {
    //     return Allabout[i] }
    //   }
    //     var word = pickWord();
    //     console.log(word);
    //
    //    function Write(word) {
    //        for (var j=0; j<=word.length-1; j++) {
    //          function sign(){
    //          MobilityIsAllAbout[0].innerText += Allabout[i][j];
    //          console.log(MobilityIsAllAbout[0].innerText);
    //          setTimeout(sign(), 50);
    //
    //        }
    //     }
    //   }
//Write(word);
      });


//
//
//     for (i;i<=Allabout.length-1; i++) {
//         var lineTwo = '';
//         for (var j=0; j<=Allabout[i].length-1; j++){
//           lineTwo += Allabout[i][j];
//           MobilityIsAllAbout[0].innerText = lineOne + "\n" + lineTwo;
//         console.log(MobilityIsAllAbout[0].innerText);
//
//   }
//       //
//         // for (var j; j>=0; j--){
//         // lineTwo = lineTwo.slice(0,j);
//         // MobilityIsAllAbout[0].innerText = lineOne + "\n" + lineTwo;
//         // console.log(MobilityIsAllAbout[0].innerText);
//         }
//     // }
//
//
// //
//     // const items = document.querySelectorAll('.example')
//     // const lastIndex = items.length - 1
//     //
//     // highlightElements(items)
//     //
//     // function highlightElements (items, index = 0) {
//     //   const prevIndex = index === 0 ? lastIndex : index - 1
//     //   const nextIndex = index === lastIndex ? 0 : index + 1
//     //
//     //   items[index].classList.add('active')
//     //   items[prevIndex].classList.remove('active')
//     //
//     //   setTimeout(highlightElements, 1000, items, nextIndex)
//     // }
// //
//
//
//
//
// // console.log("DOM fully loaded and parsed");
// //           event.target.playVideo();
// //           player.mute();
//
//      });
//     // setInterval(typing(), 100);
