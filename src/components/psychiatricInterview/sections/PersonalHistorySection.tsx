'use client'

import { Controller, type Control } from 'react-hook-form';
import { Chip, Divider, TextField } from '@mui/material';
import { InfoBox, PsychiatricSection, SubLabel } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function PersonalHistorySection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۶" title="تاریخچه شخصی (شرح‌حال)" subtitle="Personal History / Anamnesis (PH)">
      <SubLabel label="پیش از تولد (Prenatal)" hint="مطابق موارد فرم (بدون خلاصه‌سازی)" />
      <InfoBox>
        در این بخش:
        {'\n'}1- مشکلات حاملگی و زایمان مادر
        {'\n'}2- نقص و آسیب به هنگام تولد
        {'\n'}3- وضعیت جسمانی و روانی مادر هنگام تولد
        {'\n'}4- مصرف مواد در دوران حاملگی توسط مادر
        {'\n'}5- خواسته یا ناخواسته بودن بیمار
        {'\n'}مورد بررسی قرار می‌گیرد.
      </InfoBox>
      <Controller name="prenatal" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="اوایل کودکی (Birth – ۳ سالگی)" hint="مطابق موارد فرم (بدون خلاصه‌سازی)" />
      <InfoBox>
        در این قسمت:
        {'\n'}1- عادات تغذیه‌ای (با شیشه یا شیر مادر، مشکل خوردن)
        {'\n'}2- رشد اولیه (راه رفتن، حرف زدن، دندان درآوردن، رشد زبان، رشد حرکتی، نیازهای برآورده‌نشده، الگوی خواب، اضطراب جدایی، اضطراب بیگانه)
        {'\n'}3- آموزش آداب تخلیه (سن، نگرش والدین، احساس آن‌ها در مورد آداب تخلیه)
        {'\n'}4- علائم مشکلات رفتاری (مکیدن شست، حملات وخیمی، بیش‌فعالی و عقب دادن تنه، وحشت شبانه، ترس‌ها، شب‌ادراری، ناخن‌جویدن)
        {'\n'}5- شخصیت در زمان کودکی (خجالتی، بی‌قرار، بیش‌فعال، منزوی، لجباز، معاشرتی، کمرو و …)
        {'\n'}مورد بررسی قرار می‌گیرد.
      </InfoBox>
      <Controller name="earlyChildhood" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="اواسط کودکی (۳ – ۱۱ سالگی)" hint="مطابق موارد فرم (بدون خلاصه‌سازی)" />
      <InfoBox>
        در این بخش:
        {'\n'}همانندسازی جنسی، تنبیهات به عمل آمده در منزل، تجارب اولیه کودک در مدرسه (به‌خصوص نحوه جدایی از مادر)، دوستی‌های اولیه در روابط شخصی، میزان صمیمیت با دوستان و تأثیرپذیری/تأثیرگذاری، سابقه یادگیری خواندن، رشد سایر مهارت‌های هوشی-حرکتی، وجود کابوس‌ها، فوبیاها و شب‌ادراری مورد بررسی قرار می‌گیرد.
      </InfoBox>
      <Controller name="middleChildhood" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="اواخر کودکی / نوجوانی (پیش از بلوغ تا آخر نوجوانی)" hint="مطابق موارد فرم (بدون خلاصه‌سازی)" />
      <InfoBox>
        این دوره همراه با گسستن از والدین، کسب استقلال و پیوستن به همتاها در فعالیت‌های گروهی است. در این بخش:
        {'\n'}1- روابط اجتماعی (نگرش نسبت به همشیرها و همبازی، شهرت و میزان صمیمیت دوستان، رهبر یا پیرو بودن، محبوبیت‌ها، شرکت در فعالیت‌های گروهی)
        {'\n'}2- سابقه تحصیلی (میزان پیشرفت، روابط با معلمین، نمرات مورد علاقه)
        {'\n'}3- رشد شناختی و حرکتی (یادگیری خواندن و سایر مهارت‌های هوشی و حرکتی، اختلال‌های کنشی خفیف مغز)
        {'\n'}4- مسائل هیجانی و جسمی (استمنا، کابوس‌ها، فوبیاها، شب‌ادراری، فرار از منزل، بزهکاری، مصرف دخانیات/الکل/دارو، بی‌اشتهایی، پرخوری، مسائل مرتبط با وزن، احساس حقارت)
        {'\n'}5- تمایلات جنسی (کنجکاوی اولیه، کسب اطلاعات جنسی، شروع بلوغ، نگرش به جنس مخالف، تجربیات جنسی، گرایش جنسی)
        {'\n'}مورد بررسی قرار می‌گیرد.
      </InfoBox>
      <Controller name="lateChildhood" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <Divider sx={{ my: 1 }}>
        <Chip label="بزرگسالی" size="small" />
      </Divider>

      <SubLabel
        label="تاریخچه شغلی (Occupational History)"
        hint="انتخاب شغل، تعارض‌های احتمالی مربوط به شغل، احساس بیمار در مورد شغل فعلی، روابط در محیط کار"
      />
      <InfoBox>
        در این بخش، انتخاب شغل بیمار، تعارض‌ها و تنش‌های احتمالی مربوط به شغل، اهداف بلندمدت، احساس بیمار در مورد شغل فعلی، روابط در محیط کار (کارفرما، همکاران، زیردستان) و تعداد/نوع/مدت مشاغل بررسی می‌شود.
      </InfoBox>
      <Controller name="occupationalHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel
        label="تاریخچه زناشویی و روابط (Marital & Relationship History)"
        hint="سابقه ازدواج، روابط پیش از ازدواج، کیفیت روابط جنسی، زمینه‌های توافق یا تضاد"
      />
      <InfoBox>
        در این قسمت، سابقه ازدواج قانونی و غیرقانونی، روابط پیش از ازدواج، سن هنگام ازدواج، روابط فعلی، کیفیت روابط جنسی، زمینه‌های توافق یا تضاد (نحوه خرج کردن پول، مسائل مربوط به والدین و خواهر/برادر، نقش‌ها، نگرش نسبت به تربیت فرزندان) بررسی می‌شود.
      </InfoBox>
      <Controller name="maritalHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="تاریخچه سربازی (Military History)" hint="سابقه خدمت سربازی، شرکت در جنگ، آسیب‌دیدگی، نحوه ترخیص" />
      <InfoBox>در این بخش، سابقه خدمت سربازی بیمار، شرکت در جنگ، آسیب‌دیدگی و نحوه ترخیص از خدمت بررسی می‌گردد.</InfoBox>
      <Controller name="militaryHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="تاریخچه تحصیلی (Educational History)" hint="سوابق تحصیلی بیمار برای تحقیق زمینه اجتماعی و فرهنگی، هوش، انگیزش و موانع پیشرفت" />
      <InfoBox>
        روان‌شناس باید تصویر روشنی از سوابق تحصیلی بیمار داشته باشد؛ این اطلاعات می‌تواند سرنخی برای تحقیق زمینه اجتماعی و فرهنگی، هوش، انگیزش، موانع و پیشرفت‌های بیمار باشد.
      </InfoBox>
      <Controller name="educationalHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="فعالیت‌های اجتماعی (Social Activity)" hint="ماهیت دوستی‌ها با تاکید بر عمق، نوع مدت و کیفیت، علایق اجتماعی، ذهنی و فیزیکی" />
      <InfoBox>
        در این بخش، زندگی اجتماعی بیمار تا کنون، ماهیت دوستی‌ها با تأکید بر عمق، نوع/مدت و کیفیت، علایق اجتماعی/ذهنی/فیزیکی و کیفیت روابط بین بیمار و دوستان بررسی می‌شود.
      </InfoBox>
      <Controller name="socialActivity" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="وضعیت زندگی فعلی (Current Living Situation)" hint="شرح محل زندگی، تعداد اعضای خانواده، مشکلات مالی" />
      <InfoBox>در این قسمت، شرح محل زندگی بیمار از نظر منطقه و مسکن، تعداد اعضای خانواده، تعداد اتاق‌ها، وضعیت محل خواب، حریم خصوصی (به‌ویژه والدین)، و مشکلات مالی بررسی می‌شود.</InfoBox>
      <Controller name="currentLiving" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="تاریخچه قانونی (Legal History)" hint="سابقه توقیف، زندانی شدن، مجازات تعلیقی، در انتظار حکم" />
      <InfoBox>در این بخش، سابقه توقیف، زندانی شدن، مجازات تعلیقی و قرار داشتن در انتظار حکم بررسی می‌شود.</InfoBox>
      <Controller name="legalHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="تاریخچه جنسی (Sexual History)" hint="مطابق موارد فرم (بدون خلاصه‌سازی)" />
      <InfoBox>
        در این قسمت:
        {'\n'}چگونگی فهمیدن روابط جنسی در کودکی، احساس بیمار نسبت به نگرش والدین، رشد جنسی و احساس وی،
        {'\n'}موارد سوءاستفاده جنسی (در صورت وجود)، شروع دوره بلوغ،
        {'\n'}اختلالات جنسی (فقدان ارگاسم، واژینیسموس، ناتوانی جنسی، انزال زودرس یا کند، فقدان میل جنسی، پارافیلیا و …)،
        {'\n'}و انطباق جنسی (شروع فعالیت جنسی، دفعات، روش‌ها، تنوع و ترجیح‌ها) بررسی می‌شود.
      </InfoBox>
      <Controller name="sexualHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="خیالات و رویاها (Fantasies & Dreams)" hint="تخیلات و رویاها منابعی برای رسیدن به ناخودآگاه فرد هستند" />
      <InfoBox>تخیلات و رویاها منابعی برای رسیدن به ناخودآگاه فرد هستند و روان‌شناس می‌تواند محتوای آن را ثبت کرده و احساس بیمار نسبت به آن‌ها را جویا شود.</InfoBox>
      <Controller name="fantasies" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="ارزش‌ها (Values)" hint="سیستم ارزش‌های بیمار (اخلاقی و اجتماعی) از جمله ارزش‌های مربوط به کار، پول، کودکان، روابط جنسی، مسائل جامعه" />
      <InfoBox>
        در این بخش، سیستم ارزش‌های بیمار (اخلاقی و اجتماعی) از جمله ارزش‌های مربوط به کار، پول، بازی، کودکان، والدین، دوستان، روابط جنسی، مسائل جامعه و منافع فرهنگی بررسی می‌شود.
      </InfoBox>
      <Controller name="values" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

