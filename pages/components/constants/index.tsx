import { AiFillWindows } from "react-icons/ai";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si"

export const carouselImages = [
  "/images/deadspace.jpg",
  "/images/returnal.jpg",
  "/images/csgo.jpg",
  "/images/devilmaycry.jpg",
  "/images/poefire.jpg"
];

export const carouselText = [
  "O clássico de terror de sobrevivência e ficção científica está de volta, totalmente reformulado para oferecer uma experiência ainda mais imersiva.",
  "Enfrente desafios roguelike. Encare inimigos em lutas de bullet hell. Divida sua jornada em Returnal™ com outro jogador.",
  "CS:GO é um FPS da Valve disputado entre duas equipes. Elas se revezam entre terroristas e contra terroristas, os terroristas armam a bomba enquanto o outro time protege os sites, locais onde os explosivos devem ser plantados.",
  "Devil May Cry 5 é o novo jogo desta lendária série de ação e junta a sua clássica ação cheia de adrenalina e personagens sobrenaturais peculiares.",
  "Você é um exilado, lutando para sobreviver no continente sombrio de Wraeclast, enquanto luta para ganhar o poder que permitirá que você se vingue daqueles que o injustiçaram."
];

export const carouselPrice = [
  "R$ 249,90",
  "R$ 249,90",
  "Gratuito",
  "R$ 252,00",
  "Gratuito"
];

export const purchaseButton = [
  "Compre agora",
  "Compre agora",
  "Baixe agora",
  "Compre agora",
  "Baixe agora"
];

export const carouselTitle = [
  "Dead Space Remake",
  "Returnal",
  "Counter Strike: Global Offensive",
  "Devil May Cry 5",
  "Path of Exile"
];

export const carouselWishlist = [
  "+ Lista de desejos",
  "+ Lista de desejos",
  "",
  "+ Lista de desejos",
  ""
]

export const carouselObjects = [
  {
    imageUrl: "/images/deadspaceSlider.jpg",
    alt: "Dead Space Remake",
    description: "O clássico de terror de sobrevivência e ficção científica está de volta, totalmente reformulado para oferecer uma experiência ainda mais imersiva.",
    price: "R$ 249,90",
    purchaseButton: "Compre agora",
    name: "Dead Space Remake",
    wishlist: "+ Lista de desejos"
  },
  {
    imageUrl: "/images/returnalSlider.jpg",
    alt: "Returnal",
    description: "Enfrente desafios roguelike. Encare inimigos em lutas de bullet hell. Divida sua jornada em Returnal™ com outro jogador.",
    price: "R$ 249,90",
    purchaseButton: "Compre agora",
    name: "Returnal",
    wishlist: "+ Lista de desejos"
  },
  {
    imageUrl: "/images/thelast1.jpg",
    alt: "The Last of Us 1",
    description: "Conheça a história emocionante e os personagens inesquecíveis de The Last of Us, vencedor de mais de 200 prêmios de Jogo do Ano.",
    price: "R$ 249,99",
    purchaseButton: "Jogar",
    name: "The last of Us - Part 1",
    wishlist: "Gratuito p/jogar"
  },
  {
    imageUrl: "/images/devilmaycrySlider.jpg",
    alt: "Devil May Cry 5",
    description: "Devil May Cry 5 é o novo jogo desta lendária série de ação e junta a sua clássica ação cheia de adrenalina e personagens sobrenaturais peculiares.",
    price: "R$ 252,00",
    purchaseButton: "Compre agora",
    name: "Devil May Cry 5",
    wishlist: "+ Lista de desejos"
  },
  {
    imageUrl: "/images/poe2160.jpg",
    alt: "Path of Exile",
    description: "Você é um exilado, lutando para sobreviver no continente sombrio de Wraeclast, enquanto luta para ganhar o poder que permitirá que você se vingue daqueles que o injustiçaram.",
    price: "Gratuito",
    purchaseButton: "Jogar",
    name: "Path of Exile",
    wishlist: "Gratuito p/jogar"
  }
];

