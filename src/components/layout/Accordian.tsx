import { Link } from "@yext/pages/components";
import React, { useState } from "react";
import { svgIcons } from "../../svg icons/svgIcon";

type EmailLink = {
  link: string;
  label: string;
}
type PropType = {
  title: string;
  links?:
    | null
    | {
        link?: URL;
        label: string;
      }[];
  labels?: string[] | null;
  phone?: number;
  email?: EmailLink;
};

function Accordian({
  title,
  links = null,
  labels = null,
  phone,
  email,
}: PropType) {

  const [show, setShow] = useState<string>("");
  return (
    <div className="footer-link-column">
      <div className={`hide-in-mobile ${show}`}>
        <h4
          className=""
          onClick={() =>
            setShow((prevShow) => (prevShow === "open" ? "" : "open"))
          }
        >
          {title}
        </h4>

        {links && (
          <ul>
            {links.map((e: any, index: any) => {
              return (
                <li key={index}>
                  {e?.link && e?.label && <Link href={e.link}>{e.label}</Link>}
                </li>
              );
            })}
          </ul>
        )}

        {labels && (
          <ul>
            {labels.map((e: any, index: any) => {
              return (
                <li key={index}>
                  <span className="pr-3">-</span>
                  {e}
                </li>
              );
            })}
          </ul>
        )}
        <ul>
          {phone && (
            <li className="location-phone location-address ">
              <Link
                className="phone-number "
                data-ya-track="phone"
                href={`tel:${phone}`}
                rel="noopener noreferrer"
              >
                {svgIcons.phn_icn} {phone}
              </Link>
            </li>
          )}
          {email?.link && email?.label && (
            <li className="location-address ">
              <Link
                className="link-line-text relative"
                href={`mailto:${email.link}`}
              >
                {svgIcons.email_icn} {email.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Accordian;
