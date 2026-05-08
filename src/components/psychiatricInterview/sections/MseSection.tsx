'use client'

import { Controller, type Control } from 'react-hook-form';
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { InfoBox, PsychiatricSection, SubLabel } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function MseSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۷" title="بررسی وضعیت روانی" subtitle="Mental Status Examination (MSE)">
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        الف) توصیف کلی (General Description)
      </Typography>

      <SubLabel label="ظاهر (Appearance)" hint="وضع ظاهری و وضعیت فیزیکی کلی بیمار: سالم، مریض‌حال، معذب، موقر، پیرنما، جوان‌نما، ژولیده، کودک‌وار" />
      <InfoBox>
        وضعیت اندام و وضعیت فیزیکی کلی بیمار از نظر مصاحبه‌کننده، با توجه به حالت، وضعیت ظاهری، وزن، لباس و آراستگی توصیف می‌شود.
        {'\n'}اصطلاحات رایج برای توصیف ظاهر بیمار: سالم، مریض‌حال، معذب، موقر، پیرنما، جوان‌نما، ژولیده، کودک‌وار و عجیب‌وغریب.
      </InfoBox>
      <Controller name="appearance" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="خصوصیات تکلم (Speech Characteristics)" hint="کمیت، سرعت و کیفیت تکلم. مثلاً: پرحرف، کم‌حرف، تند، کند، پرفشار، تردیدآمیز، یکنواخت، بلند، نجوایی" />
      <InfoBox>
        گزارش خصوصیات تکلم را می‌توان بر حسب کمیت، سرعت و کیفیت توصیف نمود.
        {'\n'}تکلم ممکن است: تند، کند، پرفشار، تردیدآمیز، هیجانی، دراماتیک، یکنواخت، بلند، نجوایی، مقنع، نامفهوم و همراه با «من‌من» باشد.
        {'\n'}اختلالات تکلم نظیر لکنت زبان نیز در این قسمت ثبت می‌شود.
      </InfoBox>
      <Controller name="speechCharacteristics" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="نگرش نسبت به معاینه‌کننده (Attitude Toward Examiner)" hint="توأم با همکاری، دوستانه، روراست، با اغواگری، دفاعی، تحقیرآمیز، بی‌حال، خصمانه، با شوخی" />
      <InfoBox>
        در این قسمت، نگرش بیمار نسبت به معاینه‌کننده بررسی می‌شود.
        {'\n'}می‌توان آن را با کلماتی مانند: توأم با همکاری، دوستانه، توأم با توجه، علاقه‌مند، روراست، با اغواگری، دفاعی، تحقیرآمیز، بی‌حال، بی‌احساس، خصمانه، با شوخی و بازیگوشی، خودشیفته، نفرت‌انگیز یا احتیاط‌آمیز توصیف کرد.
      </InfoBox>
      <Controller name="attitudeToExaminer" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="رفتار آشکار و فعالیت روانی حرکتی (Overt Behavior & Psychomotor Activity)" hint="ادا و اطوار، تیک‌ها، حرکات بیانگر، پیچش‌های عضلانی، بیش‌فعالی، تهییج، ستیزه‌جویی، گره کردن دست" />
      <InfoBox>
        این بخش به جنبه‌های کمی و کیفی رفتار حرکتی بیمار مربوط می‌شود.
        {'\n'}از جمله: ادا و اطوار، تیک‌ها، حرکات بیانگر، پیچش‌های عضلانی، رفتار قالبی، بیش‌فعالی، تهییج، ستیزه‌جویی، انعطاف‌پذیری/سفتی عضلانی، نحوه راه رفتن، چابکی، بی‌قراری، گره کردن دست‌ها و سایر تظاهرات فیزیکی.
      </InfoBox>
      <Controller name="psychomotorActivity" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        ب) خلق و عاطفه (Mood & Affect)
      </Typography>

      <SubLabel label="خلق (Mood)" hint="هیجان پایدار و نافذ. با اشاره به شدت، عمق، نوع مدت و نوسانات" />
      <InfoBox>
        خلق (Mood) هیجان پایدار و نافذی است که ادراک شخص از دنیا را تحت‌الشعاع قرار می‌دهد.
        {'\n'}توصیف خلق باید با اشاره به شدت، عمق، نوع/مدت و نوسانات باشد.
        {'\n'}صفات توصیف خلق: افسرده، ناامید، تحریک‌پذیر، مضطرب، خشمگین، شنگول/سرخوش، تهی، توأم با احساس گناه، مرعوب، وحشت‌زده و …
      </InfoBox>
      <Controller
        name="mood"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>خلق بیمار</InputLabel>
            <Select {...field} value={field.value ?? ''} label="خلق بیمار">
              <MenuItem value="normal">طبیعی</MenuItem>
              <MenuItem value="depressed">افسرده</MenuItem>
              <MenuItem value="hopeless">ناامید</MenuItem>
              <MenuItem value="irritable">تحریک‌پذیر</MenuItem>
              <MenuItem value="anxious">مضطرب</MenuItem>
              <MenuItem value="angry">خشمگین</MenuItem>
              <MenuItem value="euphoric">شنگول / سرخوش</MenuItem>
              <MenuItem value="empty">تهی</MenuItem>
              <MenuItem value="guilty">توأم با احساس گناه</MenuItem>
              <MenuItem value="fearful">مرعوب / وحشت‌زده</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <SubLabel label="عاطفه (Affect)" hint="پاسخ‌دهی هیجانی فعلی بیمار" />
      <InfoBox>
        عاطفه (Affect) پاسخ‌دهی هیجانی فعلی بیمار است.
        {'\n'}عاطفه می‌تواند به‌هنجار (Normal)، محدود (Constricted)، کند (Blunted) یا سطحی (Flat) توصیف شود.
      </InfoBox>
      <Controller
        name="affect"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>عاطفه بیمار</InputLabel>
            <Select {...field} value={field.value ?? ''} label="عاطفه بیمار">
              <MenuItem value="normal">به‌هنجار (Normal) – تفاوت در حالت چهره، لحن صدا، استفاده از دست‌ها</MenuItem>
              <MenuItem value="constricted">محدود (Constricted) – کاهش بارز در حدود و شدت هیجان</MenuItem>
              <MenuItem value="blunted">کند (Blunted) – کاهش جلوه هیجانی</MenuItem>
              <MenuItem value="flat">سطحی (Flat) – نشانه‌ای از جلوه هیجانی وجود ندارد</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <SubLabel label="تناسب عاطفه (Appropriateness of Affect)" hint="آیا پاسخ‌های هیجانی بیمار با موضوع مورد بحث تناسب دارد؟" />
      <Controller
        name="affectAppropriateness"
        control={control}
        render={({ field }) => (
          <FormControl>
            <RadioGroup row {...field} value={field.value ?? ''}>
              <FormControlLabel value="appropriate" control={<Radio />} label="مناسب" />
              <FormControlLabel value="inappropriate" control={<Radio />} label="نامناسب" />
              <FormControlLabel value="variable" control={<Radio />} label="متغیر" />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        ج) ادراک (Perceptions)
      </Typography>
      <SubLabel hint="اختلالات ادراکی مانند هذیان و توهم. سیستم حسی درگیر (شنوایی، بینایی، بویایی، لمسی) و احساس مسخ شخصیت / مسخ واقعیت" />
      <InfoBox>
        اختلالات ادراکی مانند توهم ممکن است در رابطه با خود شخص یا محیط باشد.
        {'\n'}سیستم حسی درگیر (شنوایی، بینایی، بویایی، لمسی) و محتوای تجربه توهمی/تحریف حسی باید توصیف شود.
        {'\n'}احساس مسخ شخصیت و مسخ واقعیت (احساس عمیق گسستگی از خود و محیط) نیز باید بررسی شود.
      </InfoBox>
      <Controller name="perceptions" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        د) تفکر (Thinking)
      </Typography>

      <SubLabel label="اختلالات شکل تفکر (Form / Process)" hint="یک یا چند مورد که مشاهده می‌شود را انتخاب کنید" />
      <InfoBox>
        شکل/فرایند تفکر یعنی نحوه پیوند دادن عقاید و تداعی‌ها و شکل تفکر که می‌تواند منطقی یا غیرمنطقی باشد.
        {'\n'}اختلالات شکل تفکر شامل: شل شدن تداعی‌ها/خروج از خط، پرش افکار، تفکر مماسی، حاشیه‌پردازی، واژه‌سازی، جناس‌سازی، تداعی صوتی و انسداد فکر است.
      </InfoBox>
      <Controller
        name="thoughtFormDisorders"
        control={control}
        render={({ field }) => {
          const val: string[] = field.value ?? [];
          const toggle = (v: string) => field.onChange(val.includes(v) ? val.filter((x) => x !== v) : [...val, v]);
          return (
            <FormGroup sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 0.5 }}>
              {[
                ['loosening', 'شل شدن تداعی‌ها / خروج از خط (Derailment)'],
                ['flight_of_ideas', 'پرش افکار (Flight of Ideas)'],
                ['tangentiality', 'تفکر مماسی (Tangentiality)'],
                ['circumstantiality', 'حاشیه‌پردازی (Circumstantiality)'],
                ['neologism', 'واژه‌سازی (Neologism)'],
                ['punning', 'جناس‌سازی (Punning)'],
                ['clang', 'تداعی صوتی (Clang Association)'],
                ['thought_blocking', 'انسداد فکر (Thought Blocking)'],
              ].map(([v, label]) => (
                <FormControlLabel
                  key={v}
                  control={<Checkbox checked={val.includes(v)} onChange={() => toggle(v)} size="small" />}
                  label={<Typography variant="body2">{label}</Typography>}
                />
              ))}
            </FormGroup>
          );
        }}
      />

      <SubLabel
        label="محتوای تفکر (Content)"
        hint="هذیان‌ها، مشغله‌های ذهنی، وسواس‌ها، اجبارها، هراس‌ها، افکار خودکشی یا دیگرکشی، نشانه‌های خود بیمارانگاری"
      />
      <InfoBox>
        محتوا یعنی «بیمار درباره چه چیز فکر می‌کند».
        {'\n'}اختلالات محتوای تفکر:
        {'\n'}1- هذیان‌ها
        {'\n'}2- مشغله‌های ذهنی
        {'\n'}3- وسواس‌ها (آیا افکاری دارید که تکراری و مزاحم باشد؟)
        {'\n'}4- اجبارها (آیا کارهایی هست که ناچار باشید به‌طور تکراری انجام دهید؟ اگر انجام ندهید مجبور به تکرار می‌شوید؟)
        {'\n'}5- هراس‌ها
        {'\n'}6- طرح‌ها و نقشه‌ها
        {'\n'}7- مقاصد
        {'\n'}8- افکار تکراری خودکشی یا دیگرکشی
        {'\n'}9- نشانه‌های خودبیمارانگاری
        {'\n'}10- امیال ضد اجتماعی
      </InfoBox>
      <Controller name="thoughtContent" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        ه) نظام حسی و شناخت (Sensorium & Cognition)
      </Typography>

      <SubLabel label="هوشیاری (Consciousness)" />
      <InfoBox>
        معمولاً حاکی از اختلال عضوی مغز است و با «مشاهده» ارزیابی می‌شود.
        {'\n'}اصطلاحات توصیف سطح هوشیاری: تیرگی هوشیاری، خواب‌آلودگی، بهت، اغما، بی‌حالی، هوشیاری کامل.
      </InfoBox>
      <Controller
        name="consciousness"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>سطح هوشیاری</InputLabel>
            <Select {...field} value={field.value ?? ''} label="سطح هوشیاری">
              <MenuItem value="alert">هوشیاری کامل (Alertness)</MenuItem>
              <MenuItem value="clouding">تیرگی هوشیاری (Clouding)</MenuItem>
              <MenuItem value="somnolence">خواب‌آلودگی (Somnolence)</MenuItem>
              <MenuItem value="stupor">بهت (Stupor)</MenuItem>
              <MenuItem value="lethargy">بی‌حالی (Lethargy)</MenuItem>
              <MenuItem value="coma">اغما (Coma)</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <SubLabel label="جهت‌یابی (Orientation)" hint="موارد جهت‌یابی سالم را علامت بزنید" />
      <InfoBox>
        جهت‌یابی شامل شخص، مکان و زمان است:
        {'\n'}1- جهت‌یابی شخص: «اسمت چیه؟ من کیم؟»
        {'\n'}2- جهت‌یابی مکان: «اینجا کجاست؟ ما تو چه شهری هستیم؟»
        {'\n'}3- جهت‌یابی زمان: «چه وقت است؟ چند وقت است بستری هستی؟»
      </InfoBox>
      <Controller
        name="orientation"
        control={control}
        render={({ field }) => {
          const val: string[] = field.value ?? [];
          const toggle = (v: string) => field.onChange(val.includes(v) ? val.filter((x) => x !== v) : [...val, v]);
          return (
            <FormGroup row>
              {[
                ['person', 'شخص (نام و هویت)'],
                ['place', 'مکان (کجاست؟)'],
                ['time', 'زمان (چه وقت است؟)'],
              ].map(([v, label]) => (
                <FormControlLabel key={v} control={<Checkbox checked={val.includes(v)} onChange={() => toggle(v)} />} label={label} />
              ))}
            </FormGroup>
          );
        }}
      />

      <SubLabel label="تمرکز و توجه (Concentration & Attention)" hint="آزمون تفریق عدد ۷ از ۱۰۰، جدول ضرب، حروف الفبا به صورت معکوس، ماه‌های سال معکوس" />
      <InfoBox>
        آزمون تمرکز و توجه از طریق:
        {'\n'}1- تفریق عدد ۷ از ۱۰۰ (اگر نتوانست، تفریق ۳ از ۱۰۰)
        {'\n'}2- پرسش جدول ضرب (مثلاً پاسخ ۹×۴)
        {'\n'}3- گفتن حروف الفبا به صورت معکوس
        {'\n'}4- گفتن ماه‌های سال به صورت معکوس
      </InfoBox>
      <Controller name="concentration" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <SubLabel label="حافظه (Memory)" hint="فوری (فراخنای ارقام)، گذشته نزدیک (چند ماه گذشته)، نزدیک (چند روز گذشته)، بلندمدت (اطلاعات دوران کودکی)" />
      <InfoBox>
        انواع حافظه:
        {'\n'}1- حافظه فوری (Immediate): توانایی تکرار ارقام (مثلاً ۶ رقم)
        {'\n'}2- حافظه گذشته نزدیک (Recent Past): رویدادهای مهم چند ماه اخیر
        {'\n'}3- حافظه نزدیک/کوتاه‌مدت (Recent): مثلاً «شام/ناهار چه خورده؟»
        {'\n'}4- حافظه بلندمدت (Long Term): اطلاعات دوران کودکی (مثلاً «وقتی کلاس سوم بودید کجا زندگی می‌کردید؟»)
      </InfoBox>
      <Controller name="memory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <SubLabel label="خواندن و نوشتن (Reading & Writing)" />
      <InfoBox>باید از بیمار خواست جمله‌ای را بخواند. همچنین باید از بیمار خواست یک جمله کوتاه اما کامل بنویسد.</InfoBox>
      <Controller name="readingWriting" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <SubLabel label="توانایی دیداری-فضایی (Visuospatial Ability)" />
      <InfoBox>باید از بیمار خواست شکلی نظیر صفحه ساعت یا پنج‌ضلعی‌های متقاطع را رسم کند.</InfoBox>
      <Controller name="visuospatialAbility" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <SubLabel label="تفکر انتزاعی (Abstract Thought)" hint="توضیح شباهت‌ها و تفاوت‌ها (فرق سیب و گلابی)، معنی ضرب‌المثل‌ها (جوجه را آخر پاییز می‌شمارند)" />
      <InfoBox>
        تفکر انتزاعی یعنی توانایی پرداختن به مفاهیم.
        {'\n'}روش ارزیابی می‌تواند شامل: توضیح شباهت‌ها و تفاوت‌ها (مثل سیب و گلابی) و معنی ضرب‌المثل‌ها (مثل «جوجه را آخر پاییز می‌شمارند») باشد.
      </InfoBox>
      <Controller name="abstractThought" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <SubLabel label="اطلاعات و هوش (Information & Intelligence)" />
      <InfoBox>بررسی ذخیره کلی اطلاعات و هوش. نمونه سؤال: فاصله اروپا و آفریقا چقدر است؟ فاصله اصفهان تا تهران یا بین آمریکای جنوبی و شمالی چقدر است؟</InfoBox>
      <Controller name="informationIntelligence" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />} />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        و) کنترل تکانه (Impulsivity)
      </Typography>
      <SubLabel hint="آیا بیمار قادر است تکانه‌های جنسی، پرخاشگری یا انواع دیگر تکانه‌ها را کنترل نماید؟" />
      <InfoBox>
        آیا بیمار قادر است تکانه‌های جنسی، پرخاشگری یا انواع دیگر تکانه‌ها را کنترل نماید؟
        {'\n'}ارزیابی کنترل تکانه برای اطمینان از آگاهی بیمار به رفتارهای متناسب اجتماعی و نیز سنجش خطر برای خود یا دیگران اهمیت دارد.
      </InfoBox>
      <Controller
        name="impulseControl"
        control={control}
        render={({ field }) => (
          <FormControl>
            <RadioGroup row {...field} value={field.value ?? ''}>
              <FormControlLabel value="intact" control={<Radio />} label="سالم" />
              <FormControlLabel value="partially_impaired" control={<Radio />} label="تا حدودی مختل" />
              <FormControlLabel value="impaired" control={<Radio />} label="مختل" />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Divider />

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">
        ز) قضاوت و بینش (Judgment & Insight)
      </Typography>

      <SubLabel
        label="بینش (Insight)"
        hint="سطوح بینش: ۱-انکار کامل  ۲-آگاهی مختصر اما انکار  ۳-گناه را به دیگران نسبت دادن  ۴-آگاهی از چیزی نامعلوم  ۵-بینش عقلانی  ۶-بینش هیجانی واقعی"
      />
      <InfoBox>
        بینش یعنی میزان آگاهی و درک بیمار از بیماری خود.
        {'\n'}سطوح بینش:
        {'\n'}1- انکار کامل بیماری
        {'\n'}2- آگاهی مختصر از بیمار بودن و نیاز به کمک، اما انکار آن
        {'\n'}3- آگاهی از بیمار بودن، اما نسبت دادن علت به دیگران یا عوامل خارجی
        {'\n'}4- آگاهی از اینکه بیماری ناشی از چیزی نامعلوم در وجود بیمار است
        {'\n'}5- بینش عقلانی: پذیرش بیماری، اما ناتوانی در استفاده از آن برای تغییر
        {'\n'}6- بینش هیجانی واقعی: آگاهی عمیق که موجب تغییر شخصیت یا الگوی رفتاری می‌شود
      </InfoBox>
      <Controller
        name="insight"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>سطح بینش</InputLabel>
            <Select {...field} value={field.value ?? ''} label="سطح بینش">
              <MenuItem value="1">۱ – انکار کامل بیماری</MenuItem>
              <MenuItem value="2">۲ – آگاهی مختصر از بیمار بودن اما انکار آن</MenuItem>
              <MenuItem value="3">۳ – آگاهی از بیماری اما گناه را به دیگران نسبت دادن</MenuItem>
              <MenuItem value="4">۴ – آگاهی از این که بیماری ناشی از چیزی نامعلوم در وجود بیمار است</MenuItem>
              <MenuItem value="5">۵ – بینش عقلانی (می‌پذیرد اما نمی‌تواند برای تغییر استفاده کند)</MenuItem>
              <MenuItem value="6">۶ – بینش هیجانی واقعی (موجب تغییر شخصیت می‌شود)</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <SubLabel label="قضاوت (Judgment)" hint="آیا بیمار تجربه احتمالی رفتار خود را می‌داند؟ آزمون قضاوت: اگر پاکت تمبردار و آدرس‌دار در خیابان پیدا کند چه می‌کند؟" />
      <InfoBox>
        در جریان تهیه شرح‌حال، باید جنبه‌هایی از توانایی بیمار برای قضاوت اجتماعی ارزیابی شود: آیا بیمار پیامد احتمالی رفتار خود را می‌داند و آیا تحت‌تأثیر این آگاهی قرار می‌گیرد؟
        {'\n'}آزمون قضاوت: اگر پاکت تمبردار و آدرس‌دار در خیابان پیدا کند چه می‌کند؟
      </InfoBox>
      <Controller name="judgment" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="قابلیت اعتماد (Reliability)" hint="برآورد روان‌شناس از میزان راستگویی و صداقت بیمار (مثلاً صراحتاً به مصرف مواد اعتراف کند)" />
      <InfoBox>
        گزارش وضعیت روانی با برداشت مصاحبه‌کننده در مورد «قابلیت اعتماد» و «توانایی بیمار برای گزارش دقیق وضعیت خود» خاتمه می‌یابد.
        {'\n'}این قسمت شامل برآورد میزان راستگویی/صداقت بیمار است (مثلاً صراحتاً به مصرف مواد اعتراف کند).
      </InfoBox>
      <Controller name="reliability" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

