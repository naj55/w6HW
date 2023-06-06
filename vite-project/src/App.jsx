import Logo from '../public/timg.png'
import Logos from '../public/logos.svg'
import Courses from './assets/component/Courses'
import './App.css'
import { useState } from 'react';

function App() {


  const [mycourse, setmycourse] = useState([{

    name: "Javascript",
    location: "الرياض",
    duration: "شهرين",
    satatuse: "مفتوح"
  },
  {
    name: "python",
    location: "الرياض",
    duration: "اسبوع",
    satatuse: "منتهي"
  },
  {
    name: "java",
    location: "الرياض",
    duration: "شهر",
    satatuse: "مفتوح"
  }
  ]);

  return (
    <>
      <div className="d-flex justify-content-end mh-100 w-100  p-2">
        <div className="myNav">
          <ul className="nav h-100">
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#">اشترك في النشرة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">أخبار الأكاديمية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                حول الأكاديمية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">المعسكرات والبرامج</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"> الرئيسية
              </a>
            </li>
          </ul>
        </div>

        <img className="logo" src={Logo} height={60} width={220} />


      </div>


      {/* {////////////////////////////////////////////////////////////////////////////////////////} */}
      <div>
        <br /><br />
        <h1 className="d-flex justify-content-center">احدث المعسكرات و البرامج</h1>
      </div>


      <div className='-d'>
        {mycourse.map((course) => {
          return (<Courses name={course.name} location={course.location} duration={course.duration} status={course.satatuse} ></Courses>)
        })}

      </div>

      <footer>
        <div
          class="flex flex-col items-center justify-center col-span-2 p-2 sm:p-10 lg:col-span-1 md:col-span-2">
          <div class="flex gap-2 w-44 md:w-40 ">
          </div>
          <h2 class="text-center text-white" dir="ltr">@TuwaiqAcademy</h2>
        </div>
        <div class="flex items-center justify-center col-span-2">
          <img class="w-full" src={Logos} alt="Logo" />
        </div>
        <div class="pb-4 mt-4 text-center pt-14">
          <p className='pfooter'>جميع الحقوق محفوظة لأكاديمية طويق 2023</p>
        </div>
      </footer>
    </>
  )

}
export default App
