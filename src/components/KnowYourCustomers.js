import React from "react";
import MaterialTable from "material-table";

const customers = [
  {
    firstname: "Nabil",
    lastname: "Irfan",
    mobile: "+12042186555",
    email: "nabilirfan95@gmail.com",
    totalinvestment: 50000,
    status: "Completed",
  },
  {
    firstname: "Leonard",
    lastname: "Edwin",
    mobile: "+12892169005",
    email: "leonard.edwin1@gmail.com",
    totalinvestment: 75000,
    status: "Pending",
  },
  {
    firstname: "Bob",
    lastname: "Scott",
    mobile: "+17892053636",
    email: "bob.t@gmail.com",
    totalinvestment: 0,
    status: "Rejected",
  },
  {
    firstname: "Jon",
    lastname: "Meyers",
    mobile: "+15962186555",
    email: "JM@gmail.com",
    totalinvestment: 660000,
    status: "Completed",
  },
  {
    firstname: "Justin",
    lastname: "T",
    mobile: "+1589986555",
    email: "JT@gmail.com",
    totalinvestment: 0,
    status: "Pending",
  },
];
const KnowYourCustomers = () => {
  return (
    <MaterialTable
      columns={[
        { title: "First Name", field: "firstname" },
        { title: "Last Name ", field: "lastname" },
        { title: "Mobile", field: "mobile" },
        { title: "Email", field: "email" },
        { title: "Total Investment", field: "totalinvestment" },
        { title: "Status", field: "status" },
      ]}
      data={customers}
      title="Customers"
      style={{ marginBottom: 250 }}
    />
  );
};

export default KnowYourCustomers;