export const destaqueDescontos = [
  {
    imageUrl: "/images/thelast1.jpg",
    nome: "The Last of Us. Part I",
    desconto: "15%",
    antigoValor: "R$ 249.99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo The Last of Us 1',
    id: "1",
  },
  {
    imageUrl: "/images/thelou2.jpg",
    nome: "The Last of Us. Part II",
    desconto: "30%",
    antigoValor: "R$ 199.99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo The Last of Us 2',
    id: "2",
  },
  {
    imageUrl: "/images/resident.jpg",
    nome: "Resident Evil 4",
    desconto: "45%",
    antigoValor: "R$ 149.99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Resident Evil 4',
    id: "3",
  },
  {
    imageUrl: "/images/hogwartsDeluxe.jpg",
    nome: "Hogwarts Legacy - Deluxe",
    desconto: "20%",
    antigoValor: "R$ 249.99",
    gameInformation: "Edição",
    alt: 'Imagem do jogo Hogwarts Legacy',
    id: "4",
  },
  {
    imageUrl: "/images/subnauticabelow.jpg",
    nome: "Subnautica Below Zero",
    desconto: "10%",
    antigoValor: "R$ 155.89",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Subnautica Below Zero',
    id: "5",
  },
  {
    imageUrl: "/images/assassinscreed.jpg",
    nome: "Assassin's Creed Valhalla",
    desconto: "67%",
    antigoValor: "R$ 199.99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Assassins Creed Valhalla',
    id: "6",
  },
  {
    imageUrl: "/images/residentevilvillage.jpg",
    nome: "Resident Evil Village",
    desconto: "50%",
    antigoValor: "R$ 139.90",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Resident Evil Village',
    id: "7",
  },
  {
    imageUrl: "/images/gtav.jpg",
    nome: "Grand Theft Auto V",
    desconto: "65%",
    antigoValor: "R$ 99.99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Grand Theft Auto V',
    id: "8",
  },
  {
    imageUrl: "/images/borderlands3.jpg",
    nome: "Borderlands 3",
    desconto: "25%",
    antigoValor: "R$ 119.90",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Borderlands 3',
    id: "9",
  },
];

export const categories = [
  {
    image: '/images/action.jpg',
    text: 'Ação',
  },
  {
    image: '/images/survival.jpg',
    text: 'Sobrevivência',
  },
  {
    image: '/images/dungeon.jpg',
    text: 'Roguelike',
  },
  {
    image: '/images/strategy2.jpg',
    text: 'Estratégia',
  },
  {
    image: '/images/horror2.jpg',
    text: 'Terror',
  },
  {
    image: '/images/coop.jpg',
    text: 'Cooperativo',
  },
  {
    image: '/images/racingGame.jpg',
    text: 'Corrida',
  },
  {
    image: '/images/sports2.jpg',
    text: 'Esportes',
  },
  {
    image: '/images/fight2.jpg',
    text: 'Luta',
  },
  {
    image: '/images/simulator2.jpg',
    text: 'Simulação',
  },
  {
    image: '/images/futuristic2.jpg',
    text: 'Futurista',
  },
  {
    image: '/images/indie2.jpg',
    text: 'Indie',
  },
];

