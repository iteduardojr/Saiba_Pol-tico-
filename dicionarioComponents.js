const Dicionario =
{
    Header: [
        { Explicação: 'Header' },
        {
            SubComponents: [
                {
                    Gambiarra: [
                        { Explicação: 'Necessário para fazer a implementação do bootstrap junto ao css puro' },
                        {
                            Props: [
                                { input: 'necessário para que apareça o input de pesquisa' }
                            ]
                        }]
                },
                { ModalLogin: 'Botão de login do usuário' },
                { Index: 'component principal que faz todo o Header funcionar' }
            ]
        }],
    NavBar: [
        { Explicação: 'Navbar' },
        {
            SubComponents: [
                {
                    Bar: [
                        { Explicação: 'Fundo da NavBar e necessário para o layout funcionar' },
                        {
                            Props: [
                                null
                            ]
                        }]
                },
                {
                    Nav: [
                        { Explicação: 'Necessário para a ativação do DropDawn' },
                        {
                            props: [
                                { Name: 'Nome do item' }
                            ]
                        }]
                },
                {
                    NavItem: [
                        { Explicação: 'Itens internos do DropDawn' },
                        {
                            props: [
                                { href: 'Link para a página requerida' },
                                { Item: 'Nome do Item' }
                            ]
                        }]
                }
            ]
        }],
    Align: [
        { Explicação: 'Alinha todos os itens com margin para os lados mantendo os itens no centro da página' },
        { SubComponents: null }
    ],
    CapitalizeWords: [
        { Explicação: 'Quando necessário bota o texto em Title-Case' },
        { SubComponents: null }
    ]
}


console.log(Dicionario)