const Models = require("../../mongo/models");

const sliderObject = [
    {
        locale: "fa-IR",
        slides: [
            { image: "image_1.jpg", title: "اولین تولید کننده ونتیلاتور، ماشین بیهوشی و ونتیلاتور در ایران", description: "شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتورهای تنفسی، ماشین بیهوشی و سی تی اسکن در ایران میباشد که توانسته با گسترش ظرفیت تولید و تجربه چنیدین ساله و با ارزش بیش از نیمی از بازار داخلی این صنعت را از آن خود کند.", link: "/link" },
            { image: "image_2.jpg", title: "بزرگترین تولید کننده دانش بنیان صنعت تجهیزات پزشکی", description: "شرکت احیا درمان پیشرفته با دریافت مجوز دانش بنیان برای چهارده محصول تولیدی خود، در لیست بزرگترین شرکت های تولید کننده دانش بنیان در ایران میباشد", link: "/link" },
            { image: "image_3.jpg", title: "تامین نیاز مراکز درمانی داخلی در دوران کرونا و جلوگیری از خروج ارز از کشور", description: "شرکت احیا درمان پیشرفته با رشد ظرفیت تولید ونتیلاتور های تنفسی و فعالیت شبانه روزی در دوران کرونا توانست علاوه بر تامین نیاز مراکز درمان سراسر کشور، اقدام به صادرات ونتیلاتورهای با کیفیت خود نیز بکند.", link: "/link" },
            { image: "image_4.jpg", title: "ماشین بیهوشی EDP-Neptune", description: "اولین دستگاه CT Scan تولید شده در ایران", link: "/link" },
        ],
    },
];

const sliderPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Slider.deleteMany({});
        await Models.Slider.create(sliderObject);
        console.info("[+] Slider updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating slider.", e);
        reject();
    }
});

module.exports = sliderPromise;
