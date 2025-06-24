// components/shared/SeoHead.jsx
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function SeoHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const {t}=useTranslation()  
  const fullTitle = title ? title : t("websiteTitle");
  const fullDescription =
    description || t("websiteDescription");

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}
