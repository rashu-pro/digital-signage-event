import Script from "next/script";

export default function Sidebar(props){
  return (
    <div className="ds-event-wrapper-sidebar">
      <Script id="script-sidebar" strategy="lazyOnload">
        {
          `
            document.querySelector('.ds-event-wrapper-sidebar').style.paddingTop = headHeight+"px";
          `
        }
      </Script>
      <div className="ds-event-wrapper-sidebar-inner ds-sidebar">
        <div className="ds-sidebar-head">
          <h2 className="m-0 pb-1 ds-sidebar-title">{props.title}</h2>
        </div>

        <div className="event-list">
          <div className="event-list-item event-list-item-0">
            <p className="m-0 event-list-item-date">Friday, November 15</p>
            <p className="m-0 event-list-item-head">3rd Sunday</p>
            <div className="event-list-item-body">
              <p className="m-0">
                All Day
              </p>
            </div>
          </div>

          <div className="event-list-item event-list-item-1">
            <p className="m-0 event-list-item-date">Monday, January 18</p>
            <p className="m-0 event-list-item-head">Martin Luther King Day</p>
            <div className="event-list-item-body">
              <p className="m-0 d-table">
                <span className="table-cell left">07:00 AM </span>
                <span className="table-cell right">Breakfast</span>
              </p>

              <p className="m-0 d-table">
                <span className="table-cell left">12:00 PM </span>
                <span className="table-cell right">Lunch</span>
              </p>
            </div>
          </div>

          <div className="event-list-item event-list-item-2">
            <p className="m-0 event-list-item-date">Wednesday, January 20</p>
            <p className="m-0 event-list-item-head">California Tuesday</p>
            <div className="event-list-item-body">
              <p className="m-0 d-table">
                <span className="table-cell left">07:00 AM </span>
                <span className="table-cell right">Breakfast</span>
              </p>

              <p className="m-0 d-table">
                <span className="table-cell left">12:00 PM </span>
                <span className="table-cell right">Tech Work</span>
              </p>
            </div>
          </div>

          <div className="event-list-item event-list-item-3">
            <p className="m-0 event-list-item-date">Thursday, January 01</p>
            <p className="m-0 event-list-item-head">3rd Sunday</p>
            <div className="event-list-item-body">
              <p className="m-0">
                All Day
              </p>
            </div>
          </div>

          <div className="event-list-item event-list-item-4">
            <p className="m-0 event-list-item-date">Friday, November 15</p>
            <div className="event-list-item-body">
              <p className="m-0 d-table">
                <span className="table-cell left">07:00 AM </span>
                <span className="table-cell right">Breakfast</span>
              </p>

              <p className="m-0 d-table">
                <span className="table-cell left">12:00 PM </span>
                <span className="table-cell right">Lunch</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}