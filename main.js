function createGame(player1, hour, player2) {
  return`
  <li>
    <img src="./assets/${player1}-icon.svg" alt="" />
    <strong> ${hour} </strong>
    <img src="./assets/${player2}-icon.svg" alt="" />
  </li>
  `
}
//
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.2;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
    `
}

document.querySelector("#cards").innerHTML = 
  createCard('24/11', 'Quinta', createGame("switzerland", "07:00", "cameroon") + createGame("brazil", "16:00", "serbia")
  ) +
  createCard('28/11', 'Segunda', createGame("brazil", "13:00", "switzerland") + createGame("uruguay", "16:00", "portugal")
  ) +
  createCard('02/12', 'Sexta', createGame("brazil", "16:00", "serbia")
  )
      