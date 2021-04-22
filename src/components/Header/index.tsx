import format from 'date-fns/format';
import prBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

export function Header() {
const currentDate = format(new Date(), 'EEEEEEE, d MMMM', {
    locale: prBR,
});
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo" />
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </header>
    );
}