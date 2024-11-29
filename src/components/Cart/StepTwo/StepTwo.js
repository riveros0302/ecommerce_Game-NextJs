import { Separator } from "@/components/Shared";
import styles from "./StepTwo.module.scss";
import { Addresses } from "./Addresses";
import { useState } from "react";

export function StepTwo(props) {
  const { games } = props;
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <div className={styles.stepTwo}>
      <div className={styles.center}>
        <Addresses
          addressSelected={addressSelected}
          setAddressSelected={setAddressSelected}
        />
        <Separator height={50} />
        {addressSelected && <p>PAYMENT</p>}
      </div>

      <div className={styles.right}>
        <p>RESUME</p>
      </div>
    </div>
  );
}
