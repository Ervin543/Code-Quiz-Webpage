function printHighscores() {
    // either get scores from localstorage or set to empty array
   
    var score = localStorage.getItem ('score')
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    if (score) {
      var initials = prompt ('Enter Your Initials')
      highscores.push ({initials,score})
      localStorage.setItem ('highscores',JSON.stringify(highscores))
      window.localStorage.removeItem('score');
      highscores.sort(function (a, b) {
        return b.score - a.score;
      });
    
      
    }
    for (var i = 0; i < highscores.length; i += 1) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      // display on page
      var olEl = document.querySelector('#highscores');
      console.log (olEl)
      olEl.appendChild(liTag);
    }
    
  }
  
  function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.localStorage.removeItem('score');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  

