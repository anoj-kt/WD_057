import axios from 'axios';

const CreatePost = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const title = formdata.get('title');
    const content = formdata.get('content');
    const image = formdata.get('image');

    // Validation
    if (!title || !content || !image) {
      return alert('Pls enter all fields');
    }

    const newPostData = {
      title,
      content,
      image,
    };

    //Posting the data
    try {
      const res = await axios.post('http://localhost:8000/posts', newPostData, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='my-4'>
      <form
        className='max-w-screen-md min-h-[80vh] mx-auto flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-xl'>
              Title <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full '
            name='title'
          />
        </label>
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-xl'>
              Content <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <textarea
            className='input input-bordered w-full resize-none min-h-32'
            name='content'
          />
        </label>
        <label className='form-control w-full '>
          <div className='label'>
            <span className='label-text text-xl'>
              Image <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full '
            name='image'
          />
        </label>
        <button className='btn btn-primary w-full'>Create New Event</button>
      </form>
    </main>
  );
};

export default CreatePost;
