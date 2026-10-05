import { z } from 'zod';

export const portfolioSizes = [
  '1 Property',
  '2 - 5 Properties',
  '6 - 15 Properties',
  '16+ Properties',
] as const;

export const conciergeApplicationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid professional email address'),
  listingUrlOrName: z.string().min(3, 'Please provide your listing URL or property name'),
  portfolioSize: z.enum(portfolioSizes),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type ConciergeApplicationFormData = z.infer<typeof conciergeApplicationSchema>;

export const interestOptions = [
  'Custom Website',
  'Web App',
  'Enterprise Application',
  'UI/UX Design',
  'QR Concierge',
] as const;

export const projectEnquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.enum(interestOptions),
  details: z.string().min(10, 'Please provide some details about your project (at least 10 characters)'),
  budget: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type ProjectEnquiryFormData = z.infer<typeof projectEnquirySchema>;

