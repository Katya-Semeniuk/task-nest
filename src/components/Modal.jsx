

export const Modal = ({props}) => {
    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/tasks/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <>

      
    </>
  );
};

export default Modal;
