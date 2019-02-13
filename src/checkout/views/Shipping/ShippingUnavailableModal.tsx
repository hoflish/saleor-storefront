import * as React from "react";
import { mdiClose } from "@mdi/js";

import { Button, Icon } from "../../../components";
import { SUPPORT_EMAIL } from "../../../core/config";

const ShippingUnavailableModal: React.FC<{ hide(): void }> = ({ hide }) => (
  <div className="modal">
    <div className="modal__title">
      <p>We’re not shipping to your country</p>{" "}
      <Icon path={mdiClose} className="modal__close" onClick={hide} />
    </div>
    <div className="modal__body">
      <p className="modal__body__lead">We’re not shipping to your country</p>
      <p>
        Sorry, but our store does not support shipment to your zone at this
        moment. If you want additional information or want to ask us a question
        please contact us at
      </p>
      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
    </div>
    <div className="modal__footer">
      <Button className="modal__button" onClick={hide}>
        Ok
      </Button>
    </div>
  </div>
);

export default ShippingUnavailableModal;
