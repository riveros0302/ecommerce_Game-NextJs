import styles from "./Address.module.scss";
import { Button, Icon } from "semantic-ui-react";
import { AddressForm } from "../../AddressForm";
import { BasicModal, Confirm } from "@/components/Shared";
import { useState, useEffect } from "react";
import { Address as AddressCtrl } from "@/api";

const addressCtrl = new AddressCtrl();

export function Address(props) {
  const { addressId, address, onReload } = props;

  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setshowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  const openCLoseConfirm = () => setshowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}</p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{" "}
            {address.postal_code}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={openCLoseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>

        <Confirm
          open={showConfirm}
          onCancel={openCLoseConfirm}
          onConfirm={onDelete}
          content="¿Estas seguro de que quieres eliminar la dirección?"
        />

        <BasicModal
          show={showEdit}
          onClose={openCloseEdit}
          title="Editar dirección"
        >
          <AddressForm
            onClose={openCloseEdit}
            onReload={onReload}
            addressId={addressId}
            address={address}
          />
        </BasicModal>
      </div>
    </>
  );
}
