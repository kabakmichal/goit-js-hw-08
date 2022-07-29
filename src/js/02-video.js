const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log('podlaczone');

// player.addEventListener('blur', () => {
//     console.log('dziala');
//     player
//       .getCurrentTime()
//       .then(function (seconds) {
//         // seconds = the current playback position
//         console.log(seconds);
//       })
//       .catch(function (error) {
//         // an error occurred
//       });
// })


///////////////////////////////////////////////////
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
////////////////////////////////
