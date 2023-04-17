import * as React from "react";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { slugify } from "../../config/globalConfig";

function LocalesDropdown(props: any) {
  const [language, setLanguage] = useState("");
  const [section, setSection] = useState(0);
  const onLanguageChange = (e: any) => {
    setLanguage(e.target.value);
    props.updatelocale(e.target.value);
  };


  const updatelocale = (locale: any) => {
    if (props.template == "locatorSearch") {
      let path: any = props.path.split("/");
      path = path && path[1];
      path = locale + "/" + path;
      path = path;
      return (window.location.pathname = path);
    } else if (props.template == "continents") {

      let path: any = "";
      for (const key in props.alternateSlug) {
        if (key == locale) {
          let t = props.alternateSlug;

          path = locale + "/" + t[key].slug + ".html";

        }
      }
      return (window.location.pathname = path);
    } 
    else if (props.template == "location") {
      let path: any = "";
      for (const key in props.alternateSlug) {
        if (key == locale) {
          let t = props.alternateSlug;
          if (t[key].slug) {
            path = locale + "/" + t[key].slug + ".html";
          } else {
            let slug = t[key].id + " " + t[key].name;
            slug = slugify(slug);
            path = locale + "/" + slug;
            path = path + ".html";
          }
        }
      }

      return (window.location.pathname = path);
    } else if (props.template == "city") {



      var path: any = "";
      for (const key in props.alternateSlug) {
        if (key == locale) {
          let t: any = props.alternateSlug;



          t[key].dm_directoryParents.map((i: any) => {
            path = path + '/' + i.slug

          })
          path = locale + path + '/' + t[key].slug + ".html"
        }

      }


      return (window.location.pathname = path);

    }
    else if (props.template == "country") {

      let path: any;
      for (const key in props.alternateSlug) {
        if (key == locale) {
          let t = props.alternateSlug;


          path = locale + "/" + t[key].dm_directoryParents[0].slug + '/' + t[key].slug + ".html";

        }
      }

      return (window.location.pathname = path);
    }
  }

  /**
   * For country and language dropdown
   * @param e
   * returns the HTML element of Countries and Languages in dropdown format
   */

  const handleClick = (e: any) => {
    setSection(e.target.value);
    setLanguage(props.country[e.target.value].language[0].languageCode);
    props.updatelocale(props.country[e.target.value].language[0].languageCode);
  };
  useEffect(() => {
    const result = props.country?.filter((res: any, index: number) => {
      return (
        res.language &&
        res.language.map((inr: any) => {
          if (inr.languageCode === props.site.meta.locale) {
            setLanguage(inr.languageCode);
            return (res.index = index);
          }
        })
      );
    });
    const finalresult =
      result &&
      result.filter((res: any) => {
        if (Object.prototype.hasOwnProperty.call(res, "index")) {
          return res;
        }
      });
    setSection(finalresult[0].index);
  }, []);

  return (
    <div className="languagedropdown">
      <form>
        <select onChange={(e) => handleClick(e)} value={section}>
          {props.country?.map((e: any, ind: any) => {
            return (
              <option value={ind} selected={ind === section} key={ind}>
                {e.country}
              </option>
            );
          })}
        </select>
        <select
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
        </select>
      </form>
    </div>
  );
}

export default withTranslation()(LocalesDropdown);
