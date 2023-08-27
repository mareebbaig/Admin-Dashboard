import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>AREEB</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='/notifications.svg' alt='' />
          <span>29</span>
        </div>
        <div className='user'>
          <img
            src='https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg'
            alt=''
          />
          <span>hehe</span>
        </div>
        <img src='/setting.svg' alt='' className='icon' />
      </div>
    </div>
  );
};
