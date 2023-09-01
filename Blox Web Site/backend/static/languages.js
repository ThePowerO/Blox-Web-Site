// Português
$(".br").click(function () {
    // Header
    $(".nav").children().eq(1).text("Dashboard");
    $(".nav").children().eq(2).text("Entrar");
    $(".nav").children().eq(3).text("Criar Conta");
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
    $(".language-selected").text("en-US");
    $(".language-selected").removeClass("change-br change-fr change-kr");
    $(".language-selected").addClass("change-en");
    // Get Started
    $(".get-started").text("Get Started");
});
