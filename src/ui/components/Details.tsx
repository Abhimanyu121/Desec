// import NextPage generic type
import { AddressContext, SignatureRequestReport } from "../../constants/API";
import DetailsContract from "./DetailsAddress";
import DetailsRequester from "./DetailsRequester";
import { useContext, useEffect } from "react";
import { stateContext } from "../App";
import Footer from "./Footer";
import DetailOutcome from "./DetailsOutcome";

const Details = (signatureRequestReport: SignatureRequestReport) => {
  const { updateWindow } = useContext(stateContext);

  useEffect(() => {
    updateWindow();
  });

  function addressContexts() {
    if (!!signatureRequestReport.addressContexts) {
      return Object.values(signatureRequestReport.addressContexts).map(
        (context: AddressContext, index: number) => (
          <div className="w-full" key={index}>
            <DetailsContract addressContext={context} />
          </div>
        )
      );
    }
  }

  return (
    <>
      <div className="flex flex-col h-[440px] relative justify-start">
        <div className="h-full overflow-y-auto py-2">
          <div className="flex justify-center w-full flex-wrap space-y-2">
            <h1 className="font-semibold text-base text-slate-600">
              Signature Details
            </h1>
            <DetailsRequester {...signatureRequestReport} />
            <DetailOutcome {...signatureRequestReport} />
            {addressContexts()}
          </div>
        </div>
      </div>
      <Footer {...signatureRequestReport} />
    </>
  );
};

export default Details;