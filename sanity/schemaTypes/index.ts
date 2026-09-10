import { type SchemaTypeDefinition } from 'sanity';
import { postType } from './postType';
import { calloutType } from './objects/calloutType';
import { codeBlockType } from './objects/codeBlockType';
import { statCardType } from './objects/statCardType';
import { faqAccordionType } from './objects/faqAccordionType';
import { keyTakeawaysType } from './objects/keyTakeawaysType';
import { videoEmbedType } from './objects/videoEmbedType';
import { seoType } from './objects/seoType';
import { aiEngineType } from './objects/aiEngineType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    calloutType,
    codeBlockType,
    statCardType,
    faqAccordionType,
    keyTakeawaysType,
    videoEmbedType,
    seoType,
    aiEngineType,
  ],
};
