import styles from "./transaction.module.css";

function TransactionHistory() {
    return (
        <div className={styles.transactionHistoryContainer}>
            <h2 className="transactionHistoryTitle">Payment History</h2>

            <div className={styles.searchBox}>
                <input type="date" placeholder="dd/mm/yyyy" />
                <input type="text" placeholder="Search for content" />
                <button>Search</button>
            </div>

            <div className={styles.historyList}>
                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>24/04/2024</p>
                        <p className={styles.time}>20:15:01</p>
                        <p className={styles.content}>Content: Test for fun 4</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>

                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>23/03/2024</p>
                        <p className={styles.time}>05:16:10</p>
                        <p className={styles.content}>Content: Test for fun 3</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>

                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>22/02/2024</p>
                        <p className={styles.time}>18:50:14</p>
                        <p className={styles.content}>Content: Test for fun 2</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>

                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>21/01/2024</p>
                        <p className={styles.time}>20:20:28</p>
                        <p className={styles.content}>Content: Test for fun</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>21/01/2024</p>
                        <p className={styles.time}>20:20:28</p>
                        <p className={styles.content}>Content: Test for fun</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>21/01/2024</p>
                        <p className={styles.time}>20:20:28</p>
                        <p className={styles.content}>Content: Test for fun</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>21/01/2024</p>
                        <p className={styles.time}>20:20:28</p>
                        <p className={styles.content}>Content: Test for fun</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                        <p className={styles.date}>21/01/2024</p>
                        <p className={styles.time}>20:20:28</p>
                        <p className={styles.content}>Content: Test for fun</p>
                    </div>
                    <p className={styles.amount}>800.000.000 VND</p>
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;
