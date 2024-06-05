import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../css/Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Esther Nina </strong>
                            <time
                                title='11 de Maio às 08:14h' 
                                dateTime='24-04-17 :08:14:02'>Cerca de 1h atrás
                            </time>
                            
                        </div>
                        <button title='Deletar comentário'>
                            <Trash 
                                size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}