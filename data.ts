import { WeeklyMetric, Campaign, Lead, AccountMetric } from './types';

// Data for historical trends
export const trendData = [
  {
    week: 'Week 1',
    cr: 31.53,
    rr: 25.45,
    scheduled: 0,
    conducted: 1,
    sent: 295,
    accepted: 93,
    messages: 110
  },
  {
    week: 'Week 2',
    cr: 30.70,
    rr: 22.35,
    scheduled: 5,
    conducted: 1,
    sent: 430,
    accepted: 132,
    messages: 170
  },
  {
    week: 'Week 3',
    cr: 26.75,
    rr: 23.00,
    scheduled: 7,
    conducted: 7,
    sent: 557,
    accepted: 149,
    messages: 231
  },
  {
    week: 'Week 4',
    cr: 27.36,
    rr: 19.00,
    scheduled: 10,
    conducted: 9,
    sent: 497,
    accepted: 136,
    messages: 175
  },
  {
    week: 'Week 5',
    cr: 31.84,
    rr: 25.00,
    scheduled: 11,
    conducted: 7,
    sent: 716,
    accepted: 228,
    messages: 339
  },
];

export const weeklyData: WeeklyMetric[] = [
  { week: 'Week 1', period: '29-4 jan 2026', sent: 295, accepted: 93, cr: 31.53, messages: 110, replies: 28, rr: 25.45, scheduled: 0, conducted: 1, comment: 'была назначена на прошлой неделе' },
  { week: 'Week 2', period: '5-11 jan 2026', sent: 430, accepted: 132, cr: 30.70, messages: 170, replies: 38, rr: 22.35, scheduled: 5, conducted: 1 },
  { week: 'Week 3', period: '12-18 jan 2026', sent: 557, accepted: 149, cr: 26.75, messages: 231, replies: 53, rr: 23.00, scheduled: 7, conducted: 7 },
  { week: 'Week 4', period: '19-25 jan 2026', sent: 497, accepted: 136, cr: 27.36, messages: 175, replies: 33, rr: 19.00, scheduled: 10, conducted: 9 },
  { week: 'Week 5', period: '26 Jan - 1 Feb 2026', sent: 716, accepted: 228, cr: 31.84, messages: 339, replies: 84, rr: 25.00, scheduled: 11, conducted: 7 },
];