export const novidadesPopulares = [
  {
    imageUrl: "/images/theforest.jpg",
    nomePop: "Sons of The Forest",
    description: "Enviado para encontrar um bilionário desaparecido em uma ilha remota, você se encontra em uma paisagem infernal infestada de canibais. Crie, construa e lute para sobreviver, sozinho ou com amigos, neste novo e assustador simulador de horror de sobrevivência em mundo aberto.",
    price: "R$ 88,99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Sons of The Forest',
  },
  {
    imageUrl: "/images/fifa23.jpg",
    nomePop: "EA™ FIFA 23",
    description: "FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2, a FIFA World Cup™ masculina e feminina (lançamento durante a temporada), times femininos, recursos de crossplay* e muito mais.",
    price: "R$ 299,00",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Fifa 2023',
  },
  {
    imageUrl: "/images/vampiresurvivors.jpg",
    nomePop: "Vampire Survivors",
    description: "Acabe com milhares de criaturas noturnas e sobreviva até o amanhecer! Vampire Survivors é um jogo casual de terror gótico com elementos roguelite onde suas escolhas podem fazer você crescer rapidamente e aniquilar os milhares de monstros que aparecem pelo caminho.",
    price: "R$ 12,99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Vampire Survivors',
  },
  {
    imageUrl: "/images/lightfall.jpg",
    nomePop: "Destiny 2 - Lightfall",
    description: "Numa cidade netuniana sitiada, encontre forças nos seus companheiros Guardiões quando o fim de todas as coisas se aproximar — a Testemunha chegou. Equipe-se com novas recompensas e desbloqueie poderes inéditos da Treva para triunfar no inesquecível modo Lendário de A Queda da Luz.",
    price: "R$ 149,99",
    gameInformation: "Expansão",
    alt: 'Imagem da expansão Destiny 2 - Lightfall',
  },
  {
    imageUrl: "/images/atomic.jpg",
    nomePop: "Atomic Heart",
    description: "Em um mundo utópico, insano e deslumbrante, trave batalhas explosivas. Adapte seu estilo de luta a cada novo oponente, tire vantagem do espaço e aprimore seus equipamentos para completar a missão. O preço da verdade será pago com sangue.",
    price: "R$ 199,90",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Atomic Heart',
  },
  {
    imageUrl: "/images/cod.jpg",
    nomePop: "Call of Duty: MW II",
    description: "O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141.",
    price: "R$ 299,90",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Call of Duty®: Modern Warfare® II',
  },
  {
    imageUrl: "/images/valheim1920.jpg",
    nomePop: "Valheim - Mistlands",
    description: "Um brutal jogo de exploração e sobrevivência para 1 a 10 jogadores, ambientado em um purgatório gerado de forma procedural, inspirado na cultura viking. Batalhe, construa e conquiste glória em uma saga digna da benção de Odin!",
    price: "R$ 37,99",
    gameInformation: "Grande atualização",
    alt: 'Imagem do jogo Valheim e sua atualização Mistlands',
  },
  {
    imageUrl: "/images/hog.jpg",
    nomePop: "Hogwarts Legacy",
    description: "Hogwarts Legacy é um RPG de ação imersivo de mundo aberto. Agora você pode assumir o controle da ação e estar no centro de sua própria aventura no mundo bruxo.",
    price: "R$ 249,99",
    gameInformation: "Jogo base",
    alt: 'Imagem do jogo Hogwarts Legacy',
  },
];

