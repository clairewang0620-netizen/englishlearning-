import { Word, Article, CategoryType } from './types';

export const CATEGORIES: CategoryType[] = [
  '大学英语四级', '大学英语六级', '专四', '专八', '雅思', '商务英语', 
  '金融', '科技', '文化', '社交', '教育', '其他'
];

export const WORDS: Word[] = [
  // GROUP 1: LOCKED
  { id: 'g1-1', word: 'Allocate', phonetic: '/ˈæləkeɪt/', pos: 'v', definition: 'To distribute resources or duties for a particular purpose.', translation: '分配', categories: ['商务英语', '其他'], group: 1, examples: [{ en: 'The board decided to allocate more funds to R&D.', cn: '董事会决定拨出更多资金用于研发。' }, { en: 'We must allocate tasks based on individual strengths.', cn: '我们必须根据个人优势分配任务。' }] },
  { id: 'g1-2', word: 'Ambiguous', phonetic: '/æmˈbɪɡjuəs/', pos: 'adj', definition: 'Open to more than one interpretation.', translation: '模糊的', categories: ['专四', '雅思'], group: 1, examples: [{ en: 'His instructions were ambiguous and caused confusion.', cn: '他的指令含糊不清，引起了混乱。' }, { en: 'The movie ending was deliberately ambiguous.', cn: '电影结局是有意设计得模糊不清。' }] },
  { id: 'g1-3', word: 'Benevolent', phonetic: '/bəˈnevələnt/', pos: 'adj', definition: 'Well-meaning and kindly.', translation: '仁慈的', categories: ['专八', '文化'], group: 1, examples: [{ en: 'The project was funded by a benevolent billionaire.', cn: '该项目由一位仁慈的亿万富翁资助。' }, { en: 'She was known for her benevolent nature.', cn: '她以仁慈的天性而闻名。' }] },
  { id: 'g1-4', word: 'Consensus', phonetic: '/kənˈsensəs/', pos: 'n', definition: 'A general agreement reached by a group.', translation: '共识', categories: ['商务英语', '社交'], group: 1, examples: [{ en: 'The committee finally reached a consensus on the budget.', cn: '委员会终于在预算问题上达成了共识。' }, { en: 'There is no consensus among experts.', cn: '专家们尚未达成共识。' }] },
  { id: 'g1-5', word: 'Deteriorate', phonetic: '/dɪˈtɪriəreɪt/', pos: 'v', definition: 'To become progressively worse.', translation: '恶化', categories: ['大学英语六级', '其他'], group: 1, examples: [{ en: 'The patient\'s condition began to deteriorate rapidly.', cn: '病人的情况开始迅速恶化。' }, { en: 'Relations between the two firms have deteriorated.', cn: '两家公司之间的关系已经恶化。' }] },
  { id: 'g1-6', word: 'Entrepreneur', phonetic: '/ˌɒntrəprəˈnɜːr/', pos: 'n', definition: 'A person who starts a business.', translation: '企业家', categories: ['商务英语', '金融'], group: 1, examples: [{ en: 'The young entrepreneur founded a successful tech startup.', cn: '这位年轻的企业家创办了一家成功的科技初创公司。' }, { en: 'He is a serial entrepreneur.', cn: '他是一位连环创业家。' }] },
  { id: 'g1-7', word: 'Feasible', phonetic: '/ˈfiːzəbl/', pos: 'adj', definition: 'Possible to do easily or conveniently.', translation: '可行的', categories: ['大学英语四级', '其他'], group: 1, examples: [{ en: 'The plan is feasible within the budget.', cn: '该计划在预算内是可行的。' }, { en: 'Is it feasible to complete the task by Friday?', cn: '周五前完成这项任务可行吗？' }] },
  { id: 'g1-8', word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', pos: 'n', definition: 'A proposed explanation based on limited evidence.', translation: '假设', categories: ['科技', '雅思'], group: 1, examples: [{ en: 'The results supported the initial hypothesis.', cn: '实验结果支持了最初的假设。' }, { en: 'We need to test this hypothesis through experiments.', cn: '我们需要通过实验来验证这个假设。' }] },
  { id: 'g1-9', word: 'Integrity', phonetic: '/ɪnˈteɡrəti/', pos: 'n', definition: 'The quality of being honest.', translation: '诚信；完整', categories: ['商务英语', '社交'], group: 1, examples: [{ en: 'Personal integrity is highly valued.', cn: '个人诚信备受重视。' }, { en: 'The structural integrity of the bridge was questioned.', cn: '大桥的结构完整性受到了质疑。' }] },
  { id: 'g1-10', word: 'Juxtapose', phonetic: '/ˈdʒʌkstəpəʊz/', pos: 'v', definition: 'To place together to create contrast.', translation: '并列', categories: ['专八', '文化'], group: 1, examples: [{ en: 'The exhibition juxtaposes modern art with ancient artifacts.', cn: '展览将现代艺术与古代文物并列展示。' }] },
  { id: 'g1-11', word: 'Lucrative', phonetic: '/ˈluːkrətɪv/', pos: 'adj', definition: 'Producing profit.', translation: '有利可图的', categories: ['商务英语', '金融'], group: 1, examples: [{ en: 'He turned his hobby into a lucrative career.', cn: '他把自己的爱好变成了一项赚钱的事业。' }] },
  { id: 'g1-12', word: 'Mitigate', phonetic: '/ˈmɪtɪɡeɪt/', pos: 'v', definition: 'To make less severe.', translation: '减轻', categories: ['雅思', '其他'], group: 1, examples: [{ en: 'Trees help mitigate the effects of climate change.', cn: '树木有助于缓解气候变化的影响。' }] },
  { id: 'g1-13', word: 'Nostalgia', phonetic: '/nɒˈstældʒə/', pos: 'n', definition: 'Sentimental longing for past.', translation: '怀旧', categories: ['文化', '社交'], group: 1, examples: [{ en: 'The old music filled him with nostalgia.', cn: '旧音乐让他充满了怀旧之情。' }] },
  { id: 'g1-14', word: 'Paradigm', phonetic: '/ˈpærədaɪm/', pos: 'n', definition: 'Typical pattern or model.', translation: '范式', categories: ['科技', '专八'], group: 1, examples: [{ en: 'A paradigm shift in physics.', cn: '物理学领域的范式转变。' }] },
  { id: 'g1-15', word: 'Quantitative', phonetic: '/ˈkwɒntɪtətɪv/', pos: 'adj', definition: 'Relating to quantity.', translation: '定量的', categories: ['科技', '金融'], group: 1, examples: [{ en: 'Quantitative data for analysis.', cn: '用于分析的定量数据。' }] },
  { id: 'g1-16', word: 'Resilient', phonetic: '/rɪˈzɪliənt/', pos: 'adj', definition: 'Able to recover quickly.', translation: '有韧性的', categories: ['其他', '社交'], group: 1, examples: [{ en: 'Children are remarkably resilient.', cn: '孩子们往往具有惊人的恢复力。' }] },
  { id: 'g1-17', word: 'Sustainable', phonetic: '/səˈsteɪnəbl/', pos: 'adj', definition: 'Maintained at a rate.', translation: '可持续的', categories: ['其他', '科技'], group: 1, examples: [{ en: 'Sustainable development.', cn: '可持续发展。' }] },
  { id: 'g1-18', word: 'Tentative', phonetic: '/ˈtentətɪv/', pos: 'adj', definition: 'Not certain or fixed.', translation: '暂定的；试探性的', categories: ['大学英语六级', '商务英语'], group: 1, examples: [{ en: 'We have reached a tentative agreement.', cn: '我们达成了一项初步协议。' }] },
  { id: 'g1-19', word: 'Ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', pos: 'adj', definition: 'Present everywhere.', translation: '无处不在的', categories: ['科技', '专八'], group: 1, examples: [{ en: 'Smartphones have become ubiquitous.', cn: '智能手机已无处不在。' }] },
  { id: 'g1-20', word: 'Viable', phonetic: '/ˈvaɪəbl/', pos: 'adj', definition: 'Capable of working.', translation: '可行的', categories: ['商务英语', '其他'], group: 1, examples: [{ en: 'The project is no longer viable.', cn: '该项目不再可行。' }] },

  // GROUP 2: RESTORED
  { id: 'g2-1', word: 'Advocate', phonetic: '/ˈædvəkeɪt/', pos: 'v', definition: 'To publicly support a cause.', translation: '倡导', categories: ['社交', '其他'], group: 2, examples: [{ en: 'They advocate for equal rights.', cn: '他们倡导权利平等。' }] },
  { id: 'g2-2', word: 'Bilateral', phonetic: '/ˌbaɪˈlætərəl/', pos: 'adj', definition: 'Involving two parties.', translation: '双边的', categories: ['商务英语', '金融'], group: 2, examples: [{ en: 'A bilateral trade agreement.', cn: '双边贸易协定。' }] },
  { id: 'g2-3', word: 'Cognitive', phonetic: '/ˈkɒɡnətɪv/', pos: 'adj', definition: 'Relating to mental processes.', translation: '认知的', categories: ['科技', '文化'], group: 2, examples: [{ en: 'Cognitive development in childhood.', cn: '童年的认知发展。' }] },
  { id: 'g2-4', word: 'Delegate', phonetic: '/ˈdelɪɡət/', pos: 'v. & n.', definition: 'To entrust a task to another; a representative.', translation: '委托；代表', categories: ['商务英语', '社交'], group: 2, examples: [{ en: 'A good manager delegates effectively.', cn: '优秀的经理会有效地授权。' }] },
  { id: 'g2-5', word: 'Empirical', phonetic: '/ɪmˈpɪrɪkl/', pos: 'adj', definition: 'Based on observation.', translation: '经验主义的', categories: ['科技', '雅思'], group: 2, examples: [{ en: 'Based on empirical evidence.', cn: '基于实证证据。' }] },
  { id: 'g2-6', word: 'Fiscal', phonetic: '/ˈfɪskl/', pos: 'adj', definition: 'Relating to government revenue.', translation: '财政的', categories: ['商务英语', '金融'], group: 2, examples: [{ en: 'New fiscal measures.', cn: '新的财政措施。' }] },
  { id: 'g2-7', word: 'Gregarious', phonetic: '/ɡrɪˈɡeəriəs/', pos: 'adj', definition: 'Fond of company; sociable.', translation: '爱社交的', categories: ['社交', '专八'], group: 2, examples: [{ en: 'He is a gregarious person.', cn: '他是一个爱社交的人。' }] },
  { id: 'g2-8', word: 'Hierarchy', phonetic: '/ˈhaɪərɑːki/', pos: 'n', definition: 'A system ranked by status.', translation: '等级制度', categories: ['商务英语', '文化'], group: 2, examples: [{ en: 'A clear hierarchy in the military.', cn: '军队里有明确的等级制度。' }] },
  { id: 'g2-9', word: 'Incentive', phonetic: '/ɪnˈsentɪv/', pos: 'n', definition: 'A thing that motivates.', translation: '激励', categories: ['商务英语', '其他'], group: 2, examples: [{ en: 'Tax incentives help boost investment.', cn: '税收激励有助于刺激投资。' }] },
  { id: 'g2-10', word: 'Jurisdiction', phonetic: '/ˌdʒʊərɪsˈdɪkʃn/', pos: 'n', definition: 'Official power to make legal decisions.', translation: '司法权', categories: ['专八', '其他'], group: 2, examples: [{ en: 'Falls under the court\'s jurisdiction.', cn: '属于该法院的管辖范围。' }] },
  { id: 'g2-11', word: 'Kinetic', phonetic: '/kɪˈnetɪk/', pos: 'adj', definition: 'Relating to motion.', translation: '运动的', categories: ['科技', '文化'], group: 2, examples: [{ en: 'Kinetic energy increases with speed.', cn: '动能随速度增加。' }] },
  { id: 'g2-12', word: 'Leverage', phonetic: '/ˈliːvərɪdʒ/', pos: 'v. & n.', definition: 'To use to maximum advantage; influence.', translation: '杠杆；利用', categories: ['商务英语', '金融'], group: 2, examples: [{ en: 'Leverage our database.', cn: '利用我们的数据库。' }] },
  { id: 'g2-13', word: 'Metropolis', phonetic: '/məˈtrɒpəlɪs/', pos: 'n', definition: 'A chief city.', translation: '大都市', categories: ['文化', '其他'], group: 2, examples: [{ en: 'Tokyo is a metropolis.', cn: '东京是一座大都市。' }] },
  { id: 'g2-14', word: 'Nullify', phonetic: '/ˈnʌlɪfaɪ/', pos: 'v', definition: 'To invalidate.', translation: '使无效', categories: ['专八', '其他'], group: 2, examples: [{ en: 'Nullify previous regulations.', cn: '使之前的规定无效。' }] },
  { id: 'g2-15', word: 'Obsolete', phonetic: '/ˈɒbsəliːt/', pos: 'adj', definition: 'Out of date.', translation: '过时的', categories: ['科技', '商务英语'], group: 2, examples: [{ en: 'CD players are obsolete.', cn: 'CD 播放器已经过时。' }] },
  { id: 'g2-16', word: 'Proliferate', phonetic: '/prəˈlɪfəreɪt/', pos: 'v', definition: 'To multiply rapidly.', translation: '激增', categories: ['科技', '其他'], group: 2, examples: [{ en: 'Fast-food outlets proliferate.', cn: '快餐店继续激增。' }] },
  { id: 'g2-17', word: 'Quandary', phonetic: '/ˈkwɒndəri/', pos: 'n', definition: 'Uncertainty in a difficult situation.', translation: '困境', categories: ['社交', '其他'], group: 2, examples: [{ en: 'In a quandary about the job.', cn: '对工作感到左右为难。' }] },
  { id: 'g2-18', word: 'Redundant', phonetic: '/rɪˈdʌndənt/', pos: 'adj', definition: 'No longer useful.', translation: '多余的；冗余的', categories: ['科技', '商务英语'], group: 2, examples: [{ en: 'The backup makes data redundant.', cn: '备份使数据冗余。' }] },
  { id: 'g2-19', word: 'Scrutinize', phonetic: '/ˈskruːtənaɪz/', pos: 'v', definition: 'To examine closely.', translation: '仔细检查', categories: ['雅思', '其他'], group: 2, examples: [{ en: 'Scrutinized every passport.', cn: '仔细检查每一本护照。' }] },
  { id: 'g2-20', word: 'Tangible', phonetic: '/ˈtændʒəbl/', pos: 'adj', definition: 'Real and definite.', translation: '有形的', categories: ['商务英语', '金融'], group: 2, examples: [{ en: 'Tangible evidence.', cn: '确凿的证据。' }] },

  // GROUP 3: RESTORED
  { id: 'g3-1', word: 'Ambivalent', phonetic: '/æmˈbɪvələnt/', pos: 'adj', definition: 'Mixed feelings.', translation: '矛盾情绪的', categories: ['专八', '社交'], group: 3, examples: [{ en: 'Ambivalent about her promotion.', cn: '对晋升心情矛盾。' }] },
  { id: 'g3-2', word: 'Bureaucracy', phonetic: '/bjʊəˈrɒkrəsi/', pos: 'n', definition: 'A system with many rules.', translation: '官僚制度', categories: ['商务英语', '文化'], group: 3, examples: [{ en: 'Government bureaucracy delayed the project.', cn: '政府的官僚制度延误了项目。' }] },
  { id: 'g3-3', word: 'Catalyst', phonetic: '/ˈkætəlɪst/', pos: 'n', definition: 'Precipitates an event.', translation: '催化剂；促成因素', categories: ['科技', '商务英语'], group: 3, examples: [{ en: 'The internet was a catalyst for change.', cn: '互联网是变革的催化剂。' }] },
  { id: 'g3-4', word: 'Dichotomy', phonetic: '/daɪˈkɒtəmi/', pos: 'n', definition: 'A division between two things.', translation: '二分法', categories: ['专八', '文化'], group: 3, examples: [{ en: 'The dichotomy between theory and practice.', cn: '理论与实践之间的对立。' }] },
  { id: 'g3-5', word: 'Ephemeral', phonetic: '/ɪˈfemərəl/', pos: 'adj', definition: 'Lasting very short time.', translation: '短暂的', categories: ['文化', '专八'], group: 3, examples: [{ en: 'Fame is often ephemeral.', cn: '名声往往是短暂的。' }] },
  { id: 'g3-6', word: 'Frugal', phonetic: '/ˈfruːɡl/', pos: 'adj', definition: 'Economical with money.', translation: '节俭的', categories: ['商务英语', '社交'], group: 3, examples: [{ en: 'A frugal lifestyle.', cn: '节俭的生活方式。' }] },
  { id: 'g3-7', word: 'Garrulous', phonetic: '/ˈɡærələs/', pos: 'adj', definition: 'Excessively talkative.', translation: '喋喋不休的', categories: ['社交', '专八'], group: 3, examples: [{ en: 'A garrulous old man.', cn: '一个喋喋不休的老头。' }] },
  { id: 'g3-8', word: 'Hedge', phonetic: '/hedʒ/', pos: 'v. & n.', definition: 'Avoid loss; limit statement.', translation: '对冲；规避风险', categories: ['金融', '其他'], group: 3, examples: [{ en: 'Hedge against inflation.', cn: '对冲通货膨胀。' }] },
  { id: 'g3-9', word: 'Ideology', phonetic: '/ˌaɪdiˈɒlədʒi/', pos: 'n', definition: 'System of ideas.', translation: '意识形态', categories: ['文化', '雅思'], group: 3, examples: [{ en: 'Political ideology.', cn: '政治意识形态。' }] },
  { id: 'g3-10', word: 'Jargon', phonetic: '/ˈdʒɑːɡən/', pos: 'n', definition: 'Special profession words.', translation: '行话', categories: ['社交', '科技'], group: 3, examples: [{ en: 'Legal jargon.', cn: '法律行话。' }] },
  { id: 'g3-11', word: 'Lucid', phonetic: '/ˈluːsɪd/', pos: 'adj', definition: 'Expressed clearly.', translation: '清晰的', categories: ['其他', '文化'], group: 3, examples: [{ en: 'A lucid explanation.', cn: '清晰的解释。' }] },
  { id: 'g3-12', word: 'Meritocracy', phonetic: '/ˌmerɪˈtɒkrəsi/', pos: 'n', definition: 'Power based on ability.', translation: '精英制度', categories: ['文化', '商务英语'], group: 3, examples: [{ en: 'A true meritocracy.', cn: '真正的精英制度。' }] },
  { id: 'g3-13', word: 'Notorious', phonetic: '/nəʊˈtɔːriəs/', pos: 'adj', definition: 'Famous for bad quality.', translation: '臭名昭著的', categories: ['其他', '文化'], group: 3, examples: [{ en: 'A notorious criminal.', cn: '臭名昭著的罪犯。' }] },
  { id: 'g3-14', word: 'Orthodox', phonetic: '/ˈɔːθədɒks/', pos: 'adj', definition: 'Following tradition.', translation: '正统的', categories: ['文化', '其他'], group: 3, examples: [{ en: 'Orthodox views.', cn: '正统的观点。' }] },
  { id: 'g3-15', word: 'Precarious', phonetic: '/prɪˈkeəriəs/', pos: 'adj', definition: 'Uncertain position.', translation: '不稳定的', categories: ['其他', '雅思'], group: 3, examples: [{ en: 'A precarious financial state.', cn: '不稳定的财务状况。' }] },
  { id: 'g3-16', word: 'Quota', phonetic: '/ˈkwəʊtə/', pos: 'n', definition: 'Fixed share.', translation: '配额', categories: ['商务英语', '金融'], group: 3, examples: [{ en: 'Meeting the sales quota.', cn: '达到销售配额。' }] },
  { id: 'g3-17', word: 'Reconcile', phonetic: '/ˈrekənsaɪl/', pos: 'v', definition: 'Restore relations.', translation: '调和；使和解', categories: ['商务英语', '社交'], group: 3, examples: [{ en: 'Reconcile two views.', cn: '调和两种观点。' }] },
  { id: 'g3-18', word: 'Substantiate', phonetic: '/səbˈstænʃieɪt/', pos: 'v', definition: 'Provide evidence.', translation: '证实', categories: ['雅思', '其他'], group: 3, examples: [{ en: 'Substantiate the claims.', cn: '证实指控。' }] },
  { id: 'g3-19', word: 'Tacit', phonetic: '/ˈtæsɪt/', pos: 'adj', definition: 'Implied without being stated.', translation: '默示的；心照不宣的', categories: ['商务英语', '社交'], group: 3, examples: [{ en: 'A tacit agreement.', cn: '心照不宣的协议。' }] },
  { id: 'g3-20', word: 'Versatile', phonetic: '/ˈvɜːsətaɪl/', pos: 'adj', definition: 'Adapt to many functions.', translation: '多才多艺的；多功能的', categories: ['其他', '科技'], group: 3, examples: [{ en: 'A versatile tool.', cn: '多功能工具。' }] },

  // GROUP 4: RESTORED
  { id: 'g4-1', word: 'Articulate', phonetic: '/ɑːˈtɪkjuleɪt/', pos: 'v. & adj.', definition: 'Express clearly; well-spoken.', translation: '清晰表达；善于表达的', categories: ['大学英语四级', '社交'], group: 4, examples: [{ en: 'Articulate his feelings.', cn: '表达他的感受。' }] },
  { id: 'g4-2', word: 'Brevity', phonetic: '/ˈbrevəti/', pos: 'n', definition: 'Concise use of words.', translation: '简洁', categories: ['大学英语六级', '文化'], group: 4, examples: [{ en: 'Brevity is the soul of wit.', cn: '简洁是智慧的灵魂。' }] },
  { id: 'g4-3', word: 'Contingency', phonetic: '/kənˈtɪndʒənsi/', pos: 'n', definition: 'Possible future event.', translation: '意外事件；应急计划', categories: ['商务英语', '金融'], group: 4, examples: [{ en: 'A contingency plan.', cn: '应急预案。' }] },
  { id: 'g4-4', word: 'Diligent', phonetic: '/ˈdɪlɪdʒənt/', pos: 'adj', definition: 'Care and effort.', translation: '勤勉的', categories: ['大学英语四级', '其他'], group: 4, examples: [{ en: 'A diligent student.', cn: '勤奋的学生。' }] },
  { id: 'g4-5', word: 'Elaborate', phonetic: '/ɪˈlæbərət/', pos: 'v. & adj.', definition: 'Present in detail; complex.', translation: '详细阐述；复杂的', categories: ['大学英语四级', '其他'], group: 4, examples: [{ en: 'Elaborate on the plan.', cn: '详细阐述计划。' }] },
  { id: 'g4-6', word: 'Fluctuate', phonetic: '/ˈflʌktʃueɪt/', pos: 'v', definition: 'Rise and fall irregularly.', translation: '波动', categories: ['大学英语六级', '金融'], group: 4, examples: [{ en: 'Prices fluctuate.', cn: '价格波动。' }] },
  { id: 'g4-7', word: 'Galvanize', phonetic: '/ˈɡælvənaɪz/', pos: 'v', definition: 'Excite into action.', translation: '刺激；激励', categories: ['专八', '商务英语'], group: 4, examples: [{ en: 'Galvanize public opinion.', cn: '激励公众舆论。' }] },
  { id: 'g4-8', word: 'Holistic', phonetic: '/həˈlɪstɪk/', pos: 'adj', definition: 'Relating to the whole.', translation: '整体的；全面的', categories: ['雅思', '科技'], group: 4, examples: [{ en: 'A holistic approach.', cn: '整体的方法。' }] },
  { id: 'g4-9', word: 'Impede', phonetic: '/ɪmˈpiːd/', pos: 'v', definition: 'Hinder progress.', translation: '阻碍', categories: ['大学英语六级', '其他'], group: 4, examples: [{ en: 'Impede the rescue.', cn: '阻碍救援。' }] },
  { id: 'g4-10', word: 'Jeopardize', phonetic: '/ˈdʒepədaɪz/', pos: 'v', definition: 'Put at risk.', translation: '危害，危及', categories: ['大学英语六级', '商务英语'], group: 4, examples: [{ en: 'Jeopardize his career.', cn: '危及他的事业。' }] },
  { id: 'g4-11', word: 'Liaise', phonetic: '/liˈeɪz/', pos: 'v', definition: 'Cooperate mutually.', translation: '联络，联系', categories: ['商务英语', '社交'], group: 4, examples: [{ en: 'Liaise with clients.', cn: '与客户联系。' }] },
  { id: 'g4-12', word: 'Mandatory', phonetic: '/ˈmændətəri/', pos: 'adj', definition: 'Compulsory.', translation: '强制性的', categories: ['大学英语六级', '其他'], group: 4, examples: [{ en: 'Mandatory attendance.', cn: '强制出席。' }] },
  { id: 'g4-13', word: 'Nostalgic', phonetic: '/nɒˈstældʒɪk/', pos: 'adj', definition: 'Longing for past.', translation: '怀旧的', categories: ['文化', '社交'], group: 4, examples: [{ en: 'Feel nostalgic.', cn: '感到怀旧。' }] },
  { id: 'g4-14', word: 'Opaque', phonetic: '/əʊˈpeɪk/', pos: 'adj', definition: 'Hard to understand.', translation: '不透明的；难理解的', categories: ['专八', '科技'], group: 4, examples: [{ en: 'Opaque structure.', cn: '不透明结构。' }] },
  { id: 'g4-15', word: 'Prolific', phonetic: '/prəˈlɪfɪk/', pos: 'adj', definition: 'Highly productive.', translation: '多产的；丰富的', categories: ['专八', '文化'], group: 4, examples: [{ en: 'A prolific writer.', cn: '多产作家。' }] },
  { id: 'g4-16', word: 'Quarantine', phonetic: '/ˈkwɒrəntiːn/', pos: 'n. & v.', definition: 'Isolation period.', translation: '隔离', categories: ['其他'], group: 4, examples: [{ en: 'In quarantine.', cn: '在隔离中。' }] },
  { id: 'g4-17', word: 'Revitalize', phonetic: '/ˌriːˈvaɪtəlaɪz/', pos: 'v', definition: 'Imbue with new life.', translation: '使恢复生机', categories: ['商务英语', '其他'], group: 4, examples: [{ en: 'Revitalize the brand.', cn: '使品牌重获新生。' }] },
  { id: 'g4-18', word: 'Scrutiny', phonetic: '/ˈskruːtəni/', pos: 'n', definition: 'Critical examination.', translation: '仔细审查', categories: ['雅思', '其他'], group: 4, examples: [{ en: 'Close scrutiny.', cn: '严密审查。' }] },
  { id: 'g4-19', word: 'Transparent', phonetic: '/trænsˈpærənt/', pos: 'adj', definition: 'Easy to perceive.', translation: '透明的；显而易见的', categories: ['商务英语', '其他'], group: 4, examples: [{ en: 'Transparent process.', cn: '透明的过程。' }] },
  { id: 'g4-20', word: 'Unanimous', phonetic: '/juˈnænɪməs/', pos: 'adj', definition: 'Fully in agreement.', translation: '全体一致的', categories: ['大学英语六级', '社交'], group: 4, examples: [{ en: 'Unanimous vote.', cn: '一致投票。' }] },

  // GROUP 5: RESTORED
  { id: 'g5-1', word: 'Adhere', phonetic: '/ədˈhɪə(r)/', pos: 'v', definition: 'Stick fast; follow rules.', translation: '黏附；坚持', categories: ['大学英语四级', '商务英语'], group: 5, examples: [{ en: 'Adhere to the policy.', cn: '坚持政策。' }] },
  { id: 'g5-2', word: 'Benevolence', phonetic: '/bəˈnevələns/', pos: 'n', definition: 'Kindness; well-meaning.', translation: '仁慈；善行', categories: ['专八', '文化'], group: 5, examples: [{ en: 'An act of benevolence.', cn: '善行。' }] },
  { id: 'g5-3', word: 'Culminate', phonetic: '/ˈkʌlmɪneɪt/', pos: 'v', definition: 'Reach high point.', translation: '达到顶点；以...告终', categories: ['雅思', '其他'], group: 5, examples: [{ en: 'Culminate in a celebration.', cn: '以庆祝告终。' }] },
  { id: 'g5-4', word: 'Depreciate', phonetic: '/dɪˈpriːʃieɪt/', pos: 'v', definition: 'Diminish in value.', translation: '贬值；轻视', categories: ['金融', '其他'], group: 5, examples: [{ en: 'Currency depreciated.', cn: '货币贬值。' }] },
  { id: 'g5-5', word: 'Eradicate', phonetic: '/ɪˈrædɪkeɪt/', pos: 'v', definition: 'Destroy completely.', translation: '根除，消灭', categories: ['雅思', '其他'], group: 5, examples: [{ en: 'Eradicate disease.', cn: '消除疾病。' }] },
  { id: 'g5-6', word: 'Formidable', phonetic: '/ˈfɔːmɪdəbl/', pos: 'adj', definition: 'Inspiring fear/respect.', translation: '可怕的；令人敬畏的', categories: ['专八', '其他'], group: 5, examples: [{ en: 'A formidable opponent.', cn: '强大的对手。' }] },
  { id: 'g5-7', word: 'Grapple', phonetic: '/ˈɡræpl/', pos: 'v', definition: 'Seize or struggle.', translation: '努力应对；搏斗', categories: ['专八', '社交'], group: 5, examples: [{ en: 'Grapple with the problem.', cn: '解决问题。' }] },
  { id: 'g5-8', word: 'Hypothetical', phonetic: '/ˌhaɪpəˈθetɪkl/', pos: 'adj', definition: 'Based on hypothesis.', translation: '假设的', categories: ['科技', '雅思'], group: 5, examples: [{ en: 'A hypothetical situation.', cn: '假设的情境。' }] },
  { id: 'g5-9', word: 'Incur', phonetic: '/ɪnˈkɜː(r)/', pos: 'v', definition: 'Become subject to.', translation: '招致，引发', categories: ['商务英语', '金融'], group: 5, examples: [{ en: 'Incur expenses.', cn: '招致费用。' }] },
  { id: 'g5-10', word: 'Jubilant', phonetic: '/ˈdʒuːbɪlənt/', pos: 'adj', definition: 'Feeling great happiness.', translation: '欢欣的，喜悦的', categories: ['文化', '社交'], group: 5, examples: [{ en: 'A jubilant crowd.', cn: '欢欣鼓舞的人群。' }] },
  { id: 'g5-11', word: 'Lucrative', phonetic: '/ˈluːkrətɪv/', pos: 'adj', definition: 'Producing profit.', translation: '赚钱的，利润丰厚的', categories: ['商务英语', '金融'], group: 5, examples: [{ en: 'A lucrative business.', cn: '赚钱的生意。' }] },
  { id: 'g5-12', word: 'Meticulous', phonetic: '/məˈtɪkjələs/', pos: 'adj', definition: 'Attention to detail.', translation: '极其仔细的，注重细节的', categories: ['专四', '其他'], group: 5, examples: [{ en: 'Meticulous planning.', cn: '周密的计划。' }] },
  { id: 'g5-13', word: 'Negligible', phonetic: '/ˈneɡlɪdʒəbl/', pos: 'adj', definition: 'Insignificant.', translation: '可忽略不计的', categories: ['大学英语六级', '科技'], group: 5, examples: [{ en: 'Negligible amount.', cn: '微不足道的量。' }] },
  { id: 'g5-14', word: 'Omniscient', phonetic: '/ɒmˈnɪsiənt/', pos: 'adj', definition: 'Knowing everything.', translation: '全知的', categories: ['专八', '文化'], group: 5, examples: [{ en: 'Omniscient narrator.', cn: '全知叙述者。' }] },
  { id: 'g5-15', word: 'Precedent', phonetic: '/ˈpresɪdənt/', pos: 'n', definition: 'Earlier example.', translation: '先例', categories: ['商务英语', '其他'], group: 5, examples: [{ en: 'Set a precedent.', cn: '开创先例。' }] },
  { id: 'g5-16', word: 'Quench', phonetic: '/kwentʃ/', pos: 'v', definition: 'Satisfy thirst.', translation: '解渴；熄灭', categories: ['大学英语四级', '其他'], group: 5, examples: [{ en: 'Quench your thirst.', cn: '解渴。' }] },
  { id: 'g5-17', word: 'Redundancy', phonetic: '/rɪˈdʌndənsi/', pos: 'n', definition: 'No longer needed.', translation: '冗余；裁员', categories: ['科技', '商务英语'], group: 5, examples: [{ en: 'Avoid redundancy.', cn: '避免冗余。' }] },
  { id: 'g5-18', word: 'Spontaneous', phonetic: '/spɒnˈteɪniəs/', pos: 'adj', definition: 'Sudden impulse.', translation: '自发的；自然的', categories: ['大学英语六级', '社交'], group: 5, examples: [{ en: 'Spontaneous applause.', cn: '自发的掌声。' }] },
  { id: 'g5-19', word: 'Tentative', phonetic: '/ˈtentətɪv/', pos: 'adj', definition: 'Provisional.', translation: '试探性的；暂定的', categories: ['大学英语六级', '商务英语'], group: 5, examples: [{ en: 'A tentative plan.', cn: '初步计划。' }] },
  { id: 'g5-20', word: 'Validate', phonetic: '/ˈvælɪdeɪt/', pos: 'v', definition: 'Check accuracy.', translation: '验证；确认', categories: ['科技', '商务英语'], group: 5, examples: [{ en: 'Validate the data.', cn: '验证数据。' }] },

  // GROUP 6: RESTORED (FULL PDF CONTENT)
  { id: 'g6-1', word: 'Analogy', phonetic: '/əˈnælədʒi/', pos: 'n', definition: 'A comparison.', translation: '类比；相似', categories: ['大学英语六级', '科技'], group: 6, examples: [{ en: 'Draw an analogy.', cn: '作类比。' }] },
  { id: 'g6-2', word: 'Bolster', phonetic: '/ˈbəʊlstə(r)/', pos: 'v', definition: 'Support/strengthen.', translation: '支持，加强', categories: ['商务英语', '其他'], group: 6, examples: [{ en: 'Bolster the economy.', cn: '提振经济。' }] },
  { id: 'g6-3', word: 'Concur', phonetic: '/kənˈkɜː(r)/', pos: 'v', definition: 'Agree; happen same time.', translation: '同意；同时发生', categories: ['专四', '社交'], group: 6, examples: [{ en: 'I concur with that.', cn: '我同意。' }] },
  { id: 'g6-4', word: 'Dichotomy', phonetic: '/daɪˈkɒtəmi/', pos: 'n', definition: 'Division between two.', translation: '二分法；对立', categories: ['专八', '文化'], group: 6, examples: [{ en: 'False dichotomy.', cn: '错误二分法。' }] },
  { id: 'g6-5', word: 'Eloquent', phonetic: '/ˈeləkwənt/', pos: 'adj', definition: 'Persuasive speaking.', translation: '雄辩的，有口才的', categories: ['专八', '社交'], group: 6, examples: [{ en: 'Eloquent speech.', cn: '雄辩的演说。' }] },
  { id: 'g6-6', word: 'Facilitate', phonetic: '/fəˈsɪlɪteɪt/', pos: 'v', definition: 'Make easy.', translation: '促进，使便利', categories: ['大学英语四级', '商务英语'], group: 6, examples: [{ en: 'Facilitate progress.', cn: '促进进步。' }] },
  { id: 'g6-7', word: 'Genesis', phonetic: '/ˈdʒenəsɪs/', pos: 'n', definition: 'Origin/mode of formation.', translation: '起源，开端', categories: ['文化', '其他'], group: 6, examples: [{ en: 'Genesis of the project.', cn: '项目的起源。' }] },
  { id: 'g6-8', word: 'Hierarchy', phonetic: '/ˈhaɪərɑːki/', pos: 'n', definition: 'Ranked by status.', translation: '等级制度；层级', categories: ['商务英语', '文化'], group: 6, examples: [{ en: 'Social hierarchy.', cn: '社会等级。' }] },
  { id: 'g6-9', word: 'Impetus', phonetic: '/ˈɪmpɪtəs/', pos: 'n', definition: 'Force that makes it happen.', translation: '推动力，刺激', categories: ['雅思', '其他'], group: 6, examples: [{ en: 'Gave fresh impetus.', cn: '提供了新动力。' }] },
  { id: 'g6-10', word: 'Juxtaposition', phonetic: '/ˌdʒʌkstəpəˈzɪʃn/', pos: 'n', definition: 'Placed together.', translation: '并置，并列', categories: ['专八', '文化'], group: 6, examples: [{ en: 'Interesting juxtaposition.', cn: '有趣的并列。' }] },
  { id: 'g6-11', word: 'Lethargic', phonetic: '/ləˈθɑːrdʒɪk/', pos: 'adj', definition: 'Sluggish/apathetic.', translation: '昏睡的，无生气的', categories: ['专八', '其他'], group: 6, examples: [{ en: 'Feel lethargic.', cn: '感到没精打采。' }] },
  { id: 'g6-12', word: 'Mitigation', phonetic: '/ˌmɪtɪˈɡeɪʃn/', pos: 'n', definition: 'Reducing severity.', translation: '减轻，缓和', categories: ['雅思', '其他'], group: 6, examples: [{ en: 'Risk mitigation.', cn: '风险缓解。' }] },
  { id: 'g6-13', word: 'Novel', phonetic: '/ˈnɒvl/', pos: 'adj', definition: 'New or unusual.', translation: '新颖的', categories: ['大学英语四级', '其他'], group: 6, examples: [{ en: 'A novel idea.', cn: '新颖的主意。' }] },
  { id: 'g6-14', word: 'Pervasive', phonetic: '/pəˈveɪsɪv/', pos: 'adj', definition: 'Spreading throughout.', translation: '弥漫的；普遍的', categories: ['雅思', '科技'], group: 6, examples: [{ en: 'Pervasive influence.', cn: '普遍影响。' }] },
  { id: 'g6-15', word: 'Quantify', phonetic: '/ˈkwɒntɪfaɪ/', pos: 'v', definition: 'Measure quantity.', translation: '量化', categories: ['科技', '金融'], group: 6, examples: [{ en: 'Quantify the results.', cn: '量化结果。' }] },
  { id: 'g6-16', word: 'Repertoire', phonetic: '/ˈrepətwɑː(r)/', pos: 'n', definition: 'Stock of skills/pieces.', translation: '全部技能；剧目', categories: ['文化', '社交'], group: 6, examples: [{ en: 'Vast repertoire.', cn: '丰富的剧目。' }] },
  { id: 'g6-17', word: 'Synthesize', phonetic: '/ˈsɪnθəsaɪz/', pos: 'v', definition: 'Combine parts.', translation: '合成；综合', categories: ['科技', '文化'], group: 6, examples: [{ en: 'Synthesize data.', cn: '综合数据。' }] },
  { id: 'g6-18', word: 'Taciturn', phonetic: '/ˈtæsɪtɜːn/', pos: 'adj', definition: 'Reserved in speech.', translation: '沉默寡言的', categories: ['专八', '社交'], group: 6, examples: [{ en: 'A taciturn man.', cn: '沉默寡言的人。' }] },
  { id: 'g6-19', word: 'Ubiquity', phonetic: '/juːˈbɪkwəti/', pos: 'n', definition: 'State of being everywhere.', translation: '无处不在', categories: ['科技', '文化'], group: 6, examples: [{ en: 'Ubiquity of internet.', cn: '互联网的普及。' }] },
  { id: 'g6-20', word: 'Vindicate', phonetic: '/ˈvɪndɪkeɪt/', pos: 'v', definition: 'Clear of blame.', translation: '证明无罪；证明正确', categories: ['专八', '其他'], group: 6, examples: [{ en: 'Vindicated by evidence.', cn: '证据证明清白。' }] },
  { id: 'g6-21', word: 'Aesthetic', phonetic: '/iːsˈθetɪk/', pos: 'adj. & n.', definition: 'Beauty appreciation.', translation: '美学的；审美', categories: ['文化', '雅思'], group: 6, examples: [{ en: 'Aesthetic appeal.', cn: '审美吸引力。' }] },
  { id: 'g6-22', word: 'Benchmark', phonetic: '/ˈbentʃmɑːk/', pos: 'n. & v.', definition: 'Standard for comparison.', translation: '基准；参照标准', categories: ['商务英语', '科技'], group: 6, examples: [{ en: 'Set a benchmark.', cn: '设立基准。' }] },
  { id: 'g6-23', word: 'Cohesive', phonetic: '/kəʊˈhiːsɪv/', pos: 'adj', definition: 'Well-integrated.', translation: '有凝聚力的', categories: ['社交', '其他'], group: 6, examples: [{ en: 'A cohesive team.', cn: '有凝聚力的团队。' }] },
  { id: 'g6-24', word: 'Deterrent', phonetic: '/dɪˈterənt/', pos: 'n', definition: 'Discouraging action.', translation: '威慑物；阻碍物', categories: ['其他'], group: 6, examples: [{ en: 'Nuclear deterrent.', cn: '核威慑。' }] },
  { id: 'g6-25', word: 'Empathy', phonetic: '/ˈempəθi/', pos: 'n', definition: 'Understanding feelings.', translation: '共情，同理心', categories: ['社交', '文化'], group: 6, examples: [{ en: 'Feel empathy.', cn: '感到同情。' }] },
  { id: 'g6-26', word: 'Frugality', phonetic: '/fruːˈɡæləti/', pos: 'n', definition: 'Being economical.', translation: '节俭', categories: ['商务英语', '社交'], group: 6, examples: [{ en: 'Life of frugality.', cn: '节俭生活。' }] },
  { id: 'g6-27', word: 'Gauge', phonetic: '/ɡeɪdʒ/', pos: 'v. & n.', definition: 'Measure or estimate.', translation: '测量；判断', categories: ['科技', '其他'], group: 6, examples: [{ en: 'Gauge the reaction.', cn: '判断反应。' }] },
  { id: 'g6-28', word: 'Hindsight', phonetic: '/ˈhaɪndsaɪt/', pos: 'n', definition: 'Understanding after event.', translation: '后见之明', categories: ['其他'], group: 6, examples: [{ en: 'In hindsight.', cn: '事后看来。' }] },
  { id: 'g6-29', word: 'Infallible', phonetic: '/ɪnˈfæləbl/', pos: 'adj', definition: 'Never wrong.', translation: '绝对可靠的', categories: ['专八', '其他'], group: 6, examples: [{ en: 'Infallible memory.', cn: '绝对可靠的记忆。' }] },
  { id: 'g6-30', word: 'Juncture', phonetic: '/ˈdʒʌŋktʃə(r)/', pos: 'n', definition: 'Critical point.', translation: '关键时刻', categories: ['专八', '其他'], group: 6, examples: [{ en: 'At this juncture.', cn: '在此刻。' }] },
  { id: 'g6-31', word: 'Warrant', phonetic: '/ˈwɒrənt/', pos: 'v. & n.', definition: 'Justify; authorization.', translation: '证明正当；授权令', categories: ['商务英语', '其他'], group: 6, examples: [{ en: 'Search warrant.', cn: '搜查令。' }] },

  // GROUP 7: LOCKED
  { id: 'g7-1', word: 'Access', phonetic: '/ˈækses/', pos: 'n. & v.', definition: 'The means or opportunity to approach, enter, or use something.', translation: '进入(权)，使用权，获取', categories: ['大学英语四级', '其他'], group: 7, examples: [{ en: 'The new software allows you to access files from anywhere.', cn: '新软件让你可以从任何地方访问文件。' }] },
  { id: 'g7-2', word: 'Benefit', phonetic: '/ˈbenɪfɪt/', pos: 'n. & v.', definition: 'An advantage or profit gained from something.', translation: '好处，益处；受益', categories: ['大学英语四级', '其他'], group: 7, examples: [{ en: 'Regular exercise has numerous health benefits.', cn: '定期锻炼对健康有许多益处。' }] },
  { id: 'g7-20', word: 'Zeal', phonetic: '/ziːl/', pos: 'n.', definition: 'Great energy or enthusiasm in pursuit of an objective.', translation: '热情，热忱', categories: ['专四', '文化'], group: 7, examples: [{ en: 'Tackled every task with great zeal.', cn: '她以极大的热情处理任务。' }] },

  // GROUP 8: LOCKED
  { id: 'g8-1', word: 'Allocate', phonetic: '/ˈæləkeɪt/', pos: 'v.', definition: 'To distribute for a particular purpose.', translation: '分配，分派', categories: ['大学英语六级', '商务英语'], group: 8, examples: [{ en: 'Allocate tasks to each member.', cn: '分配任务。' }] },
  { id: 'g8-20', word: 'Yearn', phonetic: '/jɜːn/', pos: 'v.', definition: 'Intense feeling of longing.', translation: '渴望，向往', categories: ['专四', '文化'], group: 8, examples: [{ en: 'Yearned for a simpler life.', cn: '他渴望在乡村过简单的生活。' }] },

  // GROUP 9: LOCKED
  { id: 'g9-1', word: 'Ambivalent', phonetic: '/æmˈbɪvələnt/', pos: 'adj.', definition: 'Having mixed feelings or contradictory ideas.', translation: '(对同一事物)有矛盾情绪的', categories: ['专八', '社交'], group: 9, examples: [{ en: 'Feel ambivalent about the job offer.', cn: '我对这份工作邀请心情很矛盾。' }] },
  { id: 'g9-18', word: 'Ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', pos: 'adj.', definition: 'Present, appearing, or found everywhere.', translation: '无处不在的', categories: ['专八', '科技'], group: 9, examples: [{ en: 'Mobile phones are ubiquitous in life.', cn: '手机在现代生活中已变得无处不在。' }] },

  // LOCKED PLACEHOLDERS
  { id: 'g10-1', word: 'Aberration', phonetic: '/ˌæbəˈreɪʃn/', pos: 'n', definition: 'Departure from normal.', translation: '偏差；反常现象', categories: ['科技', '专八'], group: 10, examples: [{ en: 'A statistical aberration.', cn: '统计偏差。' }] },
  { id: 'g12-20', word: 'Watershed', phonetic: '/ˈwɔːtəʃed/', pos: 'n', definition: 'Turning point.', translation: '分水岭；转折点', categories: ['文化', '其他'], group: 12, examples: [{ en: 'A watershed moment.', cn: '转折时刻。' }] }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Future of Remote Work in a Post-Pandemic World',
    category: '科技',
    image: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=800',
    paragraphs: [
      { id: 'p1-1', en: 'The landscape of modern employment has undergone a seismic shift as remote work becomes a permanent fixture.', cn: '随着远程办公成为一种永久性的形式，现代就业格局发生了翻天覆地的变化。' },
      { id: 'p1-2', en: 'Companies are leveraging digital tools to maintain productivity across different time zones.', cn: '公司正在利用数字工具来维持跨时区的生产力。' }
    ],
    keywords: [
      { en: 'Seismic', cn: '剧烈的' },
      { en: 'Fixture', cn: '固定设施/形式' },
      { en: 'Leverage', cn: '利用' }
    ]
  }
];