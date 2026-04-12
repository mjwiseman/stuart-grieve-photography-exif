/* eslint-disable max-len */

export const LANDING_CONTENT = {
  hero: {
    eyebrow: 'Scottish Landscape Photography',
    title: 'Tikus Photography',
    subtitle: 'Inspired by nature\'s grandeur',
    image: {
      src: '/stuart-home/hero-rannoch-moor.jpg',
      alt: 'Snow-covered Rannoch Moor reflected in a calm loch',
    },
  },
  about: {
    eyebrow: 'About Tikus Photography',
    title: 'Sharing Scotland\'s beauty with the world',
    paragraphs: [
      'Hi, my name is Stuart and I started Tikus Photography to present my photographs to a wider audience.',
      'I believe that Scotland still has opportunities to explore as well as images from more popular sites.',
      'Based in Scotland, I want to share my experiences and encourage others to visit all areas of this beautiful country.',
    ],
    guidePrefix: [
      'I am a keen photographer who enjoys the thrill of discovering and',
      'sharing his experiences. I am also a tour guide with the',
    ].join(' '),
    guideSuffix: ', which allows me to share my knowledge of our capital.',
    image: {
      src: '/stuart-home/about-st-abbs-lighthouse.jpg',
      alt: 'St Abbs Lighthouse above a blue coastal sea',
    },
  },
  services: {
    eyebrow: 'What we offer',
    title: 'Our Photographic Journeys',
    description: [
      'At Tikus Photography, we offer a range of services designed to bring',
      'the beauty of Scotland into your life or project. Discover how our',
      'expertise can provide you with stunning visual content or a unique',
      'personal experience.',
    ].join(' '),
    items: [{
      type: 'camera',
      title: 'Private Commissions',
      description: [
        'Looking for a unique perspective? Commission us to capture a',
        'specific Scottish scene or a personal landscape photography',
        'project just for you.',
      ].join(' '),
    }, {
      type: 'map',
      title: 'Guided Tours',
      description: [
        'Experience Edinburgh through expert eyes. Stuart is a tour guide',
        'with the Edinburgh Festival Voluntary Guides Association, sharing',
        'his deep knowledge of Scotland\'s capital.',
      ].join(' '),
      link: {
        label: 'Edinburgh Festival Voluntary Guides Association',
        url: 'https://www.efvga.org.uk/',
      },
    }],
  },
  gallery: {
    eyebrow: 'Portfolio',
    title: 'Where every vista tells a tale',
    description: [
      'A photograph is more than just an image — it\'s a moment frozen in',
      'time, a narrative whispered by the wind and light.',
    ].join(' '),
    images: [{
      src: '/stuart-home/gallery-winter-stillness.jpg',
      alt: 'The lone tree at Loch Lomond reflected in still blue water',
      title: 'Winter Stillness',
    }, {
      src: '/stuart-home/gallery-ancient-guardians.jpg',
      alt: 'Kilchurn Castle beside a loch with mountains behind it',
      title: 'Ancient Guardians',
    }, {
      src: '/stuart-home/gallery-coastal-drama.jpg',
      alt: 'A footbridge over rough coastal water near the Bass Rock',
      title: 'Coastal Drama',
    }],
  },
  testimonial: {
    text: [
      'We had an amazing experience on this guided tour! Stuart was',
      'incredibly knowledgeable, sharing so many interesting facts and',
      'stories that kept us all engaged. What made it even better was that',
      'my teenagers loved it too.',
    ].join(' '),
    credit: '— Trip Advisor Review',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Connect with us',
    description: [
      'Interested in a commission or collaboration? Drop us a message.',
    ].join(' '),
  },
  footer: {
    address: '22 Shiel Hall Square, Rosewell, EH24 9DA, Scotland',
  },
} as const;
