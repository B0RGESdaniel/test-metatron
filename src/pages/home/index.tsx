import styles from './styles.module.scss';
import { categorias, listas, tarefas } from '../../database';
import { ListaDisplay } from '../../components/ListaDisplay';

export default function Home(){ 
    
    const createLista = (nome: string, categoria: string) => {
        let listaId = listas.length + 1

        let category = 0;

        if (categoria === 'casa'){
            category = 1
        }
        if (categoria === 'trabalho'){
            category = 2
        }
        if(categoria === 'escola'){
            category = 3
        }

        return { listaId, nome, category, concluida: false }

    }

    const createTarefa = (nome: string, lista: string) => {
        let tarefaId = tarefas.length + 1

        let idLista = 0
        listas.filter((i) => {
            if(i.nome === lista){
                idLista = i.id
            }
        })

        return { tarefaId, idLista, nome, concluida: false, usuarioId: 1 }
    }

    const pegaCategoria = (categoriaLista: number, idCategoria: number) => {
        if(categoriaLista === idCategoria) {

        }
    }

    return(
        <div className={styles.container}>
            <form action="">
                <div className={styles.field}>
                    <label htmlFor="nomeLista">Nome</label>
                    <input id="nomeLista" type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" id="category">
                        <option value="casa">Casa</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="escola">Escola</option>
                    </select>
                </div>
            </form>
            <button className={styles.btnCreate} onClick={() => {
                    const newList = createLista('Compra do mês', 'casa')
                    listas.push({id: newList.listaId, nome: newList.nome, categoriaId: newList.category, concluida: newList.concluida})
                    console.log(listas)
                }}>Criar lista</button>
            
            <form action="">
                <div className={styles.field}>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="list">Lista</label>
                    <select name="list" id="list">
                        {listas.map((item) => {
                            return(
                                <option key={item.id} value={(item.nome).toLowerCase()}>{item.nome}</option>
                            )
                        })}
                    </select>
                </div>
            </form>
            <button className={styles.btnCreate} onClick={() => {
                    const newTask = createTarefa('Régua', 'Material escolar')
                    tarefas.push({id: newTask.tarefaId, listaId: newTask.idLista, nome: newTask.nome, concluida: newTask.concluida, usuarioId: newTask.usuarioId})
                    console.log(tarefas)
                }}>Criar tarefa</button>
            <div className={styles.listas}>
                <h1>Listas</h1>
                <ul className={styles.gridListas}>
                    { listas.map((lista) => {
                        let nomeCategoria = ''
                        categorias.forEach((i) => {
                            if(lista.categoriaId === i.id){
                                nomeCategoria = i.nome
                            }
                        })
                        const novasTarefas = tarefas.filter((i) => i.listaId === lista.id)
                        
                        return(
                            <li key={lista.id}>
                                <ListaDisplay 
                                title={lista.nome} 
                                category={nomeCategoria}
                                checked={lista.concluida} tarefas={novasTarefas}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}