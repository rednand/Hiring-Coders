const filmes = [
    {   
        id: 1,
        titulo: "Foi apenas um sonho",
        descricao: "FIlme Kate Winslet",
        duracao: 120
    },
    {   
        id: 2,
        titulo: "Us",
        descricao: "FIlme Jordan Peele",
        duracao: 120
    },
    {   
        id: 3,
        titulo: "Corra!",
        descricao: "Outro filme do Jordan Peele",
        duracao: 120
    },
]

const [ {id,titulo,descricao,duracao}] = filmes

filmes.map(filmes => console.log(filmes.titulo))