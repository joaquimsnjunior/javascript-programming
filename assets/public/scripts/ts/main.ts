// O TS é o super-set da linguagem JS

/*
O TypeScript adiciona tipagem, ou seja ele infere o seu código qual que é o formato ou o tipo das coisas. 
*/

function mostrarDadosUsuarios(user) {
    // return user.name + '' + user.email;
    return `${user.name} ${user.email} = ${user.city} ${user.uf}`;
}