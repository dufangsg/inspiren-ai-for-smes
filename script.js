document.addEventListener('DOMContentLoaded',function(){
  var p=new URLSearchParams(location.search);
  var ind=p.get('industry');
  var sel=document.querySelector('select[name=industry]');
  if(sel&&ind){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ind){sel.selectedIndex=i;}}}
  var form=document.querySelector('form[name=review-request]');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var body=new URLSearchParams(new FormData(form)).toString();
      fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body})
        .then(function(r){ if(r.ok){ location.href=form.getAttribute('data-thanks')||'/thanks/'; } else { throw new Error(r.status); } })
        .catch(function(){
          var v=function(n){var el=form.elements[n];return el?el.value:'';};
          var subj='Review request: '+v('industry');
          var lines=['Name: '+v('name'),'Company: '+v('company'),'Industry: '+v('industry'),'Staff: '+v('staff'),'Process: '+v('process'),'Phone: '+v('phone'),'Email: '+v('email'),'Language: '+v('language')];
          location.href='mailto:sales@inspirentech.co?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(lines.join('\n'));
        });
    });
  }
  document.querySelectorAll('a[data-industry]').forEach(function(a){
    var base=location.pathname.indexOf('/zh/')===0?'/zh':'';
    a.setAttribute('href',base+'/contact/?industry='+a.getAttribute('data-industry'));
  });
});
