import Link from "next/link";
import styles from "./ProvisionalInvoice.module.scss";

function ProvisionalInvoice() {
  return (
    <div>
      <h1 className={`${styles["title-provisional-invoice"]}`}>CART TOTALS</h1>
      <div>
        <div className={`d-flex ${styles["provisional-invoice-row"]}`}>
          <span
            className={`${styles["provisional-invoice-title"]} text-capitalize f-1`}
          >
            Subtotal
          </span>
          <span className={`f-3`}>$247.000</span>
        </div>
        <div className={`d-flex ${styles["provisional-invoice-row"]}`}>
          <span
            className={`${styles["provisional-invoice-title"]} text-capitalize f-1`}
          >
            total
          </span>
          <span className={`f-3`}>$247.000</span>
        </div>
      </div>
      <Link
        href={"/"}
        className={`${styles["proceed-checkout"]} mt-5 text-white text-decoration-none`}
      >
        PROCEED TO CHECKOUT
      </Link>
    </div>
  );
}

export default ProvisionalInvoice;
