/* function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
        
          callback(req.responseText);
      } else {
          console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
      console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}
 */

/* function abcd(reponse) {
  var repos = JSON.parse(reponse);
  console.log(repos)
}  */
/* 
const GitData = ajaxGet("https://api.github.com/users/HuguesRomain/repos?access_token=03abad12cf96b6ef86b56a52e6b5260e1c1b0776", (reponse) => {
  var repos = JSON.parse(reponse);
  var santa = repos[1].created_at;
  console.log(santa);

  machin(repos);
}); */

 const GitData = {
  GitTitle: {
   title: 'My last repositories',
    icon: 'repositories.png'
  },
 };



export default GitData; 