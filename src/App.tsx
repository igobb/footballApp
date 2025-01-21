import styles from './App.module.scss'

function App() {
    return (
        <div className={styles['tab-switcher']}>
            <div>
                <button>
                    <h2>Baza graczy</h2>
                </button>
            </div>

            <div>
                <button>
                    <h2>Baza drużyn</h2>
                </button>
            </div>

            <div>
                <button>
                    <h2>Baza rozgrywek</h2>
                </button>
            </div>

            <div>
                <button>
                    <h2>Statystyki</h2>
                </button>
            </div>
        </div>
    )
}

export default App
