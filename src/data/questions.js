/**
 * Partnership (partner link) question set.
 * 15 single-choice (MCQ) questions with 4 options each.
 */
export const QUESTIONNAIRES = [
  {
    id: 'partnership',
    title: 'Questions',
    description: 'Assess your approach to problem solving, collaboration, priorities, and communication.',
    questions: [
      {
        id: '1',
        text: 'When facing a complex problem, I prefer to:',
        answers: [
          { id: 'a', text: 'Break it down into smaller parts and analyze each one' },
          { id: 'b', text: 'Ask others for their view first' },
          { id: 'c', text: 'Trust my gut and decide quickly' },
          { id: 'd', text: 'Research similar past situations' },
        ],
      },
      {
        id: '2',
        text: 'How do you ensure you deliver quality work?',
        answers: [
          { id: 'a', text: 'I set clear standards and check my work against them' },
          { id: 'b', text: 'I rely on feedback from others' },
          { id: 'c', text: 'I focus on finishing on time' },
          { id: 'd', text: 'I prioritize what matters most to the goal' },
        ],
      },
      {
        id: '3',
        text: 'When asked to suggest new ideas, I typically:',
        answers: [
          { id: 'a', text: 'Brainstorm several options and build on the best one' },
          { id: 'b', text: 'Look at what has worked before' },
          { id: 'c', text: 'Suggest one strong idea I believe in' },
          { id: 'd', text: "Combine others' ideas in a new way" },
        ],
      },
      {
        id: '4',
        text: 'When you encounter something you don\'t understand, you:',
        answers: [
          { id: 'a', text: 'Look it up or ask someone to learn more' },
          { id: 'b', text: 'Note it and move on for now' },
          { id: 'c', text: 'Try to figure it out by experimenting' },
          { id: 'd', text: 'Discuss it with the team' },
        ],
      },
      {
        id: '5',
        text: 'How do you approach deadlines and priorities?',
        answers: [
          { id: 'a', text: 'I plan my time and stick to the plan' },
          { id: 'b', text: 'I adjust as new tasks come in' },
          { id: 'c', text: 'I focus on the most urgent first' },
          { id: 'd', text: 'I balance flexibility with clear milestones' },
        ],
      },
      {
        id: '6',
        text: 'When a teammate is struggling, I:',
        answers: [
          { id: 'a', text: 'Listen and try to understand their situation' },
          { id: 'b', text: 'Offer practical help or resources' },
          { id: 'c', text: 'Give them space to figure it out' },
          { id: 'd', text: 'Check in and suggest we work through it together' },
        ],
      },
      {
        id: '7',
        text: 'I am most motivated when:',
        answers: [
          { id: 'a', text: 'There are new challenges or chances to learn' },
          { id: 'b', text: 'I can see the clear impact of my work' },
          { id: 'c', text: 'I work with a strong team' },
          { id: 'd', text: 'I have clear goals and autonomy' },
        ],
      },
      {
        id: '8',
        text: 'When receiving feedback, I usually:',
        answers: [
          { id: 'a', text: 'Reflect on it and look for ways to improve' },
          { id: 'b', text: 'Ask for examples to understand better' },
          { id: 'c', text: 'Take time to process before responding' },
          { id: 'd', text: 'Apply it quickly to my next task' },
        ],
      },
      {
        id: '9',
        text: 'In a disagreement with a colleague, I tend to:',
        answers: [
          { id: 'a', text: 'Listen first and then share my perspective' },
          { id: 'b', text: 'Look for common ground and compromise' },
          { id: 'c', text: 'Focus on the outcome we both want' },
          { id: 'd', text: 'Suggest we step back and revisit later' },
        ],
      },
      {
        id: '10',
        text: 'When my workload increases suddenly, I:',
        answers: [
          { id: 'a', text: 'Prioritize and communicate what I can deliver' },
          { id: 'b', text: 'Work longer hours to meet everything' },
          { id: 'c', text: 'Ask for help or delegation' },
          { id: 'd', text: 'Reassess deadlines with stakeholders' },
        ],
      },
      {
        id: '11',
        text: 'I learn best when:',
        answers: [
          { id: 'a', text: 'I can try things hands-on' },
          { id: 'b', text: 'I have clear instructions or documentation' },
          { id: 'c', text: 'I discuss with others' },
          { id: 'd', text: 'I see examples or demos first' },
        ],
      },
      {
        id: '12',
        text: 'When a project fails or is delayed, I:',
        answers: [
          { id: 'a', text: 'Focus on what we can learn from it' },
          { id: 'b', text: 'Look for ways to recover or adjust' },
          { id: 'c', text: 'Communicate clearly with those affected' },
          { id: 'd', text: 'Review what went wrong and document it' },
        ],
      },
      {
        id: '13',
        text: 'How do you prefer to work with others?',
        answers: [
          { id: 'a', text: 'Collaborate closely and share ideas often' },
          { id: 'b', text: 'Work independently and sync at milestones' },
          { id: 'c', text: 'A mix of both, depending on the task' },
          { id: 'd', text: 'Lead when needed and support when not' },
        ],
      },
      {
        id: '14',
        text: 'When something is unclear or ambiguous, I:',
        answers: [
          { id: 'a', text: 'Ask questions until I understand' },
          { id: 'b', text: 'Make reasonable assumptions and document them' },
          { id: 'c', text: 'Look for similar past cases' },
          { id: 'd', text: 'Propose an approach and get feedback' },
        ],
      },
      {
        id: '15',
        text: 'What matters most to you in a role?',
        answers: [
          { id: 'a', text: 'Growth and learning' },
          { id: 'b', text: 'Impact and results' },
          { id: 'c', text: 'Team and culture' },
          { id: 'd', text: 'Stability and work-life balance' },
        ],
      },
    ],
  },
]

