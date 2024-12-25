import "./taqrirView.css";
import flowercontent from "../../assets/contentcardflower.png";
import { useLocation } from "react-router-dom";

export default function TaqrirView() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("index") || "Default Title";
  const from = queryParams.get("from") || "Default Title";

  return (
    <div className="taqrirView">
      <div className="main"></div>
      <h3 className="titleOfTaqrir">
        {/* {index}
        -
        {from} */}
        عنوان
      </h3>
      <div className="content">
        {index}
        -
        {from}
        <p>
          سوره یس، قسم به قرآن حکیم، که تو قطعا از رسولان (خداوند) هستی، بر
          طریقی مستقیم. این قرآنی است که از سوی خداوند عزیز و رحیم نازل شده، تا
          قومی را انذار کنی که پدران آنها انذار نشدند و لذا آنها غافلند. فرمان
          (الهی) در باره اکثر آنها تحقق یافته، به همین جهت ایمان نمی‌آورند. ما
          در گردن‌های آنها غله‌هایی قرار دادیم که تا چانه‌ها ادامه دارد، و سرهای
          آنها را به بالا نگاه داشته است. و در پیش روی آنها سدی قرار دادیم، و در
          پشت سرشان سدی، و چشمان آنها را پوشانده‌ایم، لذا چیزی را نمی‌بینند!
          برای آنها یکسان است، چه انذارشان کنی یا نکنیک، ایمان نمی‌آورند. تو
          تنها کسی را انذار می‌کنی که از این یادآوری الهی پیروی کند، و از خداوند
          رحمان در پنهان بترسد، چنین کسی را به آمرزش و پاداش پر ارزش بشارت ده!
          ما مردگان را زنده می‌کنیم، و آنچه را از پیش فرستاده‌اند و تمام آثار
          آنها را می‌نویسیم، و همه چیز را در "کتاب" احصا کرده‌ایم. برای آنها
          "اصحاب قریه" را مثال بزن، هنگامی که فرستادگان خدا به سوی آنها آمدند.
          هنگامی که دو نفر از رسولان را به سوی آنها فرستادیم، اما آنها رسولان
          (ما) را تکذیب کردند، لذا برای تقویت آن دو، شخص سومی فرستادیم، آنها
          همگی گفتند ما فرستادگان (خدا) به سوی شما هستیم. اما آنها (در جواب)
          گفتند: شما جز بشری همانند ما نیستید، و خداوند رحمان چیزی نازل نکرده،
          شما فقط دروغ می‌گویید! آنها گفتند پروردگار ما آگاه است که ما قطعا
          فرستادگان (او) به سوی شما هستیم. و بر عهده ما چیزی جز ابلاغ آشکار
          نیست. آنها گفتند ما شما را به فال بد گرفته‌ایم (و وجود شما شوم است) و
          اگر از این سخنان دست برندارید شما را سنگسار خواهیم کرد، و مجازات
          دردناکی از ما به شما خواهد رسید. گفتند شومی شما از خودتان است اگر درست
          بیندیشید! بلکه شما گروهی اسرافکارید. مردی (با ایمان) از نقطه دور دست
          شهر با شتاب فرا رسید، گفت: ای قوم من! از فرستادگان خدا پیروی کنید. از
          کسانی پیروی کنید که از شما اجری نمی‌خواهند و خود هدایت یافته‌اند. من
          چرا کسی را پرستش نکنم که مرا آفریده است؟ و همگی به سوی او بازگشت
          می‌کنید. آیا غیر از او معبودانی را انتخاب کنم که اگر خداوند رحمان
          بخواهد زیانی به من برساند شفاعت آنها کمترین فایده‌ای برای من ندارد و
          مرا (از مجازات او) نجات نخواهند داد؟ اگر چنین کنم من در گمراهی آشکاری
          خواهم بود. (به همین دلیل) من به پروردگارتان ایمان آوردم، به سخنان من
          گوش فرا دهید. (سرانجام او را شهید کردند و) به او گفته شد وارد بهشت شو
          گفت ای کاش قوم من می‌دانستند. که پروردگارم مرا آمرزیده و از گرامی
          داشتگان قرار داده است. ما بعد از او بر قوم او هیچ لشکری از آسمان
          نفرستادیم و هرگز سنت ما بر این نبود. فقط یک صیحه آسمانی بود! ناگهان
          همگی خاموش شدند! افسوس بر این بندگان که هیچ پیامبری برای هدایت آنها
          نیامد مگر اینکه او را استهزاء می‌کردند. آیا ندیدند چقدر از اقوام پیش
          از آنها (به خاطر گناهانشان) هلاک کردیم، آنها هرگز به سوی ایشان باز
          نمی‌گردند. و همه آنها روز قیامت نزد ما حاضر می‌شوند. زمین مرده برای
          آنها آیتی است، ما آنرا زنده کردیم، و دانه‌هایی از آن خارج ساختیم، و
          آنها از آن می‌خورند. و در آن باغ‌هایی از نخل‌ها و انگورها قرار دادیم و
          چشمه‌هایی از آن بیرون فرستادیم. تا از میوه آن بخورند در حالی که دست
          آنها هیچ دخالتی در ساختن آن نداشته است، آیا شکر خدا را بجا نمی‌آورند؟
          منزه است کسی که تمام زوج‌ها را آفرید، از آنچه زمین می‌رویاند، و از خود
          و از آنچه نمی‌دانند! شب برای آنها (نیز) نشانه‌ای است (از عظمت خدا) ما
          روز را از آن بر می‌گیریم، ناگهان تاریکی آنها را فرا می‌گیرد. و خورشید
          (نیز برای آنها آیتی است) که پیوسته به سوی قرارگاهش در حرکت است، این
          تقدیر خداوند قادر و دانا است. و برای ماه منزلگاه‌هایی قرار دادیم (و به
          هنگامی که این منازل را طی کرد) سرانجام به صورت شاخه کهنه (قوسی شکل و
          زرد رنگ) خرما در می‌آید. نه برای خورشید سزاوار است که به ماه برسد و نه
          شب بر روز پیشی می‌گیرد و هر کدام از آنها در مسیر خود شناورند. این نیز
          برای آنها نشانه‌ای است (از عظمت پروردگار) که ما فرزندانشان را در
          کشتی‌هایی که مملو (از وسائل و بارها است) حمل کردیم. و برای آنها
          مرکب‌های دیگری همانند آن آفریدیم. و اگر بخواهیم آنها را غرق می‌کنیم،
          به طوری که نه فریاد رسی داشته باشند، و نه کسی آنها را از دریا بگیرد.
          مگر باز هم رحمت ما شامل حال آنها شود و تا زمان معینی از این زندگی بهره
          گیرند. هنگامی که به آنها گفته شود از آنچه پیش رو و پشت سر شما است (از
          عذاب‌های الهی) بترسید، تا مشمول رحمت الهی شوید (اعتنا نمی‌کنند). و هیچ
          آیه‌ای از آیات پروردگارشان برای آنها نمی‌آید مگر اینکه از آن روی گردان
          می‌شوند. و هنگامی که به آنها گفته شود از آنچه خدا به شما روزی کرده
          انفاق کنید، کسانی که کافر شدند به کسانی که ایمان آوردند می‌گویند: آیا
          می‌خواهید به کسانی که اگر خدا می‌خواست آنها را تغذیه می‌کرد، غذا دهید؟
          شما تنها در گمراهی آشکاری هستید.
        </p>
        <div className="info">
          <h3>کابل</h3>
          <h3>سال 1403</h3>
          <h3>مدرسه تعلیم قرآن و حدیث شریف</h3>
        </div>
      </div>
    </div>
  );
}