import styles from './Paragraph.module.css';

function Paragraph() {
    return (
        <div>
            <h1 className={styles.paragraph}>FPT University Learning Materials</h1>

            <form>
                <div>
                    <div>

                        <div>
                            <h3 className={styles.h3_custom}>Guest's features</h3>
                            <a className={styles.btn}>View Curricula and Syllabi</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Paragraph;