export const allCampaigns: Record<string, Campaign[]> = {
  'Week 1': [
    { id: 'w1-1', name: '21 nov / exBlackTower', status: 'Top Performer', sent: 5, accepted: 3, cr: '60.0%', messages: 3, replies: 1, rr: '33.3%', scheduled: 0 },
    { id: 'w1-2', name: '21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer', status: 'Top Performer', sent: 15, accepted: 11, cr: '73.3%', messages: 16, replies: 4, rr: '25.0%', scheduled: 0 },
    { id: 'w1-3', name: 'Saudi - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 20, accepted: 6, cr: '30.0%', messages: 9, replies: 3, rr: '33.3%', scheduled: 0 },
    { id: 'w1-4', name: 'Japan - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 25, accepted: 10, cr: '40.0%', messages: 10, replies: 2, rr: '20.0%', scheduled: 0 },
    { id: 'w1-5', name: 'Hong Kong - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 30, accepted: 6, cr: '20.0%', messages: 8, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w1-6', name: 'Singapore - Angel/private investors - 9.10 (linkedIn search)', status: 'Top Performer', sent: 29, accepted: 15, cr: '51.7%', messages: 19, replies: 7, rr: '36.8%', scheduled: 0 },
    { id: 'w1-7', name: 'UAE - Angel investors - 3.10 (linkedIn search)', status: 'Scale', sent: 28, accepted: 12, cr: '42.9%', messages: 15, replies: 2, rr: '13.3%', scheduled: 0 },
    { id: 'w1-8', name: "UAE - Angel investors - 2.10 (Dima's base)", status: 'Scale', sent: 16, accepted: 4, cr: '25.0%', messages: 9, replies: 1, rr: '11.1%', scheduled: 0 },
    { id: 'w1-9', name: 'exDeVereGroup - 19.08', status: 'Scale', sent: 12, accepted: 3, cr: '25.0%', messages: 2, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w1-10', name: '13.12 / Indonesia - Malaysia / private investors', status: 'Attention', sent: 47, accepted: 1, cr: '2.1%', messages: 1, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w1-11', name: '13.12 / Qatar, Kuwait, Bahrain / private investors', status: 'Scale', sent: 35, accepted: 11, cr: '31.4%', messages: 14, replies: 3, rr: '21.4%', scheduled: 0 },
    { id: 'w1-12', name: '13.12 /South Africa / private investors', status: 'Scale', sent: 33, accepted: 6, cr: '18.2%', messages: 4, replies: 2, rr: '50.0%', scheduled: 0 },
  ],
  'Week 2': [
    { id: 'w2-1', name: '21 nov / exBlackTower', status: 'Scale', sent: 22, accepted: 4, cr: '18.2%', messages: 4, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w2-2', name: '21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer', status: 'Scale', sent: 40, accepted: 17, cr: '42.5%', messages: 17, replies: 2, rr: '11.8%', scheduled: 1 },
    { id: 'w2-3', name: 'Saudi - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 15, accepted: 6, cr: '40.0%', messages: 10, replies: 2, rr: '20.0%', scheduled: 0 },
    { id: 'w2-4', name: 'Japan - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 28, accepted: 7, cr: '25.0%', messages: 15, replies: 4, rr: '26.7%', scheduled: 1 },
    { id: 'w2-5', name: 'Hong Kong - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 48, accepted: 13, cr: '27.1%', messages: 12, replies: 1, rr: '8.3%', scheduled: 0 },
    { id: 'w2-6', name: 'Singapore - Angel/private investors - 9.10 (linkedIn search)', status: 'Top Performer', sent: 47, accepted: 20, cr: '42.6%', messages: 23, replies: 2, rr: '8.7%', scheduled: 0 },
    { id: 'w2-7', name: 'UAE - Angel investors - 3.10 (linkedIn search)', status: 'Scale', sent: 39, accepted: 12, cr: '30.8%', messages: 18, replies: 5, rr: '27.8%', scheduled: 1 },
    { id: 'w2-8', name: "UAE - Angel investors - 2.10 (Dima's base)", status: 'Top Performer', sent: 29, accepted: 17, cr: '58.6%', messages: 13, replies: 2, rr: '15.4%', scheduled: 1 },
    { id: 'w2-9', name: 'exDeVereGroup - 19.08', status: 'Top Performer', sent: 25, accepted: 13, cr: '52.0%', messages: 8, replies: 1, rr: '12.5%', scheduled: 0 },
    { id: 'w2-10', name: '13.12 / Indonesia - Malaysia / private investors', status: 'Attention', sent: 66, accepted: 2, cr: '3.0%', messages: 3, replies: 1, rr: '33.3%', scheduled: 0 },
    { id: 'w2-11', name: '13.12 / Qatar, Kuwait, Bahrain / private investors', status: 'Scale', sent: 37, accepted: 14, cr: '37.8%', messages: 23, replies: 4, rr: '17.4%', scheduled: 1 },
    { id: 'w2-12', name: '13.12 /South Africa / private investors', status: 'Scale', sent: 34, accepted: 2, cr: '5.9%', messages: 6, replies: 4, rr: '66.7%', scheduled: 0 },
  ],
  'Week 3': [
    { id: 'w3-1', name: '21 nov / exBlackTower', status: 'Top Performer', sent: 3, accepted: 3, cr: '100.0%', messages: 3, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w3-2', name: '21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer', status: 'Scale', sent: 63, accepted: 18, cr: '28.6%', messages: 26, replies: 10, rr: '38.5%', scheduled: 1 },
    { id: 'w3-3', name: 'Saudi - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 7, accepted: 2, cr: '28.6%', messages: 6, replies: 1, rr: '16.7%', scheduled: 1 },
    { id: 'w3-4', name: 'Japan - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 29, accepted: 5, cr: '17.2%', messages: 10, replies: 1, rr: '10.0%', scheduled: 1 },
    { id: 'w3-5', name: 'Hong Kong - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 137, accepted: 14, cr: '10.2%', messages: 17, replies: 3, rr: '17.6%', scheduled: 0 },
    { id: 'w3-6', name: 'Singapore - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 55, accepted: 27, cr: '49.1%', messages: 30, replies: 4, rr: '13.3%', scheduled: 0 },
    { id: 'w3-7', name: 'UAE - Angel investors - 3.10 (linkedIn search)', status: 'Scale', sent: 48, accepted: 14, cr: '29.2%', messages: 22, replies: 4, rr: '18.2%', scheduled: 2 },
    { id: 'w3-8', name: "UAE - Angel investors - 2.10 (Dima's base)", status: 'Scale', sent: 52, accepted: 16, cr: '30.8%', messages: 19, replies: 3, rr: '15.8%', scheduled: 0 },
    { id: 'w3-9', name: 'exDeVereGroup - 19.08', status: 'Scale', sent: 34, accepted: 13, cr: '38.2%', messages: 15, replies: 1, rr: '6.7%', scheduled: 0 },
    { id: 'w3-10', name: '13.12 / Indonesia - Malaysia / private investors', status: 'Scale', sent: 86, accepted: 6, cr: '7.0%', messages: 4, replies: 2, rr: '50.0%', scheduled: 0 },
    { id: 'w3-11', name: '13.12 / Qatar, Kuwait, Bahrain / private investors', status: 'Top Performer', sent: 25, accepted: 15, cr: '60.0%', messages: 27, replies: 8, rr: '29.6%', scheduled: 1 },
    { id: 'w3-12', name: '13.12 /South Africa / private investors', status: 'Top Performer', sent: 18, accepted: 11, cr: '61.1%', messages: 12, replies: 6, rr: '50.0%', scheduled: 1 },
  ],
  'Week 4': [
    { id: 'w4-1', name: '21 nov / exBlackTower', status: 'Scale', sent: 3, accepted: 0, cr: '0,0%', messages: 0, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-2', name: '21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer', status: 'Scale', sent: 47, accepted: 17, cr: '36,2%', messages: 19, replies: 6, rr: '31,6%', scheduled: 2 },
    { id: 'w4-3', name: 'Saudi - Angel/private investors - 9.10 (linkedIn search)', status: 'Top Performer', sent: 2, accepted: 1, cr: '50,0%', messages: 1, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-4', name: 'Japan - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 12, accepted: 4, cr: '33,3%', messages: 8, replies: 2, rr: '25,0%', scheduled: 0 },
    { id: 'w4-5', name: 'Hong Kong - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 213, accepted: 39, cr: '18,3%', messages: 29, replies: 2, rr: '6,9%', scheduled: 2 },
    { id: 'w4-6', name: 'Singapore - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 45, accepted: 17, cr: '37,8%', messages: 27, replies: 4, rr: '14,8%', scheduled: 1 },
    { id: 'w4-7', name: 'UAE - Angel investors - 3.10 (linkedIn search)', status: 'Scale', sent: 46, accepted: 15, cr: '32,6%', messages: 16, replies: 2, rr: '12,5%', scheduled: 0 },
    { id: 'w4-8', name: "UAE - Angel investors - 2.10 (Dima's base)", status: 'Scale', sent: 39, accepted: 10, cr: '25,6%', messages: 12, replies: 2, rr: '16,7%', scheduled: 0 },
    { id: 'w4-9', name: 'exDeVereGroup - 19.08', status: 'Scale', sent: 26, accepted: 8, cr: '30,8%', messages: 8, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-10', name: '13.12 / Indonesia - Malaysia / private investors', status: 'Scale', sent: 18, accepted: 3, cr: '16,7%', messages: 5, replies: 1, rr: '20,0%', scheduled: 1 },
    { id: 'w4-11', name: '13.12 / Qatar, Kuwait, Bahrain / private investors', status: 'Top Performer', sent: 17, accepted: 8, cr: '47,1%', messages: 13, replies: 3, rr: '23,1%', scheduled: 1 },
    { id: 'w4-12', name: '13.12 /South Africa / private investors', status: 'Top Performer', sent: 5, accepted: 4, cr: '80,0%', messages: 4, replies: 2, rr: '50,0%', scheduled: 2 },
    { id: 'w4-13', name: '22.01 / investors CIS / face-to-face meeting', status: 'Scale', sent: 8, accepted: 0, cr: '0,0%', messages: 0, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-14', name: '22.01 / investors Georgia / face-to-face meeting', status: 'Scale', sent: 0, accepted: 0, cr: '0,0%', messages: 0, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-15', name: '22.01 / financial advisors Georgia / face-to-face meeting', status: 'Scale', sent: 7, accepted: 0, cr: '0,0%', messages: 0, replies: 0, rr: '0,0%', scheduled: 0 },
    { id: 'w4-16', name: '22.01 / financial advisors CIS / face-to-face meeting', status: 'Scale', sent: 7, accepted: 1, cr: '14,3%', messages: 0, replies: 0, rr: '0,0%', scheduled: 0 },
  ],
  'Week 5': [
    { id: 'w5-1', name: '21 nov / exBlackTower', status: 'Kill', sent: 2, accepted: 0, cr: '0.0%', messages: 0, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w5-2', name: '21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer', status: 'Scale', sent: 59, accepted: 18, cr: '30.5%', messages: 34, replies: 9, rr: '26.5%', scheduled: 4 },
    { id: 'w5-3', name: 'Saudi - Angel/private investors - 9.10 (linkedIn search)', status: 'Kill', sent: 0, accepted: 0, cr: '#DIV/0!', messages: 1, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w5-4', name: 'Japan - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 25, accepted: 10, cr: '40.0%', messages: 14, replies: 3, rr: '21.4%', scheduled: 0 },
    { id: 'w5-5', name: 'Hong Kong - Angel/private investors - 9.10 (linkedIn search)', status: 'Scale', sent: 57, accepted: 9, cr: '15.8%', messages: 58, replies: 12, rr: '20.7%', scheduled: 2 },
    { id: 'w5-6', name: 'Singapore - Angel/private investors - 9.10 (linkedIn search)', status: 'Top Performer', sent: 47, accepted: 24, cr: '51.1%', messages: 54, replies: 7, rr: '13.0%', scheduled: 0 },
    { id: 'w5-7', name: 'UAE - Angel investors - 3.10 (linkedIn search)', status: 'Scale', sent: 47, accepted: 8, cr: '17.0%', messages: 28, replies: 5, rr: '17.9%', scheduled: 0 },
    { id: 'w5-8', name: "UAE - Angel investors - 2.10 (Dima's base)", status: 'Scale', sent: 33, accepted: 9, cr: '27.3%', messages: 31, replies: 9, rr: '29.0%', scheduled: 2 },
    { id: 'w5-9', name: 'exDeVereGroup - 19.08', status: 'Scale', sent: 16, accepted: 2, cr: '12.5%', messages: 10, replies: 2, rr: '20.0%', scheduled: 0 },
    { id: 'w5-10', name: '13.12 / Indonesia - Malaysia / private investors', status: 'Attention', sent: 57, accepted: 2, cr: '3.5%', messages: 6, replies: 3, rr: '50.0%', scheduled: 0 },
    { id: 'w5-11', name: '13.12 / Qatar, Kuwait, Bahrain / private investors', status: 'Top Performer', sent: 13, accepted: 6, cr: '46.2%', messages: 14, replies: 6, rr: '42.9%', scheduled: 1 },
    { id: 'w5-12', name: '13.12 /South Africa / private investors', status: 'Scale', sent: 2, accepted: 0, cr: '0.0%', messages: 4, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w5-13', name: '22.01 / investors CIS / face-to-face meeting', status: 'Scale', sent: 92, accepted: 19, cr: '20.7%', messages: 8, replies: 3, rr: '37.5%', scheduled: 1 },
    { id: 'w5-14', name: '22.01 / investors Georgia / face-to-face meeting', status: 'Scale', sent: 92, accepted: 30, cr: '32.6%', messages: 24, replies: 8, rr: '33.3%', scheduled: 1 },
    { id: 'w5-15', name: '22.01 / financial advisors Georgia / face-to-face meeting', status: 'Scale', sent: 88, accepted: 33, cr: '37.5%', messages: 23, replies: 5, rr: '21.7%', scheduled: 0 },
    { id: 'w5-16', name: '22.01 / financial advisors CIS / face-to-face meeting', status: 'Top Performer', sent: 48, accepted: 20, cr: '41.7%', messages: 20, replies: 2, rr: '10.0%', scheduled: 0 },
    { id: 'w5-17', name: '28.01 / PBFO / Senior Relationship Managers / Geneva, Zurich, Monaco, Luxembourg, Dubai', status: 'Scale', sent: 14, accepted: 2, cr: '14.3%', messages: 2, replies: 0, rr: '0.0%', scheduled: 0 },
    { id: 'w5-18', name: '28.01 / PBFO / Private Banker, Client Advisor / Geneva, Zurich, Monaco, Luxembourg, Dubai', status: 'Scale', sent: 15, accepted: 2, cr: '13.3%', messages: 1, replies: 1, rr: '100.0%', scheduled: 0 },
    { id: 'w5-19', name: '30.01 / PBFO / executive director / Geneva, Zurich, Monaco, Luxembourg, Dubai--copy', status: 'Scale', sent: 4, accepted: 0, cr: '0.0%', messages: 0, replies: 0, rr: '0.0%', scheduled: 0 },
  ]
};

export const allAccountMetrics: Record<string, AccountMetric[]> = {
  'Week 1': [
    { id: '1', name: 'Igor Smirnov', sent: 200, accepted: 65, messages: 81, replies: 19, scheduled: 0, maxSent: 210, efficiency: '95%', activity: 'Высокая активность' },
    { id: '2', name: 'Andrey Tsvetkov', sent: 31, accepted: 10, messages: 10, replies: 5, scheduled: 0, maxSent: 210, efficiency: '15%', activity: 'Ограничение' },
    { id: '3', name: 'Elena Smirnova', sent: 49, accepted: 17, messages: 19, replies: 4, scheduled: 0, maxSent: 175, efficiency: '28%', activity: 'Низкая активность' },
    { id: '4', name: 'Alexandra Nazarova', sent: 15, accepted: 1, messages: 0, replies: 0, scheduled: 0, maxSent: 60, efficiency: '25%', activity: 'Низкая активность' },
    { id: '5', name: 'Roman Vashkevich', sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 0, maxSent: 132, efficiency: '0%', activity: 'Ограничение' },
  ],
  'Week 2': [
    { id: '1', name: 'Igor Smirnov', sent: 200, accepted: 90, messages: 116, replies: 29, scheduled: 3, maxSent: 210, efficiency: '95%', activity: 'Высокая активность' },
    { id: '2', name: 'Andrey Tsvetkov', sent: 36, accepted: 9, messages: 15, replies: 4, scheduled: 2, maxSent: 210, efficiency: '17%', activity: 'Ограничение' },
    { id: '3', name: 'Elena Smirnova', sent: 50, accepted: 10, messages: 19, replies: 3, scheduled: 0, maxSent: 175, efficiency: '29%', activity: 'Низкая активность' },
    { id: '4', name: 'Alexandra Nazarova', sent: 15, accepted: 1, messages: 1, replies: 0, scheduled: 0, maxSent: 60, efficiency: '25%', activity: 'Низкая активность' },
    { id: '5', name: 'Roman Vashkevich', sent: 129, accepted: 22, messages: 19, replies: 2, scheduled: 0, maxSent: 132, efficiency: '98%', activity: 'Высокая активность' },
    { id: '6', name: 'Valentina Pedro', sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 0, maxSent: 125, efficiency: '0%', activity: 'Ограничение' },
  ],
  'Week 3': [
    { id: '1', name: 'Igor Smirnov', sent: 198, accepted: 62, messages: 128, replies: 28, scheduled: 6, maxSent: 210, efficiency: '94%', activity: 'Высокая активность' },
    { id: '2', name: 'Andrey Tsvetkov', sent: 30, accepted: 11, messages: 13, replies: 2, scheduled: 0, maxSent: 210, efficiency: '14%', activity: 'Ограничение' },
    { id: '3', name: 'Elena Smirnova', sent: 76, accepted: 31, messages: 37, replies: 9, scheduled: 0, maxSent: 175, efficiency: '43%', activity: 'Средняя активность' },
    { id: '4', name: 'Alexandra Nazarova', sent: 15, accepted: 1, messages: 1, replies: 0, scheduled: 0, maxSent: 60, efficiency: '25%', activity: 'Низкая активность' },
    { id: '5', name: 'Roman Vashkevich', sent: 198, accepted: 30, messages: 39, replies: 11, scheduled: 1, maxSent: 225, efficiency: '88%', activity: 'Высокая активность' },
    { id: '6', name: 'Valentina Pedro', sent: 50, accepted: 14, messages: 13, replies: 3, scheduled: 0, maxSent: 125, efficiency: '40%', activity: 'Средняя активность' },
  ],
  'Week 4': [
    { id: '1', name: 'Igor Smirnov', sent: 199, accepted: 64, messages: 92, replies: 16, scheduled: 4, maxSent: 199, efficiency: '114%', activity: 'Высокая активность' },
    { id: '2', name: 'Andrey Tsvetkov', sent: 38, accepted: 12, messages: 14, replies: 3, scheduled: 0, maxSent: 199, efficiency: '10%', activity: 'Ограничение' },
    { id: '3', name: 'Elena Smirnova', sent: 50, accepted: 14, messages: 28, replies: 6, scheduled: 2, maxSent: 199, efficiency: '16%', activity: 'Ограничение' },
    { id: '4', name: 'Alexandra Nazarova', sent: 19, accepted: 9, messages: 4, replies: 1, scheduled: 0, maxSent: 199, efficiency: '11%', activity: 'Низкая активность' },
    { id: '5', name: 'Roman Vashkevich', sent: 189, accepted: 35, messages: 34, replies: 7, scheduled: 3, maxSent: 199, efficiency: '77%', activity: 'Средняя активность' },
    { id: '6', name: 'Valentina Pedro', sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 1, maxSent: 199, efficiency: '0%', activity: 'замена' },
  ],
  'Week 5': [
    { id: '1', name: 'Igor Smirnov', sent: 161, accepted: 70, messages: 151, replies: 38, scheduled: 7, maxSent: 105, efficiency: '153%', activity: 'Высокая активность' },
    { id: '2', name: 'Andrey Tsvetkov', sent: 21, accepted: 5, messages: 13, replies: 4, scheduled: 0, maxSent: 150, efficiency: '14%', activity: 'Ограничение' },
    { id: '3', name: 'Elena Smirnova', sent: 31, accepted: 11, messages: 24, replies: 6, scheduled: 0, maxSent: 240, efficiency: '13%', activity: 'Низкая активность' },
    { id: '4', name: 'Alexandra Nazarova', sent: 26, accepted: 7, messages: 16, replies: 3, scheduled: 2, maxSent: 50, efficiency: '52%', activity: 'Средняя активность' },
    { id: '5', name: 'Roman Vashkevich', sent: 195, accepted: 65, messages: 93, replies: 25, scheduled: 2, maxSent: 6, efficiency: '3250%', activity: 'Высокая активность' },
    { id: '6', name: 'Chloé Boutiguila', sent: 60, accepted: 9, messages: 7, replies: 2, scheduled: 0, maxSent: 90, efficiency: '67%', activity: 'Средняя активность' },
    { id: '7', name: 'Ruslan Pshenin', sent: 200, accepted: 58, messages: 32, replies: 5, scheduled: 0, maxSent: 125, efficiency: '160%', activity: 'Высокая активность' },
    { id: '8', name: 'Olga Yatchenya', sent: 19, accepted: 4, messages: 3, replies: 1, scheduled: 0, maxSent: 50, efficiency: '38%', activity: 'Средняя активность' },
  ]
};

export const leads: Lead[] = [
  {
    id: 'w2-l1', weekId: 'Week 2', name: 'Manuel Hadj-Rahmoun', photo: 'https://media.licdn.com/dms/image/v2/D5603AQGQw_86Y6uKcg/profile-displayphoto-crop_800_800/B56Zr2Uv5nHQAI-/0/1765069226432?e=1769644800&v=beta&t=4OWJURYUCQq5N1iZ9OyfDY7nW0kYhqvsU0PcpWWgP7Q',
    company: 'ARES', role: 'Founder', quality: 4, status: 'Встреча состоялась', dateScheduled: '05.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/manuelhr', comment: 'встреча 7.01', campaign: 'Japan - Angel/private investors',
  },
  {
    id: 'w2-l2', weekId: 'Week 2', name: 'Edwin John', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFC8JNXNVHqvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723393264108?e=1769644800&v=beta&t=wkTbcjbe_MjiZhptapHHH_YDQ1fQJijDbVcRWJDoS3M',
    company: 'Mumbai Angels', role: 'Venture Capital Advocate', quality: 2, status: 'Встреча состоялась', dateScheduled: '05.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/edwin-john-10a78051', comment: '', campaign: 'UAE - Angel investors',
  },
  {
    id: 'w2-l3', weekId: 'Week 2', name: 'Iuliia Skriaga', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFDm-UVhB_cnw/profile-displayphoto-crop_800_800/B4DZjTHz21H4AQ-/0/1755888698648?e=1769644800&v=beta&t=OeabtLwPyyX4_uEHahksNLJ6V_2G996l02Pm5GcfmHE',
    company: '3S Money', role: 'Sales Operations Analyst', quality: 1, status: 'Встреча состоялась', dateScheduled: '07.01', dateConducted: 'January', account: 'Andrey Tsvetkov',
    linkedin: 'https://linkedin.com/in/iuliia-skriaga-90257b215', comment: '', campaign: 'CIS Banking Ex-employees',
  },
  {
    id: 'w2-l4', weekId: 'Week 2', name: 'Faisal Mahmood', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHnn_xGe6IxOA/profile-displayphoto-crop_800_800/B4DZuPoLfXIYAM-/0/1767641234284?e=1769644800&v=beta&t=9AsLoc06aZsqUV4eZzHnbwWUr5hfrmkqZ7Uiof7Pyf4',
    company: 'Bahrain Economic Development Board', role: 'Investment Development Dept', quality: 3, status: 'Встреча состоялась', dateScheduled: '08.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/faisal-mahmood-msf-2b0011b5', comment: '', campaign: '13.12 / Qatar, Kuwait, Bahrain',
  },
  {
    id: 'w2-l5', weekId: 'Week 2', name: 'Scott Fletcher', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEbYCOsHQ6_sw/profile-displayphoto-crop_800_800/B4DZh7AxG8GsAU-/0/1754410456145?e=1769644800&v=beta&t=-FmzwdLaZC5PPoqZg6og5YxHUiRZBM4Bo0SwqSG_LhI',
    company: 'FETCH', role: 'Investor and Chairman', quality: 3, status: 'Встреча состоялась', dateScheduled: '09.01', dateConducted: 'January', account: 'Andrey Tsvetkov',
    linkedin: 'https://linkedin.com/in/scott-fletcher-mbe-223795158', comment: '', campaign: 'UAE - Angel investors',
  },
  {
    id: 'w3-l1', weekId: 'Week 3', name: 'Mazen Khatib', photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZkZZE7nNj7nSZg06UikhCX0xORyTYV1RW99dbn9PI4-STFw',
    company: 'M7 Capital', role: 'Chief Investment Officer', quality: 4, status: 'Встреча состоялась', dateScheduled: '12.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/mazen-khatib-329b341', comment: '', campaign: '13.12 / Qatar, Kuwait, Bahrain'
  },
  {
    id: 'w3-l2', weekId: 'Week 3', name: 'Anastasiia Piven', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QgZnHu_d3ifNxy9TXUDFq12aFO1i955Oirmt8DOP5UcVcg',
    company: 'KHK & Partners Limited', role: 'Investment Operations', quality: 4, status: 'Встреча состоялась', dateScheduled: '12.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/anastasiia-piven-24615921b', comment: '', campaign: 'UAE - Angel investors - 3.10'
  },
  {
    id: 'w3-l3', weekId: 'Week 3', name: 'Eng Nayef Aljebreen', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYs5KmP56n_HUeqlIzApGY1Rgvee-43CyQWlGM7BtPNO-lqg',
    company: 'Uni-Ventures', role: 'Founder & CEO', status: 'Запланирована', dateScheduled: '12.01', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/nayefa', comment: 'в ожидании', campaign: 'Saudi - Angel/private investors - 9.10'
  },
  {
    id: 'w3-l4', weekId: 'Week 3', name: 'Nauman Abdal', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAn-gXH7eIbCtrPqItWky1ECu7som14Kgf9MYhMcPGRHIc7Q',
    company: 'Unifrutti Group', role: 'Head of Treasury & Investor Relations', quality: 4, status: 'Встреча состоялась', dateScheduled: '12.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/naumanabdal', comment: '', campaign: 'UAE - Angel investors - 3.10'
  },
  {
    id: 'w3-l5', weekId: 'Week 4', name: 'Aman Kumar Soran', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSz6d7KlIuXNy-EtR01nEU2XTqBaRhunyd-fAF1SE6ci4x4hQ',
    company: 'SBI Investment', role: 'Venture Capitalist', quality: 2, status: 'Встреча состоялась', dateScheduled: '14.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/aman-kumar-soran', comment: '', campaign: 'Japan - Angel/private investors - 9.10'
  },
  {
    id: 'w3-l6', weekId: 'Week 4', name: 'Ilya Etko', photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtRJtLtDlOFzUhwGxTeLhTxtWSkydAb3kZHBS_7lD5wQTcFA',
    company: 'International Strategic Holding', role: 'Chief Strategy Officer', quality: 3, status: 'Встреча состоялась', dateScheduled: '15.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/ilyaetko', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w3-l7', weekId: 'Week 3', name: 'Leonard Belinga', photo: 'https://ui-avatars.com/api/?name=Leonard+Belinga&background=0D8ABC&color=fff',
    company: 'venture capitalist', role: 'Private Investor', status: 'Запланирована', dateScheduled: '15.01', account: 'Roman Vashkevich',
    linkedin: 'https://linkedin.com/in/leonard-belinga-17bb1720b', comment: 'в ожидании', campaign: '13.12 /South Africa / private investors'
  },
  {
    id: 'w4-l1', weekId: 'Week 4', name: 'Freedom Magwaza', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMMepxr1LZY8XjWNrh3zNAakyrGbGeegbPkvQA4NNdlnsv7A',
    company: 'SPEED POWER ENTERPRISE', role: 'PRIVATE INVESTOR', quality: 2, status: 'Встреча состоялась', dateScheduled: '19.01', dateConducted: 'January', account: 'Elena Smirnova',
    linkedin: 'https://linkedin.com/in/freedom-magwaza-66369b125', comment: '', campaign: '13.12 /South Africa / private investors'
  },
  {
    id: 'w4-l2', weekId: 'Week 4', name: 'David Susanto', photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyQIMCqtfEBin6CzhflvF0rcXTIwpJaqFM77-Jt1r5m9-uyw',
    company: 'Zia Guild', role: 'Guild Master', quality: 1, status: 'Встреча состоялась', dateScheduled: '19.01', dateConducted: 'January', account: 'Roman Vashkevich',
    linkedin: 'https://linkedin.com/in/davidsusanto', comment: '', campaign: '13.12 / Indonesia - Malaysia / private investors'
  },
  {
    id: 'w4-l3', weekId: 'Week 4', name: 'Anshul Agrawal', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGfIIcPeIRJMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692783087970?e=1770854400&v=beta&t=Ee0VCdmsoL986Nmftt473uW2ON80T0CXtnV1LeH9zBI',
    company: 'Imdaad Group', role: 'Energy Auditor', quality: 1, status: 'Встреча состоялась', dateScheduled: '20.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/anshul-agrawal-047a17b3', comment: '', campaign: 'Singapore - Angel/private investors - 9.10'
  },
  {
    id: 'w4-l4', weekId: 'Week 4', name: 'Mohammad Jamal', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHjTcPQI8LvnA/profile-displayphoto-shrink_800_800/B4DZrPZ47zJcAc-/0/1764416262375?e=1770854400&v=beta&t=B_remayj7v-_WvQUSk6waubH7RkdTdAlQr24W0Kgzyc',
    company: 'Business Angels of Qatar', role: 'Angel Investor', quality: 2, status: 'Встреча состоялась', dateScheduled: '20.01', dateConducted: 'January', account: 'Valentina Pedro',
    linkedin: 'https://linkedin.com/in/mohammad-malek-al-jamal-cfa-45058871', comment: '', campaign: '13.12 / Qatar, Kuwait, Bahrain'
  },
  {
    id: 'w4-l5', weekId: 'Week 4', name: 'Martin Glimmerholm', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEL5p6h3upkbMheqBGWasrM78b6lJiMfSEcXYG9Al3AbnjQ',
    company: 'Self-Employed', role: 'Senior advisor – independent', quality: 5, status: 'Встреча состоялась', dateScheduled: '20.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/martin-glimmerholm-385a5925', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w4-l6', weekId: 'Week 4', name: 'Tshepo Motlhetlhi', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpL1H8LPDavG5H8Hn0O8hOI8qYfSdQ0Yfn3JgVsWINJbAhfQ',
    company: 'Alterra Capital Partners', role: 'Private Equity Investor', quality: 4, status: 'Встреча состоялась', dateScheduled: '20.01', dateConducted: 'January', account: 'Roman Vashkevich',
    linkedin: 'https://linkedin.com/in/tshepo-motlhetlhi-55b68a53', comment: '', campaign: '13.12 /South Africa / private investors'
  },
  {
    id: 'w4-l7', weekId: 'Week 4', name: 'Ilya Kazakov', photo: 'https://media.licdn.com/dms/image/v2/C4D03AQGGJ96uFUH0hQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656319869289?e=1770854400&v=beta&t=p4xv9fcgxTlZ6xatDaLIKpaFRnLEVDF4wT4NOrHARRM',
    company: 'D360 Bank', role: 'Head of Risk Modeling & Analytics', quality: 1, status: 'Встреча состоялась', dateScheduled: '21.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/ilyaka', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w4-l8', weekId: 'Week 4', name: 'Grace Yun Xia', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ61RSsxtUHHh-lCrdqYoAJ0IDvVR8yDXBfKWwV8KoJBKi_VA',
    company: 'xAI', role: 'Investor', quality: 3, status: 'Встреча состоялась', dateScheduled: '22.01', dateConducted: 'January', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/graceyunxia', comment: 'в ожидании', campaign: 'Hong Kong - Angel/private investors - 9.10'
  },
  {
    id: 'w4-l9', weekId: 'Week 4', name: 'Chrissy H.', photo: 'https://ui-avatars.com/api/?name=Chrissy+H&background=0D8ABC&color=fff',
    company: 'Reimagine X Studio', role: 'Investor & Founder & Creative Designer', quality: 4, status: 'Встреча состоялась', dateScheduled: '22.01', dateConducted: 'January', account: 'Roman Vashkevich',
    linkedin: 'https://linkedin.com/in/chrissy-huang', comment: 'в ожидании', campaign: 'Hong Kong - Angel/private investors - 9.10'
  },
  {
    id: 'w4-l10', weekId: 'Week 4', name: 'Anwar Al-Yahya', photo: 'https://ui-avatars.com/api/?name=Anwar+Al-Yahya&background=0D8ABC&color=fff',
    company: 'Kuwait Finance House', role: 'Executive Manager', quality: 3, status: 'Встреча состоялась', dateScheduled: '23.01', dateConducted: 'January', account: 'Elena Smirnova',
    linkedin: 'https://linkedin.com/in/anwar-hamad-al-yahya-80122826', comment: 'в ожидании', campaign: '13.12 / Qatar, Kuwait, Bahrain'
  },

  {
    id: 'w5-l4', weekId: 'Week 5', name: 'Yulia Yakir', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEF3P4z_8b-5Q/profile-displayphoto-crop_800_800/B4DZmC3KllHYAI-/0/1758837124280?e=1771459200&v=beta&t=sVNHTK9oDQE8XYKosiFUk_Vp2t9ACtxYN1ZAsJ51q1g',
    company: 'UBS', role: 'Director, Senior Credit Officer', quality: 2, status: 'Встреча состоялась', dateScheduled: '27.01', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/yulia-yakir-28239322', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w5-l5', weekId: 'Week 5', name: 'Stanislav Krasov', photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSw57laF1yEnrlmOIOZOQfYQYaC_bOShWHyIqScz8E4y_Agfg',
    company: 'SALIC', role: 'Investment (M&A) Director', quality: 1, status: 'Встреча состоялась', dateScheduled: '27.01', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/stanislavkrasov', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w5-l6', weekId: 'Week 5', name: 'Denis Kornyukhov', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEeEHWBZ39SsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723494903949?e=1771459200&v=beta&t=tQZg1SFe9gu_AM-4S-6_X2kGvbXFXOcGFvVWvTGMgUc',
    company: 'VTB', role: 'Quantitative Researcher', quality: 3, status: 'Встреча состоялась', dateScheduled: '28.01', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/hornyhov', comment: '', campaign: '21.10 - Ex-employees of Sberbank...'
  },
  {
    id: 'w5-l7', weekId: 'Week 5', name: 'Bradley Bester', photo: 'https://media.licdn.com/dms/image/v2/D5603AQG1DO2BeF0NiA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731030341601?e=1771459200&v=beta&t=cnlMV05ucWFpx7omVdz4lQZUqvRGQCT7w0x8rqcw4no',
    company: 'Fiera Capital (Asia)', role: 'Director of Investor Relations', quality: 3, status: 'Встреча состоялась', dateScheduled: '29.01', account: 'Igor Smirnov',
    linkedin: 'https://linkedin.com/in/bradley-bester-cfa', comment: '', campaign: 'Hong Kong - Angel/private investors - 9.10'
  }
];