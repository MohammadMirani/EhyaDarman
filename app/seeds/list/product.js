const Models = require("../../mongo/models");

const productsObject = [
  {
    code: "EPC-1",
    name: [
      {
        value: "CT Scan EDP-16",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه سی تی اسکن 16 اسلایس EDP-16 یک دستگاه تصویربرداری میباشد که به عنوان یک محصول دانش بنیان در کارخانجات احیا درمان پیشرفته تولید میشود.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EPC-2",
    name: [
      {
        value: "EDP-Neptune",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ماشین بیهوشی EDP-Neptune دستگاهی است که در اتاق عمل با ترکیب گازهای بیهوشی مورد استفاده قرار میگیرد و شرکت احیا درمان پیشرفته موفق به دریافت مجوز دانش بنیان برای این محصول شده است.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EPC-3",
    name: [
      {
        value: "Diomede",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور تنفسی مراقبت های ویژه Diomede یکی از پیشرفته ترین ونتیلاتورهای تولید شده و دانش بنیان شرکت احیا درمان پیشرفته میباشد که به عنوان یک محصول صادراتی قابل رقابت با بزرگترین تولید کننده های خارجی میباشد.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EPC-4",
    name: [
      {
        value: "Dion",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور توربوفن Dion دستگاهی است که بدلید وجود توربوفن دیگر نیاز به کمپرسور هوای فشرده نداشته و عموما در آمبولانس ها و مراکز دمانی مورد استفاده قرار میگیرند.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EPC-5",
    name: [
      {
        value: "NeuViz 128 CT",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور EDP-TS از اولین دستگاه های تولید شده و دانش بنیان این شرکت میباشد که در دوران کرونا به یک دستگاه استراتژیک تبدیل شده و در اکثر مراکز درمانی کشور مورد استفاده قرار گرفته است.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-2",
    subCategoryCode: "SCAT-3",
  },
  {
    code: "EPC-6",
    name: [
      {
        value: "EDP-TS NEO",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور EDP-TS NEO یکی از انواع ونتیلاتور تولید شده توسط شرکت احیا درمان پیشرفته میباشد که متناسب با رنج سنی نوزادان میباشد.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EPC-7",
    name: [
      {
        value: "Neusoft - NSM - S15P",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EPC-8",
    name: [
      {
        value: "Resmed - AirSense 10 Elite",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EPC-9",
    name: [
      {
        value: "Resmed - AirSense 10 AutoSet",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EPC-10",
    name: [
      {
        value: "Resmed - Lumis™ 150 VPAP ST",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EPC-11",
    name: [
      {
        value: "ونتیلاتور مراقبت های ویژه بزرگسال و اطفال EDP-TS",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
    description: [
      {
        locale: "fa-IR",
        data: {
          title: "ویژگی‌های ماشین بیهوشی Drager مدل Primus",
          text:
            "دستگاه ونتیلاتورEDP-TS  یک ونتیلاتور الکتروپنوماتیک می‌باشد که ورودی‌های آن شامل هوای فشرده شده و گاز اکسیژن فشار بالا است.\n" +
            "برای تامین هوای فشرده می‌توان از Air سانترال مراکز درمانی یا یک کمپرسور پرتابل استفاده کرد. به همین ترتیب برای تامین اکسیژن نیز می‌توان از منابع اکسیژن سانترال و یا از کپسول‌های اکسیژن بهره گرفت. پس از ورود گازها به قسمت پنوماتیک، هوای دمی مطابق تنظیمات کاربر، از طریق کنترل الکتریکی پروپورشنال ولو ها، سنسورهای فشار و رگولاتورها تامین و به بیمار منتقل می شود. کنترل های الکتریکی توسط پردازشگر دستگاه اعمال می شود.\n" +
            "این دستگاه، امکان مراقبت از بیماران با یا بدون قابلیت تنفس را دارد و در مواقعی که دستگاه دچار نقص فنی شده و امکان تهویه مکانیکی را ندارد، بیمار می تواند از طریق دریچه هوای اضطراری تهویه شده به راحتی تنفس کند.\n",
          items: [
            { text: "صفحه نمایش لمسی رنگی Touch Screen LCD 12.1 inch" },
            { text: "-\tقابلیت تعریف Tidal Volume از 20 ml" },
            { text: "-\tInvasive and Non-invasive Ventilation" },
            { text: "-\tقابلیت نمایش و ذخیره Loop و Curve تنفسی" },
            { text: "دارای Auto Emergency Mode" },
            { text: "قابلیت کارکرد بدون برق بیش از 3 ساعت" },
            {
              text: "قابلیت انتقال اطلاعات بر روی کامپیوتر مرکزی و تهیه گزارش",
            },
            { text: "قابلیت جبران سازی نشتی Leak Compensation" },
            { text: "دارای نبولایزر داررو" },
          ],
        },
      },
    ],
    introduction: [
      {
        locale: "fa-IR",
        data: {
          title: "معرفی دستگاه",
          image: "smallImage.jpg",
          video: "video_1.jpg",
          text:
            "دستگاه ونتیلاتورEDP-TS  یک ونتیلاتور الکتروپنوماتیک می‌باشد که ورودی‌های آن شامل هوای فشرده شده و گاز اکسیژن فشار بالا است.\n" +
            "برای تامین هوای فشرده می‌توان از Air سانترال مراکز درمانی یا یک کمپرسور پرتابل استفاده کرد. به همین ترتیب برای تامین اکسیژن نیز می‌توان از منابع اکسیژن سانترال و یا از کپسول‌های اکسیژن بهره گرفت. پس از ورود گازها به قسمت پنوماتیک، هوای دمی مطابق تنظیمات کاربر، از طریق کنترل الکتریکی پروپورشنال ولو ها، سنسورهای فشار و رگولاتورها تامین و به بیمار منتقل می شود. کنترل های الکتریکی توسط پردازشگر دستگاه اعمال می شود.\n" +
            "این دستگاه، امکان مراقبت از بیماران با یا بدون قابلیت تنفس را دارد و در مواقعی که دستگاه دچار نقص فنی شده و امکان تهویه مکانیکی را ندارد، بیمار می تواند از طریق دریچه هوای اضطراری تهویه شده به راحتی تنفس کند.\n",
          items: [
            { text: "صفحه نمایش لمسی رنگی Touch Screen LCD 12.1 inch" },
            { text: "-\tقابلیت تعریف Tidal Volume از 20 ml" },
            { text: "-\tInvasive and Non-invasive Ventilation" },
            { text: "-\tقابلیت نمایش و ذخیره Loop و Curve تنفسی" },
            { text: "دارای Auto Emergency Mode" },
            { text: "قابلیت کارکرد بدون برق بیش از 3 ساعت" },
            {
              text: "قابلیت انتقال اطلاعات بر روی کامپیوتر مرکزی و تهیه گزارش",
            },
            { text: "قابلیت جبران سازی نشتی Leak Compensation" },
            { text: "دارای نبولایزر داررو" },
          ],
        },
      },
    ],
    specializedExamination: [
      {
        locale: "fa-IR",
        data: [
          {
            index: 1,
            title: "دستگاهی با بیشترین سابقه نصب و رضایت در مراکز درمانی کشور",
            image: "",
            video: "specializedExamination-se",
            text: "ونتیلاتور تنفسی EDP-TS از سال 1390 در حال تولید میباشد که با گذشت زمان و با بهره مندی از تیم تحقیق و توسعه متخصص در شرکت احیا درمان پیشرفته روز به روز پیشرفته تر و کامل تر شده و تاکنون حدود 10،000 دستگاه از این محصول در اختیار مراکز درمانی سراسر کشور قرار گرفته است.",
          },
          {
            index: 2,
            title: "مناسب برای ...",
            text: "ونتیلاتور تنفسی EDP-TS رنج سنی گسترده ای از اطفال تا بزرگسال را شامل میشود و برای تامین هوای فشرده و اکسیژن از هوای سانترال در مراکز درمانی یا یک کمپرسور پرتابل و کپسول اکسیژن استفاده میکند.",
          },
          {
            index: 3,
            title: "مجهز به نمایشگرهای گرافیکی",
            text: "ونتیلاتور تنفسی EDP-TS دارای صفحه نمایش رنگی 12 اینچی که همه اطلاعات مورد نیاز کاربر در صفحه ی اصلی قرار دارد و جهت دستیابی به بخش تنظیمات و بخش مانیتورینگ، نیاز به رفتن به صفحات مختلف و تو در تو نیست، کاربر به راحتی به همه ی قسمت ها دسترسی دارد.",
          },
          {
            index: 4,
            title: "قابلیت نمایش سه شکل موج تنفسی و دو لوپ تنفسی",
            text: "ونتیلاتور تنفسی EDP-TS دارای صفحه نمایش رنگی 12 اینچی که همه اطلاعات مورد نیاز کاربر در صفحه ی اصلی قرار دارد و جهت دستیابی به بخش تنظیمات و بخش مانیتورینگ، نیاز به رفتن به صفحات مختلف و تو در تو نیست، کاربر به راحتی به همه ی قسمت ها دسترسی دارد.",
          },
          {
            index: 5,
            title: "قابلیت کارکرد بیش از 3 ساعت بدون برق",
            text: "",
          },
          {
            index: 6,
            title:
              "قابلیت نمایش پارامترهای کاپنوگرافی : PeCo2, Vd/Vt, Va, Vd, VtCo2",
            text: "",
          },
          {
            index: 7,
            title: "دارای تنوع مدهای تنفسی  نوزادی، اطفالی و بزرگسالی",
            text: "در کتگوری نوزادی علاوه بر مدهای پایه، مدهای مخصوص نوزادی از جمله NCPAP, TcPl, SIMV(TcPl) قرار دارد و در کتگوری اطفال و بزرگسال علاوه بر مدهای پایه، مدهای پیشرفته PRVC, MMV+PSV, NIV, APRV, VAPS به صورت فعال روی دستگاه قرار دارد.",
          },
          {
            index: 8,
            title: "پارامترهای قابل نمایش",
            text: "F/VT, Cdyn, WOBi, Cst, Ri, Re, Auto PEEP, Leak, %Leak, Ti/Ttotal, EeMandatory, Ve Spont, F Spont, Tcexp",
          },
        ],
      },
    ],
    technicalData: [
      {
        locale: "fa-IR",
        attributes: [

            {
              key: "Tidal Volume",
              values: ["20 – 2500 ml"],
            },
            {
              key: "Pressure Control (PCV)",
              values: ["2 – 100 cm H2O"],
            },
            {
              key: "Pressure Support (PSV)",
              values: ["0 – 100 cm H2O"],
            },
            {
              key: "Programmable Minute Volume (MMV+PSV)",
              values: ["1.0 – 50 L/min"],
            },
            {
              key: "Resulting Minute Volume",
              values: ["0.01 – 130 L/min"],
            },
            {
              key: "Respiratory Rate",
              values: ["1 – 150 bpm"],
            },
            {
              key: "Maximum Pressure Limited (Safety Limits)",
              values: ["Up to 120 cm H2O"],
            },
            {
              key: "Inspiratory Time",
              values: ["1 – 3 s (30 s in APRV)"],
            },
            {
              key: "PEEP/CPAP",
              values: ["0 to 50 cm H2O"],
            },
            {
              key: "Inspiratory Flow",
              values: ["0.2 – 180 (L/min)"],
            },
            {
              key: "I:E Ratio (Volume Mode)",
              values: ["1:1", "1:20"],
            },
            {
              key: "I:E Ratio (Pressure Control)",
              values: ["5:1", "1:20"],
            },
            {
              key: "Expiratory Sensitivity",
              values: ["5% to 80% of Peak Flow"],
            },
            {
              key: "Sigh (VCV Only)",
              values: ["Number, Events per Hour, Volume, and Max Pressure"],
            },
            {
              key: "Inspiratory Sensitivity (Below PEEP)",
              values: [
                "Flow Triggered (0.2 – 15 L/min)",
                "Pressure Triggered (0.5 – 20 cm H2O)",
              ],
            },
            {
              key: "Pause Insp/Exp (VCV Only)",
              values: ["0 to 2 Seconds With 0.25 s Increments"],
            },
            {
              key: "Other Properties",
              values: [
                "Nebulizer",
                "Auto PEEP",
                "Static and Dynamic Compliance",
                "Inspiratory and Expiratory Resistance",
                "Slow Vital Capacity Actual/Best",
                "Maximum Inspiratory Pressure (Pi max)",
                "Imposed Work of Breathing (WOBi)",
                "Trapped Volume (Tidal Volume/Total Volume/Trapped)",
                "Occluded Inspiratory Effort During 100 ms (P 0.1)",
                "Inflexion Points of The P/V Curve (P/V flex)",
                "Rapid Shallow Breathing Index (F/VT Index)",
                "Air Way Pressure (Peak, Platea, Mean, PEEP)",
                "I:E Ratio Current",
                "Expired Tidal Volume",
                "O2 Precentage",
                "Inspiratory Time (Ti) and Expiratory Time (Te)",
                "Rate (Total rate Expressed in Breats per Minute)",
                "Expired Minute Volume",
                "Volume Correction according to patient Circuit Compliance",
                "Leak Compensation available in all operative's modes",
                "Body Tempreture Volume Correction (BTPS)",
                "Altitude Compensation for Volume Correction",
                "Tidal Volume Setting Based on Ideal Body Weight (IBW)",
              ],
            },
        ],
      },
    ],
    images: [
      {
        name: "image_1.jpg",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "image_2.jpg",
        isDefault: true,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "image_3.jpg",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "image_4.jpg",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "image_5.jpg",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
    ],
    videos: [
      {
        name: "video_1.mp4",
        isDefault: true,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "video_2.mp4",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "video_3.mp4",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "video_4.mp4",
        isDefault: false,
        title: [
          {
            value: "",
            locale: "fa-IR",
          },
        ],
      },

    ],
    pdfs: [
      {
        name: "file_1.pdf",
        isDefault: false,
        title: [
          {
            value: "راهنمای ضدعفونی سازی دستگاه ونتیلاتور",
            locale: "fa-IR",
          },
        ],
      },
      {
        name: "file_2.pdf",
        isDefault: true,
        title: [
          {
            value: "دستورالعمل حضور در مراکز درمانی - تنفسی",
            locale: "fa-IR",
          },
        ],
      },
    ],
    frequentlyAskedQuestions: [
      {
        locale: "fa-IR",
        questions: [
          {
            question:
              "چگونه می توان درخصوص نحوه استفاده دستگاه ماشین بیهوشی EDP-Neptune اطلاعات بیشتری کسب کرد؟",
            answer:
              'می توانید با مراجعه به بخش "نحوه استفاده" در سایت اطلاعات مورد نظر درخصوص دستگاه ماشین بیهوشی EDP-Neptune را کسب کنید، در صورتی که نیاز به اطلاعات بیشتری دارید می توانید با تلفن تماس 02122250555 بخش فنی و یا از طریق آدرس ایمیل info@ehyadarman.com راهنمایی های لازم را دریافت نمایید.',
          },
          {
            question:
              "چگونه می توان از قیمت دستگاه ماشین بیهوشی EDP-Neptune مطلع شد؟",
            answer:
              "برای اطلاع از قیمت دستگاه ماشین بیهوشی EDP-Neptune باید با تلفن تماس 02122250555 بخش فروش محصولات بیمارستانی تماس حاصل فرمایید.",
          },
          {
            question:
              "چگونه می توان به User Manual یا راهنمای کاربری دستگاه ماشین بیهوشی EDP-Neptune دسترسی داشت؟",
            answer:
              "جهت دسترسی به راهنمای کاربری دستگاه ماشین بیهوشی EDP-Neptune می بایست از طریق تلفن تماس 02122250555 بخش فنی و یا از طریق آدرس ایمیل info@ehyadarman.com اقدام نمایید.",
          },
          {
            question:
              "درصورت بروز ایراد در دستگاه ماشین بیهوشی EDP-Neptune از چه طریقی می توان جهت رفع آن اقدام کرد؟",
            answer:
              'در قدم اول به بخش "خدمات پس از فروش" در سایت مراجعه کنید. در صورتی که مشکل مورد نظر مرتفع نگردید از طریق تلفن تماس 02122250555 بخش فنی جهت رفع آن راهنمایی های لازم را دریافت نمایید. در صورتی که همچنان مشکل بر طرف نشده بود با مشورت با کارشناس مربوطه اقدامات لازم جهت تعمیر دستگاه ماشین بیهوشی EDP-Neptune را به سرعت انجام دهید.',
          },
        ],
      },
    ],
    similarProducts: [{ code: "EPC-1" },{ code: "EPC-2" },{ code: "EPC-2" },{ code: "EPC-3" },{ code: "EPC-4" },],

  },
];

const productPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.Product.deleteMany({});
    await Models.Product.create(productsObject);
    console.info("[+] products updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating products.", e);
    reject();
  }
});

module.exports = productPromise;