export const jogosAguardados = [
  {
    imageUrl: "/images/frostpunk.jpg",
    nomePop: "Frostpunk 2",
    description: "Frostpunk 2 é a sequência do aclamado jogo de sobrevivência em sociedade indicado ao BAFTA. A era do vapor já passou e agora o petróleo é tido como a mais nova salvação da humanidade. No entanto, com novas ameaças a caminho, o futuro da cidade parece ainda mais sombrio do que antes.",
    releaseDate: 'Em breve',
    alt: 'Imagem do jogo Frostpunk 2',
    price: 'R$ 199,99',
    developer: '11 bit studios',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    categories: ['Estratégia', 'Sobrevivência', 'Construção de Cidades']
  },
  {
    imageUrl: "/images/diabloo.jpg",
    nomePop: "Diablo IV",
    description: "Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment, o quarto título da série Diablo. Em 1.º de novembro de 2019, durante a Blizzcon, o jogo foi oficialmente anunciado para PC, PlayStation 4 e Xbox One.",
    releaseDate: '10/mar./2023',
    alt: 'Imagem do jogo Diablo IV',
    price: 'R$ 439,90',
    developer: 'Blizzard Entertainment',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    categories: ['Ação', 'Hack and Slash', 'RPG', 'Ficção']
  },
  {
    imageUrl: "/images/outlast.jpg",
    nomePop: "The Outlast Trials",
    description: "Red Barrels convida você a experimentar o terror entorpecente, desta vez com amigos. Quer você passe pelos testes sozinho ou em equipe, se sobreviver o suficiente e concluir a terapia, Murkoff ficará feliz em deixá-lo partir ... mas você será o mesmo?",
    releaseDate: 'Em breve',
    alt: 'Imagem do jogo The Outlast Trials',
    price: 'R$: Não Divulgado',
    devices: [<AiFillWindows />],
    developer: 'Red Barrels',
    categories: ['Terror', 'Primeira Pessoa', 'Cooperativo', 'Ação']
  },
  {
    imageUrl: "/images/starfield.jpg",
    nomePop: "Starfield",
    description: "Starfield é um futuro jogo eletrônico de RPG de ação e ficção em desenvolvimento pela Bethesda Game Studios, publicado pela Bethesda Softworks e distribuído pela Microsoft.",
    releaseDate: '2023',
    alt: 'Imagem do jogo Starfield',
    price: 'R$: Não Divulgado',
    developer: 'Bethesda',
    devices: [<AiFillWindows />, <FaXbox />],
    categories: ['Ação', 'Aventura', 'RPG', 'Futurista']
  },
  {
    imageUrl: "/images/starwars.jpg",
    nomePop: "Star Wars Jedi: Survivor",
    description: "Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts. Uma sequência de Star Wars Jedi: Fallen Order, está programada para ser lançada no PlayStation 5, Windows e Xbox Series X/S.",
    releaseDate: '28/abr./2023',
    alt: 'Imagem do jogo Star Wars Jedi: Survivor',
    price: 'R$ 339,00',
    developer: 'Electronic Arts',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    categories: ['Ação', 'Aventura', 'Souslike', 'Mundo Aberto']
  },
  {
    imageUrl: "/images/zelda.jpg",
    nomePop: "Zelda: Tears of the Kingdom",
    description: "The Legend of Zelda: Tears of the Kingdom é um futuro jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo. Está programado para ser lançado em 12 de maio de 2023 para Nintendo Switch. Faz parte da série The Legend of Zelda, e é a sequência de The Legend of Zelda: Breath of the Wild.",
    releaseDate: '12/maio/2023',
    alt: 'The Legend of Zelda: Tears of the Kingdom',
    price: 'R$ 357,99',
    devices: [<SiNintendoswitch />],
    developer: 'Nintendo',
    categories: ['Ação', 'Aventura', 'Switch', 'Exploração']
  },
  {
    imageUrl: "/images/finalfantasy.jpg",
    nomePop: "Final Fantasy XVI",
    description: "Final Fantasy XVI é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. É o décimo sexto título principal da série Final Fantasy e está programado para ser lançado em 22 de junho de 2023 para PlayStation 5. Está sendo dirigido por Hiroshi Takai e produzido por Naoki Yoshida.",
    releaseDate: '22/jun./2023',
    alt: 'Imagem do jogo Final Fantasy XVI',
    price: 'R$ 349,90',
    devices: [<FaPlaystation />],
    developer: 'Square Enix',
    categories: ['Ação', 'Aventura', 'RPG', 'Hack and Slash']
  },
  {
    imageUrl: "/images/remnant2.jpg",
    nomePop: "Remnant 2",
    description: "Em Remnant 2, os sobreviventes da humanidade têm que enfrentar novas e mortais criaturas, além de chefes impossíveis em mundos aterrorizantes. Jogue por conta própria ou em modo cooperativo com dois outros amigos e explore as profundezas do desconhecido para impedir que o mal destrua a própria realidade.",
    releaseDate: 'Em breve',
    alt: 'Imagem do jogo Remnant 2',
    price: 'R$: Não divulgado',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    developer: 'Gunfire Games',
    categories: ['Ação', 'Aventura', 'RPG', 'Souslike']
  },
];

