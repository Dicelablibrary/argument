// const questions = [
//   "I would be quite bored by a visit to an art gallery.",
//   "I plan ahead and organize things, to avoid scrambling at the last minute.",
//   "I rarely hold a grudge, even against people who have badly wronged me.",
//   "I feel reasonably satisfied with myself overall.",
//   "I would feel afraid if I had to travel in bad weather conditions.",
//   "I wouldn't use flattery to get a raise or promotion at work, even if I thought it would succeed.",
//   "I'm interested in learning about the history and politics of other countries.",
//   "I often push myself very hard when trying to achieve a goal.",
//   "People sometimes tell me that I am too critical of others.",
//   "I rarely express my opinions in group meetings.",
//   "I sometimes can't help worrying about little things.",
//   "If I knew that I could never get caught, I would be willing to steal a million dollars.",
//   "I would enjoy creating a work of art, such as a novel, a song, or a painting.",
//   "When working on something, I don't pay much attention to small details.",
//   "People sometimes tell me that I'm too stubborn.",
//   "I prefer jobs that involve active social interaction to those that involve working alone.",
//   "When I suffer from a painful experience, I need someone to make me feel comfortable.",
//   "Having a lot of money is not especially important to me.",
//   "I think that paying attention to radical ideas is a waste of time.",
//   "I make decisions based on the feeling of the moment rather than on careful thought.",
//   "People think of me as someone who has a quick temper.",
//   "On most days, I feel cheerful and optimistic.",
//   "I feel like crying when I see other people crying.",
//   "I think that I am entitled to more respect than the average person is.",
//   "If I had the opportunity, I would like to attend a classical music concert.",
//   "When working, I sometimes have difficulties due to being disorganized.",
//   "My attitude toward people who have treated me badly is “forgive and forget”.",
//   "I feel that I am an unpopular person.",
//   "When it comes to physical danger, I am very fearful.",
//   "If I want something from someone, I will laugh at that person's worst jokes.",

//   "I’ve never really enjoyed looking through an encyclopedia.",
//   "I do only the minimum amount of work needed to get by.",
//   "I tend to be lenient in judging other people.",
//   "In social situations, I’m usually the one who makes the first move.",
//   "I worry a lot less than most people do.",
//   "I would never accept a bribe, even if it were very large.",
//   "People have often told me that I have a good imagination.",
//   "I always try to be accurate in my work, even at the expense of time.",
//   "I am usually quite flexible in my opinions when people disagree with me.",
//   "The first thing that I always do in a new place is to make friends.",
//   "I can handle difficult situations without needing emotional support from anyone else.",
//   "I would get a lot of pleasure from owning expensive luxury goods.",
//   "I like people who have unconventional views.",
//   "I make a lot of mistakes because I don’t think before I act.",
//   "Most people tend to get angry more quickly than I do.",
//   "Most people are more upbeat and dynamic than I generally am.",
//   "I feel strong emotions when someone close to me is going away for a long time.",
//   "I want people to know that I am an important person of high status.",
//   "I don’t think of myself as the artistic or creative type.",
//   "Kidney markets should be legalized.",
//   "People often call me a perfectionist.",
//   "Even when people make a lot of mistakes, I rarely say anything negative.",
//   "I sometimes feel that I am a worthless person.",
//   "Even in an emergency I wouldn’t feel like panicking.",
//   "I wouldn’t pretend to like someone just to get that person to do favors for me.",
//   "I find it boring to discuss philosophy.",
//   "I prefer to do whatever comes to mind, rather than stick to a plan.",
//   "When people tell me that I’m wrong, my first reaction is to argue with them.",
//   "When I’m in a group of people, I’m often the one who speaks on behalf of the group.",
//   "I remain unemotional even in situations where most people get very sentimental.",
//   "I’d be tempted to use counterfeit money, if I were sure I could get away with it."
// ];

const questions = [
  "I see myself as someone who is reserved",
  "I see myself as someone who is generally trusting",
  "I see myself as someone who tends to be lazy",
  "I see myself as someone who is relaxed, handles stress well",
  "I see myself as someone who has few artistic interests",
  "I see myself as someone who is outgoing, sociable",
  "I see myself as someone who tends to find fault with others",
  "I see myself as someone who does a thorough job",
  "I see myself as someone who gets nervous easily",
  "I see myself as someone who has an active imagination",
];

// common attributes for all the rating questioins
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  description: "1 = strongly disagree, 9 = strongly agree",
  mininumRateDescription: "Strongly disagree",
  maximumRateDescription: "Strongly agree",
}

const elements = questions.map((q, i) => {
  return {
    name: `personality${i + 1}`,
    title: q,
    ...questionTemplate
  };
});
elements.push({
  name: "attention",
  title: "Select the number two in the next answer, this is to ensure that you are paying attention.",
  ...questionTemplate
})

export const personality = {
  pages: [{
    elements: elements
  }],
};

