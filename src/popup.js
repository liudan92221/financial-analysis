(function(){
  document.getElementById('btn').addEventListener('click', function() {
    console.log(window.chrome.runtime.id)
    window.chrome.tabs.create({
      url: 'chrome-extension://'+window.chrome.runtime.id+'/index.html'
    }, function(tab) {
      console.log(tab)
    })
  }, false)
})()