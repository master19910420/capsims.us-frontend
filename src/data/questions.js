/**
 * Partnership (partner link) question set.
 * 15 single-choice (MCQ) questions with 4 options each.
 */
export const QUESTIONNAIRES = [
  {
    id: 'partnership',
    title: 'Questions',
    description: 'Assess your decision-making, risk management, emotional discipline, adaptability, and strategic thinking in dynamic market environments.',
    questions: [
      {
        id: '1',
        text: 'After three consecutive losses, what would you most likely do?',
        answers: [
          { id: 'a', text: 'Increase risk to recover quickly' },
          { id: 'b', text: 'Stop trading for a long period' },
          { id: 'c', text: 'Review what happened and continue following a plan' },
          { id: 'd', text: 'Look for advice before every next decision' },
        ],
      },
      {
        id: '2',
        text: 'Which describes your approach to important decisions?',
        answers: [
          { id: 'a', text: 'Fast and instinctive' },
          { id: 'b', text: 'Structured and deliberate' },
          { id: 'c', text: 'Influenced by others' },
          { id: 'd', text: 'Frequently changing' },
        ],
      },
      {
        id: '3',
        text: 'What frustrates you most?',
        answers: [
          { id: 'a', text: 'Missing an opportunity' },
          { id: 'b', text: 'Following rules' },
          { id: 'c', text: 'Making a preventable mistake' },
          { id: 'd', text: "Working slowly" },
        ],
      },
      {
        id: '4',
        text: 'When you are highly confident, you tend to:',
        answers: [
          { id: 'a', text: 'Take larger risks' },
          { id: 'b', text: 'Maintain the same standards and process' },
          { id: 'c', text: 'Act quickly without much review' },
          { id: 'd', text: 'Ignore alternative viewpoints' },
        ],
      },
      {
        id: '5',
        text: 'Which statement do you agree with most?',
        answers: [
          { id: 'a', text: 'Winning is everything' },
          { id: 'b', text: 'Consistency is more important than occasional big wins' },
          { id: 'c', text: 'Risk should be avoided whenever possible' },
          { id: 'd', text: 'Success depends mostly on luck' },
        ],
      },
      {
        id: '6',
        text: 'How do you react when a plan is not working?',
        answers: [
          { id: 'a', text: 'Stick to it no matter what' },
          { id: 'b', text: 'Abandon it immediately' },
          { id: 'c', text: 'Analyze the situation and adjust if necessary' },
          { id: 'd', text: 'Wait for someone else\'s recommendation' },
        ],
      },
      {
        id: '7',
        text: 'Which quality best describes you?',
        answers: [
          { id: 'a', text: 'Aggressive' },
          { id: 'b', text: 'Disciplined' },
          { id: 'c', text: 'Impulsive' },
          { id: 'd', text: 'Competitive' },
        ],
      },
      {
        id: '8',
        text: 'When faced with uncertainty, you usually:',
        answers: [
          { id: 'a', text: 'Wait until all uncertainty disappears' },
          { id: 'b', text: 'Take action with the best available information' },
          { id: 'c', text: 'Follow the crowd' },
          { id: 'd', text: 'Avoid making a decision' },
        ],
      },
      {
        id: '9',
        text: 'How do you typically handle criticism?',
        answers: [
          { id: 'a', text: 'Take it personally' },
          { id: 'b', text: 'Ignore it' },
          { id: 'c', text: 'Evaluate whether it is useful and learn from it' },
          { id: 'd', text: 'Defend your position immediately' },
        ],
      },
      {
        id: '10',
        text: 'Which statement best describes your attitude toward risk?',
        answers: [
          { id: 'a', text: 'Higher risk is always better' },
          { id: 'b', text: 'Risk should always be avoided' },
          { id: 'c', text: 'Risk should be evaluated relative to potential reward' },
          { id: 'd', text: 'Risk does not influence my decisions' },
        ],
      },
      {
        id: '11',
        text: 'After a major success, what is your usual reaction?',
        answers: [
          { id: 'a', text: 'Increase confidence significantly' },
          { id: 'b', text: 'Continue following the same process that worked' },
          { id: 'c', text: 'Take bigger chances immediately' },
          { id: 'd', text: 'Relax standards temporarily' },
        ],
      },
      {
        id: '12',
        text: 'Which is more important?',
        answers: [
          { id: 'a', text: 'Being right' },
          { id: 'b', text: 'Learning and improving' },
          { id: 'c', text: 'Looking successful' },
          { id: 'd', text: 'Avoiding criticism' },
        ],
      },
      {
        id: '13',
        text: 'If you must choose between:',
        answers: [
          { id: 'a', text: 'Small but consistent gain' },
          { id: 'b', text: 'Large but unpredictable gain' },
          { id: 'c', text: 'Depends on circumstances' },
          { id: 'd', text: 'No preference' },
        ],
      },
      {
        id: '14',
        text: 'When working toward a long-term goal, you are most likely to:',
        answers: [
          { id: 'a', text: 'Stay committed and patient' },
          { id: 'b', text: 'Frequently change direction' },
          { id: 'c', text: 'Lose motivation quickly' },
          { id: 'd', text: 'Focus only on short-term results' },
        ],
      },
      {
        id: '15',
        text: 'Which statement best describes your mindset?',
        answers: [
          { id: 'a', text: 'I focus primarily on outcomes' },
          { id: 'b', text: 'I focus on both process and outcomes' },
          { id: 'c', text: 'I rely heavily on intuition' },
          { id: 'd', text: 'I prefer following other\'s decisions.' }
        ],
      },
    ],
  },
]

