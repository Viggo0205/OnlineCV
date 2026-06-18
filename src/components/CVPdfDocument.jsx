import { createCvPdfElement } from '../data/cvPdfDocumentFactory';

export function CVPdfDocument({ data, variant = 'web' }) {
  return createCvPdfElement(data, variant);
}
