import { useEffect, useState } from "react";

const useScript = (url) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = false;

    document.body.appendChild(script);
    script.onload = () => {
      setScriptLoaded(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
  return scriptLoaded;
};

export default useScript;
