import * as React from "react";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
function LocalesDropdown(props: any) {

  console.log(props,"country props")
  const [language, setLanguage] = useState("");
  //const [section, setSection] = useState(0);
  const onLanguageChange = (e: any) => {
    setLanguage(e.target.value);
    props.updatelocale(e.target.value);
  };
 
  /**
   * For country and language dropdown
   * @param e
   * returns the HTML element of Countries and Languages in dropdown format
   */

  useEffect(() => {
    const result = props.country?.filter((res: any, index: number) => {
    
       
          if (res.languageCode === props.site.meta.locale) {
            setLanguage(res.languageCode);
            //alert(res.languageCode);
            //return (res.index = index);
          }
    
    });
  }, []);

  return (
    <div className="languagedropdown">
      <form>
         <select onChange={(e) => onLanguageChange(e)}
          value={language}
          className="language"
          defaultValue={language}>
          {props.country?.map((e: any, ind: any) => {
           
            return (
              <option value={e.languageCode}  key={ind}
              selected={props.site.meta.locale === language}>
                {e.language}
              </option>
            );
           
          })}
        </select> 
        {/* <select
          onChange={(e) => onLanguageChange(e)}
          value={language}
          className="language"
          defaultValue={language}
        >
          {props.country[section].language?.map((el: any, indd: number) => {

            return (
              <option
                value={el.languageCode}
                key={indd}
                selected={props.site.meta.locale === language}
              >
                {el.language}
              </option>
            );
          })}
        </select> */}
      </form>
    </div>
  );
}

export default withTranslation()(LocalesDropdown);
