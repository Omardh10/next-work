import React from 'react'

const Parnters = () => {

    const cards = [
        {
            id: 1,
            title: 'البطاقة الأولى',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/Memcached-Logo.wine 1.png' // استبدل بمسار الصورة الفعلي
        },
        {
            id: 2,
            title: 'البطاقة الثانية',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/8ea9b190-df1f-11ee-b074-b5c8fe3ef189-cloudflare-logo 1 (1).png' // استبدل بمسار الصورة الفعلي
        },
        {
            id: 3,
            title: 'البطاقة الثالثة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/1_w-9_YsDVOq4MW2qvwCnEzg 1.png' // استبدل بمسار الصورة الفعلي
        },
        {
            id: 4,
            title: 'البطاقة الرابعة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/os-img-4 2.png' // استبدل بمسار الصورة الفعلي
        },
        {
            id: 5,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/mariadb-logo-vert_blue-transparent 1.png' // استبدل بمسار الصورة الفعلي
        },
          {
            id: 6,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/quic-cloud-logo-icon-light_600px 1.png' // استبدل بمسار الصورة الفعلي
        },
          {
            id: 5,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/litespeed-logo-square 1.png' // استبدل بمسار الصورة الفعلي
        },
          {
            id: 5,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/Group 4360.png' // استبدل بمسار الصورة الفعلي
        },
         {
            id: 5,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/Group 4359.png' // استبدل بمسار الصورة الفعلي
        },
         {
            id: 5,
            title: 'البطاقة الخامسة',
            description: 'وصف محتوى البطاقة هنا',
            image: '/images/Vector.png' // استبدل بمسار الصورة الفعلي
        }
    ];

    return (
        <div>
            <div className="py-12 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">شركاؤنا</h2>
                    <p className="text-black-500 mb-6 font-bold max-w-2xl mx-auto">
                        نعمل بشراكاتنا مع رواد التكنولوجيا لتقديم حلول استضافة آمنة وموثوقة تدعم نمو أعمال عملائنا وتحقيق أهدافهم في العالم الرقمي
                    </p>
                </div>

                <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* البطاقة الأولى */}
                    <div className="crd bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
                        <img
                            src="/images/cpanel-logo 1.png"
                            alt="cPanel"
                            className="object-contain w-[180px] h-[120px] mb-6"
                        />
                        <div className="text text-right text-gray-700">
                            حاز cPanel على ثقة ملايين المستخدمين في جميع أنحاء العالم لأكثر من 20 عاماً، وظلت منصة أتمتة الاستضافات الرائدة.
                        </div>
                    </div>

                    {/* البطاقة الثانية */}
                    <div className="crd bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
                        <img
                            src="/images/linode 1.png"
                            alt="Linode"
                            className="object-contain w-[180px] h-[120px] mb-6"
                        />
                        <div className="text text-right text-gray-700">
                            هو أكبر مزود مستقل للخدمات السحابية المفتوحة في العالم مع 11 مركز بيانات عالمياً تخدم ما يقرب من مليون عميل وشركة حول العالم.
                        </div>
                    </div>

                    {/* البطاقة الثالثة */}
                    <div className="crd bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
                        <img
                            src="/images/cloudlinux 1.png"
                            alt="CloudLinux"
                            className="object-contain w-[150px] h-[100px] mb-6"
                        />
                        <div className="text text-right text-gray-700">
                            يعد نظام التشغيل CloudLinux OS المنصة الرائدة في مجال تعدد المستأجرين. فهو يعمل على تحسين استقرار الخادم وكثافته وأمانه من خلال عزل كل مستأجر.
                        </div>
                    </div>
                </div>
            </div>
    <div className="container mx-auto px-4 py-8">
      {/* الصف الأول */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cards.slice(0, 5).map((card) => (
          <div
            key={card.id}
            className="w-[184px] h-[184px] bg-white crdsm rounded-lg shadow-md overflow-hidden"
          >
            {/* جزء الصورة */}
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="object-contain w-[100px] h-[100px] m-auto"
              />
            </div>

            {/* جزء النص */}
            <div className="p-2 flex-1 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-center text-gray-800">{card.title}</h3>
              <p className="text-xs text-gray-500 text-center mt-1 line-clamp-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* الصف الثاني */}
      <div className="flex flex-wrap justify-center gap-4">
        {cards.slice(5, 10).map((card) => (
          <div
            key={card.id}
            className="w-[184px] h-[184px] bg-white rounded-lg shadow-md crdsm overflow-hidden"
          >
            {/* جزء الصورة */}
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="object-contain w-[100px] h-[100px] m-auto"
              />
            </div>

            {/* جزء النص */}
            <div className="p-2 flex-1 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-center text-gray-800">{card.title}</h3>
              <p className="text-xs text-gray-500 text-center mt-1 line-clamp-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

    )
}

export default Parnters
