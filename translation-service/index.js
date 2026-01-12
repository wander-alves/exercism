import api from './api.js';

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    throw new Error('Implement the free function');
  }

  batch(texts) {
    throw new Error('Implement the batch function');
  }

  request(text) {
    throw new Error('Implement the request function');
  }


  premium(text, minimumQuality) {
    throw new Error('Implement the premium function');
  }
}

export class QualityThresholdNotMet extends Error {

  constructor(text) {
    super(
      `The translation of ${text} does not meet the requested quality threshold.`.trim(),
    );

    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `Requested a batch translation, but there are no texts in the batch.`.trim(),
    );
  }
}