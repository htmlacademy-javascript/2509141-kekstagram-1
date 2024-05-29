const effects = {
  none: {
    filter: {
      start: '',
      end: ''
    },
    options: { }
  },

  chrome: {
    filter: {
      start: 'grayscale(',
      end: ')'
    },
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
    }
  },

  sepia: {
    filter: {
      start: 'sepia(',
      end: ')'
    },
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
    },
  },

  marvin: {
    filter: {
      start: 'invert(',
      end: '%)'
    },
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
    }
  },

  phobos: {
    filter: {
      start: 'blur(',
      end: 'px)'
    },
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },

  heat: {
    filter: {
      start: 'brightness(',
      end: ')'
    },
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};


export { effects };
