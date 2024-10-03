import "./App.css";
const App = () => {
  const read = () => {
    fetch("https://sheetdb.io/api/v1/czugxcpbodijh")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const update = () => {
    fetch("https://sheetdb.io/api/v1/czugxcpbodijh/id/3", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: "Shivi",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const delete1 = () => {
    fetch("https://sheetdb.io/api/v1/czugxcpbodijh/id/3", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={read}>Click Here</button>
      <button onClick={update}>Update</button>
      <button onClick={delete1}>Delete</button>
    </div>
  );
};

export default App;
