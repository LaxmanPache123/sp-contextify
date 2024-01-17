import React, { useState } from "react";
import { Box, MenuItem, Popover, Paper, Icon, Typography } from "@mui/material";
import useContextMenu from "../Hooks/useContextMenu";

const ContextMenu = ({ id, event, menus = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [allData, setAllData] = useState(null);
  const fetchClickEventDetails = (e) => {
    e.stopPropagation();
    setAllData(e.detail);
    setAnchorEl({
      top: e.detail.clientY,
      left: e.detail.clientX,
    });
  };
  window.addEventListener("UPDATE_UNREAD_JOB_COUNTS", fetchClickEventDetails);

  const onClose = () => {
    setAnchorEl(null);
  };
  return (
    <Popover
      anchorReference="anchorPosition"
      onClose={onClose}
      open={Boolean((anchorEl?.top || anchorEl?.left) && allData?.id === id)}
      anchorPosition={anchorEl}
    >
      <Paper
        backgroundColor="primary"
        sx={{ width: "auto", overflow: "hidden" }}
      >
        <Box>
          {menus?.length > 0 ? (
            menus?.map((item) => {
              const { id } = item;
              return (
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    item.onMenuClick.bind(item)();
                  }}
                  key={id}
                >
                  <Box display="flex" alignItems="center">
                    {item?.icon ? <item.icon color="primary" /> : null}
                    <Box ml={2} display="flex" flexGrow={1}>
                      <Typography>{item.label}</Typography>
                    </Box>
                  </Box>
                </MenuItem>
              );
            })
          ) : (
            <MenuItem>Do not have any menu.</MenuItem>
          )}
        </Box>
      </Paper>
    </Popover>
  );
};

export default ContextMenu;
