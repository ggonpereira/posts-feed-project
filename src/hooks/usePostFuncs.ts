import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import api from '../api';
import { Posts } from '../types/posts';
import { SetStateProp } from '../types/state';

const MySwal = withReactContent(Swal);

type Props = SetStateProp<Posts[]>;

const usePostFuncs = (setPosts: Props) => {
  const history = useHistory();

  const fetchData = async () => {
    const { data } = await api.get('/');

    setPosts(data.results);
  };

  const savePost = async (title: string, content: string) => {
    const storedValue = localStorage.getItem('@PostsFeed:userData');
    if (storedValue) {
      const username: string = JSON.parse(storedValue)[0].name;

      api
        .post('/', {
          username,
          title,
          content,
        })
        .then(() => {
          fetchData();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      const result = await MySwal.fire(
        'Error!',
        'You have to set a username to be able to post something.',
        'error',
      );

      if (result.isConfirmed) {
        history.push('/');
      }
    }
  };

  const removePostFunc = async (actualPostId: number) => {
    const result = await MySwal.fire({
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/${actualPostId}/`);
        MySwal.fire('Deleted!', 'Your post has been deleted.', 'success');
        return fetchData();
      } catch (error) {
        console.log(error);
        MySwal.fire(
          'Error!',
          'An error occurred while deleting your post.',
          'error',
        );
      }
    }
    return null;
  };

  const saveEditedPostFunc = (
    actualPostId: number,
    setIsModalOpen: SetStateProp<boolean>,
    editedTitle: string,
    editedContent: string,
    setEditedTitle: SetStateProp<string>,
    setEditedContent: SetStateProp<string>,
  ) => {
    api
      .patch(`/${actualPostId}/`, {
        title: editedTitle,
        content: editedContent,
      })
      .then(() => {
        fetchData();
      })
      .catch(error => {
        console.log(error);
      });
    setIsModalOpen(false);
    setEditedTitle('');
    setEditedContent('');
  };

  return { savePost, removePostFunc, saveEditedPostFunc };
};

export default usePostFuncs;
