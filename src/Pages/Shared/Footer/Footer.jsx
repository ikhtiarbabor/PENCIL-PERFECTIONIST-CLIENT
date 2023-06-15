import moment from 'moment/moment';

const Footer = () => {
  return (
    <footer className='bg-slate-700'>
      <div className='footer p-10 bg-transparent text-white allContainer'>
        <div>
          <img src='https://i.ibb.co/P9XMgDd/Logo.png' className='w-[350px]' />
          <p>Pencil Perfectionist</p>
        </div>
        <div>
          <span className='footer-title'>Services</span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </div>

      <div className='text-center text-white text-sm py-3 bg-slate-500'>
        <p>
          Copyright © {moment().format('YYYY')} - All right reserved by Pencil
          Perfectionist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
