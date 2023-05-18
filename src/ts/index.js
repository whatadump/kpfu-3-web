document.addEventListener('DOMContentLoaded', async function(){
    //ANCHOR
    let anchor = document.getElementById("menu-toggle");
    let target = document.getElementById("menu-toggle-target");

    window.addEventListener('click', function(e){
        //@ts-ignore
        if (!target?.contains(e.target) && !anchor?.contains(e.target)){
            target?.classList.remove('shown');
        }
    })

    anchor?.addEventListener('click', function(e){
        target?.classList.toggle('shown');
    });


    //STATUS
    let heartbeat = await fetch('https://run.mocky.io/v3/30888f53-08a9-4175-9c9b-b7544cc49a98')
                .then((e) => e.json());

    let status_container = document.getElementById('status-text');

    setTimeout(function(){
        if (heartbeat.hasOwnProperty('status') && heartbeat.status == 'online'){
            status_container.innerHTML = 'В сети';
            status_container.style.backgroundColor = 'green';
        }else{
            status_container.innerHTML = 'Не в сети';
            status_container.style.backgroundColor = 'red';
        }
    }, 2000);

    document.getElementById('auto-year').innerHTML = new Date().getFullYear();

});



