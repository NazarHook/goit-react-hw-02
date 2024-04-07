import React, { useEffect, useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positiveResult = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetValues = () => {
    localStorage.removeItem('feedback');
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description></Description>
      <Options updateFunction={updateFeedback} result={totalFeedback} resetFunction={resetValues}></Options>
      {totalFeedback !== 0 ? <Feedback marks={feedback} result={totalFeedback} percentage={positiveResult}></Feedback> : <Notification result={totalFeedback}></Notification>}
    </>
  );
}

export default App;
