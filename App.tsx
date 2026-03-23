import React, { useState, useMemo } from 'react';
import {
  Users, CheckCircle2, MessageSquare, Calendar, CheckSquare, Info,
  TrendingUp, Rocket, Star, ExternalLink, Zap, Activity,
  ChevronDown, Linkedin, MoreHorizontal, ArrowUpRight,
  TrendingUp as TrendIcon, Zap as ZapIcon, Target, BarChart2,
  Lock, User, LogIn, ShieldCheck, Globe, MapPin
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, ComposedChart, ReferenceLine
} from 'recharts';
import { weeklyData, allCampaigns, leads, allAccountMetrics, trendData } from './data';
import { WeeklyMetric, Campaign, Lead, AccountMetric } from './types';

// UI Components
const StatCard = ({
  title, value, change, changeType, subValue, icon: Icon, color
}: {
  title: string; value: string | number; change?: string; changeType?: 'positive' | 'negative' | 'neutral'; subValue?: string; icon: any; color: string;
}) => {
  // Logic to determine color based on prefix if changeType is not explicitly provided
  const effectiveType = useMemo(() => {
    if (changeType) return changeType;
    if (!change) return 'neutral';
    if (change.startsWith('+')) return 'positive';
    if (change.startsWith('-')) return 'negative';
    if (change === '0%') return 'neutral';
    return 'positive'; // Default fallback
  }, [change, changeType]);

  const isPositive = effectiveType === 'positive';
  const isNegative = effectiveType === 'negative';

  return (
    <div className="bg-white rounded-2xl p-6 border-l-4 shadow-sm flex flex-col justify-between" style={{ borderLeftColor: color }}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 font-semibold text-xs leading-tight max-w-[120px] uppercase tracking-wider">{title}</h3>
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}10`, color: color }}>
          <Icon size={18} />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-800 tracking-tight">{value}</span>
          {change && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center ${isPositive ? 'bg-green-50 text-green-600' :
              isNegative ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-500'
              }`}>
              {change}
            </span>
          )}
        </div>
        {subValue && (
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">{subValue}</p>
        )}
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, rightContent }: { title: string; subtitle?: string; rightContent?: React.ReactNode }) => (
  <div className="mb-6 mt-12 flex justify-between items-end">
    <div>
      <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">{title}</h2>
      {subtitle && <p className="text-gray-500 font-bold mt-1 text-sm">{subtitle}</p>}
    </div>
    {rightContent}
  </div>
);

