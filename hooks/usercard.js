import { useEffect } from 'react';
const importScript = "https://c0diecypher.github.io/yyyevar.github.io/carduser.js"=> {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c0diecypher.github.io/yyyevar.github.io/carduser.js";
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, ["https://c0diecypher.github.io/yyyevar.github.io/carduser.js"]);
};
export default importScript;