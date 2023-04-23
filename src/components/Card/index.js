import styles from "./styles.module.css";
import Ethereum from "../../assets/icons/Ethereum";
import Clock from "../../assets/icons/Clock";
import Heart from "../../assets/icons/Heart";

export function Card({ nft }) {
  return (
    <div className={styles.card}>
      <img src={nft.imgUrl} alt={nft.name} className={styles.image} />

      <div className={styles.details}>
        <h5>{nft.name}</h5>
        <span>{nft.author.name}</span>
        <h4>
          <Ethereum />
          {nft.price}
          {nft.coin}
        </h4>
      </div>

      <div className={styles.timeContainer}>
        <Clock />
      </div>
      <div className={styles.likeContainer}>
        <Heart />
      </div>
    </div>
  );
}
