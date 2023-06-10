import { useForm } from 'react-hook-form';
import useAuthContext from '../../../../hooks/useAuthContext';
import axios from 'axios';
import useSecureUrl from '../../../../hooks/useSecureUrl';
import Swal from 'sweetalert2';

const AddClasses = () => {
  const { user } = useAuthContext();
  const [secureURL] = useSecureUrl();
  const subCategory = [
    'Portraits',
    'Still Life',
    'Animals',
    'Cartooning and Comics',
    'Concept Art',
    'Fashion Illustration',
    'Architectural Drawings',
    'Nature and Botanical Illustration',
    'Fantasy and Sci-Fi Art',
  ];
  const imgHost = import.meta.env.VITE_IMAGE_BB_API_KEY;
  const imageBbURL = `https://api.imgbb.com/1/upload?key=${imgHost}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    data.price = parseFloat(data.price);
    data.seat = parseInt(data.seat);
    data.status = 'pending';
    const formData = new FormData();
    formData.append('image', data.imageURL[0]);
    await axios
      .post(imageBbURL, formData)
      .then(async (res) => {
        data.imageURL = res.data.data.url;
        await secureURL.post('/adClass/instructor', data).then((res) => {
          if (res.data.insertedId && res.data.acknowledged) {
            Swal.fire('Success', 'You add this class Successfully', 'success');
            reset();
          }
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Don't duplicate image or rename image",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section className='allContainer h-[100vh]'>
      <form onSubmit={handleSubmit(onSubmit)} className='my-auto'>
        <div className='md:w-2/4 mx-auto md:grid grid-cols-2 gap-3'>
          <div className=''>
            <label htmlFor='instructor' className='block py-1 uppercase'>
              Your Name
            </label>
            <input
              id='instructor'
              className='border-2 disabled-input p-3 w-full rounded'
              {...register('instructor', { required: true })}
              value={user?.displayName}
            />
          </div>
          <div className=''>
            <label htmlFor='instructor_mail' className='block py-1 uppercase'>
              Email
            </label>
            <input
              id='instructor_mail'
              className='border-2 disabled-input p-3 w-full rounded'
              {...register('instructor_mail', { required: true })}
              value={user?.email}
            />
          </div>
          <div className=''>
            <label htmlFor='className' className='block py-1 uppercase'>
              Class Name
            </label>
            <input
              id='className'
              className='border-2 border-black p-3 w-full rounded'
              {...register('className', { required: true })}
            />
          </div>
          <div>
            <label htmlFor='imageURL' className='block py-1 uppercase'>
              Image
            </label>

            <input
              id='imageURL'
              type='file'
              className='border-2 border-black w-full rounded file-input-bordered file-input-md file-input'
              {...register('imageURL', { required: true })}
            />
          </div>
          <div className=''>
            <label htmlFor='price' className='block py-1 uppercase'>
              Price
            </label>
            <input
              id='price'
              className='border-2 border-black p-3 w-full rounded'
              type='number'
              {...register('price', { required: true })}
              step='0.01'
            />
          </div>
          <div className=''>
            <label htmlFor='seat' className='block py-1 uppercase'>
              Seat
            </label>
            <input
              id='seat'
              className='border-2 border-black p-3 w-full rounded'
              type='number'
              {...register('seat', { required: true })}
            />
          </div>
        </div>
        <div className='md:w-2/4 mx-auto pt-5 pb-3'>
          <select
            className='border-2 border-black p-3 w-full rounded'
            {...register('subCategory')}
            placeholder='Sub category'
            required
          >
            {subCategory.map((subCategory, i) => (
              <option key={'subCate' + i} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='md:w-2/4 mx-auto'>
          <label htmlFor='classDetails' className='block py-1 uppercase'>
            Class Details
          </label>
          <textarea
            id='classDetails'
            className='border-2 border-black p-3 w-full rounded resize-none'
            rows={2}
            {...register('classDetails', { required: true })}
          />
          <div className='flex justify-between'>
            <input type='submit' className='btn-primary my-3' />
            <input type='reset' className='btn-danger my-3' />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddClasses;
