                (function(){
                  var roots=document.querySelectorAll('.bl:not([data-bl-init])');
                  Array.prototype.forEach.call(roots,initBucle);

                  function initBucle(root){
                    root.setAttribute('data-bl-init','1');
                    var n=5,i=0,phase='init',laps=0,timer=null;
                    var $=function(k){return root.querySelector('[data-r="'+k+'"]')};
                    var nEl=$('n'),nv=$('nv'),stepB=$('step'),playB=$('play');
                    var lines=[$('l0'),$('l1'),$('l2')];

                    function code(){lines[0].textContent='for (let i = 0; i < '+n+'; i++) {'}
                    function mark(k){for(var j=0;j<3;j++)lines[j].classList.toggle('bl-on',j===k)}
                    function say(t){$('say').textContent=t}
                    function chk(ok){
                      var c=$('chk');
                      if(ok===null){c.textContent='';c.className='bl-check';return}
                      c.textContent='i < '+n+' ?\n'+i+' < '+n+' → '+(ok?'sí':'no');
                      c.className='bl-check '+(ok?'bl-yes':'bl-no');
                    }

                    function reset(){
                      stop();i=0;phase='init';laps=0;code();mark(-1);chk(null);
                      $('iv').textContent='–';$('laps').innerHTML='';
                      $('out').textContent='';$('out').classList.remove('bl-final');
                      say('Prem «Pas a pas» o «Reproduir» per començar.');stepB.disabled=false;playB.disabled=false;
                    }

                    function step(){
                      if(phase==='init'){
                        i=0;$('iv').textContent=i;mark(0);
                        say('Inici: Creem la variable i i li donem el valor 0. Això només passa una vegada.');phase='check';
                      }else if(phase==='check'){
                        mark(0);var ok=i<n;chk(ok);
                        if(ok){say('Comprovem la condició: És certa, així que entrem al cos del bucle.');phase='body'}
                        else{say('La condició ja no es compleix. El bucle s\'acaba i el programa continua després de la }.');phase='done';mark(2)}
                      }else if(phase==='body'){
                        mark(1);laps++;
                        var d=document.createElement('div');d.className='bl-lap';d.textContent=i;$('laps').appendChild(d);
                        $('out').textContent='volta '+i+' feta';
                        say('Executem les instruccions del cos. Aquesta és la volta número '+laps+'.');phase='inc';
                      }else if(phase==='inc'){
                        mark(0);chk(null);i++;$('iv').textContent=i;
                        say('Final de la volta: i++ suma 1 a i. Ara i val '+i+' i tornem a comprovar la condició.');phase='check';
                      }
                      if(phase==='done'){
                        stop();stepB.disabled=true;playB.disabled=true;
                        $('out').textContent='Total: '+laps+' voltes.';$('out').classList.add('bl-final');
                      }
                    }

                    function stop(){if(timer){clearInterval(timer);timer=null}playB.textContent='Reproduir'}
                    function play(){
                      if(timer){stop();return}
                      playB.textContent='Atura';timer=setInterval(step,850);step();
                    }

                    nEl.addEventListener('input',function(){n=+nEl.value;nv.textContent=n;reset()});
                    stepB.addEventListener('click',function(){stop();step()});
                    playB.addEventListener('click',play);
                    $('reset').addEventListener('click',reset);
                    reset();
                  }
                })();
