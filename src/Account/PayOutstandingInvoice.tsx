import React, { useEffect, useState } from "react";

import { Button } from "../components";
import { getLinkToOutstandingInvoice } from "../components/API";

import Row from "./Row";

interface Invoice {
  url: string;
  id: string;
}

export default () => {
  const [invoice, setInvoice] = useState<null | Invoice>(null);
  useEffect(() => {
    (async () => setInvoice(await getLinkToOutstandingInvoice()))();
  }, []);
  return (
    <>
      <Row
        label="Outstanding Invoice"
        text="Your last invoice hasn't been settled yet"
      >
        <Button
          loading={!invoice}
          href={invoice ? invoice.url : ""}
          target="_blank"
          color="primary"
        >
          {`Settle Invoice ${invoice ? invoice.id.substring(3) : ""}`}
        </Button>
      </Row>
    </>
  );
};
