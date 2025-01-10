
import Navbar from '../../components/Navbar/Navbar'
import '../../App.css'
import banner from '../../assets/hero_banner.jpg'
import Htitle from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Cards from '../../components/TitleCard/TitleCard'
function Home() {
  return (

    <>
      <Navbar />
      <div className="relative">
        <img
          className="w-full banner "
          src={banner}
          alt="Netflix Banner" />
        <div className="absolute left-10 bottom-10" >
          <img
            src={Htitle}
            alt="Title" />
          <p
            className='text-white font-titlee w-5/12'
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue, turpis et iaculis congue, nibh nisl finibus felis, eget convallis ipsum metus ac orci. Aliquam ultricies nec lacus id porta. Aliquam a turpis ultrices, suscipit ex id, consectetur erat. Etiam id mi ac ex blandit blandit. Mauris ultrices, elit nec ullamcorper dictum, enim magna luctus sem, venenatis tincidunt ligula nulla sit amet mi. In elementum eget nisl vitae pellentesque. Integer in hendrerit enim. Vivamus consequat purus nisl, non eleifend justo ornare a. Proin tempor posuere ligula ultrices tincidunt. Sed sed nisi eros.

          </p>
          <div className="btns space-x-4 flex">
            <button className="w-28 hover:bg-gray-300  transition-all font-titlee font-bold rounded-xl  flex items-center ">
              <img src={play} className="w-6 ml-2 mr-4" alt="play" />
              Play
              </button>
              <button className="w-28 border-transparent bg-gray-500 transition-all hover:bg-gray-800 text-white font-titlee font-bold font- rounded-xl flex items-center ">
              <img src={info} className="w-8 ml-2 mr-4" alt="info" />
              Info
              </button>
          </div>
        </div>
      </div>
      <Cards/>
    </>
  )
}

export default Home
