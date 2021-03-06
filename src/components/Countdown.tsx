import { useContext } from 'react';
import { CountdownContext } from '../Context/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown 
    } = useContext(CountdownContext);

    const [minutsLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutsLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
            >
                Ciclo feito
            </button>
            ) : (
                <>
                    { isActive ? 
                        (
                            <button 
                                onClick={resetCountdown}
                                type="button"
                                className={`
                                    ${styles.countdownButton} 
                                    ${styles.countdownButtonActive}
                                `}
                            >
                                Abandonar ciclo
                            </button>
                        ) : ( 
                            <button 
                                onClick={startCountdown}
                                type="button"
                                className={styles.countdownButton}
                            >
                                Iniciar um Ciclo
                            </button>
                        )
                    }
                </>
            )}
        </div>
    );
}
