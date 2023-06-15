import { useEffect } from 'react';
import { BsInfoLg } from 'react-icons/bs';

const Modal = ({ id, data, use }) => {
  useEffect(() => {
    document.getElementById(`${id}`).addEventListener('click', () => {
      document.getElementById(`my_modal_${id}`).showModal();
    });
  }, [id]);

  return (
    <>
      {use === 'booking' ? (
        <button
          id={`${id}`}
          className='btn rounded-full border-blue-700 text-blue-700 bg-white text-base hover:bg-blue-700 hover:text-white'
        >
          <BsInfoLg></BsInfoLg>
        </button>
      ) : (
        <button id={`${id}`} className='btn btn-ghost btn-xs'>
          details
        </button>
      )}

      <dialog
        id={`my_modal_${id}`}
        className='modal modal-bottom sm:modal-middle'
      >
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>{data?.className}</h3>
          <p className='py-4'>
            {data?.status !== 'approved' ? (
              data?.status === 'pending' ? (
                <h2>Wait ......</h2>
              ) : (
                <h2>Don't Duplicate Class name, Class Image and Details</h2>
              )
            ) : (
              <p>Details</p>
            )}
          </p>
          <div className='modal-action'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn'>Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
