import { buildURL }  from './buildURL'

export const getRandom = () => {
  const POSIBLE_VALUES = [
    {
      title: 'Road to 1.000.000$',
      maxValue: 1000000,
      currentValue: Math.round(Math.random()*1000000)
    },
    {
      title: 'Maximum beers this week',
      maxValue: 20,
      currentValue: Math.round(Math.random()*20)
    },
    {
      title: 'Maximum Factorio hours this month',
      maxValue: 400,
      currentValue: Math.round(Math.random()*400)
    },
    {
      title: 'Gray hairs on my head',
      maxValue: 100000,
      currentValue: Math.round(Math.random()*100000)
    },
    {
      title: 'Maximum number of kcal for today',
      maxValue: 2500,
      currentValue: Math.round(Math.random()*2500)
    },
    {
      title: 'Days using the same T-shirt before you become Asmongold',
      maxValue: 365,
      currentValue: Math.round(Math.random()*365)
    },
    {
      title: 'Netflix shows I binge before I start doing something with my life',
      maxValue: 100,
      currentValue: Math.round(Math.random()*100)
    }
  ];
  const index = parseInt(Math.random() * POSIBLE_VALUES.length);
  const option = POSIBLE_VALUES[index];
  option.sharedURL = buildURL(option.title, option.maxValue, option.currentValue);
  return POSIBLE_VALUES[index];
}
