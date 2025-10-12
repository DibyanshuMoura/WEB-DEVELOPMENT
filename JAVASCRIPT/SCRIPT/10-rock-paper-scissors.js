let randMove;
      let scoreCount = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        loss: 0,
        draw: 0,
      };
      document.querySelector(
        ".scoreCount"
      ).innerHTML = `Wins: ${scoreCount.win}, Losses: ${scoreCount.loss}, Ties: ${scoreCount.draw}`;

      /* 
      if (score === null) {
        score = {
          win: 0, 
          loss: 0,
          draw: 0
        }
      }
      */