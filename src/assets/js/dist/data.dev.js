"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  //放置的是数据，类似于之前的data
  state: {
    list: [{
      id: 'footer',
      src_1: './src/assets/images/nav_b_1.jpg',
      sp: '网易云课堂：末末',
      a: '睡前贴一张足贴，一觉睡到天亮',
      src_2: './src/assets/images/det_1.jpg',
      p_1: '★我的意见： ',
      p_2: '作为一个长期失眠女孩，才不会半夜时分在朋友圈分享《全世界失眠》，而是默默在睡前贴一张严选睡眠足贴。',
      p_3: '这款足贴是严选常年断货王，同厂产品是日本第一大美妆网站Cosme的榜单常客。成分是天然草本植物，有多种配方。',
      p_4: '我最喜欢樱花款，有淡淡花香，贴上后顿时感觉一天的紧张状态烟消云散，不用吃褪黑素，也能睡得很香。',
      p_5: '☆严选用户的真实意见：',
      p_6: '@蚊****：买了好多次，双腿疲累的时候贴一对，明显会轻松很多，连家人也爱上足贴。',
      p_7: '@1****2：一家四口都喜欢贴，果断再买四盒存着，小朋友都睡得很踏实。',
      p_8: '',
      src_3: './src/assets/images/det_2.jpg',
      b: '好货内部价',
      c: '吸走倦怠感 日本天...',
      d: '天然成分足贴，祛除身体湿气',
      e: '55',
      f: '69',
      num_1: '1297',
      num_2: '1',
      num_3: '1',
      num_4: '1',
      user: 'v****9',
      aa: '你瞅啥',
      date: '2020-08-23 22:15:50'
    }, {
      id: 'food',
      src_1: './src/assets/images/nav_b_99.jpg',
      sp: '网易云课堂：末末',
      a: '喝羊奶长大的冬枣之王，不是一般的甜！',
      src_2: './src/assets/images/nav_b_99.jpg',
      p_1: '★我的意见： ',
      p_2: '追着西瓜吃了大半个夏天之后，该尝尝冬枣了。对，你没看错，原本九十月才能吃到的水果，现在就上市了。',
      p_3: '这种冬枣，只有在“中国枣乡”陕西大荔才吃得到。那里日照时间长，冬枣个头大却很甜，是公认的冬枣之王。',
      p_4: '为防止枣子因为甜度高裂口，枣农们还会用发酵羊奶喷灌。“喝饱”了羊奶的冬枣，一口咬下去松脆清甜，带着淡淡奶香。同事说，吃一次就不想吃其他枣子了。',
      p_5: '严选找到的这批都是特大果，个个脆甜、多汁，放冰箱冰镇一下，凉爽甘甜，特别好吃。现在买比平时划算20元，记得给爸妈也买点。',
      p_6: '',
      p_7: '',
      p_8: '',
      src_3: './src/assets/images/nav_b_98.jpg',
      b: '好货内部价',
      c: '“喝”着羊奶长大，羊奶...',
      d: '淡淡奶香，颗颗清脆',
      e: '58',
      f: '68',
      num_1: '10390',
      num_2: '1',
      num_3: '999',
      num_4: '1',
      user: 'v****9',
      aa: '你瞅啥',
      date: '2020-08-23 22:15:50'
    }]
  },
  //放置的是方法，类似于之前的methods
  mutations: {
    increment: function increment(store) {
      state.count++;
    }
  }
});

exports["default"] = _default;