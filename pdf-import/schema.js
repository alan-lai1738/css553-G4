"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFSchema = void 0;
var zod_1 = require("zod");
var WorkExperienceSchema = zod_1.z.object({
    jobTitle: zod_1.z.string().optional(),
    organization: zod_1.z.string().optional(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
    duration: zod_1.z.string().optional(),
    responsibilities: zod_1.z.array(zod_1.z.string()).optional()
});
var EducationExperienceSchema = zod_1.z.object({
    school: zod_1.z.string().optional(),
    basicInfo: zod_1.z.array(zod_1.z.string()).optional(),
    degree: zod_1.z.string().optional(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
    grade: zod_1.z.string().optional(),
    activitiesAndSocieties: zod_1.z.string().optional()
});
var LanguageSchema = zod_1.z.object({
    language: zod_1.z.string().optional(),
    proficiency: zod_1.z.string().optional()
});
var VolunteerExperienceSchema = zod_1.z.object({
    jobTitle: zod_1.z.string().optional(),
    organization: zod_1.z.string().optional(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
    duration: zod_1.z.string().optional(),
    responsibilities: zod_1.z.array(zod_1.z.string()).optional()
});
var ResumeSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    currentJob: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    bio: zod_1.z.array(zod_1.z.string()).optional(),
    workExperience: zod_1.z.array(WorkExperienceSchema).optional(),
    unsupported: zod_1.z.array(zod_1.z.string()).optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    educationExperience: zod_1.z.array(EducationExperienceSchema).optional(),
    languages: zod_1.z.array(LanguageSchema).optional(),
    volunteerExperience: zod_1.z.array(VolunteerExperienceSchema).optional()
});
exports.PDFSchema = zod_1.z.object({
    resume: ResumeSchema.optional(),
    workExperience: WorkExperienceSchema.optional(),
    educationExperience: EducationExperienceSchema.optional(),
    language: LanguageSchema.optional(),
    volunteerExperience: VolunteerExperienceSchema.optional()
});
