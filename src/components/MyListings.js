import React from "react";
import MaterialTable from "material-table";

const MyListings = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Calories", field: "calories" },
      { title: "Protein", field: "protein" },
      { title: "Fats", field: "fat" },
      { title: "Carbs", field: "carbs" },
    ],
    data: [
      {
        name: "4145  Venture Place",
        calories: "VEN",
        fat: "$500,000",
        carbs: 500,
        protein: "15/01/2020",
      },
      {
        name: "812  Fourth Avenue",
        calories: "4AVE",
        fat: "$1,000,000",
        carbs: 6000,
        protein: "23/05/2020",
      },
      {
        name: "3896th Street SW",
        calories: "STRE",
        fat: "$9,432,000",
        carbs: 100,
        protein: "18/05/2020",
      },
      {
        name: "3089  Churchill Plaza",
        calories: "CHUR",
        fat: "$210,000",
        carbs: 210,
        protein: "09/09/2021",
      },
      {
        name: "1755th Avenue",
        calories: "1755",
        fat: "$92,000",
        carbs: 300,
        protein: "12/01/2020",
      },
      {
        name: "1715 York St",
        calories: "YRK",
        fat: "$900,000",
        carbs: 1000,
        protein: "12/30/2020",
      },
      {
        name: "795 Brant Ave",
        calories: "BRAN",
        fat: "$34,000",
        carbs: 3000,
        protein: "06/06/2020",
      },
      {
        name: "788 Thurston Dr",
        calories: "THUR",
        fat: "$567,000",
        carbs: 5500,
        protein: "25/11/2020",
      },
    ],
  });

  return (
    <MaterialTable
      title="Create New"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      style={{ marginBottom: 250 }}
    />
  );
};

export default MyListings;