/**
 * Investor question set — used for every invite except PARTNER_INVITE_LINK.
 */
export const INVESTOR_QUESTIONNAIRES = [
  {
    id: 'investor',
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
          { id: 'd', text: 'Working slowly' },
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
          { id: 'd', text: 'I prefer following other\'s decisions.' },
        ],
      },
    ],
  },
]

/** Invite link that uses partner QUESTIONNAIRES (all others use investor). */
export const PARTNER_INVITE_LINK = 's8oj0h9le9mip1ogsbmsf2'

function normalizeInviteLink(inviteLink) {
  if (inviteLink == null) return ''
  let link = String(inviteLink).trim()
  if (!link) return ''
  try {
    link = decodeURIComponent(link)
  } catch (_) {
    // keep raw trimmed value
  }
  return link.trim()
}

/**
 * Returns the questionnaire set for the given invite link.
 * Only PARTNER_INVITE_LINK uses QUESTIONNAIRES; every other link uses INVESTOR_QUESTIONNAIRES.
 */
export function getQuestionnairesForInviteLink(inviteLink) {
  const link = normalizeInviteLink(inviteLink)
  if (link === PARTNER_INVITE_LINK) {
    return QUESTIONNAIRES
  }
  return INVESTOR_QUESTIONNAIRES
}

/** Total questions for a given invite link. */
export function getQuestionCountForInviteLink(inviteLink) {
  return getQuestionnairesForInviteLink(inviteLink).reduce((sum, q) => sum + q.questions.length, 0)
}

/** Total number of questions across partner questionnaires (legacy). */
export const TOTAL_QUESTIONS_COUNT = QUESTIONNAIRES.reduce((sum, q) => sum + q.questions.length, 0)

/** Display: number of questionnaires (sections). */
export const QUESTIONNAIRE_COUNT = QUESTIONNAIRES.length

/** Display: total number of questions. */
export const QUESTION_COUNT = TOTAL_QUESTIONS_COUNT

/** Assessment duration in minutes (for instructions and timer). */
export const ASSESSMENT_DURATION_MINUTES = 11

/** @deprecated Use QUESTIONNAIRES and flatten if needed. */
export const QUESTIONS = QUESTIONNAIRES.flatMap((q) => q.questions)
