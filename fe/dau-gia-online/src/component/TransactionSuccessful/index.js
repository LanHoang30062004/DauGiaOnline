import React from 'react';
import styles from "./transactionSuccessful.module.css";
import { SiTicktick } from "react-icons/si";

function TransactionSuccessful() {
    return (
        <div className={styles.confirmation}>
            <div className={styles.confirmationIcon}>
                <SiTicktick className={styles.icon} />
            </div>
            <h1 className={styles.confirmationTitle}>Payment successful</h1>
            <p className={styles.confirmationMessage}>
                Your order has been successfully paid. ABUY will contact you soon to deliver the product and service.
            </p>
            <a className={styles.confirmationButton} href="/home">Back to HomePage</a>
        </div>
    );
}

export default TransactionSuccessful;
