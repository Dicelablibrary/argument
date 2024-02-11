// This file contains data for the manipulation question page 

// common attributes for all the manipulation questioins
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  mininumRateDescription: "strongly disagree",
  maximumRateDescription: "strongly agree",
}

// The structure of the decision questions
const manipulation = {
  pages: [{
    title: "AI questions",
    elements: [{
      name: "manipulation1",
      title: "Did the AI give responses that argued about the good of society?",      
      ...questionTemplate       
    },{
      name: "manipulation2",
      title: "Did the AI give responses that argued about the good of the individual?",      
      ...questionTemplate        
    },{
      name: "manipulation3",
      title: "Did the AI give responses that used emotion?",      
      ...questionTemplate        
    },{
      name: "manipulation4",
      title: "Did the AI give responses that told a story?",      
      ...questionTemplate        
    },{
      name: "manipulation5",
      title: "Did you think that the AI was trying to use rational arguments?",      
      ...questionTemplate         
    },{
      name: "manipulation6",
      title: "Did you feel that the AI was trying to appeal to your intuition?",      
      ...questionTemplate       
    }]
  }],
};

export default manipulation;