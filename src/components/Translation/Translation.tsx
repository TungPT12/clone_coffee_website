import { useTranslation } from "react-i18next";

function Translation({ text }: { text: string }) {
  const { t } = useTranslation();
  return <>{t(text)}</>;
}

export default Translation;
