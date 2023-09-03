// Português
$(".br").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> Sobre');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Criar Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> Ver Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Comunidade');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Página Principal');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Sair');
    // About
    $("#title-about").text('Criando & Visualizando um Combo')
    $("#introduction").text('Aqui você pode criar combos para si mesmo e compartilhá-los com pessoas e também, com uma comunidade, você pode procurar por combos e ideias interessantes, então certifique-se de acompanhar os novos combos!');
    $("#preview-about").html('<p id="preview-about">Crie um Combo clicando em "<span>Criar Combo</span>" e enquanto criando um combo, você pode: Selecionar qualquer <span>Fruta</span>, <span>Estilo de Luta</span>, <span>Espada</span>, <span>Arma</span> e junto com isso, é possivel nomear o combo e inserir uma descrição(max 14). Depois do processo da criação de combo, em <span>Visualizar Combo</span> você pode administrar seu combo com três opções, nas quais são: Deletar(para deletar seu combo), Editar Combo e Visualizar Combo. Na opção de Editar Combo, você pode fazer mudanças em tudo e em Visualizar Combo você pode apenas observar o combo. Também depois de criar seu combo, o combo fica visível na opção <span>Communidade</span>, em Comunidade você pode pesquisar por qualquer combo que já foi criado.</p>')
    // Things to Toggle
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en change-fr change-kr");
    $(".language-selected").addClass("change-br");

});

// English
