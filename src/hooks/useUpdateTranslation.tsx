import { useTranslation } from "react-i18next";
import "../i18n";

const useUpdateTranslation = (data: any, locale: any) => {

  const { t, i18n } = useTranslation();
  i18n.addResource(locale, 'translation', 'monday', (typeof data.c_monday != "undefined" && data.c_monday ? data.c_monday : t("monday")));
  i18n.addResource(locale, 'translation', 'sunday', (typeof data.sunday != "undefined" && data.sunday ? data.sunday : t("sunday")));
  i18n.addResource(locale, 'translation', 'tuesday', (typeof data.c_tuesday != "undefined" && data.c_tuesday ? data.c_tuesday : t("tuesday")));
  i18n.addResource(locale, 'translation', 'wednesday', (typeof data.c_wednesday != "undefined" && data.c_wednesday ? data.c_wednesday : t("wednesday")));
  i18n.addResource(locale, 'translation', 'thursday', (typeof data.c_thursday != "undefined" && data.c_thursday ? data.c_thursday : t("thursday")));
  i18n.addResource(locale, 'translation', 'friday', (typeof data.c_friday != "undefined" && data.c_friday ? data.c_friday : t("friday")));
  i18n.addResource(locale, 'translation', 'saturday', (typeof data.c_saturday != "undefined" && data.c_saturday ? data.c_saturday : t("saturday")));
  i18n.addResource(locale, 'translation', 'Store Type', (typeof data.c_storeTypesTitle != "undefined" && data.c_storeTypesTitle ? data.c_storeTypesTitle : t("Store Type")));
  i18n.addResource(locale, 'translation', 'Product Name', (typeof data.c_productFacetHeadingText != "undefined" && data.c_productFacetHeadingText ? data.c_productFacetHeadingText : t("Product Name")));
};

export default useUpdateTranslation;