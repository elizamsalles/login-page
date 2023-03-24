import styles from "./Form.module.css";
// import { Eye, EyeSlash } from "@phosphor-icons/react"

export function Form() {
  return (

    <div className={styles.page}>


        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Acesse a plataforma</h1>
                <p>
                Faça login ou registre-se para começar a construir seus projetos ainda
                hoje.
                </p>
            </div>

            <div className={styles.form}>
                <form>
                    <div className={styles.email}>
                        <label>E-mail</label>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Digite seu e-mail" />
                    </div>

                    <div className={styles.password}>
                        <label>Senha</label>
                        <a href="https://#">Esqueceu a senha?</a>
                    </div>
                    <div /*className={styles.inputWrapper}*/>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                    {/* <div className={styles.icon}>
                                    <EyeSlash size={20} /> <Eye size={20}/>
                                </div>  */}

                    <button type="submit">Entrar</button>
                </form>
            </div>

            <div className={styles.footer}>
                <footer>
                    <p>Ainda não tem uma conta? <a href="https://#">Inscreva-se</a></p>      
                </footer>
            </div>
        </div>

        <img className={styles.bg} src="src\assets\bg.jpg" alt="imagem de background"/>

    </div>
  );
}
