import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
const NotFoundPage = () => {
    return (
      <>
      <div className="relativ">
        <NavLink className=' absolute top-20 left-30 z-0 inline-flex  gap-2 items-center justify-center  text-cyan-400 w-30 h-8 px-2 py-1 text-sm border-2 border-cyan-400  rounded-2xl hover:text-cyan-600  hover:border-cyan-600 curcor-pointer' to='/'>  <HiOutlineArrowLongLeft/> Go back</NavLink>
      <img src={'https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/12/22/ae36c0d0-52ea-4a4a-a691-bec9b2458f5b.png'} alt="error 404" style={{ borderRadius: '5px' }} />
      </div>
      </>
    );
  };
  
  export default NotFoundPage;