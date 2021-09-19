import styles from './login.module.scss';
import Link from 'next/link';

export default function Login(){
  return(
    <div className={styles.container}>
      <form action="">
        <div className={styles.field}>
          <label htmlFor="login">Login</label>
          <input type="text" placeholder="E-mail"/>
        </div>
        <div className={styles.field}>
          <label htmlFor="senha">Senha</label>
          <input type="password" placeholder="Senha"/>
        </div>
        <Link href="./home"><a><button>Entrar</button></a></Link>
        <Link href=""><a><span>Criar conta</span></a></Link>
      </form>
    </div>
  )
}