export const atualizadosRecentemente = [
  {
    imageUrl: '/images/pathfinder.jpg',
    price: 'R$: 149,99',
    description: 'Uma atualização 2.1.0u está ativa. O DLC Last Sarkorians também está disponível. Hora de aprender a nova armadilha.',
    name: 'Pathfinder: Wrath of the Righteous',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/callisto3840.jpg',
    price: 'R$: 249,90',
    description: 'Uma visão desafiadora da experiência de terror e sobrevivência do Protocolo Callisto, destinada a levá-lo aos seus limites, o modo Hardcore não é para os fracos de coração.',
    name: 'The Callisto Protocol',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/rainbowsixsiege3840.png',
    price: 'R$: 59,99',
    description: 'Comemore o início do 8º ano de Rainbow Six Siege com a melhor oferta de passes de batalha que você pode obter o ano todo. O Passe do Ano 8 vem com todos os quatro Passes de Batalha do Ano 8, 4 novos Operadores e muito mais.',
    name: 'Rainbow Six Siege',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/eldenring3840.jpg',
    price: 'R$: 249,90',
    description: 'Uma expansão futura para ELDEN RING, Shadow of the Erdtree, está atualmente em desenvolvimento.',
    name: 'Elden Ring',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/huntshowdown3840.jpg',
    price: 'R$: 54,78',
    description: 'Esta nova atualização de Hunt: Showdown inclui um novo tutorial, alterações na interface do usuário, bônus individuais, novas variantes de armas e muito mais! Os Servidores de Teste estão agora AO VIVO com a Atualização 1.12!',
    name: 'Hunt: Showdown',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/prison3840.jpg',
    price: 'R$: 57,99',
    description: 'Nova atualização The JailHouse está disponível! Juntamente com Jungle Pack que é um pacote estético que situa o teu complexo numa floresta tropical profunda e verdejante. Longe da civilização, os teus guardas vão ter de gerir os seus prisioneiros enquanto lidam com os perigos da natureza.',
    name: 'Prison Architect',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/satisfactory3840.png',
    price: 'R$: 59,99',
    description: 'Os diagramas são a maior adição ao jogo que vem com a Atualização 7, mas lembre-se de que ainda não terminamos totalmente com eles. Para a atualização 7, isso é o que podemos compartilhar com você, e estamos ansiosos para receber seus comentários e o que você fizer com eles no acesso antecipado antes de finalizarmos o recurso em uma atualização futura.',
    name: 'Satisfactory',
    gameInformation: 'Jogo Base - Grande Atualização'
  },
  {
    imageUrl: '/images/baldursgate3840.png',
    price: 'R$: 199,99',
    description: 'A atualização #9 é nossa atualização principal final antes do lançamento em agosto de 2023, enquanto damos os retoques finais no BG3. Esta atualização inspirada pela comunidade é uma resposta direta aos seus comentários e traz alguns dos recursos e alterações mais solicitados para Baldurs Gate 3. Aumentamos o limite de nível, renovamos nosso Sistema de Reações, desbloqueamos Voar e revelamos um jogo há muito esperado classe: Paladino, juntamente com muitas outras novas adições, ajustes e correções.',
    name: 'Baldurs Gate 3',
    gameInformation: 'Jogo Base - Grande Atualização'
  }
];