const TrendChartCard = ({ title, dataKey, color, icon: Icon, showGuide = false }: { title: string, dataKey: string, color: string, icon: any, showGuide?: boolean }) => {
  const CustomTrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-2xl rounded-2xl border border-gray-100 flex flex-center flex-col items-center">
          <p className="text-xs font-bold text-slate-400 mb-2">{label}</p>
          <p className="text-sm font-black" style={{ color: color }}>
            {title} : {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color }}>
          <Icon size={20} />
        </div>
        <h3 className="text-base font-black text-slate-800 tracking-tight">{title}</h3>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.1} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              domain={[0, 'auto']}
            />
            <Tooltip content={<CustomTrendTooltip />} cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '4 4' }} />
            {showGuide && <ReferenceLine x="Week 6" stroke={color} strokeDasharray="3 3" />}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              fillOpacity={1}
              fill={`url(#grad-${dataKey})`}
              activeDot={{ r: 5, strokeWidth: 2, fill: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CompactChartCard = ({ title, children, showInfo = true }: { title: string; children?: React.ReactNode; showInfo?: boolean }) => (
  <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm relative">
    <div className="flex items-center gap-2 mb-4">
      <h3 className="text-base font-black text-slate-800 tracking-tight">{title}</h3>
      {showInfo && <Info size={14} className="text-gray-300 cursor-pointer" />}
    </div>
    {children}
  </div>
);

const Navbar = ({ onLogout }: { onLogout?: () => void }) => (
  <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-[60] py-4 px-4 md:px-12 shadow-sm">
    <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <a href="https://ligeniqo.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img src="https://ligeniqo.com/wp-content/uploads/2024/05/logoSVG.svg" alt="Ligeniqo Logo" className="h-8 w-auto" />
        </a>
        <div className="hidden md:block h-10 w-px bg-slate-200"></div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">FULL-CYCLE</span>
          <span className="text-sm font-black text-slate-900 tracking-tight">Marketing Agency</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">NETWORK LIVE</span>
          </div>
          <a
            href="https://calendly.com/anastasia-ligeniqo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00a3ff] hover:bg-[#0082cc] text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-blue-100 group"
          >
            BOOK A CALL
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        {onLogout && (
          <button
            onClick={onLogout}
            className="text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-2 font-bold text-sm"
          >
            Logout <MoreHorizontal size={20} />
          </button>
        )}
      </div>
    </div>
  </nav>
);

const LoginPage = ({ onLogin }: { onLogin: (u: string, p: string) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'statum' && password === 'statum123') {
      onLogin(username, password);
    } else {
      setError('Неверные учетные данные. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="mb-12 flex flex-col items-center">
          <img src="https://ligeniqo.com/wp-content/uploads/2024/05/logoSVG.svg" alt="Ligeniqo Logo" className="h-12 w-auto mb-6" />
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic text-center leading-none">
            Client Analytics Portal<br />
            <span className="text-blue-600 text-lg tracking-normal not-italic font-bold">Secure Access for Statum Capital</span>
          </h1>
        </div>

        <div className="w-full max-w-md bg-white rounded-[32px] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 animate-in fade-in zoom-in duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 text-slate-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block pl-12 p-4 transition-all"
                  placeholder="statum"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 text-slate-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block pl-12 p-4 transition-all"
                  placeholder="statum123"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-xs font-bold p-4 rounded-xl border border-red-100 animate-pulse">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#00a3ff] hover:bg-[#0082cc] text-white font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <LogIn size={18} />
              Login to Dashboard
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Secure Portal</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Globe size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">v2.5.0</span>
            </div>
          </div>
        </div>

        <p className="mt-12 text-slate-400 text-xs font-medium">
          © 2026 Ligeniqo Marketing Agency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const GlobalMarkets = () => {
  const markets = [
    { name: 'Europe', type: 'primary', icon: Globe },
    { name: 'Brazil', type: 'primary', icon: MapPin },
    { name: 'India', type: 'primary', icon: MapPin },
    { name: 'Australia', type: 'secondary', icon: Globe },
    { name: 'South Africa', type: 'secondary', icon: MapPin },
    { name: 'Argentina', type: 'secondary', icon: MapPin },
  ];

  return (
    <div className="mt-24 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm border border-emerald-100">
          <Globe size={14} />
          Global Reach
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase italic">
          Targeting Key Markets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Worldwide</span>
        </h2>
        <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
          We specialize in high-impact outreach across diverse global regions, focusing on markets with the highest potential for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {markets.map((market) => (
          <div
            key={market.name}
            className={`
              relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col items-center text-center group cursor-default
              ${market.type === 'primary'
                ? 'bg-white border-emerald-100 shadow-xl shadow-emerald-100/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200/40 z-10'
                : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-lg hover:-translate-y-1'
              }
            `}
          >
            {market.type === 'primary' && (
              <div className="absolute top-4 right-4 text-emerald-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
            )}

            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm
              ${market.type === 'primary'
                ? 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-200'
                : 'bg-white text-slate-400 group-hover:bg-blue-500 group-hover:text-white'
              }
            `}>
              <market.icon size={28} strokeWidth={2.5} />
            </div>

            <h3 className={`font-black text-lg mb-3 tracking-tight ${market.type === 'primary' ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-800 transition-colors'}`}>
              {market.name}
            </h3>

            {market.type === 'primary' ? (
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-lg">
                Primary Market
              </span>
            ) : (
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-relaxed">
                Дополнительная опция и наша рекомендация
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardView = ({ onLogout }: { onLogout: () => void }) => {
  const [selectedWeekId, setSelectedWeekId] = useState(weeklyData[weeklyData.length - 1].week);
  const [showDropdown, setShowDropdown] = useState(false);

  // ... previous logic ...
  const currentMetric = useMemo(() => {
    if (selectedWeekId === 'Summary') {
      const totals = weeklyData.reduce((acc, curr) => ({
        sent: acc.sent + curr.sent,
        accepted: acc.accepted + curr.accepted,
        messages: acc.messages + curr.messages,
        replies: acc.replies + curr.replies,
        scheduled: acc.scheduled + curr.scheduled,
        conducted: acc.conducted + curr.conducted,
      }), { sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 0, conducted: 0 });

      return {
        week: 'Summary',
        period: 'Jan - Feb 2026',
        ...totals,
        cr: totals.sent ? parseFloat(((totals.accepted / totals.sent) * 100).toFixed(2)) : 0,
        rr: totals.messages ? parseFloat(((totals.replies / totals.messages) * 100).toFixed(2)) : 0,
        comment: 'All weeks aggregated'
      };
    }
    return weeklyData.find(w => w.week === selectedWeekId) || weeklyData[weeklyData.length - 1];
  }, [selectedWeekId]);

  const currentCampaigns = useMemo(() => {
    if (selectedWeekId === 'Summary') {
      const agg: Record<string, Campaign> = {};
      Object.values(allCampaigns).flat().forEach(c => {
        if (!agg[c.name]) {
          agg[c.name] = { ...c, sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 0 };
        }
        agg[c.name].sent += c.sent;
        agg[c.name].accepted += c.accepted;
        agg[c.name].messages += c.messages;
        agg[c.name].replies += c.replies;
        agg[c.name].scheduled = (agg[c.name].scheduled || 0) + (c.scheduled || 0);
        agg[c.name].status = c.status;
      });

      return Object.values(agg).map(c => ({
        ...c,
        cr: c.sent ? `${((c.accepted / c.sent) * 100).toFixed(1)}%` : '0.0%',
        rr: c.messages ? `${((c.replies / c.messages) * 100).toFixed(1)}%` : '0.0%'
      }));
    }
    return allCampaigns[selectedWeekId] || [];
  }, [selectedWeekId]);

  const currentAccounts = useMemo(() => {
    if (selectedWeekId === 'Summary') {
      const agg: Record<string, AccountMetric> = {};
      Object.values(allAccountMetrics).flat().forEach(a => {
        if (!agg[a.name]) {
          agg[a.name] = { ...a, sent: 0, accepted: 0, messages: 0, replies: 0, scheduled: 0 };
        }
        agg[a.name].sent += a.sent;
        agg[a.name].accepted += a.accepted;
        agg[a.name].messages += a.messages;
        agg[a.name].replies += a.replies;
        agg[a.name].scheduled += a.scheduled;
        agg[a.name].activity = a.activity;
      });
      return Object.values(agg).map(a => ({
        ...a,
        efficiency: 'N/A'
      }));
    }
    return allAccountMetrics[selectedWeekId] || [];
  }, [selectedWeekId]);

  const currentLeads = useMemo(() => {
    if (selectedWeekId === 'Summary') {
      return leads;
    }
    return leads.filter(l => l.weekId === selectedWeekId);
  }, [selectedWeekId]);

  const statsChanges = useMemo(() => {
    if (selectedWeekId === 'Summary') return { sent: undefined, accepted: undefined, replies: undefined, scheduled: undefined, conducted: undefined };
    if (!selectedWeekId || !weeklyData.length) return { sent: undefined, accepted: undefined, replies: undefined, scheduled: undefined, conducted: undefined };

    const index = weeklyData.findIndex(w => w.week === selectedWeekId);

    if (index <= 0) {
      return { sent: undefined, accepted: undefined, replies: undefined, scheduled: undefined, conducted: undefined };
    }

    const current = weeklyData[index];
    const previous = weeklyData[index - 1];

    const calculateChange = (curr: number, prev: number) => {
      if (!prev) return curr > 0 ? '+100%' : '0%';
      const diff = ((curr - prev) / prev) * 100;
      return `${diff > 0 ? '+' : ''}${Math.round(diff)}%`;
    };

    return {
      sent: calculateChange(current.sent, previous.sent),
      accepted: calculateChange(current.accepted, previous.accepted),
      replies: calculateChange(current.replies, previous.replies),
      scheduled: calculateChange(current.scheduled, previous.scheduled),
      conducted: calculateChange(current.conducted, previous.conducted)
    };
  }, [selectedWeekId]);

  const dynamicContent = useMemo(() => {
    if (selectedWeekId === 'Week 1') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 1',
        insights: [
          {
            title: 'СТАРТ ГОДА:',
            text: 'Низкая активность на первой неделе января связана с праздничным периодом. Основной фокус был направлен на запуск и проверку гипотез.',
            icon: TrendIcon,
            iconColor: 'text-blue-500'
          },
          {
            title: 'ЭФФЕКТИВНОСТЬ:',
            text: 'Кампании exBlackTower и CIS Banking показывают аномально высокий CR (60-73%), что говорит о качестве собранных баз.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 2',
        focus: [
          {
            title: 'МАСШТАБИРОВАНИЕ:',
            text: 'План по выходу на целевые показатели объема аутрича (400+ запросов в неделю) после завершения праздников.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'ПРОГРЕВ:',
            text: 'Активация дополнительных аккаунтов и начало работы с теплыми ответами первой недели для назначения первых встреч.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 2') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 2',
        insights: [
          {
            title: 'ВОССТАНОВЛЕНИЕ:',
            text: 'Взрывной рост назначенных встреч (5 против 0 на Week 1) обуслен завершением праздничного периода. Аудитория начала активно конвертироваться.',
            icon: TrendIcon,
            iconColor: 'text-red-500'
          },
          {
            title: 'ТОП КАМПАНИЯ:',
            text: 'Направление UAE лидирует с Connection Rate 58.6%. Это подтверждает высокую релевантность оффера для инвесторов региона.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 3',
        focus: [
          {
            title: 'СТАБИЛИЗАЦИЯ:',
            text: 'Приоритет на выравнивание активности по аккаунтам Andrey и Elena. В планах — возвращение к целевым объемам аутрича.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'КОНВЕРСИЯ:',
            text: 'Фокус на качественной обработке 38 накопленных ответов. Основной потенциал роста встреч заложен в дожиме текущих диалогов.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 3') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 3',
        insights: [
          {
            title: 'РЕКОРД:',
            text: 'Достигнут максимальный объем отправленных запросов (557) и проведенных встреч (7). Эффективность кампаний Qatar и South Africa выше 60% CR.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'TOP PERFORMER:',
            text: 'Кампании по Qatar, Kuwait, Bahrain и South Africa показывают отличные результаты с высокой конверсией в коннект и ответы.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 4',
        focus: [
          {
            title: 'МАСШТАБИРОВАНИЕ:',
            text: 'Увеличение объемов по успешным регионам (ME & Africa) при сохранении качества коммуникации.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'АВТОМАТИЗАЦИЯ:',
            text: 'Оптимизация работы с "холодными" кампаниями (Hong Kong, Indonesia) для повышения Reply Rate.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 4') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 4',
        insights: [
          {
            title: 'ЭФФЕКТИВНОСТЬ:',
            text: 'Несмотря на небольшое снижение общего объема запросов, конверсия в проведенные встречи выросла до рекордных 9.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'ЛИДЕРЫ:',
            text: 'South Africa показывает феноменальный Connection Rate 80%. Кампания Hong Kong лидирует по объему (213 запросов).',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 5',
        focus: [
          {
            title: 'АККАУНТЫ:',
            text: 'Аккаунт Valentina Pedro, к сожалению, попала под ограничения, а после под блокировку, но в четверг мы уже получили новый аккаунт и со следующей недели подключаем его в работу.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'ВСТРЕЧИ:',
            text: 'Фокус на очных встречах (face-to-face) в СНГ и Грузии — новое запущенное направление направление (четыре кампании) с высоким потенциалом LTV.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 5') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 5',
        insights: [
          {
            title: 'РЕКОРДНЫЙ РОСТ:',
            text: 'Объем отправленных запросов вырос на 44% (716 vs 497), количество коннектов на 67% (228 vs 136). Это лучший показатель за все время.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'ЭФФЕКТИВНОСТЬ:',
            text: 'Connection Rate поднялся до 31.8% несмотря на значительный рост объема. Кампании Singapore (51%) и Qatar (46%) показывают отличные результаты.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 6',
        focus: [
          {
            title: 'КОНВЕРСИЯ:',
            text: 'Главная задача — качественно обработать 228 новых контактов и 84 ответа, конвертируя их во встречи. Потенциал базы огромный.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'ОПТИМИЗАЦИЯ:',
            text: 'Отключение завершенных кампаний (Kill) и перераспределение лимитов текущие кампании.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 6') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 6',
        insights: [
          {
            title: 'ЭФФЕКТИВНОСТЬ:',
            text: 'Рекордный объем аутрича (1066 запросов) при сохранении стабильного Connection Rate (~29%). Кампания "Singapore" лидирует с CR 42.1%.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'АКТИВНОСТЬ:',
            text: 'Упор на кампании face-to-face с фокусом на личные встречи для Александра, за текущую неделю назначено 10 офлайн-встреч.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 7',
        focus: [
          {
            title: 'КОНВЕРСИЯ:',
            text: 'Продолжение организации офлайн-встреч. При ограниченном времени у Александра — перевод части офлайн-встреч в онлайн-формат без потери качества коммуникации.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'МАСШТАБИРОВАНИЕ:',
            text: 'Запуск ретаргетинга на завершившиеся кампании. Старт новой кампании для Кирилла с определенныи сегментом.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 7') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 7',
        insights: [
          {
            title: 'ВЫСОКАЯ КОНВЕРСИЯ:',
            text: 'Connection Rate достиг 36.58% (308 коннектов из 842 запросов), что значительно выше среднего показателя.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'РЕЗУЛЬТАТИВНОСТЬ:',
            text: 'Назначено 15 новых встреч и проведено 10. Кампании по Investors CIS и PBFO показывают стабильный интерес.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 8',
        focus: [
          {
            title: 'ПОДДЕРЖКА РИТМА:',
            text: 'Максимальная отработка полученных 124 ответов. Фокус на качественный фоллоу-ап для назначения встреч.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'КАМПАНИИ:',
            text: 'Масштабирование наиболее успешных направлений (Scale) и плановая остановка неэффективных (Kill).',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Week 12') {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 12',
        insights: [
          {
            title: 'РЕКОРДНЫЙ КОННЕКТ:',
            text: 'Connection Rate вырос до 42.08% (332 коннекта из 789 запросов), что является одним из лучших показателей.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'АКТИВНОСТЬ АККАУНТОВ:',
            text: 'Высокая эффективность аккаунтов. Alexandra Nazarova (620%) и Elena Smirnova (500%) показывают аномально высокую отдачу при небольших лимитах.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 13',
        focus: [
          {
            title: 'КОНВЕРСИЯ В ОТВЕТЫ:',
            text: 'Главный фокус на качественной обработке 332 новых коннектов и 171 полученного ответа. Удержание 22% Reply Rate на новых диалогах.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'ВСТРЕЧИ:',
            text: 'Доведение назначенных контактов (8 встреч) до проведения и конвертация вовлеченной аудитории в новые созвоны.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    } else if (selectedWeekId === 'Summary') {
      return null;
    } else {
      return {
        insightsTitle: 'ИНСАЙТЫ WEEK 5',
        insights: [
          {
            title: 'РЕКОРДНЫЙ РОСТ:',
            text: 'Объем отправленных запросов вырос на 44% (716 vs 497), количество коннектов на 67% (228 vs 136). Это лучший показатель за все время.',
            icon: TrendIcon,
            iconColor: 'text-emerald-500'
          },
          {
            title: 'ЭФФЕКТИВНОСТЬ:',
            text: 'Connection Rate поднялся до 31.8% несмотря на значительный рост объема. Кампании Singapore (51%) и Qatar (46%) показывают отличные результаты.',
            icon: '🔥'
          }
        ],
        focusTitle: 'ФОКУС НА WEEK 6',
        focus: [
          {
            title: 'КОНВЕРСИЯ:',
            text: 'Главная задача — качественно обработать 228 новых контактов и 84 ответа, конвертируя их во встречи. Потенциал базы огромный.',
            icon: Target,
            iconColor: 'text-red-600'
          },
          {
            title: 'ОПТИМИЗАЦИЯ:',
            text: 'Отключение завершенных кампаний (Kill) и перераспределение лимитов текущие кампании.',
            icon: BarChart2,
            iconColor: 'text-blue-600'
          }
        ]
      };
    }
  }, [selectedWeekId]);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-sans animate-in fade-in duration-700">
      <Navbar onLogout={onLogout} />

      <div className="max-w-[1500px] mx-auto px-4 md:px-12 pt-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Еженедельный отчет лидогенерации<br />
            <span className="text-blue-600">для Statum Capital от Ligeniqo</span>
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-white px-10 py-3.5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-6 hover:bg-white transition-all group"
            >
              <span className="font-black text-slate-900 text-sm tracking-tighter uppercase italic">{selectedWeekId} — {currentMetric.period}</span>
              <ChevronDown size={16} className={`text-gray-400 group-hover:text-slate-900 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <button
                  onClick={() => { setSelectedWeekId('Summary'); setShowDropdown(false); }}
                  className={`w-full text-left px-8 py-4 text-sm font-black border-b border-gray-50 hover:bg-slate-50 transition-colors uppercase tracking-wider ${selectedWeekId === 'Summary' ? 'text-blue-600' : 'text-slate-800'}`}
                >
                  Summary (Total)
                </button>
                {weeklyData.slice().reverse().map((w) => (
                  <button
                    key={w.week}
                    onClick={() => { setSelectedWeekId(w.week); setShowDropdown(false); }}
                    className={`w-full text-left px-8 py-4 text-sm font-bold border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors ${selectedWeekId === w.week ? 'text-blue-600' : 'text-slate-600'}`}
                  >
                    {w.week} ({w.period})
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <SectionHeader title="Обзор эффективности" subtitle={`${selectedWeekId} (${currentMetric.period})`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <StatCard title="Запросов отправлено" value={currentMetric.sent} change={statsChanges.sent} icon={Users} color="#3b82f6" />
          <StatCard title="Принято запросов" value={currentMetric.accepted} change={statsChanges.accepted} subValue={`CR: ${currentMetric.cr}%`} icon={CheckCircle2} color="#10b981" />
          <StatCard title="Получено ответов" value={currentMetric.replies} change={statsChanges.replies} subValue={`RR: ${currentMetric.rr}%`} icon={MessageSquare} color="#8b5cf6" />
          <StatCard title="Назначено встреч" value={currentMetric.scheduled} change={statsChanges.scheduled} icon={Calendar} color="#2563eb" />
          <StatCard title="Проведено встреч" value={currentMetric.conducted} change={statsChanges.conducted} changeType="neutral" icon={CheckSquare} color="#f59e0b" />
        </div>

        <SectionHeader title="Анализ трендов" rightContent={<div className="bg-slate-100 px-4 py-2 rounded-xl text-xs font-black text-slate-500 uppercase tracking-widest">Последние периоды</div>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrendChartCard title="Connection Rate (CR)" dataKey="cr" color="#0ea5e9" icon={TrendingUp} />
          <TrendChartCard title="Reply Rate (RR)" dataKey="rr" color="#10b981" icon={TrendingUp} />
          <TrendChartCard title="Назначено встреч" dataKey="scheduled" color="#f59e0b" icon={TrendingUp} showGuide={true} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <CompactChartCard title="Воронка аутрича">
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={trendData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: 10, fontSize: 10, fontWeight: 'bold' }} />
                  <Bar dataKey="sent" name="Запросы" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar dataKey="accepted" name="Коннекты" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
                  <Line type="monotone" dataKey="messages" name="Сообщения" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CompactChartCard>
          <CompactChartCard title="Метрики эффективности">
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} tickFormatter={(val) => `${val}%`} />
                  <Tooltip />
                  <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: 10, fontSize: 10, fontWeight: 'bold' }} />
                  <Area type="monotone" dataKey="cr" name="Connection Rate" stroke="#10b981" strokeWidth={3} fill="#10b981" fillOpacity={0.05} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} />
                  <Area type="monotone" dataKey="rr" name="Reply Rate" stroke="#3b82f6" strokeWidth={3} fill="#3b82f6" fillOpacity={0.05} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CompactChartCard>
        </div>

        {/* Campaign Detail Table */}
        <div className="mt-12 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">Детализация кампаний</h3>
            <Rocket className="text-emerald-500" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white text-gray-400 text-[10px] uppercase font-black tracking-[0.2em] border-b border-gray-100">
                  <th className="px-10 py-6 w-1/3">Название кампании</th>
                  <th className="px-6 py-6">Статус</th>
                  <th className="px-6 py-6">Отпр.</th>
                  <th className="px-6 py-6">Прин.</th>
                  <th className="px-6 py-6 text-emerald-600">CR%</th>
                  <th className="px-6 py-6 text-violet-600">CR Сообщение→Ответ (%)</th>
                  <th className="px-6 py-6 text-blue-600">Встречи</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentCampaigns.map((camp) => (
                  <tr key={camp.id} className="hover:bg-slate-50 transition-all group">
                    <td className="px-10 py-7 font-bold text-sm text-slate-700">
                      <div className="flex items-center gap-3">
                        {camp.status === 'Top Performer' && (
                          <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
                        )}
                        <span>{camp.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-7">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${camp.status === 'Top Performer' ? 'bg-emerald-50 text-emerald-600' :
                        camp.status === 'Attention' ? 'bg-amber-50 text-amber-600' :
                          camp.status === 'Kill' ? 'bg-red-50 text-red-600' :
                            'bg-blue-50 text-blue-600'
                        }`}>
                        {camp.status}
                      </span>
                    </td>
                    <td className="px-6 py-7 text-sm font-bold">{camp.sent}</td>
                    <td className="px-6 py-7 text-sm font-bold">{camp.accepted}</td>
                    <td className="px-6 py-7 text-sm text-emerald-600 font-black italic">{camp.cr}</td>
                    <td className="px-6 py-7 text-sm text-violet-600 font-black italic">{camp.rr}</td>
                    <td className="px-6 py-7 text-base text-blue-600 font-black italic">{camp.scheduled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Table - RESTORED STYLE & SLIGHTLY INCREASED FONT SIZE */}
        <div className="mt-12 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between bg-slate-50/50">
            <h3 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">Лиды и встречи</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white text-gray-400 text-[10px] uppercase font-black tracking-[0.2em] border-b border-gray-100">
                  <th className="px-10 py-6">Лид / Статус</th>
                  <th className="px-6 py-6">Роль и Компания</th>
                  <th className="px-6 py-6">Аккаунт / Кампания</th>
                  <th className="px-6 py-6">Дата назначения</th>
                  <th className="px-10 py-6 text-center">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-all group">
                    <td className="px-10 py-7">
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <img src={lead.photo} className="w-14 h-14 rounded-[20px] object-cover shadow-md border-2 border-white" alt="" />
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[3px] border-white ${(lead.status.toLowerCase() === 'встреча состоялась') ? 'bg-emerald-500' :
                            (lead.status.toLowerCase() === 'личная встреча') ? 'bg-yellow-400' :
                              (lead.status.toLowerCase() === 'отмена' || lead.status.toUpperCase() === 'ОТМЕНЕНА') ? 'bg-rose-500' :
                                (lead.status.toLowerCase() === 'не отвечает' || lead.status.toUpperCase() === 'НЕ ОТВЕЧАЕТ') ? 'bg-amber-500' :
                                  'bg-blue-500'
                            }`}></div>
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-[15px] tracking-tight leading-tight">{lead.name}</p>
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mt-1.5 inline-block ${(lead.status.toLowerCase() === 'встреча состоялась') ? 'bg-emerald-50 text-emerald-500' :
                            (lead.status.toLowerCase() === 'личная встреча') ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                              (lead.status.toLowerCase() === 'отмена' || lead.status.toUpperCase() === 'ОТМЕНЕНА') ? 'bg-rose-50 text-rose-500' :
                                (lead.status.toLowerCase() === 'не отвечает' || lead.status.toUpperCase() === 'НЕ ОТВЕЧАЕТ') ? 'bg-amber-50 text-amber-500' :
                                  'bg-blue-50 text-blue-500'
                            }`}>
                            {lead.status.toUpperCase()}
                          </span>
                          {lead.status === 'Встреча состоялась' && lead.quality && (
                            <div className="flex items-center gap-0.5 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={10}
                                  className={`${i < (lead.quality || 0) ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-7">
                      <p className="text-[14px] font-black text-slate-800 tracking-tight leading-tight">{lead.role}</p>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">{lead.company}</p>
                    </td>
                    <td className="px-6 py-7">
                      <p className="text-[12px] font-bold text-slate-800 mb-1">{lead.account}</p>
                      <div className="bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 uppercase inline-block max-w-[200px] truncate">
                        {lead.campaign}
                      </div>
                    </td>
                    <td className="px-6 py-7">
                      <p className="text-[14px] font-black text-slate-800 italic">{lead.dateScheduled}</p>
                      {lead.comment && lead.comment.toLowerCase() !== 'в ожидании' && (
                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{lead.comment}</p>
                      )}
                    </td>
                    <td className="px-10 py-7">
                      <div className="flex justify-center">
                        <a href={lead.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                          <Linkedin size={14} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Account Efficiency Section */}
        <div className="mt-12 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">Эффективность аккаунтов</h3>
              <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-widest">Team Breakdown — {selectedWeekId}</p>
            </div>
            <Activity className="text-blue-500" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white text-gray-400 text-[10px] uppercase font-black tracking-[0.2em] border-b border-gray-100">
                  <th className="px-10 py-6">Аккаунт</th>
                  <th className="px-6 py-6">Отправлено</th>
                  <th className="px-6 py-6 text-emerald-600">Коннекты</th>
                  <th className="px-6 py-6 text-blue-600">Назначено</th>
                  {selectedWeekId !== 'Summary' && <th className="px-6 py-6">Эффективность</th>}
                  {selectedWeekId !== 'Summary' && <th className="px-10 py-6">Статус</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentAccounts.map((acc) => (
                  <tr key={acc.id} className="hover:bg-slate-50 transition-all">
                    <td className="px-10 py-7 font-black text-slate-800 text-base tracking-tight">{acc.name}</td>
                    <td className="px-6 py-7">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-black text-slate-800 italic">{acc.sent}</span>
                        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 bg-emerald-500"
                            style={{ width: `${Math.min((acc.sent / Math.max(acc.maxSent, 1)) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-7 text-sm text-slate-500 font-black italic">{acc.accepted}</td>
                    <td className="px-6 py-7 text-base text-blue-600 font-black italic">{acc.scheduled}</td>
                    {selectedWeekId !== 'Summary' && (
                      <td className="px-6 py-7">
                        <span className={`text-sm font-black tracking-tighter ${parseInt(acc.efficiency) > 50 ? 'text-emerald-600' : 'text-slate-400'}`}>
                          {acc.efficiency}
                        </span>
                      </td>
                    )}
                    {selectedWeekId !== 'Summary' && (
                      <td className="px-10 py-7">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit ${acc.activity === 'Высокая активность' || acc.activity === 'Средняя активность' ? 'bg-emerald-50 text-emerald-600' :
                          acc.activity === 'Ограничение' ? 'bg-rose-50 text-rose-600' :
                            acc.activity === 'замена' ? 'bg-violet-50 text-violet-600' : 'bg-amber-50 text-amber-600'
                          }`}>
                          <div className={`w-2 h-2 rounded-full ${acc.activity === 'Высокая активность' ? 'bg-emerald-500 animate-pulse' :
                            acc.activity === 'Ограничение' ? 'bg-rose-500' :
                              acc.activity === 'замена' ? 'bg-violet-500 animate-pulse' : 'bg-amber-500'
                            }`}></div>
                          {acc.activity}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Markets Section */}
        <GlobalMarkets />

        {/* Insights Section - Only render if dynamicContent exists */}
        {dynamicContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-12">
            {/* Insights */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100/50 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-500 group-hover:bg-slate-100/80"></div>

              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">{dynamicContent.insightsTitle}</h3>

              <div className="space-y-6 relative">
                {dynamicContent.insights.map((insight, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`mt-1 p-2 rounded-xl bg-slate-50 ${insight.iconColor || ''} ring-1 ring-slate-100`}>
                      {typeof insight.icon === 'string' ? <span className="text-lg">{insight.icon}</span> : <insight.icon size={20} />}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">{insight.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{insight.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100/50 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-500 group-hover:bg-slate-100/80"></div>

              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">{dynamicContent.focusTitle}</h3>

              <div className="space-y-6 relative">
                {dynamicContent.focus.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`mt-1 p-2 rounded-xl bg-slate-50 ${item.iconColor || ''} ring-1 ring-slate-100`}>
                      {typeof item.icon === 'string' ? <span className="text-lg">{item.icon}</span> : <item.icon size={20} />}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (u: string, p: string) => {
    if (u === 'statum' && p === 'statum123') {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardView onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;