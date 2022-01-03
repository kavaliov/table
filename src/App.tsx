import React from "react";
import { Table } from "./components";

function App() {
  const [editable, setEditable] = React.useState<boolean>(true);
  const [teacherMode, setTeacherMode] = React.useState<boolean>(false);

  const builderHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditable(event.target.checked);
    setTeacherMode(false);
  };

  const teacherHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeacherMode(event.target.checked);
  };

  return (
    <div className="App">
      <div style={{ width: 700, margin: "20px auto 35px" }}>
        <label style={{ userSelect: "none", cursor: "pointer", marginRight: 16 }}>
          <input
            checked={editable}
            type="checkbox"
            onChange={builderHandler}
            style={{ marginRight: 4 }}
          />
          Builder mode
        </label>
        <label
          style={{ userSelect: "none", cursor: "pointer" }}
        >
          <input
            disabled={editable}
            checked={teacherMode}
            type="checkbox"
            onChange={teacherHandler}
            style={{ marginRight: 4 }}
          />
          Teacher mode
        </label>
      </div>
      <Table
        builderMode={editable}
        teacherMode={teacherMode}
        onAnswerChange={(answers) => console.log(answers)}
      />
    </div>
  );
}

export default App;