export const indies = [
  {
    imageUrl: '/images/farthestfrontier.jpg',
    price: 'R$ 57,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Farthest Frontier',
    developer: 'Crate Entertainment',
    categories: ['Acesso Antecipado', 'Construção de Cidades', 'Sobrevivência', 'Estratégia'],
  },
  {
    imageUrl: '/images/grimdawn.jpg',
    price: 'R$ 47,49',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Grimdawn',
    developer: 'Crate Entertainment',
    categories: ['RPG de Ação', 'Fantasia Sombria', 'Hack and Slash', 'Saques'],
  },
  {
    imageUrl: '/images/phasmophobia.jpg',
    price: 'R$ 27,89',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Phasmophobia',
    developer: 'Kinetic Games',
    categories: ['Terror', 'Cooperativo On-line', 'Multijogador', 'RV'],
  },
  {
    imageUrl: '/images/darkestdungeon2.jpg',
    price: 'R$: 56,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Darkest Dungeon 2',
    developer: 'Red Hook Studios',
    categories: ['Tática por Turnos', 'Roguelite', 'Um Jogador', 'CRPG'],
  },
  {
    imageUrl: '/images/thelongdark.jpg',
    price: 'R$ 59,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'The Long Dark',
    developer: 'Hinterland Studio Inc.',
    categories: ['Sobrevivência', 'Mundo Aberto', 'Um Jogador', 'Exploração'],
  },
  {
    imageUrl: '/images/hades.jpg',
    price: 'R$ 73,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Hades',
    developer: 'Supergiant Games',
    categories: ['Roguelike de Ação', 'Roguelite', 'Hack and Slash', 'Souslike'],
  },
  {
    imageUrl: '/images/roguelegacy2.jpg',
    price: 'R$ 73,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Rogue Legacy 2',
    developer: 'Cellar Door Games',
    categories: ['Ação', 'Aventura', 'Difícil', 'RPG'],
  },
  {
    imageUrl: '/images/northgard.jpg',
    price: 'R$ 57,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Northgard',
    developer: 'Shiro Games',
    categories: ['Estratégia', 'Simulação', 'Construção de Cidades', 'Tático'],
  },
  {
    imageUrl: '/images/7daystodie.jpg',
    price: 'R$ 44,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: '7 Day\'s to Die',
    developer: 'The Fun Pimps',
    categories: ['Sobrevivência', 'Zumbis', 'Mundo Aberto', 'Pós-Apocalíptico'],
  },
  {
    imageUrl: '/images/projectzomboid.jpg',
    price: 'R$ 37,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Project Zomboid',
    developer: 'The Indie Stone',
    categories: ['Sobrevivência', 'Zumbis', 'Mundo Aberto', 'Pós-Apocalíptico'],
  },
  {
    imageUrl: '/images/oxygennotincluded.jpg',
    price: 'R$ 45,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Oxygen Not Included',
    developer: 'Klei Entertainment',
    categories: ['Estratégia', 'Simulador de Colônias', 'Sobrevivência', 'Construção'],
  },
  {
    imageUrl: '/images/vrising.jpg',
    price: 'R$ 37,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'V Rising',
    developer: 'Stunlock Studios',
    categories: ['Sobrevivência', 'Acesso Antecipado', 'Mundo Aberto', 'Multijogador'],
  },
  {
    imageUrl: '/images/acrosstheobelisk.jpg',
    price: 'R$ 66,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Across the Obelisk',
    developer: 'Dreamsite Games',
    categories: ['Cooperativo', 'Cartas', 'RPG', 'Estratégia'],
  },
  {
    imageUrl: '/images/graveyardkeeper.jpg',
    price: 'R$ 59,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Graveyard Keeper',
    developer: 'Lazy Bear Games',
    categories: ['Medieval', 'Aventura', 'RPG', 'Simulação'],
  },
  {
    imageUrl: '/images/slaythespire.jpg',
    price: 'R$ 47,49',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Slay the Spire',
    developer: 'Mega Crit Games',
    categories: ['Roguelike', 'Cartas', 'RPG', 'Um Jogador'],
  },
];

export const preferencias = [
  {
    imageUrl: '/images/ark.jpg',
    price: 'R$ 37,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    name: 'Ark Survival Evolved',
    developer: 'Cellar Door Games',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Multijogador', 'Dinossauros'],
  },
  {
    imageUrl: '/images/raft.jpg',
    price: 'R$ 36,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Raft',
    developer: 'Shiro Games',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Multijogador', 'Construção'],
  },
  {
    imageUrl: '/images/dontstarvetogether.jpg',
    price: 'R$ 27,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Don\'t Starve Together',
    developer: 'The Fun Pimps',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Multijogador', 'Pós-Apocalíptico'],
  },
  {
    imageUrl: '/images/terra.jpg',
    price: 'R$ 19,99',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Terraria',
    developer: 'The Indie Stone',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Cooperativo', 'Exploração'],
  },
  {
    imageUrl: '/images/rust.jpg',
    price: 'R$ 103,49',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Rust',
    developer: 'Klei Entertainment',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Multijogador', 'Construção'],
  },
  {
    imageUrl: '/images/greenhell.jpg',
    price: 'R$ 51,79',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'GreenHell',
    developer: 'Stunlock Studios',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Um Jogador', 'Ação'],
  },
  {
    imageUrl: '/images/conanexiles.jpg',
    price: 'R$ 99,49',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Conan Exiles',
    developer: 'Dreamsite Games',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Multijogador', 'Ação'],
  },
  {
    imageUrl: '/images/grounded.jpg',
    price: 'R$ 197,72',
    info: 'Jogo Base',
    devices: [<AiFillWindows />],
    name: 'Grounded',
    developer: 'Dreamsite Games',
    categories: ['Sobrevivência em Mundo Aberto', 'Sobrevivência', 'Cooperativo', 'Estratégia'],
  },
];

