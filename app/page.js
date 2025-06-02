import Navbar from "./_components/navbar";
import Parnters from "./parnters";
import Servers from "./servers";
import Services from "./services";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
export default function Home() {

  return (
    <>
      <div className="fath pt-[90px]">
        {/* <Navbar /> */}
<div className="relative w-full h-[90vh] overflow-hidden bg-[#091F3F]">
  {/* صورة الخلفية (أعمدة) */}
  <img
    src="/images/Mask group.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* الأيقونات فوق الأعمدة */}
  {/* اليسار */}
  <img
    src="/images/Group 3621.png"
    alt="icon1"
    className="absolute left-[1%] top-[25%] w-[45px] md:w-[90px] hidden sm:block z-10"
  />
  <img
    src="/images/wordpress-1 1.png"
    alt="icon2"
    className="absolute left-[1%] top-[60%] w-[45px] md:w-[100px] hidden sm:block z-10"
  />
  <img
    src="/images/MC-01 2.png"
    alt="icon3"
    className="absolute left-[10%] top-[43%] w-[45px] md:w-[120px] hidden sm:block z-10"
  />

  {/* اليمين */}
  <img
    src="/images/Group 3997.png"
    alt="icon4"
    className="absolute right-[2%] top-[30%] w-[45px] md:w-[90px] hidden sm:block z-10"
  />
  <img
    src="/images/123456790.png"
    alt="icon5"
    className="absolute right-[0.5%] top-[60%] w-[45px] md:w-[90px] z-10 hidden sm:block"
  />
  <img
    src="/images/درع-01 2.png"
    alt="icon6"
    className="absolute right-[10%] top-[35%] w-[45px] md:w-[150px] z-10 hidden sm:block"
  />

  {/* النص والمحتوى */}
  <div className=" relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">حلول</h1>
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">إستضافات الويب المثالية</h2>
    <p className="text-sm md:text-base mb-6 max-w-[600px]">
      شركة الدورسفت الليبي هي الشركة الرائدة في تقديم حلول التكنولوجيا والخدمات السحابية في ليبيا
    </p>
    <div className="bhh flex items-center gap-2 w-full max-w-md mx-auto">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">
        بحث
      </button>
      <input
        type="text"
        placeholder="Search for a new domain"
        className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
      />
    </div>
  </div>
</div>

        <br />
        <Services />
        <br />
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">  طرق الدفع</h2><br />
          <div className="text-center text-black-500 mb-10 font-bold par dviv">
            <img src="/images/Group 4037.png" className="md:w-[100%]" />
          </div>
        </div><br /><br />
        <Servers />
    {/******* */}

      <div className="px-6 py-12">
      <div className="max-w-screen-xl mx-auto">

        {/* الصف الأول */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <img src="/imgs/Group 4368.png" alt="Image 1" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4369.png" alt="Image 2" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4370.png"alt="Image 3" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4371.png" alt="Image 4" className="w-[270px] h-[101px] mgs object-contain" />
        </div>

        {/* الصف الثاني */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <img src="/imgs/Group 4372.png" alt="Image 5" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4373.png" alt="Image 6" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4374.png" alt="Image 7" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4375.png" alt="Image 8" className="w-[270px] h-[101px] mgs object-contain" />
        </div>

        {/* الصف الثالث */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <img src="/imgs/Group 4376.png" alt="Image 9" className="w-[270px] h-[101px] mgs object-contain" />
          <img src="/imgs/Group 4377.png" alt="Image 10" className="w-[270px] h-[101px] mgs object-contain" />
        </div>

      </div>
    </div>

    {/******* */}
        <section className="services-clients">
          <div className='services'>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2"> خدمات كبيرة تلبي احتياجات عملك</h2>
              <p className="text-center text-black-500 mb-10 "> من خلال منتجاتنا وخدماتنا السحابية، ستجد بأننا نلبي 100٪ من احتياجات عملك والبيانات، مع أمان فائق للبنية التحتية الخاصة بك.</p>
              <br />
              <img src="/images/Group 4396.png" className="image" />
            </div><br />

            <div className="w-[80%] mx-auto flex flex-wrap justify-between items-center gap-6">

              <div className="crd flex-1 min-w-[250px] h-[300px] bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/images/Group 4050 (1).png"
                  alt="Card 1"
                  className="w-full h-full center"
                />
              </div>


              <div className="crd flex-1 min-w-[250px] h-[300px] bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/images/Group 4050 (2).png"
                  alt="Card 2"
                  className="w-full h-full center"
                />
              </div>


              <div className="crd flex-1 min-w-[250px] h-[300px] bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/images/Group 4050.png"
                  alt="Card 3"
                  className="w-full h-full center"
                />
              </div>
            </div><br />
          </div>
        </section>
        <br />
        <section className="py-12 px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image Section */}
            <div className="image md:w-1/2">
              <img
                src="/images/image 17.png"
                alt="لوحة خدمات المشتركين"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Content Section */}
            <div className="content md:w-1/2 text-right">
              <p className="text-black-600 font-medium mb-2">لوحة خدمات المشتركين</p>
              <h2 className="text-3xl font-bold mb-4">لوحة تحكم شاملة</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                لوحة تحكم مدارة بالكامل، سريعة الاستجابة وسهلة الاستخدام لإدارة جميع خدماتك السحابية.
              </p>

              {/* Features Cards */}
              <div className="space-y-4">
                <div className="cardsm bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <span className="text-blue-500"><FaMinus /></span>
                    <h3 className="font-semibold">إدارة سهلة</h3>
                  </div>
                  <p className="text-gray-600 text-right">
                    إدارة كاملة ونظرة شاملة على جميع خدماتك في مكان واحد.
                  </p>
                </div>

                <div className="crdsmo bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-end gap-2">
                  <span className="text-blue-500"><FaPlus /></span>
                  <span>تشغيل بنقرة واحدة</span>
                </div>

                <div className="crdsmo bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-end gap-2">
                  <span className="text-blue-500"><FaPlus /></span>
                  <span>تشغيل بنقرة واحدة</span>
                </div>
              </div>
            </div>
          </div>
        </section>
          <Parnters/>
        <section className="sey-clients">
          <div className="flex items-center justify-around sey">
            <div className="imag1">
              <img src="/images/Group 4150.png" />
            </div>
            <div className="imag2">
             
              <img src="/images/Group 25 (1).png"/>
              
            </div>
          </div>
        </section>
      </div> 
    </> 
  );
}
