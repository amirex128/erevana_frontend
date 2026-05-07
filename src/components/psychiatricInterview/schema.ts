import { z } from 'zod';

// ─── Zod Schema ────────────────────────────────────────────────
export const psychiatricInterviewSchema = z.object({
  // 1. Identifying Data
  fullName: z.string().min(2, 'نام و نام خانوادگی الزامی است'),
  age: z.string().min(1, 'سن الزامی است'),
  gender: z.enum(['male', 'female'], { message: 'جنسیت الزامی است' }),
  maritalStatus: z.string().min(1, 'وضعیت تاهل الزامی است'),
  occupation: z.string().optional(),
  religion: z.string().optional(),
  language: z.string().optional(),
  nationality: z.string().optional(),
  education: z.string().min(1, 'میزان تحصیلات الزامی است'),
  birthPlace: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),

  // 2. Chief Complaint
  chiefComplaint: z.string().min(5, 'شکایت اصلی الزامی است (حداقل ۵ کاراکتر)'),

  // 3. HPI
  onset: z.string().optional(),
  duration: z.string().optional(),
  precipitatingFactors: z.string().optional(),
  symptoms: z.string().optional(),
  consequences: z.string().optional(),

  // 4. Past Illnesses
  psychiatricHistory: z.string().optional(),
  medicalHistory: z.string().optional(),
  substanceHistory: z.string().optional(),

  // 5. Family History
  familyHistory: z.string().optional(),

  // 6. Personal History
  prenatal: z.string().optional(),
  earlyChildhood: z.string().optional(),
  middleChildhood: z.string().optional(),
  lateChildhood: z.string().optional(),

  // Adulthood
  occupationalHistory: z.string().optional(),
  maritalHistory: z.string().optional(),
  militaryHistory: z.string().optional(),
  educationalHistory: z.string().optional(),
  socialActivity: z.string().optional(),
  currentLiving: z.string().optional(),
  legalHistory: z.string().optional(),
  sexualHistory: z.string().optional(),
  fantasies: z.string().optional(),
  values: z.string().optional(),

  // 7. MSE – General Description
  appearance: z.string().optional(),
  speechCharacteristics: z.string().optional(),
  attitudeToExaminer: z.string().optional(),
  psychomotorActivity: z.string().optional(),

  // MSE – Mood & Affect
  mood: z.string().optional(),
  affect: z.string().optional(),
  affectAppropriateness: z.enum(['appropriate', 'inappropriate', 'variable']).optional(),

  // MSE – Perceptions & Thinking
  perceptions: z.string().optional(),
  thoughtFormDisorders: z.array(z.string()).optional(),
  thoughtContent: z.string().optional(),

  // MSE – Sensorium & Cognition
  consciousness: z.string().optional(),
  orientation: z.array(z.string()).optional(),
  concentration: z.string().optional(),
  memory: z.string().optional(),
  readingWriting: z.string().optional(),
  visuospatialAbility: z.string().optional(),
  abstractThought: z.string().optional(),
  informationIntelligence: z.string().optional(),

  // MSE – Impulse, Judgment, Insight
  impulseControl: z.enum(['intact', 'impaired', 'partially_impaired']).optional(),
  insight: z.string().optional(),
  judgment: z.string().optional(),
  reliability: z.string().optional(),

  // 8. Diagnosis
  axis1: z.string().optional(),
  axis2: z.string().optional(),
  axis3: z.string().optional(),
  axis4: z.string().optional(),
  axis5: z.string().optional(),

  // 9. Prognosis
  prognosis: z.string().optional(),

  // 10. Treatment Plan
  treatmentType: z.string().optional(),
  treatmentPlan: z.string().optional(),
});

export type PsychiatricInterviewFormData = z.infer<typeof psychiatricInterviewSchema>;
