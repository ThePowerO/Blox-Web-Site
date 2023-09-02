// Português
$(".br").click(function () {
    // Header
    $(".nav").children().eq(1).text("Dashboard");
    $(".nav").children().eq(2).text("Entrar");
    $(".nav").children().eq(3).text("Criar Conta");
    // Things to Toggle
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en change-fr change-kr");
    $(".language-selected").addClass("change-br");
    // Get Started
    $(".get-started").text("Comece Já");
});

// English
$(".en").click(function () {
    // Header
    $(".nav").children().eq(1).text("Dashboard");
    $(".nav").children().eq(2).text("Log In");
    $(".nav").children().eq(3).text("Create Account");
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
    $(".nav").children().eq(1).text("Dashboard");
    $(".nav").children().eq(2).text("Entrer");
    $(".nav").children().eq(3).text("Crée Compte");
    // Things to Toggle
    $(".language-selected").text("FR");
    $(".language-selected").removeClass("change-br change-en change-kr");
    $(".language-selected").addClass("change-fr");
    // Get Started
    $(".get-started").text("Commencer");
});

// 한국어
$(".kr").click(function () {
    // Header
    $(".nav").children().eq(1).text("대시보드");
    $(".nav").children().eq(2).text("로그인");
    $(".nav").children().eq(3).text("계정 생성");
    // Things to Toggle
    $(".language-selected").text("KR");
    $(".language-selected").removeClass("change-br change-en change-fr");
    $(".language-selected").addClass("change-kr");
    // Get Started
    $(".get-started").text("시작");
});
