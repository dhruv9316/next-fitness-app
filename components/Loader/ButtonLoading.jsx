import styles from './ButtonLoading.module.css'

const ButtonLoading = () => {
    return (
        <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>)
}

export default ButtonLoading