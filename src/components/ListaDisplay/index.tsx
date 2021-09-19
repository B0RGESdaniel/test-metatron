import Image from 'next/image';
import styles from './styles.module.scss';

type Props = {
    title: string;
    category: string;
    checked?: boolean;
    tarefas: Tarefa[];
}

type Tarefa = {
    id: number;
    listaId: number;
    nome: string;
    concluida: boolean;
    usuarioId: number;

}

export function ListaDisplay({title, tarefas, category}: Props){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{title}</h1>
                <input type="checkbox"/>
            </div>
            <span>{category}</span>
            <ul className={styles.tasks}>
                {tarefas.map((tarefa) => {
                    return(
                        <li 
                         key={tarefa.id} 
                         className={styles.task}>
                            <input type="checkbox"/>
                            <p>{tarefa.nome}</p>
                            <div className={styles.taskMenu}>
                                <Image className={styles.menuIcon} width={15} height={15} src='/pencil.svg' alt="editar"/>
                                <Image className={styles.menuIcon} width={15} height={15} src='/trashcan.svg' alt="excluir"/>
                            </div>
                        </li>
                    )
                })

                }
                
            </ul>
        </div>
    )
}