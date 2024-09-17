/**
 * 获取最佳题目评分结果
 * @param answerList
 * @param questions
 * @param question_results
 */
export function getBestQuestionResult(answerList, questions, question_results) {
  const optionCount = {};

  // 遍历题目列表，同时确保答案和问题一一对应
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = answerList[i]; // 获取与问题对应的答案

    // 遍历题目中的选项
    for (const option of question.options) {
      // 如果答案和选项的key匹配
      if (option.key === answer) {
        const result = option.result;

        // 如果result属性不在optionCount中，初始化为0
        if (!optionCount[result]) {
          optionCount[result] = 0;
        }

        // 在optionCount中增加计数
        optionCount[result]++;
      }
    }
  }

  let maxScore = 0;
  let maxScoreResult = question_results[0];

  for (const result of question_results) {
    const score = result.resultProp.reduce((count, prop) => {
      return count + (optionCount[prop] || 0);
    }, 0);

    if (score > maxScore) {
      maxScore = score;
      maxScoreResult = result;
    }
  }

  return maxScoreResult;
}

//示例数据
const answerList = ['B', 'A', 'A', 'A', 'B', 'B', 'A', 'B', 'B', 'A'];
const questions = [
  {
    options: [
      {
        result: 'I',
        value: '独自工作',
        key: 'A',
      },
      {
        result: 'E',
        value: '与他人合作',
        key: 'B',
      },
    ],
    title: '你通常更喜欢',
  },
  {
    options: [
      {
        result: 'J',
        value: '喜欢有明确的计划',
        key: 'A',
      },
      {
        result: 'P',
        value: '更愿意随机应变',
        key: 'B',
      },
    ],
    title: '当安排活动时',
  },
  {
    options: [
      {
        result: 'T',
        value: '认为应该严格遵守',
        key: 'A',
      },
      {
        result: 'F',
        value: '认为应灵活运用',
        key: 'B',
      },
    ],
    title: '你如何看待规则',
  },
  {
    options: [
      {
        result: 'E',
        value: '经常是说话的人',
        key: 'A',
      },
      {
        result: 'I',
        value: '更倾向于倾听',
        key: 'B',
      },
    ],
    title: '在社交场合中',
  },
  {
    options: [
      {
        result: 'J',
        value: '先研究再行动',
        key: 'A',
      },
      {
        result: 'P',
        value: '边做边学习',
        key: 'B',
      },
    ],
    title: '面对新的挑战',
  },
  {
    options: [
      {
        result: 'S',
        value: '注重细节和事实',
        key: 'A',
      },
      {
        result: 'N',
        value: '注重概念和想象',
        key: 'B',
      },
    ],
    title: '在日常生活中',
  },
  {
    options: [
      {
        result: 'T',
        value: '更多基于逻辑分析',
        key: 'A',
      },
      {
        result: 'F',
        value: '更多基于个人情感',
        key: 'B',
      },
    ],
    title: '做决定时',
  },
  {
    options: [
      {
        result: 'S',
        value: '喜欢有结构和常规',
        key: 'A',
      },
      {
        result: 'N',
        value: '喜欢自由和灵活性',
        key: 'B',
      },
    ],
    title: '对于日常安排',
  },
  {
    options: [
      {
        result: 'P',
        value: '首先考虑可能性',
        key: 'A',
      },
      {
        result: 'J',
        value: '首先考虑后果',
        key: 'B',
      },
    ],
    title: '当遇到问题时',
  },
  {
    options: [
      {
        result: 'T',
        value: '时间是一种宝贵的资源',
        key: 'A',
      },
      {
        result: 'F',
        value: '时间是相对灵活的概念',
        key: 'B',
      },
    ],
    title: '你如何看待时间',
  },
];

