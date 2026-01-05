export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  lessonNumber: number;
  title: string;
  content: string[];
  quiz: Quiz[];
  estimatedTime: number;
}

export interface Module {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  category: string;
  lessons: Lesson[];
}

export const curriculum: Module[] = [
  {
    id: 'module-1',
    moduleNumber: 1,
    title: 'Organizational Behavior & Human Resources',
    description: 'Understanding human behavior in organizations and effective HR management strategies.',
    category: 'OB & HR',
    lessons: [
      {
        id: 'lesson-1-1',
        moduleId: 'module-1',
        lessonNumber: 1,
        title: 'Introduction to Organizational Behavior',
        content: [
          'Organizational behavior (OB) is the study of how individuals and groups behave within organizational settings. It examines the impact of structures, processes, and human interactions on organizational effectiveness. Understanding OB is crucial for creating productive workplaces.',
          'The field of OB draws from psychology, sociology, anthropology, and management theory. It helps managers understand employee motivation, team dynamics, leadership styles, and organizational culture. These insights enable better decision-making and improved performance.',
          'Key concepts in OB include individual differences, perception, attitudes, personality, and emotions. Each person brings unique characteristics to the workplace that influence their behavior and performance. Recognizing these differences is essential for effective management.',
          'Organizations are complex systems where individual, group, and organizational factors interact. The behavior of employees affects productivity, innovation, and overall success. Managers must balance individual needs with organizational goals to create harmonious workplaces.',
          'Studying OB provides practical tools for addressing workplace challenges like conflict resolution, motivation, change management, and leadership development. It helps build positive work environments where employees thrive and organizations achieve their objectives.'
        ],
        quiz: [
          {
            id: 'q1-1-1',
            question: 'What is the primary focus of organizational behavior?',
            options: ['Financial management', 'Human behavior in organizations', 'Product development', 'Marketing strategies'],
            correctAnswer: 1
          },
          {
            id: 'q1-1-2',
            question: 'Which discipline does NOT significantly contribute to OB?',
            options: ['Psychology', 'Astronomy', 'Sociology', 'Anthropology'],
            correctAnswer: 1
          },
          {
            id: 'q1-1-3',
            question: 'Why is understanding individual differences important in OB?',
            options: ['To create identical teams', 'To recognize unique characteristics affecting performance', 'To eliminate diversity', 'To standardize all processes'],
            correctAnswer: 1
          },
          {
            id: 'q1-1-4',
            question: 'What do organizations represent according to OB theory?',
            options: ['Simple linear systems', 'Complex interactive systems', 'Isolated entities', 'Static structures'],
            correctAnswer: 1
          },
          {
            id: 'q1-1-5',
            question: 'Which is NOT a typical application of OB?',
            options: ['Conflict resolution', 'Motivation strategies', 'Chemical engineering', 'Leadership development'],
            correctAnswer: 2
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-2',
        moduleId: 'module-1',
        lessonNumber: 2,
        title: 'Motivation and Performance',
        content: [
          'Motivation is the internal drive that directs behavior toward achieving goals. In organizations, motivated employees demonstrate higher productivity, creativity, and commitment. Understanding what motivates people is fundamental to effective management.',
          'Maslow\'s Hierarchy of Needs suggests that people are motivated by five levels of needs: physiological, safety, social, esteem, and self-actualization. Managers must recognize which level dominates for each employee to provide appropriate motivational strategies.',
          'Herzberg\'s Two-Factor Theory distinguishes between hygiene factors (preventing dissatisfaction) and motivators (creating satisfaction). Hygiene factors include salary and working conditions, while motivators include achievement and recognition. Both are necessary for employee engagement.',
          'Expectancy Theory proposes that motivation depends on three factors: expectancy (effort leads to performance), instrumentality (performance leads to rewards), and valence (value of rewards). Employees must believe their efforts will produce desired outcomes.',
          'Modern approaches to motivation emphasize intrinsic rewards, autonomy, mastery, and purpose. Organizations that align individual goals with organizational objectives create sustainable motivation. Regular feedback, meaningful work, and growth opportunities enhance employee performance and satisfaction.'
        ],
        quiz: [
          {
            id: 'q1-2-1',
            question: 'What does motivation represent in organizational context?',
            options: ['External pressure', 'Internal drive toward goals', 'Random behavior', 'Company policy'],
            correctAnswer: 1
          },
          {
            id: 'q1-2-2',
            question: 'According to Maslow, what is the highest level of needs?',
            options: ['Safety needs', 'Social needs', 'Esteem needs', 'Self-actualization'],
            correctAnswer: 3
          },
          {
            id: 'q1-2-3',
            question: 'What are hygiene factors in Herzberg\'s theory?',
            options: ['Factors creating satisfaction', 'Factors preventing dissatisfaction', 'Irrelevant factors', 'Only salary'],
            correctAnswer: 1
          },
          {
            id: 'q1-2-4',
            question: 'Which component is NOT part of Expectancy Theory?',
            options: ['Expectancy', 'Instrumentality', 'Valence', 'Hierarchy'],
            correctAnswer: 3
          },
          {
            id: 'q1-2-5',
            question: 'What do modern motivation approaches emphasize?',
            options: ['Only monetary rewards', 'Intrinsic rewards and purpose', 'Strict supervision', 'Competition only'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-3',
        moduleId: 'module-1',
        lessonNumber: 3,
        title: 'Leadership and Management',
        content: [
          'Leadership and management are distinct but complementary concepts. Management focuses on planning, organizing, and controlling resources to achieve organizational goals efficiently. Leadership inspires and influences people to pursue a shared vision with enthusiasm.',
          'Trait theory suggests that effective leaders possess certain characteristics like intelligence, confidence, determination, and integrity. While some traits are innate, many leadership qualities can be developed through experience and training. Modern views emphasize that context matters as much as traits.',
          'Behavioral theories classify leadership styles into task-oriented and people-oriented approaches. Task-oriented leaders focus on goal achievement and efficiency, while people-oriented leaders prioritize relationships and employee welfare. Effective leaders balance both dimensions based on situations.',
          'Situational leadership proposes that the best leadership style depends on followers\' readiness and task requirements. Leaders must adapt their approach from directing to delegating as team members develop competence and confidence. Flexibility is key to leadership success.',
          'Transformational leadership inspires followers to transcend self-interest for collective goals through vision, intellectual stimulation, and individualized consideration. These leaders create change, innovate, and build strong organizational cultures. They empower employees and develop future leaders.'
        ],
        quiz: [
          {
            id: 'q1-3-1',
            question: 'What distinguishes leadership from management?',
            options: ['Leadership focuses only on tasks', 'Leadership inspires and influences people', 'Management is unnecessary', 'They are identical'],
            correctAnswer: 1
          },
          {
            id: 'q1-3-2',
            question: 'What does trait theory emphasize?',
            options: ['Leadership behaviors', 'Innate and developed characteristics', 'Only situational factors', 'Follower readiness'],
            correctAnswer: 1
          },
          {
            id: 'q1-3-3',
            question: 'What do people-oriented leaders prioritize?',
            options: ['Only productivity', 'Relationships and employee welfare', 'Cost reduction', 'Technology'],
            correctAnswer: 1
          },
          {
            id: 'q1-3-4',
            question: 'What is the core principle of situational leadership?',
            options: ['One style fits all', 'Adapt style based on follower readiness', 'Always be authoritarian', 'Ignore context'],
            correctAnswer: 1
          },
          {
            id: 'q1-3-5',
            question: 'What do transformational leaders create?',
            options: ['Status quo', 'Change and innovation', 'Bureaucracy', 'Confusion'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-4',
        moduleId: 'module-1',
        lessonNumber: 4,
        title: 'Team Dynamics and Collaboration',
        content: [
          'Teams are essential building blocks of modern organizations. A team is a group of individuals working interdependently toward common goals. Effective teams leverage diverse skills, perspectives, and experiences to achieve superior results compared to individuals working alone.',
          'Tuckman\'s model describes five stages of team development: forming, storming, norming, performing, and adjourning. Teams must progress through these stages to reach peak performance. Understanding these stages helps managers facilitate team growth and address challenges.',
          'Team roles vary based on members\' strengths and preferences. Belbin identified roles like coordinator, shaper, implementer, and specialist. Balanced teams have complementary roles that cover all necessary functions. Role clarity prevents conflicts and enhances collaboration.',
          'Psychological safety is crucial for team effectiveness. When members feel safe to take risks, share ideas, and admit mistakes without fear of punishment, innovation thrives. Leaders must create environments where open communication and constructive feedback are encouraged.',
          'Virtual teams face unique challenges including communication barriers, time zone differences, and trust building. Technology enables collaboration across distances, but requires intentional efforts to maintain cohesion. Regular check-ins, clear communication protocols, and team-building activities strengthen virtual teams.'
        ],
        quiz: [
          {
            id: 'q1-4-1',
            question: 'What characterizes an effective team?',
            options: ['Individual competition', 'Interdependent collaboration toward common goals', 'Isolated work', 'Identical skills'],
            correctAnswer: 1
          },
          {
            id: 'q1-4-2',
            question: 'In Tuckman\'s model, which stage comes after storming?',
            options: ['Forming', 'Norming', 'Performing', 'Adjourning'],
            correctAnswer: 1
          },
          {
            id: 'q1-4-3',
            question: 'What did Belbin contribute to team theory?',
            options: ['Leadership styles', 'Team roles framework', 'Motivation theories', 'Communication models'],
            correctAnswer: 1
          },
          {
            id: 'q1-4-4',
            question: 'What is psychological safety in teams?',
            options: ['Physical protection', 'Freedom to take risks and share ideas', 'Job security', 'Insurance coverage'],
            correctAnswer: 1
          },
          {
            id: 'q1-4-5',
            question: 'What challenge is unique to virtual teams?',
            options: ['Having goals', 'Communication barriers and time zones', 'Having members', 'Using computers'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-5',
        moduleId: 'module-1',
        lessonNumber: 5,
        title: 'Organizational Culture and Change',
        content: [
          'Organizational culture is the shared values, beliefs, and norms that shape behavior within an organization. It influences how employees interact, make decisions, and approach their work. Culture can be a source of competitive advantage or a barrier to change.',
          'Schein\'s model describes culture at three levels: artifacts (visible structures and processes), espoused values (stated strategies and goals), and basic assumptions (unconscious beliefs). Understanding these levels helps leaders diagnose and shape culture effectively.',
          'Strong cultures align employee behavior with organizational goals, creating cohesion and identity. However, cultures must also be adaptive to respond to changing markets and technologies. Balancing stability with flexibility is a key cultural challenge.',
          'Change management is the process of transitioning individuals, teams, and organizations to desired future states. Kotter\'s 8-step model provides a framework: create urgency, form coalitions, develop vision, communicate, empower action, create wins, consolidate gains, and anchor change.',
          'Resistance to change is natural and stems from fear, uncertainty, and loss of control. Effective change leaders address resistance through communication, participation, support, and negotiation. Successful change requires both strategic planning and emotional intelligence to guide people through transitions.'
        ],
        quiz: [
          {
            id: 'q1-5-1',
            question: 'What is organizational culture?',
            options: ['Only company policies', 'Shared values, beliefs, and norms', 'Office decoration', 'Employee salaries'],
            correctAnswer: 1
          },
          {
            id: 'q1-5-2',
            question: 'According to Schein, what are artifacts?',
            options: ['Unconscious beliefs', 'Visible structures and processes', 'Hidden values', 'Future plans'],
            correctAnswer: 1
          },
          {
            id: 'q1-5-3',
            question: 'What must strong cultures also be?',
            options: ['Rigid', 'Adaptive to change', 'Exclusive', 'Isolated'],
            correctAnswer: 1
          },
          {
            id: 'q1-5-4',
            question: 'How many steps are in Kotter\'s change model?',
            options: ['5', '8', '10', '12'],
            correctAnswer: 1
          },
          {
            id: 'q1-5-5',
            question: 'Why do people resist change?',
            options: ['They enjoy it', 'Fear, uncertainty, and loss of control', 'They are lazy', 'It\'s mandatory'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-6',
        moduleId: 'module-1',
        lessonNumber: 6,
        title: 'Recruitment and Selection',
        content: [
          'Recruitment is the process of attracting qualified candidates for job openings. Effective recruitment aligns talent acquisition with organizational strategy and culture. Organizations use various channels including job boards, social media, employee referrals, and campus recruiting to find talent.',
          'The selection process evaluates candidates to identify the best fit for positions and organizations. It typically includes resume screening, interviews, assessments, and reference checks. Structured processes reduce bias and improve hiring quality.',
          'Job analysis is the foundation of effective recruitment and selection. It identifies the tasks, responsibilities, knowledge, skills, and abilities required for success. Clear job descriptions attract appropriate candidates and set performance expectations.',
          'Assessment methods vary in validity and reliability. Structured interviews, work samples, and cognitive ability tests predict job performance better than unstructured interviews or personality tests alone. Multiple assessment methods provide comprehensive candidate evaluation.',
          'Onboarding integrates new hires into the organization. Effective programs include orientation, training, mentorship, and socialization. Good onboarding reduces turnover, accelerates productivity, and builds engagement. The first 90 days are critical for new employee success.'
        ],
        quiz: [
          {
            id: 'q1-6-1',
            question: 'What is the primary goal of recruitment?',
            options: ['Firing employees', 'Attracting qualified candidates', 'Reducing costs', 'Changing culture'],
            correctAnswer: 1
          },
          {
            id: 'q1-6-2',
            question: 'What does the selection process evaluate?',
            options: ['Office furniture', 'Candidate fit for positions', 'Company profits', 'Market trends'],
            correctAnswer: 1
          },
          {
            id: 'q1-6-3',
            question: 'What is the foundation of effective recruitment?',
            options: ['Random selection', 'Job analysis', 'Salary negotiations', 'Office location'],
            correctAnswer: 1
          },
          {
            id: 'q1-6-4',
            question: 'Which assessment method is most valid?',
            options: ['Unstructured interviews', 'Structured interviews and work samples', 'Physical appearance', 'Horoscopes'],
            correctAnswer: 1
          },
          {
            id: 'q1-6-5',
            question: 'What is the critical period for new employee onboarding?',
            options: ['First day', 'First week', 'First 90 days', 'First year'],
            correctAnswer: 2
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-7',
        moduleId: 'module-1',
        lessonNumber: 7,
        title: 'Performance Management',
        content: [
          'Performance management is a continuous process of setting expectations, monitoring progress, providing feedback, and developing employees. It aligns individual performance with organizational goals and drives continuous improvement.',
          'Goal setting is fundamental to performance management. SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) provide clarity and focus. Employees perform better when they understand what is expected and how success is measured.',
          'Performance appraisals are formal evaluations of employee performance over specific periods. Effective appraisals are objective, based on job-related criteria, and conducted regularly. They inform decisions about compensation, promotion, development, and retention.',
          'Feedback should be timely, specific, and constructive. Regular feedback helps employees adjust their performance continuously rather than waiting for annual reviews. Positive feedback reinforces good performance while developmental feedback addresses improvement areas.',
          'Performance improvement plans address underperformance through clear goals, support, and timelines. When performance issues persist despite feedback, formal plans document expectations and consequences. The goal is improvement, but plans also protect organizations legally.'
        ],
        quiz: [
          {
            id: 'q1-7-1',
            question: 'What is performance management?',
            options: ['Only annual reviews', 'Continuous process of setting expectations and development', 'Punishment system', 'Salary determination'],
            correctAnswer: 1
          },
          {
            id: 'q1-7-2',
            question: 'What does SMART stand for in goal setting?',
            options: ['Simple, Modern, Adaptive, Real, Timely', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Strategic, Minimal, Active, Recent, True', 'Standard, Measured, Approved, Reviewed, Tested'],
            correctAnswer: 1
          },
          {
            id: 'q1-7-3',
            question: 'What should effective performance appraisals be based on?',
            options: ['Personal opinions', 'Job-related criteria', 'Popularity', 'Random factors'],
            correctAnswer: 1
          },
          {
            id: 'q1-7-4',
            question: 'What characterizes good feedback?',
            options: ['Annual only', 'Timely, specific, and constructive', 'Vague and general', 'Only negative'],
            correctAnswer: 1
          },
          {
            id: 'q1-7-5',
            question: 'What is the primary goal of performance improvement plans?',
            options: ['Termination', 'Performance improvement', 'Salary reduction', 'Public shaming'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-8',
        moduleId: 'module-1',
        lessonNumber: 8,
        title: 'Compensation and Benefits',
        content: [
          'Compensation includes all financial and non-financial rewards employees receive in exchange for their work. A well-designed compensation system attracts, motivates, and retains talented employees while managing organizational costs effectively.',
          'Base pay is the fixed salary or hourly wage employees receive. It should be competitive with market rates, internally equitable, and reflect job responsibilities and performance. Pay structures must comply with legal requirements and organizational budgets.',
          'Variable pay includes bonuses, commissions, and profit-sharing that link compensation to performance. These incentives align employee behavior with organizational goals and reward exceptional contributions. However, poorly designed incentives can encourage undesirable behaviors.',
          'Benefits are non-wage compensations like health insurance, retirement plans, paid time off, and wellness programs. Benefits enhance total compensation value and demonstrate employer commitment to employee well-being. Many benefits are expected by employees and required by law.',
          'Total rewards strategies integrate compensation, benefits, work-life balance, recognition, and development opportunities. Organizations differentiate themselves through unique value propositions. Communicating total rewards value helps employees appreciate their full compensation package.'
        ],
        quiz: [
          {
            id: 'q1-8-1',
            question: 'What does compensation include?',
            options: ['Only salary', 'All financial and non-financial rewards', 'Office space', 'Work hours'],
            correctAnswer: 1
          },
          {
            id: 'q1-8-2',
            question: 'What is base pay?',
            options: ['Bonuses only', 'Fixed salary or hourly wage', 'Benefits', 'Stock options'],
            correctAnswer: 1
          },
          {
            id: 'q1-8-3',
            question: 'What does variable pay link to?',
            options: ['Time served', 'Performance', 'Age', 'Education only'],
            correctAnswer: 1
          },
          {
            id: 'q1-8-4',
            question: 'What are examples of benefits?',
            options: ['Only salary', 'Health insurance and retirement plans', 'Job title', 'Office location'],
            correctAnswer: 1
          },
          {
            id: 'q1-8-5',
            question: 'What do total rewards strategies integrate?',
            options: ['Only money', 'Compensation, benefits, recognition, and development', 'Only legal requirements', 'Office perks only'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-9',
        moduleId: 'module-1',
        lessonNumber: 9,
        title: 'Employee Development and Training',
        content: [
          'Employee development prepares workers for future roles and responsibilities through systematic learning experiences. It builds organizational capability, increases engagement, and supports succession planning. Investment in development signals that organizations value their people.',
          'Training focuses on improving current job performance by teaching specific skills or knowledge. Common methods include on-the-job training, classroom instruction, e-learning, and simulations. Effective training is based on needs assessment, clear objectives, and evaluation.',
          'Career development helps employees plan and achieve their long-term career goals. Organizations support career development through mentoring, job rotation, stretch assignments, and educational assistance. These programs reduce turnover and build leadership pipelines.',
          'Learning organizations systematically create, acquire, and transfer knowledge throughout the organization. They encourage experimentation, learn from experience, and adapt quickly to change. Continuous learning is essential for competitive advantage in dynamic environments.',
          'Return on investment (ROI) measures the value of development programs. Organizations track metrics like employee performance, retention, promotion readiness, and business results. Demonstrating ROI justifies development budgets and improves program design.'
        ],
        quiz: [
          {
            id: 'q1-9-1',
            question: 'What is the purpose of employee development?',
            options: ['Only current job skills', 'Preparing for future roles and responsibilities', 'Reducing workforce', 'Increasing work hours'],
            correctAnswer: 1
          },
          {
            id: 'q1-9-2',
            question: 'What does training primarily focus on?',
            options: ['Future roles', 'Improving current job performance', 'Retirement planning', 'Social activities'],
            correctAnswer: 1
          },
          {
            id: 'q1-9-3',
            question: 'What supports career development?',
            options: ['Only salary increases', 'Mentoring, job rotation, and stretch assignments', 'Longer hours', 'More supervision'],
            correctAnswer: 1
          },
          {
            id: 'q1-9-4',
            question: 'What characterizes learning organizations?',
            options: ['Static knowledge', 'Systematic knowledge creation and transfer', 'Resistance to change', 'Individual silos'],
            correctAnswer: 1
          },
          {
            id: 'q1-9-5',
            question: 'What does ROI measure in development programs?',
            options: ['Time spent', 'Value and business impact', 'Number of courses', 'Training costs only'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      },
      {
        id: 'lesson-1-10',
        moduleId: 'module-1',
        lessonNumber: 10,
        title: 'Employee Relations and Workplace Ethics',
        content: [
          'Employee relations encompass all interactions between employers and employees. Positive relations foster trust, cooperation, and productivity. Organizations must balance employee interests with business objectives while maintaining legal compliance and ethical standards.',
          'Conflict is inevitable in workplaces due to diverse perspectives, interests, and goals. Effective conflict management transforms disagreements into opportunities for improvement. Approaches include accommodation, compromise, collaboration, avoidance, and competition depending on situations.',
          'Discipline and grievance procedures provide fair, consistent processes for addressing performance issues and employee complaints. Clear policies, documentation, and progressive discipline protect both employees and organizations. Due process is essential for maintaining trust and legal compliance.',
          'Workplace ethics guide decision-making and behavior. Ethical organizations establish codes of conduct, provide ethics training, and create channels for reporting concerns. Leaders must model ethical behavior and address violations consistently to maintain integrity.',
          'Diversity, equity, and inclusion (DEI) initiatives create workplaces where all employees feel valued and can contribute fully. DEI goes beyond legal compliance to recognize that diverse perspectives drive innovation. Inclusive cultures require ongoing commitment, measurement, and accountability.'
        ],
        quiz: [
          {
            id: 'q1-10-1',
            question: 'What do employee relations encompass?',
            options: ['Only contracts', 'All interactions between employers and employees', 'Social events', 'Office politics'],
            correctAnswer: 1
          },
          {
            id: 'q1-10-2',
            question: 'How should effective conflict management view disagreements?',
            options: ['As disasters', 'As opportunities for improvement', 'As irrelevant', 'As personal attacks'],
            correctAnswer: 1
          },
          {
            id: 'q1-10-3',
            question: 'What do discipline and grievance procedures provide?',
            options: ['Punishment only', 'Fair, consistent processes', 'Random decisions', 'Manager preferences'],
            correctAnswer: 1
          },
          {
            id: 'q1-10-4',
            question: 'What is essential for ethical organizations?',
            options: ['Ignoring problems', 'Codes of conduct and ethical leadership', 'Maximum profits only', 'Secrecy'],
            correctAnswer: 1
          },
          {
            id: 'q1-10-5',
            question: 'What do DEI initiatives create?',
            options: ['Uniformity', 'Workplaces where all employees feel valued', 'Exclusion', 'Complexity only'],
            correctAnswer: 1
          }
        ],
        estimatedTime: 15
      }
    ]
  }
];
