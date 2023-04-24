import * as React from "react";
/**
 * Create HolidayHour for holiday feild
 * @param props
 * @returns html for holiday hours feild
 */
type Holidayhour = {
  isClosed: boolean;
};

const Holidayhour = (props: any) => {
  const date = new Date();
  const Day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${year}-${month}-${Day}`;
  const array: any = [];
  props.hours.map((i: any) => {
    const d1 = new Date(`${currentDate}`);
    const d2 = new Date(`${i.date}`);
    if (d2.getTime() >= d1.getTime()) {
      array.push(i);
    }
  });
  return (
    <>
    
      {array.map((res: any) => {
        const weeks = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const a = [{ day: '2-digit' }, { month: 'numeric' }, { year: 'numeric' }];
        function join(t: any, a: any, s: any) {
          function format(m: any) {
            const f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
          }
          return a.map(format).join(s);
        }
        const d = new Date(res.date);
        const day = d.getDay();
        let date: any = d.getDate();
        if (date < 10) {
          date = "0" + date;
        }
        let month: any = d.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        const year = d.getFullYear();
        let ddate: any
        return (
          <>
            <div className="pop-up-holyhrs">
              <div>{`${date}/${month}/${year}`}</div>
              <div>{weeks[day]}</div>
              <div>
                {props?.c_specificDay && props.c_specificDay?.map((specificDay: any) => {


                  if (specificDay?.holidayDate == res.date) {
                    ddate = res.date

                    return (
                      <span className="specificday">
                        {specificDay?.holidayName ? specificDay.holidayName : <div>{join(new Date(res.date), a, '-')}</div>
                        }
                      </span>
                    )
                  }
                }
                )}
                {ddate == res?.date ? <></> :
                  <div>Holiday</div>
                }
              </div>
              {!res.isClosed && (
                <div className="">
                  {res.openIntervals?.map(
                    (openinterval: any) => {
                      return (
                        <>
                          <div>
                            <span className="op-time">
                              {openinterval?.start}
                            </span>
                            <span className="spac-bx"> - </span>
                            <span className="cl-time">{openinterval?.end}</span>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              )}
              {res.isClosed && <div>Closed</div>}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Holidayhour;
