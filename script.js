document.addEventListener('DOMContentLoaded',function(){
  var p=new URLSearchParams(location.search);
  var ind=p.get('industry');
  var sel=document.querySelector('select[name=industry]');
  if(sel&&ind){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ind){sel.selectedIndex=i;}}}
  document.querySelectorAll('a[data-industry]').forEach(function(a){
    a.setAttribute('href','/contact/?industry='+a.getAttribute('data-industry'));
  });
});