/**
 * Questionnaires for the Investor path – Institutional Markets & Trading Strategist at Anchorage Digital.
 * Role: identifying and executing strategic opportunities across global financial and digital asset markets,
 * supporting institutional trading, portfolio strategy, and market intelligence.
 */
export const INVESTOR_QUESTIONNAIRES = [
  {
    id: 'markets-trading',
    title: 'Markets & Trading Strategy',
    description: 'Assess your approach to researching global financial and digital asset markets, executing trading strategies, and using technical and quantitative tools.',
    questions: [
      {
        id: 1,
        text: 'When you identify an investment or trading opportunity across global financial or digital asset markets, how do you prioritize and act on it?',
        answers: [
          { id: 'a', text: 'Quantify the opportunity and risk; align with strategy and risk limits before execution.' },
          { id: 'b', text: 'Research market data and trends first, then propose a clear thesis and execution plan to the team.' },
          { id: 'c', text: 'Monitor real-time liquidity and price movements; size positions according to risk parameters.' },
          { id: 'd', text: 'Use technical indicators and quantitative tools to validate the opportunity before committing.' },
          { id: 'e', text: 'Balance speed of execution with thorough analysis; document rationale and review with risk and trading teams.' },
        ],
      },
      {
        id: 2,
        text: 'How do you use technical indicators, quantitative tools, and market analysis to guide trading decisions for digital assets and related instruments?',
        answers: [
          { id: 'a', text: 'Combine multiple signals with clear rules; backtest where possible and maintain discipline in live execution.' },
          { id: 'b', text: 'Stay current on market structure across exchanges and OTC markets; adapt tools to changing liquidity.' },
          { id: 'c', text: 'Work with research and product to improve models and data; integrate feedback into the decision process.' },
          { id: 'd', text: 'Document assumptions and limitations of each tool; avoid over-reliance on any single indicator.' },
          { id: 'e', text: 'Balance quantitative inputs with fundamental and macro context for risk-adjusted decisions.' },
        ],
      },
      {
        id: 3,
        text: 'You need to develop and execute a new trading strategy for digital assets. What is your first step?',
        answers: [
          { id: 'a', text: 'Define objectives, constraints, and success metrics; get alignment with trading and risk teams.' },
          { id: 'b', text: 'Analyze historical data and market structure; identify edge and capacity before scaling.' },
          { id: 'c', text: 'Pilot in a controlled environment; measure performance and risk, then iterate or scale.' },
          { id: 'd', text: 'Ensure integration with existing systems and compliance with risk and exposure limits.' },
          { id: 'e', text: 'Document the strategy and review process so it can be maintained and improved over time.' },
        ],
      },
      {
        id: 4,
        text: 'How do you track macroeconomic trends, regulations, and global events that may affect financial and digital asset markets?',
        answers: [
          { id: 'a', text: 'Maintain a structured process: key indicators, regulatory updates, and event calendars; share insights with the team.' },
          { id: 'b', text: 'Incorporate macro and regulatory views into position sizing and strategy adjustments.' },
          { id: 'c', text: 'Collaborate with research and compliance to interpret impact on trading and custody operations.' },
          { id: 'd', text: 'Document how events could affect liquidity, volatility, and risk; update exposure and limits as needed.' },
          { id: 'e', text: 'Balance short-term market moves with longer-term structural changes in regulation and adoption.' },
        ],
      },
    ],
  },
  {
    id: 'risk-analysis-collab',
    title: 'Risk, Analysis & Collaboration',
    description: 'Evaluate how you manage trading risk, prepare market reports, and work with trading, research, product, and risk teams.',
    questions: [
      {
        id: 1,
        text: 'How do you manage trading risk through position sizing, diversification, and exposure monitoring in fast-moving markets?',
        answers: [
          { id: 'a', text: 'Set clear limits per strategy and instrument; monitor in real time and escalate when approaching thresholds.' },
          { id: 'b', text: 'Diversify across assets and venues; avoid concentration that could create outsized drawdowns.' },
          { id: 'c', text: 'Work with risk management to define and implement controls; keep an audit trail of decisions.' },
          { id: 'd', text: 'Balance return objectives with risk capacity; adjust size and exposure when volatility or liquidity changes.' },
          { id: 'e', text: 'Communicate exposure and P&amp;L to stakeholders so expectations stay aligned with reality.' },
        ],
      },
      {
        id: 2,
        text: 'You need to prepare market reports, performance analysis, and investment insights for internal teams. How do you approach this?',
        answers: [
          { id: 'a', text: 'Focus on actionable insights: what happened, why it matters, and what we might do next.' },
          { id: 'b', text: 'Use data and charts to support narrative; keep reports concise and aligned with audience (trading, research, leadership).' },
          { id: 'c', text: 'Include risk and attribution so readers understand drivers of performance and exposure.' },
          { id: 'd', text: 'Share drafts with key stakeholders for feedback; iterate so the output supports decision-making.' },
          { id: 'e', text: 'Maintain consistency in format and timing so teams can rely on the information.' },
        ],
      },
      {
        id: 3,
        text: 'How do you work with trading, research, product, and risk teams to improve trading systems, strategies, and market analysis processes?',
        answers: [
          { id: 'a', text: 'Share pain points and ideas; co-own initiatives that improve execution, data, or risk tools.' },
          { id: 'b', text: 'Participate in roadmap and design discussions so trading and risk requirements are built in early.' },
          { id: 'c', text: 'Use volume, latency, and P&L data to prioritize what to fix or automate first.' },
          { id: 'd', text: 'Define clear handoffs and escalation paths so issues are resolved without blocking daily trading.' },
          { id: 'e', text: 'Balance BAU delivery with strategic improvements; avoid letting firefighting block longer-term work.' },
        ],
      }
    ],
  },
  {
    id: 'strategy-communication',
    title: 'Strategy, Communication & Operational Excellence',
    description: 'Explore how you contribute to capital markets capabilities, explain market insights, and improve processes on a digital asset platform.',
    questions: [
      {
        id: 1,
        text: 'How do you help strengthen institutional market participation and enhance the organization’s digital asset trading infrastructure?',
        answers: [
          { id: 'a', text: 'Identify gaps in data, execution, or risk tools; propose and support initiatives to close them.' },
          { id: 'b', text: 'Share market and client feedback with product and engineering to shape platform evolution.' },
          { id: 'c', text: 'Document best practices and playbooks so the team can scale institutional coverage.' },
          { id: 'd', text: 'Align with leadership on priorities; balance day-to-day trading with strategic projects.' },
          { id: 'e', text: 'Ensure trading and custody workflows meet institutional standards for reliability and compliance.' },
        ],
      },
      {
        id: 2,
        text: 'How do you explain market insights and trading decisions effectively to internal and external stakeholders?',
        answers: [
          { id: 'a', text: 'Lead with the key message and support it with data; tailor depth to the audience.' },
          { id: 'b', text: 'Acknowledge uncertainty and assumptions; clarify what is known vs. speculative.' },
          { id: 'c', text: 'Use clear language and avoid unnecessary jargon; invite questions to ensure understanding.' },
          { id: 'd', text: 'Connect insights to implications for strategy, risk, or client service.' },
          { id: 'e', text: 'Follow up in writing when needed so there is a record and shared understanding.' },
        ],
      },
      {
        id: 3,
        text: 'You identify an opportunity to improve trading systems or market analysis processes. What do you do first?',
        answers: [
          { id: 'a', text: 'Quantify the benefit and effort; socialize with trading, research, and product for buy-in.' },
          { id: 'b', text: 'Propose a small pilot or A/B test to validate the idea before full rollout.' },
          { id: 'c', text: 'Document the current state and target state; identify owners and a realistic timeline.' },
          { id: 'd', text: 'Ensure the change fits within risk and compliance guardrails.' },
          { id: 'e', text: 'Balance quick wins with longer-term roadmap so the team sees progress and stays aligned.' },
        ],
      },
      {
        id: 4,
        text: 'How do you balance fundamental financial analysis, macroeconomic research, and advanced trading strategies to support informed investment decisions?',
        answers: [
          { id: 'a', text: 'Integrate multiple inputs into a coherent view; stress-test against scenarios before committing capital.' },
          { id: 'b', text: 'Stay disciplined: when the thesis is intact and risk is controlled, act; when not, step back.' },
          { id: 'c', text: 'Work with research to deepen fundamental and macro work; use trading feedback to refine execution.' },
          { id: 'd', text: 'Optimize for risk-adjusted returns over time, not single trades.' },
          { id: 'e', text: 'Document and review decisions so the process improves and stays aligned with institutional standards.' },
        ],
      },
    ],
  },
]

/** Invite link length that indicates investor path (25 chars). Partner links are 22 chars. */
export const INVESTOR_INVITE_LINK_LENGTH = 25

/**
 * Returns the questionnaire set for the given invite link. Use investor questionnaires when link length is 25; otherwise partner.
 */
export function getQuestionnairesForInviteLink(inviteLink) {
  if (inviteLink && inviteLink.length === INVESTOR_INVITE_LINK_LENGTH) {
    return INVESTOR_QUESTIONNAIRES
  }
  return QUESTIONNAIRES
}

/** Total number of questions across all questionnaires. */
export const TOTAL_QUESTIONS_COUNT = QUESTIONNAIRES.reduce((sum, q) => sum + q.questions.length, 0)

/** Display: number of questionnaires (sections). */
export const QUESTIONNAIRE_COUNT = QUESTIONNAIRES.length

/** Display: total number of questions. */
export const QUESTION_COUNT = TOTAL_QUESTIONS_COUNT

/** Assessment duration in minutes (for instructions and timer). */
export const ASSESSMENT_DURATION_MINUTES = 11

/** @deprecated Use QUESTIONNAIRES and flatten if needed. */
export const QUESTIONS = QUESTIONNAIRES.flatMap((q) => q.questions)
