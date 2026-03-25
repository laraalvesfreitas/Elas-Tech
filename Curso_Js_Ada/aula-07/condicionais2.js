//Muito útil quando a variável possui valor específico 

const permissoes = 'aluno' // 'aluno' || 'professor' || 'admin'

switch(permissoes){
    case 'aluno' : 
        console.log('Você só pode visualizar as aulas. ')
        break;
    case 'professor': 
        console.log('Você pode alterar as aulas e adicionar exercicios. ')
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema. ')
        break;
    default: 
        console.log('Não sei qual seu perfil no sistema. ')
        break;
}