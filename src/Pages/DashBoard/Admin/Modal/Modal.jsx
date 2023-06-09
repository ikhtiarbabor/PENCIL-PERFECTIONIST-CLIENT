import { useEffect } from 'react';

const Modal = ({ id, data }) => {
  useEffect(() => {
    document.getElementById(`${id}`).addEventListener('click', () => {
      document.getElementById(`my_modal_${id}`).showModal();
    });
  }, [id]);
  return (
    <>
      <button id={`${id}`} className='btn btn-ghost btn-xs'>
        details
      </button>
      <dialog
        id={`my_modal_${id}`}
        className='modal modal-bottom sm:modal-middle'
      >
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>{data.instructor_mail}</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
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
