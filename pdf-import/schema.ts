import { z } from "zod";

const WorkExperienceSchema = z.object({
  jobTitle: z.string().optional(),
  organization: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  duration: z.string().optional(),
  responsibilities: z.array(z.string()).optional()
});

const EducationExperienceSchema = z.object({
  school: z.string().optional(),
  basicInfo: z.array(z.string()).optional(),
  degree: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  grade: z.string().optional(),
  activitiesAndSocieties: z.string().optional()
});

const LanguageSchema = z.object({
  language: z.string().optional(),
  proficiency: z.string().optional()
});

const VolunteerExperienceSchema = z.object({
  jobTitle: z.string().optional(),
  organization: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  duration: z.string().optional(),
  responsibilities: z.array(z.string()).optional()
});

const ResumeSchema = z.object({
  name: z.string().optional(),
  currentJob: z.string().optional(),
  email: z.string().optional(),
  bio: z.array(z.string()).optional(),
  workExperience: z.array(WorkExperienceSchema).optional(),
  unsupported: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  educationExperience: z.array(EducationExperienceSchema).optional(),
  languages: z.array(LanguageSchema).optional(),
  volunteerExperience: z.array(VolunteerExperienceSchema).optional()
});

export const PDFSchema = z.object({
  resume: ResumeSchema.optional(),
  workExperience: WorkExperienceSchema.optional(),
  educationExperience: EducationExperienceSchema.optional(),
  language: LanguageSchema.optional(),
  volunteerExperience: VolunteerExperienceSchema.optional()
});

export type PDFResume = z.infer<typeof PDFSchema>;