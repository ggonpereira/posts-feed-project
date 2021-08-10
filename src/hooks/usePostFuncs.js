import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../api";

const MySwal = withReactContent(Swal);

const usePostFuncs = (setPosts) => {
  const fetchData = async () => {
    const { data } = await api.get("/");

    setPosts(data.results);
  };

  const savePost = (title, content) => {
    const username = JSON.parse(localStorage.getItem("@CodeLeap:userData"))[0]
      .name;

    api
      .post("/", {
        username,
        title,
        content,
      })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removePostFunc = (actualPostId) => {
    MySwal.fire({
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`/${actualPostId}/`);
          MySwal.fire("Deleted!", "Your post has been deleted.", "success");
          return fetchData();
        } catch (error) {
          console.log(error);
          MySwal.fire(
            "Error!",
            "An error occurred while deleting your post.",
            "error",
          );
        }
      }
      return null;
    });
  };

  const saveEditedPostFunc = (
    actualPostId,
    setIsModalOpen,
    editedTitle,
    editedContent,
    setEditedTitle,
    setEditedContent,
  ) => {
    api
      .patch(`/${actualPostId}/`, {
        title: editedTitle,
        content: editedContent,
      })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
    setIsModalOpen(false);
    setEditedTitle("");
    setEditedContent("");
  };

  return { savePost, removePostFunc, saveEditedPostFunc };
};

export default usePostFuncs;
