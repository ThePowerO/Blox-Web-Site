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
    $("#introduction").text('Aqui você pode criar combos para si mesmo e compartilhá-los com pessoas e também, com uma comunidade, você pode procurar por combos e ideias interessantes, então certifique-se de acompanhar os novos combos!');
    $("#title-about").text('Criando & Visualizando um Combo')
    $("#preview-about").html('<p id="preview-about">Crie um Combo clicando em "<span>Criar Combo</span>" e enquanto criando um combo, você pode: Selecionar qualquer <span>Fruta</span>, <span>Estilo de Luta</span>, <span>Espada</span>, <span>Arma</span> e junto com isso, é possivel nomear o combo e inserir uma descrição(max 14). Depois do processo da criação de combo, em <span>Visualizar Combo</span> você pode administrar seu combo com três opções, nas quais são: Deletar(para deletar seu combo), Editar Combo e Visualizar Combo. Na opção de Editar Combo, você pode fazer mudanças em tudo e em Visualizar Combo você pode apenas observar o combo. Também depois de criar seu combo, o combo fica visível na opção <span>Communidade</span>, em Comunidade você pode pesquisar por qualquer combo que já foi criado.</p>')
    // Things to Toggle
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en change-fr change-kr");
    $(".language-selected").addClass("change-br");
    
});

// English
$(".en").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> About');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Create Your Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> View Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Community');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Main Page');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Log Out');
    //About
    $("#introduction").text('Here you can create combos for yourself and share it with peoples and also, with a community, you can look for interesting combos and ideas, therefore make sure to keep up with new combos!');
    $("#title-about").text('Criando & Visualizando um Combo')
    $("#preview-about").html('<p id="preview-about">Create a combo by clicking on "<span>Create Your Combo</span>" and when creating a combo you can: pick any <span>Fruit</span>, <span>Fighting Style</span>, <span>Sword</span>, <span>Gun</span> and along with it, its possible to name the combo and insert a description about the combo(max 14). After the process of the combo creation, in the "<span>View Combo</span>" you can manage your combo with three options which they are: Delete(to delete your combo), Edit Combo and View combo. In the Edit Combo option, you can make changes on everything and in the View Combo option you just see. Also after you create your combo, it is visible in the <span>Community</span> option, in it you can search for any combo that has been created.</p>')
    // Things to Toggle
    $(".language-selected").text("en-US");
    $(".language-selected").removeClass("change-br change-fr change-kr");
    $(".language-selected").addClass("change-en");
    // Get Started
    $(".get-started").text("Get Started");
});

// Français
$(".fr").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> À Propos');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Créer Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> Voir Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Communauté');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Page Principale');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Sortir');
    //About
    $("#introduction").text('Ici tu peux créer des combo pour soi-même et partagez-le avec les gens e aussi, avec un communauté, tu peux trouver pour les combo et les idées intéressants, alors assurez-vous de accompagner les nouveaux combos!');
    $("#title-about").text('Criando & Visualizando um Combo')
    $("#preview-about").html('<p id="preview-about">Crée un combo cliquant sur "<span>Créer Combo</span>" el lorsque tu cree un combo tu peux: sélécionez quelque <span>Fruit</span>, <span>Style de Combat</span>, <span>Épée</span>, <span>Arme</span> et avec ça, cest possible nommer le combo et ecrire un description du combo(max 14). Après du processus du creation du le combo, dans le "<span>Voir Combo</span>" tu peux administrer votre combo avec troi choix quils sont: Supprimer(pour supprimer ton combo), Éditer Combo et Voir Combo. Dans le choix Éditer Combo , tu peux rendre changements sur tout et dans le choix Voir Combo tu vois juste. Aussi apré tu crée votre combo, cest visible dans la choix <span>Communauté</span>, dans Communauté tu peux chercher pour quelque combo qui été crée.</p>')    // Things to Toggle
    $(".language-selected").text("FR");
    $(".language-selected").removeClass("change-br change-en change-kr");
    $(".language-selected").addClass("change-fr");
    // Get Started
    $(".get-started").text("Commencer");
});

// 한국어
$(".kr").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> 정보');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> 콤보 만들기');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> 콤보 보기');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> 커뮤니티');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> 메인 페이지');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> 로그 아웃');
    //About
    $("#introduction").text('여기서는 자신을 위한 콤보를 만들고 공유할 수 있으며, 또한 커뮤니티와 함께 새로운 콤보를 찾을 수도 있으니, 새로운 콤보를 확인해 보세요!');
    $("#title-about").text('콤보 만들기 및 확인하기')
    $("#preview-about").html('<p id="preview-about">"<span>콤보 만들기</span>" 를 클릭하여 콤보를 만들고 콤보를 만드는 동안 다음과 같은 작업을 수행할 수 있습니다. 어떤 <span>과일</span>, <span>전투 스타일</span>, <span>검</span>, <span>무기</span>를 선택하고 이와 함께 콤보에 이름을 붙이고 최대 14자의 설명을 추가할 수 있습니다. 콤보 생성 프로세스가 완료된 후에는 <span>콤보 보기</span>에서 콤보를 관리할 수 있는 세 가지 옵션이 있습니다. 이 옵션은 <span>삭제</span> (콤보 삭제), <span>콤보 수정</span> 및 <span>콤보 보기</span>입니다. <span>콤보 수정</span> 옵션에서는 모든 내용을 변경할 수 있고 <span>콤보 보기</span> 옵션에서는 콤보를 단순히 확인할 수 있습니다. 또한 콤보를 만든 후에는 해당 콤보가 <span>커뮤니티</span> 옵션에서 표시되며, <span>커뮤니티</span>에서는 이미 만들어진 모든 콤보를 검색할 수 있습니다.</p>')
    // Things to Toggle
    $(".language-selected").text("KR");
    $(".language-selected").removeClass("change-br change-en change-fr");
    $(".language-selected").addClass("change-kr");
    // Get Started
    $(".get-started").text("시작");
});
