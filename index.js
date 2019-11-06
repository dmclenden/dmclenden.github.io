
  document.addEventListener('DOMContentLoaded', function() {
     function renderMovies(movieArray) {
       var movieHTML = movieArray.map(function (currentMovie){
         return `
             <div class="movie">
                               <div class="card" style="width: 18rem;">
                                     <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                      <div class="card-body">
                                          <h5 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                                          <p class="card-text"> </p>
                                        
                                       </div>
                                      <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">ADD</a>
                               </div>
            </div>
            `;
        

     });
 
      
      return movieHTML.join('');
     }

// //  /// SHOWS MOVIE ON THE SCREEN/////
            //var content = document.getElementById('movies-container');
// //     //content.innerHTML = renderMovies(movieData);

  document.getElementById('search-form').addEventListener('submit', function(e){
         e.preventDefault()
         var content = document.getElementById('movies-container');
         content.innerHTML = renderMovies(movieData);
   })
  
 
 });


  function saveToWatchlist(imdbID) {
     var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    }); 

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
      if (watchlist == null) {
        console.log("hello")
     } else {
       console.log("hi")
     }
     watchlist = [];
     watchlist.push(movie);
     watchlistJSON = JSON.stringify(watchlist);
     localStorage.setItem('watchlist', watchlistJSON)
    

 }

