import { MockCMSProvider } from './providers/mock';
import { CMSClient } from './types';

// In the future, we can swap this based on environment variables
// e.g., const provider = process.env.CMS_PROVIDER === 'contentful' ? new ContentfulProvider() : new MockCMSProvider();

const provider = new MockCMSProvider();

export const cms: CMSClient = provider;