export const displayBestSellers = [
  {
    imageUrl: '/images/residentevil.jpg',
    name: 'Resident Evil 4',
    price: 'R$: 249,00',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/fifa23.jpg',
    name: 'EA SPORTS FIFA 23',
    price: 'R$: 299,00',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/grounded.jpg',
    name: 'Call of Duty: Modern Warfare II',
    price: 'R$: 299,90',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/deadcells.jpg',
    name: 'Dead Cells',
    price: 'R$: 47,49',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/destiny.jpg',
    name: 'Destiny 2',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/reddead.jpg',
    name: 'Red Dead Redemption 2',
    price: 'R$: 299,90',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/hogwartslegacy.jpg',
    name: 'Hogwarts Legacy',
    price: 'R$: 249,99',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/monsterhunter.jpg',
    name: 'MONSTER HUNTER WORLD',
    price: 'R$: 99,90',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
]

export const displayMostPlayeds = [
  {
    imageUrl: '/images/csgo.jpg',
    name: 'Counter Strike: Global Offensive',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/apex.jpg',
    name: 'Apex Legends',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/dota.jpg',
    name: 'Dota 2',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/destiny.jpg',
    name: 'Destiny 2',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/grandtheftautov.jpg',
    name: 'Grand Theft Auto V',
    price: 'R$ 108,89',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/lostark.jpg',
    name: 'Lost Ark',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/rust.jpg',
    name: 'Rust',
    price: 'R$ 103,49',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
  {
    imageUrl: '/images/tf2.jpg',
    name: 'Team Fortress 2',
    price: 'Gratuito',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '',
    categories: '',
  },
]

export const displaySales = [
  {
    imageUrl: '/images/ori.jpg',
    name: 'Ori and the Will of the Wisps',
    price: 'R$ 129,00',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-80%',
    categories: '',
  },
  {
    imageUrl: '/images/dmc5.jpg',
    name: 'Devil May Cry 5',
    price: 'R$ 99,90',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-67%',
    categories: '',
  },
  {
    imageUrl: '/images/resident2.jpg',
    name: 'Resident Evil 2',
    price: 'R$ 139,90',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-75%',
    categories: '',
  },
  {
    imageUrl: '/images/deadbydaylight.jpg',
    name: 'Dead by Daylight',
    price: 'R$ 49,99',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-60%',
    categories: '',
  },
  {
    imageUrl: '/images/totalwar3.jpg',
    name: 'Total War Warhammer III',
    price: 'R$ 252,00',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-33%',
    categories: '',
  },
  {
    imageUrl: '/images/battlefield2042.jpg',
    name: 'Battlefield 2042',
    price: 'R$ 249,00',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-70%',
    categories: '',
  },
  {
    imageUrl: '/images/nba.jpg',
    name: 'NBA 2K23',
    price: 'R$ 499,50',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-60%',
    categories: '',
  },
  {
    imageUrl: '/images/detroit.jpg',
    name: 'Detroit: Become Human',
    price: 'R$ 134,99',
    devices: [<AiFillWindows />, <FaPlaystation />, <FaXbox />],
    discount: '-50%',
    categories: '',
  },
]

export const curiosidadesObjetos = [
  {
    imageUrl: ["/images/facebook.png", "/images/instagram.png", "/images/twitter.png"],
    text: "Você sabia? A Games Emporium está no mercado desde 2007 te trazendo o melhor que existe no mundo dos jogos. Possuímos  promoções diárias e ofertas imperdíveis. Recomende o nosso site!"
  }
];


export default function Constants() {
  return (
    <>
    </>
  )
}