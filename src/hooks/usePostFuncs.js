import * as uuid from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const usePostFuncs = (setPosts) => {
  const removePostFunc = (postId) => {
    MySwal.fire({
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const savedData = JSON.parse(
          localStorage.getItem("@CodeLeap:userData"),
        );
        const savedPosts = savedData[1].posts;

        const newArray = [
          { ...savedData[0] },
          { posts: savedPosts.filter((post) => post.id !== postId) },
        ];

        setPosts(newArray[1].posts);
        MySwal.fire("Deleted!", "Your post has been deleted.", "success");
        return localStorage.setItem(
          "@CodeLeap:userData",
          JSON.stringify(newArray),
        );
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
    const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));
    const foundIndex = savedData[1].posts.findIndex(
      (post) => post.id === actualPostId,
    );
    const toChange = savedData[1].posts[foundIndex];

    const editedArray = {
      ...toChange,
      title: editedTitle,
      content: editedContent,
    };

    savedData[1].posts[foundIndex] = editedArray;

    const newArray = [{ ...savedData[0] }, { posts: [...savedData[1].posts] }];

    setPosts(newArray[1].posts);
    setIsModalOpen(false);
    setEditedTitle("");
    setEditedContent("");
    return localStorage.setItem("@CodeLeap:userData", JSON.stringify(newArray));
  };

  const savePost = (title, content) => {
    const savedData = JSON.parse(localStorage.getItem("@CodeLeap:userData"));

    const newPost = {
      id: `post:${uuid.v4()}`,
      title,
      content,
      createdBy: savedData[0].name,
      createdAt: new Date(),
    };

    const newArray = [
      { ...savedData[0] },
      { posts: [newPost, ...savedData[1].posts] },
    ];

    setPosts(newArray[1].posts);
    return localStorage.setItem("@CodeLeap:userData", JSON.stringify(newArray));
  };

  return { removePostFunc, saveEditedPostFunc, savePost };
};

export default usePostFuncs;
