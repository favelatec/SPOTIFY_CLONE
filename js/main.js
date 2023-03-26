window.addEventListener("DOMContentLoaded", () => {
    /*
    Lista de objetos que contém as playlists e músicas
    */

    var CATALOGO_DE_MUSICA = {
        1: [
            "Oque você não ouviu ainda",
            {
                Nome: "Reflexões",
                Descricao: "Trilha Sonora do Gueto, Zekinha, MC Hariel, Maycon Jr...",
                AudioFonte: "https://cdn.discordapp.com/attachments/1088550155365654620/1088550246130393249/reflexoes-gr6-explode-jonatas-nascimento.mp3",
                Imagem: "https://th.bing.com/th/id/OIP.E2NH0c-1_FhDsk_JFAeKgQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                Nome: "Sem Gin, Sem Ela",
                Descricao: "Mc IG, Mc Marks, TrapLaudo, Mc Marks",
                AudioFonte: "https://cdn.discordapp.com/attachments/1088565606506320005/1088565775784227017/sem-gin-sem-ela.mp3",
                Imagem: "https://th.bing.com/th/id/OIP.7ahmPblqFfriQ28U2Zid3QHaHa?pid=ImgDet&rs=1"
            },
            {
                Nome: "Músicas de amor nunca mais",
                Descricao: "BK, Luccas Carlos, Nansy Silvvz, Gigantes...",
                AudioFonte: "https://cdn.discordapp.com/attachments/1088565606506320005/1088565775276707930/musicas-de-amor-nunca-mais.mp3",
                Imagem: "https://th.bing.com/th/id/OIP.aE8KY7NGNDMvnmQSQRd3UgHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
            {
                Nome: "Sou Vitorioso",
                Descricao: "Mc Lele JP & Mc Neguinho do Kaxeta",
                AudioFonte: "",
                Imagem: "https://th.bing.com/th/id/OIP.IakWgUuy5BNwrTy-1pY5OwHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                Nome: "Baco Exu dos Blues",
                Descricao: "Baco Exu dos Blues",
                AudioFonte: "",
                Imagem: "https://th.bing.com/th/id/OIP.o4kUKG5mhWZJjZSo2xMvGgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                Nome: "Controllah (Feat. Mc Bin Laden)",
                Descricao: "Gorillaz & Mc Bin Laden",
                AudioFonte: "",
                Imagem: "https://th.bing.com/th/id/OIP.YISP4m12q92_B4TPn3-aHgHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
        ],
        2: [
            "Descobrindo Meu Futuro",
            {
                Nome: "pick up the phone",
                Descricao: "Young Thug, Travis Scott",
                AudioFonte: "",
                Imagem: "https://th.bing.com/th/id/OIP.yZdRva4mtOPp7z7qWD9chAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                Nome: "Cálice",
                Descricao: "Chico Buarque, Milton Nascimento",
                AudioFonte: "",
                Imagem: "https://th.bing.com/th/id/OIP.mdHQoWqcMBUYzXUZFcyzkwAAAA?w=154&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                Nome: "LUMBERJACK",
                Descricao: "Tyler, The Creator",
                AudioFonte: "",
                Imagem: "https://themusicalhippie.files.wordpress.com/2021/06/screenshot_20210617-174403_spotify-e1623977702659.jpg"
            }
        ],
        3: [
            "Game",
            {
                Nome: "Mood Booster",
                Descricao: "Get happy with today's dose of feel-good...",
                AudioFonte: "",
                Imagem: "https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            },
            {
                Nome: "Feelin' Good",
                Descricao: "Feel good with this positively timeless...",
                AudioFonte: "",
                Imagem: "https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            }
        ]
    };

    // Pega o container principal onde ficará as playlists
    const CONTAINER_PRINCIPAL = document.querySelector(".main-container");

    function GERAR_ELEMENTOS_DE_TOPICOS(PROPRIEDADES) {
        // Cria elementos que nem no HTML

        let Div = document.createElement("div");;
        Div.setAttribute("class", "spotify-playlists");
        Div.setAttribute("id", PROPRIEDADES.ID);

        let H2 = document.createElement("h2");
        H2_Texto = document.createTextNode(PROPRIEDADES.Nome);
        H2.appendChild(H2_Texto);
        Div.appendChild(H2);

        let Lista = document.createElement("div");
        Lista.setAttribute("class", "list");
        Div.appendChild(Lista)

        CONTAINER_PRINCIPAL.appendChild(Div)

        return Lista
    }

}

    function GERAR_ELEMENTO_DE_MUSICA(PROPRIEDADES) {
        // Cria elementos que nem no HTML
        let Div = document.createElement("div");
        Div.setAttribute("class", "item")

        let Img = document.createElement("img");
        Img.setAttribute("src", PROPRIEDADES.Imagem);
        Div.appendChild(Img);

        let Play = document.createElement("div");
        Play.setAttribute("class", "play");
        let Span = document.createElement("span");
        Span.setAttribute("class", "fa fa-play");
        Play.appendChild(Span);
        Div.appendChild(Play);
       
        let H4 = document.createElement("h4");
        H4_Texto = document.createTextNode(PROPRIEDADES.Nome);
        H4.appendChild(H4_Texto);
        Div.appendChild(H4);

        let P = document.createElement("p");
        P_Texto = document.createTextNode(PROPRIEDADES.Descricao);
        P.appendChild(P_Texto);
        Div.appendChild(P);

        return Div
    }

    for (let Index in CATALOGO_DE_MUSICA) {
        /*
            Substitui os espaços pelo "-"
            ex: pao de queijo
            fica como: pao-de-queijo

            tive que fazer isso porque se eu deixasse com espaço, não iria conseguir localizar o ID
        */
        let idDaPlaylist = CATALOGO_DE_MUSICA[Index][0]
        idDaPlaylist = idDaPlaylist.replace(/ /g, '-');

        // Cria uma playlist
        let ELEMENTO_PLAYLIST = GERAR_ELEMENTOS_DE_TOPICOS({ Nome: CATALOGO_DE_MUSICA[Index][0], ID: idDaPlaylist });

        for (let Musicas in CATALOGO_DE_MUSICA[Index]) {
            // Ignora as músicas que não contém nome e nem descrição
            if (!CATALOGO_DE_MUSICA[Index][Musicas].Nome || !CATALOGO_DE_MUSICA[Index][Musicas].Descricao) {
                continue;
            }
            // Localiza o objeto atual da música que vai ser adicionada
            let ObjetoMusica = CATALOGO_DE_MUSICA[Index][Musicas]

            // Gera o elemento
            let Elemento = GERAR_ELEMENTO_DE_MUSICA({
                Nome: ObjetoMusica.Nome,
                Descricao: ObjetoMusica.Descricao,
                ID: ObjetoMusica.AudioFonte,
                Imagem: ObjetoMusica.Imagem
            })

            // Adiciona o elemento na playlist
            ELEMENTO_PLAYLIST.appendChild(Elemento)

            // Adiciona um evento para quando o usuario clicar no elemento da música
            Elemento.addEventListener("click", () => {
                // Deixa o footer visivel
                let Footer = document.getElementsByTagName("footer")[0];
                Footer.setAttribute("id", "visible")

                // Localiza os elementos da música
                let ElementoAudio = document.getElementsByTagName("audio")[0];
                let Source = document.getElementById("audioSource");

                // Localiza os elementos que vão customizar a música
                // nome, imagem e descriçõ
                let ElementoNome = document.querySelector(".music-name");
                let ElementoDescricao = document.querySelector(".music-description");
                let ElementoImagem = document.querySelector("#music-image");

                // Coloca imagem
                ElementoImagem.setAttribute("src", ObjetoMusica.Imagem)

                // Remove o texto anterior
                ElementoNome.removeChild(ElementoNome.childNodes[0])
                ElementoDescricao.removeChild(ElementoDescricao.childNodes[0])

                // Adiciona texto de acordo com o nome e descrição da música
                ElementoNome.appendChild(document.createTextNode(ObjetoMusica.Nome))
                ElementoDescricao.appendChild(document.createTextNode(ObjetoMusica.Descricao))

                // Muda a fonte do audio da música
                Source.setAttribute("src", ObjetoMusica.AudioFonte)

                // Carrega e depois toca a música
                ElementoAudio.load();
                ElementoAudio.play();
            })

        }
    }

    // Pega todos os elementos que tem o ID de "canttogglefooter"
    // Oque ele faz é basicamente quando clicável, o elemento footer onde contém o audio, desaparece
    let ElementosGeral = document.querySelectorAll("#cantogglefooter");

    // Pega todos os elementos que estão em uma lista
    for (let Index in ElementosGeral) {
        // O elemento em si
        let ElementoClicavel = ElementosGeral[Index];

        // Adiciona a função para clicar no elemento
        ElementoClicavel.addEventListener("click", () => {
            // Pega o elemento footer e deixa ele invisível
            let Footer = document.getElementsByTagName("footer")[0];
            Footer.setAttribute("id", "invisible")

            // Pega o elemento do audio
            // let ElementoAudio = document.getElementsByTagName("audio")[0];
        })
    }
})