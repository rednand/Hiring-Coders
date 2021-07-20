interface Usuario{
    nome: string;
    email: string;
    address?: string;

}

function  getUser():Usuario {
    return{
        nome: "Renan",
        email: "nan-aguiar@hotmail.com"
    }
function setUser(usuario:Usuario) {
//...........    
}
}