import clsx from 'clsx';
import styles from './Heading.module.css'

function Heading() {
    return (
        <div>
            <h1 className={clsx(styles.heading)}>Heading</h1>
            <h1>
                
                <span >Heading 2</span>
            </h1>

        </div>

    )
}

export default Heading