const question_results = [
  {
    resultProp: ['I', 'S', 'T', 'J'],
    resultDesc: '忠诚可靠，被公认为务实，注重细节。',
    resultPicture: 'icon_url_istj',
    resultName: 'ISTJ（物流师）',
  },
  {
    resultProp: ['I', 'S', 'F', 'J'],
    resultDesc: '善良贴心，以同情心和责任为特点。',
    resultPicture: 'icon_url_isfj',
    resultName: 'ISFJ（守护者）',
  },
  {
    resultProp: ['I', 'N', 'F', 'J'],
    resultDesc: '理想主义者，有着深刻的洞察力，善于理解他人。',
    resultPicture: 'icon_url_infj',
    resultName: 'INFJ（占有者）',
  },
  {
    resultProp: ['I', 'N', 'T', 'J'],
    resultDesc: '独立思考者，善于规划和实现目标，理性而果断。',
    resultPicture: 'icon_url_intj',
    resultName: 'INTJ（设计师）',
  },
  {
    resultProp: ['I', 'S', 'T', 'P'],
    resultDesc: '冷静自持，善于解决问题，擅长实践技能。',
    resultPicture: 'icon_url_istp',
    resultName: 'ISTP（运动员）',
  },
  {
    resultProp: ['I', 'S', 'F', 'P'],
    resultDesc: '具有艺术感和敏感性，珍视个人空间和自由。',
    resultPicture: 'icon_url_isfp',
    resultName: 'ISFP（艺术家）',
  },
  {
    resultProp: ['I', 'N', 'F', 'P'],
    resultDesc: '理想主义者，富有创造力，以同情心和理解他人著称。',
    resultPicture: 'icon_url_infp',
    resultName: 'INFP（治愈者）',
  },
  {
    resultProp: ['I', 'N', 'T', 'P'],
    resultDesc: '思维清晰，探索精神，独立思考且理性。',
    resultPicture: 'icon_url_intp',
    resultName: 'INTP（学者）',
  },
  {
    resultProp: ['E', 'S', 'T', 'P'],
    resultDesc: '敢于冒险，乐于冒险，思维敏捷，行动果断。',
    resultPicture: 'icon_url_estp',
    resultName: 'ESTP（拓荒者）',
  },
  {
    resultProp: ['E', 'S', 'F', 'P'],
    resultDesc: '热情开朗，善于社交，热爱生活，乐于助人。',
    resultPicture: 'icon_url_esfp',
    resultName: 'ESFP（表演者）',
  },
  {
    resultProp: ['E', 'N', 'F', 'P'],
    resultDesc: '富有想象力，充满热情，善于激发他人的活力和潜力。',
    resultPicture: 'icon_url_enfp',
    resultName: 'ENFP（倡导者）',
  },
  {
    resultProp: ['E', 'N', 'T', 'P'],
    resultDesc: '充满创造力，善于辩论，挑战传统，喜欢探索新领域。',
    resultPicture: 'icon_url_entp',
    resultName: 'ENTP（发明家）',
  },
  {
    resultProp: ['E', 'S', 'T', 'J'],
    resultDesc: '务实果断，善于组织和管理，重视效率和目标。',
    resultPicture: 'icon_url_estj',
    resultName: 'ESTJ（主管）',
  },
  {
    resultProp: ['E', 'S', 'F', 'J'],
    resultDesc: '友善热心，以协调、耐心和关怀为特点，善于团队合作。',
    resultPicture: 'icon_url_esfj',
    resultName: 'ESFJ（尽责者）',
  },
  {
    resultProp: ['E', 'N', 'F', 'J'],
    resultDesc: '热情关爱，善于帮助他人，具有领导力和社交能力。',
    resultPicture: 'icon_url_enfj',
    resultName: 'ENFJ（教导着）',
  },
  {
    resultProp: ['E', 'N', 'T', 'J'],
    resultDesc: '果断自信，具有领导才能，善于规划和执行目标。',
    resultPicture: 'icon_url_entj',
    resultName: 'ENTJ（统帅）',
  },
];

console.log(getBestQuestionResult(answerList, questions, question_results));
