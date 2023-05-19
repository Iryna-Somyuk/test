import imgHomePage from '../images/imgHomePage.jpg';

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center mt-6 md:mt-0 md:flex-row">
      <div className="md:relative md:flex md:flex-col md:w-2/4 md:text-left  md:items-start ">
        <h1 className="mb-4 text-2xl xl:text-3xl font-black fontFamily-serif text-center">
          Welcome to the{' '}
          <span className="uppercase text-sky-600">phonebook</span> application!{' '}
        </h1>
        <span className="text-lg text-justify ">
          Allowing you to add new contacts and edit existing ones, view lists
          and more, and you'll never forget anyone! To start working with the
          Phonebook, you need to{' '}
          <a
            className="text-lg text-sky-700 underline italic hover:text-orange"
            href="/goit-react-hw-08-phonebook/register"
          >
            Register
          </a>
        </span>
      </div>
      <div className="flex w-2/4">
        <img src={imgHomePage} alt="" className="object-cover" />
      </div>
    </div>
  );
};
export default Home;
