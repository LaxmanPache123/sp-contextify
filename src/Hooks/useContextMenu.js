const useContextMenu = () => {
  const showRowLevelMenus = ({ id, event, ...props }) => {
    // console.log({ id, event });
    event.preventDefault();
    const { clientX, clientY } = event;
    let Event11 = new CustomEvent("UPDATE_UNREAD_JOB_COUNTS", {
      detail: { clientX, clientY, id, ...props },
    });
    window.dispatchEvent(Event11);
  };

  return {
    showRowLevelMenus,
  };
};
export default useContextMenu;
