import styles from './Form.module.css'
import { EyeSlash } from "@phosphor-icons/react"




export function Form(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Acesse a plataforma</h1>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>

            <div className={styles.form}>
                <form>

                    <div className={styles.email}>
                        <label>E-mail</label>
                    </div>
                    <div>
                        <input type="email" placeholder='Digite seu e-mail' />
                    </div>
                    

                    <div className={styles.Password}>
                        <label>Senha</label>
                        <a href="https://#">Esqueceu a senha?</a>
                    </div>
                    <div>
                        <input type="password" placeholder='Digite sua senha' />
                        <EyeSlash /> 
                    </div>  
                    

                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}