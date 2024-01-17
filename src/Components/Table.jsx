import React from "react";
import styles from "./styles.module.css";
import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import useContextMenu from "../Hooks/useContextMenu";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledDiv = styled.td`
  color: green;
  font-size: 20px;
`;
const Table = ({ data }) => {
  const RightClickMenus = [
    {
      label: "Edit document",
      id: "edit_document",
      icon: EditIcon,
      onMenuClick: () => {
        console.log("Edit document");
      },
    },
    {
      label: "view document",
      id: "edit_document",
      icon: VisibilityIcon,
      onMenuClick: () => {
        console.log("view Document");
      },
    },
    {
      label: "delete document",
      id: "delete_document",
      icon: DeleteIcon,
      onMenuClick: () => {
        console.log("delete document");
      },
    },
  ];

  const { showRowLevelMenus } = useContextMenu();
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            onContextMenu={(e) => {
              showRowLevelMenus({ id: "test123", event: e });
            }}
            key={item.id}
          >
            <td>{item.id}</td>
            <td className={styles.border}>{item.name}</td>
            <StyledDiv>{item.age}</StyledDiv>
          </tr>
        ))}
        <ContextMenu id="test123" menus={RightClickMenus} />
      </tbody>
      =
    </table>
  );
};

export default Table;
