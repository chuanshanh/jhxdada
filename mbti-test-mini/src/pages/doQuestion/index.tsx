import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { AtButton, AtRadio } from 'taro-ui';
import GlobalFooter from '../../components/GlobalFooter';
import './index.scss';
import questions from '../../data/questions.json';

/**
 * 做题页面
 */
export default () => {
  //当前题号
  const [current, setCurrent] = useState(1);
  //当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });
  //当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  //答案列表
  const [answerList] = useState<string[]>([]);
  //序号变化时,切换题目和答案
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);
  return (
    <View className="doQuestionPage">
      {/* {JSON.stringify(answerList)} */}
      <View className="at-article__h2 title">
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            //记录回答
            answerList[current - 1] = value;
          }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlBtn"
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}
        >
          下一题
        </AtButton>
      )}
      {current == questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlBtn"
          onClick={() => {
            //传递答案
            Taro.setStorageSync('answerList', answerList);
            //跳转到结果页面
            Taro.navigateTo({
              url: '/pages/result/index',
            });
          }}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="controlBtn"
          onClick={() => setCurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
