import React, { useEffect } from "react";
import SingleProductContainer from "../../components/SigleProductContainer";

export default function SigleProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SingleProductContainer />
    </div>
  );
}
