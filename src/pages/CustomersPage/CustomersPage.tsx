import "./CustomersPage.scss";
import search from "@/assets/icons/search.svg";

export const CustomersPage = () => {
  return (
    <div className="customers-page">
      <div className="customers-header">
        <div className="customers-description">
          <h1>All Customers</h1>
          <p>Active Members</p>
        </div>
        <div className="customers-search">
          {/* <input type="text" name="Search" id="" placeholder="Search" /> */}

          <div className="input">
            <input placeholder="Search" type="text" />
            <img className="icon" src={search}></img>
          </div>
        </div>
      </div>
      <div className="customers-table"></div>
    </div>
  );
};
