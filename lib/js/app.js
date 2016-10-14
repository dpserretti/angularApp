angular.module("blogPosts", ["ngMessages", "ngRoute"]);
angular.module("blogPosts").controller("PostCtrl", function ($scope, $http) {

  $scope.app = 'Blog';

  $scope.posts = [
    {title: 'post 1', content: 'Caros amigos, o empenho em analisar a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das diversas correntes de pensamento. A prática cotidiana prova que a contínua expansão de nossa atividade nos obriga à análise dos níveis de motivação departamental. As experiências acumuladas demonstram que a consulta aos diversos militantes auxilia a preparação e a composição das diretrizes de desenvolvimento para o futuro. Do mesmo modo, a percepção das dificuldades exige a precisão e a definição do levantamento das variáveis envolvidas. ', date: new Date(),
      comments: [
        {author: 'Joe', body: 'Cool post!', date: new Date()},
        {author: 'Bob', body: 'Great idea but everything is wrong!', date: new Date()}
    ]},
    {title: 'post 2', content: 'Desta maneira, o desafiador cenário globalizado assume importantes posições no estabelecimento do impacto na agilidade decisória. Não obstante, o consenso sobre a necessidade de qualificação facilita a criação das regras de conduta normativas. Ainda assim, existem dúvidas a respeito de como a consolidação das estruturas aponta para a melhoria das novas proposições. Acima de tudo, é fundamental ressaltar que a mobilidade dos capitais internacionais oferece uma interessante oportunidade para verificação dos índices pretendidos. ', date: new Date(),
      comments: [
        {author: 'Joe', body: 'Cool post!', date: new Date()},
        {author: 'Bob', body: 'Great idea but everything is wrong!', date: new Date()}
    ]},
    {title: 'post 3', content: ' Pensando mais a longo prazo, o acompanhamento das preferências de consumo obstaculiza a apreciação da importância de alternativas às soluções ortodoxas. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o desenvolvimento contínuo de distintas formas de atuação desafia a capacidade de equalização dos paradigmas corporativos. O que temos que ter sempre em mente é que o início da atividade geral de formação de atitudes representa uma abertura para a melhoria do processo de comunicação como um todo. É claro que o fenômeno da Internet é uma das consequências do remanejamento dos quadros funcionais.', date: new Date(),
      comments: [
        {author: 'Joe', body: 'Cool post!', date: new Date()},
        {author: 'Bob', body: 'Great idea but everything is wrong!', date: new Date()}
    ]},
    // {title: 'post 4', content: 'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o comprometimento entre as equipes faz parte de um processo de gerenciamento das posturas dos órgãos dirigentes com relação às suas atribuições. No entanto, não podemos esquecer que a hegemonia do ambiente político garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso. Todavia, o aumento do diálogo entre os diferentes setores produtivos maximiza as possibilidades por conta do sistema de participação geral. ', date: new Date(),
    //   comments: [
    //     {author: 'Joe', body: 'Cool post!', date: new Date()},
    //     {author: 'Bob', body: 'Great idea but everything is wrong!', date: new Date()}
    // ]},
    // {title: 'post 5', content: 'O empenho em analisar a adoção de políticas descentralizadoras talvez venha a ressaltar a relatividade do impacto na agilidade decisória. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a consolidação das estruturas nos obriga à análise dos paradigmas corporativos. As experiências acumuladas demonstram que a mobilidade dos capitais internacionais afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. Todavia, a percepção das dificuldades desafia a capacidade de equalização das diversas correntes de pensamento. ', date: new Date(),
    //   comments: [
    //     {author: 'Joe', body: 'Cool post!', date: new Date()},
    //     {author: 'Bob', body: 'Great idea but everything is wrong!', date: new Date()}
    // ]},
  ];

  $scope.addPost = function(post) {
    post.comments = [];
    post.date = new Date();
    $scope.posts.push(angular.copy(post));
    // $http.post("http://localhost:3000/posts", post).success( function (data) {
    //   delete $scope.post;
    // });
  };

  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    $http.post("http://localhost:3412/contatos", contato).success(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };

  $scope.addComment = function(post, comment) {
    post.comments.push(angular.copy(comment));

  };

});

