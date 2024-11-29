import { Button } from "semantic-ui-react";
import styles from "./AddAddress.module.scss";
import { useState } from "react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../AddressForm";

export function AddAddress(props) {
  const { onReload } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>
      <BasicModal show={show} onClose={onOpenClose} title="Nueva Dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}
