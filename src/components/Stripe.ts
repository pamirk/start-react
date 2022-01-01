/* global Stripe:readonly */
export const loadStripe = async () => {
  const src = "https://js.stripe.com/v3/";
  const id = "stripe";
  const scriptElement = document.getElementById(id);
  // @ts-ignore
    return new Promise<typeof Stripe>((resolve, reject) => {
    if (!scriptElement) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;

      // @ts-ignore
        const handleLoadScriptSuccess = () => resolve(Stripe);
      const handleLoadScriptFail = (event: ErrorEvent) => reject(event);

      script.addEventListener("load", handleLoadScriptSuccess, {
        once: true
      });
      script.addEventListener("error", handleLoadScriptFail, { once: true });
      document.head.appendChild(script);
    } else {
      // @ts-ignore
        resolve(Stripe);
    }
  });
};
